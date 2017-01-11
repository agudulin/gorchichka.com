import React, { Component } from 'react'

import { getQuote, getQuoteByIndex } from 'gorchichka'

import Page from '../layouts/main'
import { indexFromQuery, indexFromQuote } from '../lib/quoteUrl'
import nextRandomQuote from '../lib/nextRandomQuote'
import preventDefault from '../lib/preventDefault'
import Content from '../components/content'
import Icon from '../components/icon'
import { Links, LinksItem } from '../components/links'
import Menu from '../components/menu'

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
    const { displayMenu } = this.state
    const title = `горчичка - ${currentQuote.song.title}`
    const nextQuoteUrl = `/?q=${nextQuoteIndex}`

    return (
      <Page title={title}>
        <Content currentQuote={currentQuote} />
        <Links>
          <LinksItem onClick={this.openMenu}><Icon name='hamburger' /></LinksItem>
          <LinksItem href={nextQuoteUrl} prefetch><Icon name='refresh' /></LinksItem>
        </Links>
        { displayMenu && <Menu closeMenu={this.closeMenu} /> }
      </Page>
    )
  }
}

export default App
