/*
 * @Author: yqj
 * @Date: 2020-07-16 14:45:04
 * @LastEditTime: 2020-07-16 14:46:57
 * @Description: 
 */ 
import { ADD, MINUS } from '../actionType';

 export default {
  add(amount){
    return { type: ADD, amount }
  },
  minus(){
    return { type: MINUS }
  }
 }