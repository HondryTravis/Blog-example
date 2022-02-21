function isInteger(n) {
  return typeof n === 'number'
      && isFinite(n)
      && Math.floor(n) === n
}