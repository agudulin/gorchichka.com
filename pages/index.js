import React, { Component } from 'react'
import { getQuote, getQuoteByIndex } from 'gorchichka'

import { indexFromQuery, indexFromQuote } from '../lib/quoteUrl'
import Quote from '../components/quote'

class App extends Component {
  static getInitialProps ({ query: { q: id } }) {
    const currentQuote = id
      ? getQuoteByIndex(...indexFromQuery(id), { details: true })
      : getQuote({ details: true })
    const nextQuote = getQuote({ details: true })
    const nextQuoteIndex = indexFromQuote(nextQuote)

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
