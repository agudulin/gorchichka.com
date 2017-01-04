export const indexFromQuote = ({ album, song, quote }) => `${album.index}-${song.index}-${quote.index}`
export const indexFromQuery = (id) => id.split('-').map(x => parseInt(x, 10))
