function createStore(payloadState) {
  let currentState = payloadState
  const listeners = []

  function subscribe(listener) {
    listeners.push(listener)
  }
  function getState() {
    return currentState
  }
  // TODO: 临时的 change
  function change(newState) {
    currentState = newState
    for(let i = 0; i < listeners.length; i++) {
      const listener = listeners[i]
      listener()
    }
  }
  return {
    subscribe: subscribe,
    getState: getState,
    change: change
  }
}
export {
  createStore
}