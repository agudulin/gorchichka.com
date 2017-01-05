import React from 'react'

const breakLines = (str) => str.split('\n').map(line => <div key={line}>{ line }</div>)
const style = `
  .quote {
    font-size: 2rem;
    order: 2;
    flex-grow: 2;
  }
`

export default ({ quote }) => (
  <div className='quote'>
    { breakLines(quote.quote.title) }
    <style>{ style }</style>
  </div>
)
