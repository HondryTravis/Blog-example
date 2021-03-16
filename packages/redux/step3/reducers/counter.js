export default function reducer(state, action) {
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
  if(!COUNT_STATE.hasOwnProperty(action.type)) {
    return state
  }
  return COUNT_STATE[action.type](state)
}