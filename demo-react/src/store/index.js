/*
 * @Author: yqj
 * @Date: 2020-07-14 14:48:19
 * @LastEditTime: 2020-07-16 15:18:24
 * @Description: 
 */ 
import createStore from '../redux/createStore';
import { MINUS, ADD } from './actionType';
 
// redux action 必须是一个对象 
const initalState = { name: '计数器',value: 0 }
 
function reducer(action, state = initalState) {
  switch (action.type) {
    case MINUS:
      // 返回的值会直接覆盖老的state， 不会合并到老的state上
      return { ...state, value: state.value - 1 }
    case ADD:
      return { ...state, value: state.value + action.amount }
    default:
      return state;
  }
}

const store = createStore(reducer);

export default store;
