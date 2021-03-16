function reducer(state, action) {
  switch (action.type) {
    case 'ADD':
      return {
        ...state,
        count: state.count + 1
      };
    case 'REDUCE':
      return {
        ...state,
        count: state.count - 1
      }
    default: return state;
  }
}

export {
  reducer
}