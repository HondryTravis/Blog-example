import compose from './compose.js'
// TODO: 实现 应用 middleware
function applyMiddleware(...middlewares) {

  return function oldCreateStore(oldCreateStore) {

    return function newCreateStore(reducer, payloadState) {

      const oldStore = oldCreateStore(reducer, payloadState);

      const simpleStore = { getState: oldStore.getState };

      const chain = middlewares.map((middleware) => middleware(simpleStore));
      // compose 函数组合，链式调用，得到最终的 dispatch
      const dispatch = compose(...chain)(oldStore.dispatch);
      // TODO: 重写 oldStore 中 dispatch 方法
      return {
        ...oldStore,
        dispatch,
      };
    }
  }
}

export {
  applyMiddleware
}