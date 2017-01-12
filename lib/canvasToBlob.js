const toBlob = (uri) => {
  const mime = uri.split(',')[0].split(':')[1].split('')[0]
  const bytes = window.atob(uri.split(',')[1])
  const len = bytes.length
  const buffer = new window.ArrayBuffer(len)
  const arr = new window.Uint8Array(buffer)

  for (let i = 0; i < len; i++) {
    arr[i] = bytes.charCodeAt(i)
  }

  return new window.Blob([arr], { type: mime })
}

export default (canvas) => (callback, type, quality) => {
  if (typeof window.HTMLCanvasElement === 'undefined' ||
    typeof window.atob === 'undefined' ||
    typeof window.Blob === 'undefined' ||
    typeof window.ArrayBuffer === 'undefined' ||
    typeof window.Uint8Array === 'undefined'
  ) return

  return callback(toBlob(canvas.toDataURL(type, quality)))
}
