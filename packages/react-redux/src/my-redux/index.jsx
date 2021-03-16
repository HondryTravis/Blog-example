import React, { useReducer, useContext, createContext } from 'react';



// 中间件
function middlewareLog(lastState, nextState, action, isDev) {
  if (isDev) {
    console.log('🍺 Action', action.type);
    console.log('前一个状态', lastState);
    console.log('下一个状态', nextState);
  }
}

// 聚合 reducer in Action
function reducerInAction(state, action) {
  if (typeof action.reducer === 'function') {
    return action.reducer(state);
  }
  return state;
}

export default function createStore(params) {

  const { isDev, middlewares ,initialState } = {
    initialState: {},
    dispatch: undefined,
    middlewares: params.isDev ? [middlewareLog] : undefined,
    ...params,
  };
  // TODO: 全局一个全局的状态管理机制
  const AppContext = createContext();
  const store = {
    _state: initialState,
    getState: () => {
      return store._state;
    },
    useContext: () => {
      return useContext(AppContext);
    },
  };

  const middlewareReducer = (lastState, action) => {
    let nextState = reducerInAction(lastState, action);
    for (let item of middlewares) {
      const newState = item(lastState, nextState, action, isDev);
      if (newState) {
        nextState = newState;
      }
    }
    //更新回状态
    store._state = nextState;
    return nextState;
  };

  // TODO: 提供 Provider
  const Provider = (props) => {
    const [state, dispatch] = useReducer(middlewareReducer, initialState);
    if (!store.dispatch) {
      // store.dispatch = dispatch;
      store.dispatch = async (action) => {
        if (typeof action === 'function') {
          await action(dispatch, store.getState());
          console.log('xxx');
        } else {
          dispatch(action);
        }
      };
    }
    return <AppContext.Provider {...props} value={state} />;
  };

  return {
    store,
    Provider,
  }
}