/*
 * @Author: yqj
 * @Date: 2020-07-13 19:37:55
 * @LastEditTime: 2020-07-14 18:01:00
 * @Description: 
 */


function createStore(reducer, initialState) {
  let state = initialState;
  let listeners = [];
  function getState() {
    return state;
  }

  function dispatch(action) {
    state = reducer(action, state);
    console.log(listeners);
    listeners.forEach(l=>l());
  }

  function subscribe(listener) {
    listeners.push(listener);
    return function unsubscribe() {
      const index = listeners.indexOf(listener);
      if (index > -1) listeners.splice(index, 1);
    };
  }

  return { dispatch, getState, subscribe }
}



