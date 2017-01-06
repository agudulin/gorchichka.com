import React from 'react'

import Icon from './icon'
import { Links, LinksItem } from './links'
import Quote from './quote'
import QuoteInfo from './quoteInfo'

export default ({ currentQuote, nextQuoteUrl, openMenu }) => (
  <div className='content'>
    <QuoteInfo quote={currentQuote} />
    <Quote quote={currentQuote} />
    <Links>
      <LinksItem onClick={openMenu}><Icon name='hamburger' /></LinksItem>
      <LinksItem href={nextQuoteUrl} prefetch><Icon name='refresh' /></LinksItem>
    </Links>

    <style jsx>{`
      .content {
        height: 100%;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        padding: 2rem 2rem 6rem;
        color: #dcdcdc;
      }
    `}</style>
  </div>
)
