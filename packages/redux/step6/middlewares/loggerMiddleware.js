// TODO: 日志
const loggerMiddleware = (store) => (next) => (action) => {
  console.log('当前 State', store.getState());
  console.log('行为 Action', action);
  next(action);
  console.log('下个 State', store.getState());
};
export default loggerMiddleware;
