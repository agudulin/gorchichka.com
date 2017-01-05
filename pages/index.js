import React, { Component } from 'react'
import Head from 'next/head'
import { getQuote, getQuoteByIndex } from 'gorchichka'

import { indexFromQuery, indexFromQuote } from '../lib/quoteUrl'
import Links from '../components/links'
import Content from '../components/content'
import * as css from '../stylesheets'

const style = `
  ${css.core}

  .root {
    height: 100%;
    width: 100%;
    position: absolute;
  }
`

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
    const nextQuoteUrl = `/?q=${nextQuoteIndex}`

    return (
      <div className='root'>
        <Head>
          <title>{ title }</title>
          <meta charSet='utf-8' />
          <meta content='initial-scale=1.0, width=device-width' name='viewport' />
          <link rel='stylesheet' type='text/css' href='/static/stylesheets/icomoon.css' />
        </Head>

        <Content currentQuote={currentQuote} />
        <Links nextQuoteUrl={nextQuoteUrl} />

        <style>{ style }</style>
      </div>
    )
  }
}

export default App
