import React, { Component } from 'react'

import { getQuote, getQuoteByIndex } from 'gorchichka'

import Page from '../layouts/main'
import { indexFromQuery, indexFromQuote } from '../lib/quoteUrl'
import nextRandomQuote from '../lib/nextRandomQuote'
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
    const { displayMenu } = this.state
    const title = `горчичка - ${currentQuote.song.title}`
    const nextQuoteUrl = `/?q=${nextQuoteIndex}`

    return (
      <Page title={title}>
        <Content
          currentQuote={currentQuote}
          nextQuoteUrl={nextQuoteUrl}
          openMenu={this.openMenu}
        />
        { displayMenu && <Menu closeMenu={this.closeMenu} /> }
      </Page>
    )
  }
}

export default App
