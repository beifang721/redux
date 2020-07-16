/*
 * @Author: yqj
 * @Date: 2020-07-13 19:37:55
 * @LastEditTime: 2020-07-16 10:07:47
 * @Description: 
 */


 /**
  * 
  * @param {*} reducer  处理函数
  * @param {*} initialState  初始状态
  */

export default function createStore(reducer, initialState) {
  // 组件使用的state，这个state是唯一的
  let state = initialState; 
  let listeners = [];
  function getState() {
    return state;
  }

  function dispatch(action) {
    state = reducer(action, state);
    listeners.forEach(l=>l());
  }

  function subscribe(listener) {
    listeners.push(listener);
    return function () {
      const index = listeners.indexOf(listener);
      if (index > -1) listeners.splice(index, 1);
    };
  }

  dispatch({type: '@xx/init'})
  return { dispatch, getState, subscribe }
}



