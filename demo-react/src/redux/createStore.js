/*
 * @Author: yqj
 * @Date: 2020-07-13 19:37:55
 * @LastEditTime: 2020-07-16 19:53:56
 * @Description: 创建仓库这是最核心的部分
 */


 /**
  * 
  * @param {*} reducer  处理函数
  * @param {*} initialState  初始状态
  */

export default function createStore(reducer, initialState) {
  // 这个state是唯一的，所有的获取修改都是这个state
  let state = initialState; 
  let listeners = [];
  function getState() {
    return state;
  }

  function dispatch(action) {
    // console.log('-----',reducer);
    // reducer函数的目的就是返回更新后状态   然后赋值给state， 这样再去执行getState()拿到的就是新的状态
    state = reducer(state, action);
    listeners.forEach(l=>l());
  }

  function subscribe(listener) {
    listeners.push(listener);
    return function () {
      const index = listeners.indexOf(listener);
      if (index > -1) listeners.splice(index, 1);
    };
  }

  dispatch({type: '@xx/init'});
  return { dispatch, getState, subscribe }
}



