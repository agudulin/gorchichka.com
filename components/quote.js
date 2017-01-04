import React from 'react'
import Link from 'next/prefetch'

const breakLines = (str) => str.split('\n').map(line => <div key={line}>{ line }</div>)

export default ({ currentQuote, nextQuoteIndex }) => {
  const quoteLines = breakLines(currentQuote.quote.title)
  const info = `${currentQuote.song.title}, ${currentQuote.album.title} (${currentQuote.album.year})`
  const href = `/?q=${nextQuoteIndex}`

  return (
    <div>
      <div>{ quoteLines }</div>
      <div>{ info }</div>
      <Link href={href}>еще</Link>
    </div>
  )
}
