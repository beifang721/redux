/*
 * @Author: yqj
 * @Date: 2020-07-16 16:55:46
 * @LastEditTime: 2020-07-24 17:22:43
 * @Description: 
 */ 

import { MINUS, ADD } from '../actionType';
 
// redux action 必须是一个对象 
const initalState = { name: '计数器',value: 0 }
 
export default function reducer(state = initalState, action) { //接受一个老状态和派发的action对象{}
  switch (action.type) {
    case MINUS:
      // 返回的值会直接覆盖老的state， 不会合并到老的state上，  
      // 可以在createStore.js中看到  state = reducer(state, action);
      return { ...state, value: state.value - 1 }
    case ADD:
      return { ...state, value: state.value + (isNaN(action.amount) ? 1 : action.amount)}
    default:
      return state;
  }
}