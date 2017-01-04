const separator = '​'

export const indexFromQuote = ({ album, song, quote }) => ([album.index, song.index, quote.index].join(separator))
export const indexFromQuery = (id) => id.split(separator).map(x => parseInt(x, 10))
