import React from 'react'

import { font } from '../style'

const breakLines = (str) => str.split('\n').map(line => <div key={line}>{line}</div>)

export default ({ quote }) => (
  <div className='quote'>
    {breakLines(quote.quote.title)}
    <style jsx>{`
      .quote {
        font-family: '${font.family.playfair}', serif;
        letter-spacing: normal;
        font-size: 1.5rem;
        line-height: 1.5;
        order: 2;
        flex-grow: 2;
        max-height: 100%;
        overflow: auto;
      }`}
    </style>
  </div>
)
