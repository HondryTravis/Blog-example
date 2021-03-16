function createStore(reducer, payloadState, rewriteCreateStore) {
  let currentState = payloadState
  const listeners = []
  // TODO: 实现改写
  if(rewriteCreateStore && typeof rewriteCreateStore === 'function') {
    const newCreateStore = rewriteCreateStore(createStore);
    return newCreateStore(reducer, payloadState)
  }
  // TODO: 实现订阅 subscribe
  function subscribe(listener) {
    listeners.push(listener)
  }
  // TODO: 实现获取 state getState
  function getState() {
    return currentState
  }
  // TODO: 实现派发器 dispatch
  function dispatch(action) {
    currentState = reducer(currentState, action);
    for (let i = 0; i < listeners.length; i ++) {
      const listener = listeners[i]
      listener()
    }
  }
  // TODO: 实现替换 replaceReducer
  function replaceReducer(willReplaceReducer) {
    reducer = willReplaceReducer;
    // TODO: 更新之后重新派发更新
    dispatch({type: Symbol()})
  }
  dispatch({type: Symbol()})
  return {
    subscribe,
    getState,
    dispatch,
    replaceReducer
  }
}
export {
  createStore
}