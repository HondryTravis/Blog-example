function bindActionCreator(actionCreator, dispatch) {
  return function willRunDispatch() {
    return dispatch(actionCreator.apply(this, arguments));
  };
}

// TODO:  绑定多个 Action
function bindActionCreators(actionCreators, dispatch) {
  const boundActionCreators = {};
  for (const key in actionCreators) {
    const actionCreator = actionCreators[key];
    if (typeof actionCreator === 'function') {
      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
    }
  }
  return boundActionCreators;
}


export {
  bindActionCreators
}