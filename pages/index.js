import React, { Component } from 'react'
import { getQuote } from 'gorchichka'

const breakLines = (str) => str.split('\n').map(line => <div key={line}>{ line }</div>)

class App extends Component {
  static getInitialProps () {
    return {
      randomQuote: getQuote({ details: true })
    }
  }

  render () {
    const { randomQuote } = this.props
    const quoteLines = breakLines(randomQuote.quote)
    const info = `${randomQuote.song}, ${randomQuote.album.title} (${randomQuote.album.year})`

    return (
      <div>
        <p>{ quoteLines }</p>
        <p>{ info }</p>
      </div>
    )
  }
}

export default App
