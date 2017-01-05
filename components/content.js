import React from 'react'

import Quote from './quote'
import QuoteInfo from './quoteInfo'
import { colors } from '../stylesheets'

const style = `
  .content {
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 2rem;
    color: ${colors.grey};
  }
`

export default ({ currentQuote }) => (
  <div className='content'>
    <QuoteInfo quote={currentQuote} />
    <Quote quote={currentQuote} />

    <style>{ style }</style>
  </div>
)
