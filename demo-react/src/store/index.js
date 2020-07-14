/*
 * @Author: yqj
 * @Date: 2020-07-14 14:48:19
 * @LastEditTime: 2020-07-14 19:58:52
 * @Description: 
 */ 
import createStore from '../redux/createStore';
import { MINUS, ADD } from './actionType';
 
const initalState = { name: '计数器',value: 0 }
function reducer(action, state = initalState) {
  console.log('xxxxx' ,action, state);
  switch (action.type) {
    case MINUS:
      return { ...state, value: state.value - 1 }
    case ADD:
      return { ...state, value: state.value + 1 }
    default:
      return state;
  }
}

const store = createStore(reducer);

export default store;
