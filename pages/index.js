import React, { Component } from 'react'
import Head from 'next/head'
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
    const title = `горчичка - ${currentQuote.song.title}`

    return (
      <div>
        <Head>
          <title>{ title }</title>
          <meta charSet='utf-8' />
          <meta content='initial-scale=1.0, width=device-width' name='viewport' />
        </Head>

        <Quote currentQuote={currentQuote} nextQuoteIndex={nextQuoteIndex} />
      </div>
    )
  }
}

export default App
