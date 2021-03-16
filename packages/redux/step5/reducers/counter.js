const default_counter = {
  count: 0,
}

export default function reducer(state, action) {
  // TODO: 处理默认数据
  if (!state) {
    state = default_counter
  }
  const COUNT_STATE = {
    ['ADD'](state) {
      console.log('state.count', state.count)
      return {
        ...state,
        count: state.count + 1
      }
    },
    ['REDUCE'](state) {
      return {
        ...state,
        count: state.count - 1
      }
    }
  }
  if (!COUNT_STATE.hasOwnProperty(action.type)) {
    return state
  }
  return COUNT_STATE[action.type](state)
}