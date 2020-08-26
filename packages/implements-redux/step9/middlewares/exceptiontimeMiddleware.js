// TODO: 过期时间中间件
function exceptiontimeMiddleware(store) {
  return function(next) {
    return function(action) {
      try {
        next(action);
      } catch (e) {
        console.error('错误报告', e);
      }
    }
  }
}
export default exceptiontimeMiddleware;
