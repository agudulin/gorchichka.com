import React, { Component } from 'react'
import { getQuote, getQuoteByIndex } from 'gorchichka'

import Quote from '../components/quote'

const quoteToIndex = (quote) => `${quote.album.index}-${quote.song.index}-${quote.quote.index}`
const idToIndex = (id) => id.split('-').map(x => parseInt(x, 10))

class App extends Component {
  static getInitialProps ({ query: { q: id } }) {
    const index = id && idToIndex(id)
    const currentQuote = id ? getQuoteByIndex(...index, { details: true }) : getQuote({ details: true })
    const nextQuoteIndex = quoteToIndex(getQuote({ details: true }))

    return { currentQuote, nextQuoteIndex }
  }

  render () {
    const { currentQuote, nextQuoteIndex } = this.props

    return (
      <Quote currentQuote={currentQuote} nextQuoteIndex={nextQuoteIndex} />
    )
  }
}

export default App
