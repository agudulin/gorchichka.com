export default (fn) => (e) => {
  e.preventDefault()

  if (typeof fn === 'function') fn(e)
}
