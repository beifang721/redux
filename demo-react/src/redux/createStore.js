/*
 * @Author: yqj
 * @Date: 2020-07-13 19:37:55
 * @LastEditTime: 2020-07-14 19:58:04
 * @Description: 
 */


export default function createStore(reducer, initialState) {
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



