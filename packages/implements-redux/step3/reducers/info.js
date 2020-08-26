
export default function reducer(state, action) {

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