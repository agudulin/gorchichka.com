import React, { Component } from 'react'
import Head from 'next/head'

import { getQuote, getQuoteByIndex } from 'gorchichka'

import { indexFromQuery, indexFromQuote } from '../lib/quoteUrl'
import nextRandomQuote from '../lib/nextRandomQuote'
import Icon from '../components/icon'
import { Links, LinksItem } from '../components/links'
import Menu from '../components/menu'
import Content from '../components/content'

const preventDefault = (fn) => (e) => {
  e.preventDefault()

  if (typeof fn === 'function') fn(e)
}

class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      displayMenu: false
    }
    this.closeMenu = preventDefault(this.closeMenu.bind(this))
    this.openMenu = preventDefault(this.openMenu.bind(this))
  }

  static getInitialProps ({ query: { q: id } }) {
    const currentQuote = id
      ? getQuoteByIndex(...indexFromQuery(id), { details: true })
      : getQuote({ details: true })
    const nextQuote = nextRandomQuote(currentQuote)
    const nextQuoteIndex = indexFromQuote(nextQuote)

    return { currentQuote, nextQuoteIndex }
  }

  openMenu () {
    this.setState(state => ({ displayMenu: true }))
  }

  closeMenu () {
    this.setState(state => ({ displayMenu: false }))
  }

  render () {
    const { currentQuote, nextQuoteIndex } = this.props
    const title = `горчичка - ${currentQuote.song.title}`
    const nextQuoteUrl = `/?q=${nextQuoteIndex}`

    return (
      <div className='root'>
        <Head>
          <title>{ title }</title>
          <meta charSet='utf-8' />
          <meta content='initial-scale=1.0, width=device-width' name='viewport' />
          <meta name='apple-mobile-web-app-capable' content='yes' />
          <meta name='apple-mobile-web-app-status-bar-style' content='black' />
          <link href='https://fonts.googleapis.com/css?family=Playfair+Display:400,700&subset=cyrillic' />
        </Head>

        <Content currentQuote={currentQuote} />
        <Links>
          <LinksItem onClick={this.openMenu}>
            <Icon name='hamburger' />
          </LinksItem>
          <LinksItem href={nextQuoteUrl} prefetch>
            <Icon name='refresh' />
          </LinksItem>
        </Links>
        { this.state.displayMenu && <Menu closeMenu={this.closeMenu} /> }

        <style jsx>{`
          .root {
            height: 100%;
            width: 100%;
            position: absolute;
          }
        `}</style>
        <style jsx global>{`
          :root {
            box-sizing: border-box;
            height: 100%;
            font-size: 16px;
          }
          *, *:before, *:after {
            box-sizing: inherit;
          }
          :root, body {
            height: 100%;
            margin: 0;
          }
          body {
            background-color: black;
          }

          @font-face {
            font-family: 'icomoon';
            src:
              url('/static/fonts/icomoon.ttf?i1h4ks') format('truetype'),
              url('/static/fonts/icomoon.woff?i1h4ks') format('woff'),
              url('/static/fonts/icomoon.svg?i1h4ks#icomoon') format('svg');
            font-weight: normal;
            font-style: normal;
          }
        `}</style>
      </div>
    )
  }
}

export default App
