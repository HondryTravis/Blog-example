import React from 'react';
import createStore from './my-redux'

const { Provider, store } = createStore({
  isDev: true,
  initialState: { name: '测试姓名', age: 0 },
});

function asyncResolve(params, callback, wait = 300) {
  console.log('异步事件');
  return new Promise(function(resolve, reject) {
     setTimeout(() => resolve(callback(params)), wait);
  })
}
// TODO: 异步事件
const actionOfAdd = () => async (dispatch, ownState) => {
  const callback = (age) => age + 1
  const age = await asyncResolve(ownState.age, callback);
  dispatch({
    type: 'addNumAsync',
    reducer(state) {
      return {
        ...state,
        age,
      };
    },
  });
};

// TODO: 同步事件
// function actionOfAdd() {
//   return {
//     type: 'addNum',
//     reducer(state) {
//       return {
//         ...state,
//         age: state.age + 1,
//       };
//     },
//   };
// }

function Button() {
  function handleAdd() {
    store.dispatch(actionOfAdd());
  }
  return <button onClick={handleAdd}>点击增加</button>;
}

function Tooltip() {
  const state = store.useContext();
  return (
    <div>
      <p>{state.age} ------- {state.name}</p>
      <hr />
      <Button />
    </div>
  )
}
function App() {
  return (
    <Provider>
      <Tooltip />
    </Provider>
  );
}

export default App;
