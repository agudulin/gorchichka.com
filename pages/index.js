import React, { Component } from 'react'
import { getQuote } from 'gorchichka'

const breakLines = (str) => str.split('\n').map(line => <div key={line}>{ line }</div>)

class App extends Component {
  static async getInitialProps () {
    return Promise.resolve({
      randomQuote: getQuote({ details: true })
    })
  }

  render () {
    const { randomQuote } = this.props

    return (
      <div>{ breakLines(randomQuote.quote) }</div>
    )
  }
}

export default App
