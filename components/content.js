import React from 'react'

import { colors } from '../style'
import Quote from './quote'
import QuoteInfo from './quoteInfo'

export default ({ currentQuote }) => (
  <div className='content'>
    <QuoteInfo quote={currentQuote} />
    <Quote quote={currentQuote} />

    <style jsx>{`
      .content {
        height: 100%;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        padding: 2rem 2rem 6rem;
        color: ${colors.grey};
      }
    `}
    </style>
  </div>
)
