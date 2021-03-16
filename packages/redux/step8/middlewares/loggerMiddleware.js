// TODO: 日志
function loggerMiddleware(store) {

  return function(next) {

    return function(action) {

      console.log('当前 state', store.getState());
      console.log('行为 action', action);
      next(action);
      console.log('下个 state', store.getState());

    }
  }
}
export default loggerMiddleware;
