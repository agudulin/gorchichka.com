import React, { Component } from 'react'
import Head from 'next/head'
import { getQuote, getQuoteByIndex } from 'gorchichka'

import { indexFromQuery, indexFromQuote } from '../lib/quoteUrl'
import nextRandomQuote from '../lib/nextRandomQuote'
import Links from '../components/links'
import Menu from '../components/menu'
import Content from '../components/content'
import * as css from '../stylesheets'

const preventDefault = (fn) => (e) => {
  e.preventDefault()

  if (typeof fn === 'function') fn(e)
}

const style = `
  ${css.core}

  .root {
    height: 100%;
    width: 100%;
    position: absolute;
  }
`

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
          <link href='/static/stylesheets/icomoon.css' rel='stylesheet' />
          <link href='https://fonts.googleapis.com/css?family=Playfair+Display:400,700&subset=cyrillic' />
        </Head>

        <Content currentQuote={currentQuote} />
        <Links
          nextQuoteUrl={nextQuoteUrl}
          openMenu={this.openMenu}
        />
        { this.state.displayMenu && <Menu closeMenu={this.closeMenu} /> }

        <style>{ style }</style>
      </div>
    )
  }
}

export default App
