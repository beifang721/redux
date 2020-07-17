/*
 * @Author: yqj
 * @Date: 2020-07-16 16:55:46
 * @LastEditTime: 2020-07-16 19:46:40
 * @Description: 
 */ 

import { MINUS, ADD } from '../actionType';
 
// redux action 必须是一个对象 
const initalState = { name: '计数器',value: 0 }
 
export default function reducer(state = initalState, action) {
  switch (action.type) {
    case MINUS:
      // 返回的值会直接覆盖老的state， 不会合并到老的state上，  
      // 这句话什么意思呢：  可以在createStore.js中看到  state = reducer(state, action);
      return { ...state, value: state.value - 1 }
    case ADD:
      return { ...state, value: state.value + action.amount }
    default:
      return state;
  }
}