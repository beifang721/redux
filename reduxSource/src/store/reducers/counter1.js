/*
 * @Author: yqj
 * @Date: 2020-07-16 16:55:53
 * @LastEditTime: 2020-07-24 17:26:46
 * @Description: 
 */ 

import { MINUS1, ADD1 } from '../actionType';
 
// redux action 必须是一个对象 
const initalState = { name: '计数器',value: 0 }
 
export default function reducer(state = initalState, action) {
  switch (action.type) {
    case MINUS1:
      // 返回的值会直接覆盖老的state， 不会合并到老的state上
      return { ...state, value: state.value - 1 }
    case ADD1:
      return { ...state, value: state.value + (isNaN(action.amount) ? 1 : action.amount) }
    default:
      return state;
  }
}