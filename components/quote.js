import React from 'react'

const breakLines = (str) => str.split('\n').map(line => <div key={line}>{ line }</div>)
const style = `
  .quote {
    font-size: 1.6rem;
    order: 2;
    flex-grow: 2;
    max-height: 100%;
    overflow: auto;
  }
`

export default ({ quote }) => (
  <div className='quote'>
    { breakLines(quote.quote.title) }
    <style>{ style }</style>
  </div>
)
