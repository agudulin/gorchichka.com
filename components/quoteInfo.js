import React from 'react'

export default ({ quote }) => (
  <div className='quote-info'>
    <div className='quote-info__album'>
      Кровосток · { quote.album.title }
      <span className='quote-info__year'>{ quote.album.year }</span>
    </div>
    <div className='quote-info__song'>{ quote.song.title }</div>

    <style jsx>{`
      .quote-info {
        font-family: sans-serif;
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
      .quote-info__year {
        font-size: .8rem;
        margin-left: .5rem;
      }
    `}</style>
  </div>
)
