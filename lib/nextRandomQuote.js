import { getQuote } from 'gorchichka'
import { indexFromQuote } from '../lib/quoteUrl'

function nextRandomQuote (currentQuote) {
  const nextQuote = getQuote({ details: true })
  const nextQuoteIndex = indexFromQuote(nextQuote)

  if (indexFromQuote(currentQuote) !== nextQuoteIndex) {
    return nextQuote
  }

  return nextRandomQuote(nextQuote)
}

export default nextRandomQuote
