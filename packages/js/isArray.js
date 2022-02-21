function isArray(arr) {
  return typeof arr === 'object'
      && Object.prototype.toString.call(arr) === '[object Array]'
}