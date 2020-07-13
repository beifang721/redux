/*
 * @Author: yqj
 * @Date: 2020-07-13 17:05:43
 * @LastEditTime: 2020-07-13 20:03:51
 * @Description: 
 */ 
function createStore(reducer, initialState) {
  let state = initialState;
  let listeners = [];
  function getState() {
    return state;
  }
  function dispatch(action){
    state = reducer(action, state);
    listeners.forEach((item)=>{ // 遍历调用listener函数
      item();
    })
  }
  function subscribe(listener) { // 利用观察者模式，实现监听state
    listeners.push(listener); // 缓存监听的函数 
  }
  return { getState, dispatch, subscribe };
}

function reducer(action, state) {
  return action.color;
}

const store = createStore(reducer, '黑色');

console.log(store.getState());
store.subscribe(()=>{
  console.log(store.getState())
})
store.dispatch({type: 'ChangeRed', color: '🧱红色'});

