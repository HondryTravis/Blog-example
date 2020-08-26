function createStore(reducer, payloadState) {
  let currentState = payloadState
  const listeners = []

  function subscribe(listener) {
    listeners.push(listener)
  }
  function getState() {
    return currentState
  }
  function dispatch(action) {
    currentState = reducer(currentState, action);
    for (let i = 0; i < listeners.length; i ++) {
      const listener = listeners[i]
      listener()
    }
  }
  return {
    subscribe: subscribe,
    getState: getState,
    dispatch: dispatch
  }
}
export {
  createStore
}