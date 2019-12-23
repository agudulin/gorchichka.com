import React, { useState } from 'react'

import { getQuote, getQuoteByIndex } from 'gorchichka'

import Page from '../layouts/main'
import { indexFromQuery, indexFromQuote } from '../lib/quoteUrl'
import nextRandomQuote from '../lib/nextRandomQuote'
import preventDefault from '../lib/preventDefault'
import Content from '../components/content'
import Icon from '../components/icon'
import { Links, LinksItem } from '../components/links'
import Menu from '../components/menu'

const App = ({ currentQuote, nextQuoteIndex }) => {
  const [isMenuOpened, setMenuVisibility] = useState(false)

  return (
    <Page title={`горчичка - ${currentQuote.song.title}`}>
      <Content currentQuote={currentQuote} />
      <Links>
        <LinksItem onClick={() => setMenuVisibility(true)}>
          <Icon name='hamburger' />
        </LinksItem>
        <LinksItem href={`/?q=${nextQuoteIndex}`} prefetch>
          <Icon name='refresh' />
        </LinksItem>
      </Links>
      {isMenuOpened && <Menu onCloseMenu={() => setMenuVisibility(false)} />}
    </Page>
  )
}

App.getInitialProps = ({ query: { q: id } }) => {
  const currentQuote = id
    ? getQuoteByIndex(...indexFromQuery(id), { details: true })
    : getQuote({ details: true })
  const nextQuote = nextRandomQuote(currentQuote)
  const nextQuoteIndex = indexFromQuote(nextQuote)

  return { currentQuote, nextQuoteIndex }
}

export default App
