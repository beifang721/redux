/*
 * @Author: yqj
 * @Date: 2020-07-16 14:45:04
 * @LastEditTime: 2020-07-29 15:29:44
 * @Description: 
 */ 
import { ADD, MINUS } from '../actionType';

 export default {
  add(amount){
    return { type: ADD, amount }
  },
  thunkAdd(){
    return function(dispatch){ //dispatch 是重写过的store.dispatch方法
      setTimeout(() => {
        dispatch({type: ADD})
      }, 1000);
    }
  },
  promiseAdd(){
    return {
      type: ADD,
      payload: new Promise(function (resolve, reject) {
        setTimeout(() => {
          console.log('xxxxxx', resolve);
          resolve(1)
        }, 1000);
      })

    }
    return new Promise(function (resolve, reject) {
      setTimeout(() => {
        console.log('xxxxxx', resolve);
        resolve({type: ADD})
      }, 1000);
    })
  },
  minus(){
    return { type: MINUS }
  }
 }