import React from 'react'

import { font } from '../style'

export default ({ quote }) => (
  <div className='quote-info'>
    <div className='quote-info__album'>
      Кровосток
      <span className='quote-info__bullet'>•</span>
      {quote.album.title}
      <span className='quote-info__year'>{quote.album.year}</span>
    </div>
    <div className='quote-info__song'>{quote.song.title}</div>

    <style jsx>{`
      .quote-info {
        text-transform: uppercase;
        order: 1;
        flex-grow: 1;
      }
      .quote-info__bullet {
        margin: 0 .5rem;
      }
      .quote-info__album {
        font-family: '${font.family.gilroy}';
        font-size: 1rem;
        letter-spacing: 1px;
        white-space: nowrap;
      }
      .quote-info__song {
        font-family: '${font.family.gilroyBold}';
        font-size: 1.5rem;
        letter-spacing: 1px;
        margin-top: 2rem;
      }
      .quote-info__year {
        font-size: .8rem;
        margin-left: .5rem;
      }
    `}
    </style>
  </div>
)
