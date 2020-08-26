const default_info = {
  text: '我是默认数据'
}
export default function reducer(state, action) {
  // TODO: 处理默认数据
  if(!state) {
    state = default_info
  }
  const INFO_STATE = {
    ['CHANGE'](state) {
      return {
        ...state,
        text: '我是 change 的数据'
      }
    }
  }
  if(!INFO_STATE.hasOwnProperty(action.type)) {
    return state
  }
  return INFO_STATE[action.type](state)
}