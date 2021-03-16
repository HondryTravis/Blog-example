// 使所有的 reducers 合并
function combineReducers(reducers) {
  // 保存 key 值
  const reducerKeys = Object.keys(reducers);
  return function combineReducer(state = {}, action) {
    const nextState ={}

    for(let i = 0; i < reducerKeys.length; i++) {
      const key = reducerKeys[i]
      const reducer = reducers[key]
      // TODO: 保存当前 key 的 state
      const previousStateForKey = state[key];
      // TODO: 计算得到新的 key 的 state
      const nextStateForKey = reducer(previousStateForKey, action)
      // TODO: 绑定新的 state
      nextState[key] = nextStateForKey
    }
    // TODO: 返回新的 state
    return nextState;
  }
}

export {
  combineReducers
}