import React from 'react'

const style = `
  .quote-info {
    text-transform: uppercase;
    order: 1;
    flex-grow: 1;
  }
  .quote-info__album {
    font-size: 1rem;
  }
  .quote-info__song {
    font-size: 1.5rem;
    font-weight: bold;
    margin-top: 2rem;
  }
`

export default ({ quote }) => (
  <div className='quote-info'>
    <div className='quote-info__album'>Кровосток - { quote.album.title } { quote.album.year }</div>
    <div className='quote-info__song'>{ quote.song.title }</div>

    <style>{ style }</style>
  </div>
)
