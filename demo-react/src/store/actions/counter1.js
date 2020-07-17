/*
 * @Author: yqj
 * @Date: 2020-07-16 16:50:29
 * @LastEditTime: 2020-07-16 17:52:16
 * @Description: 
 */ 
import { ADD1, MINUS1 } from '../actionType';

 export default {
  add1(amount){
    return { type: ADD1, amount }
  },
  minus1(){
    return { type: MINUS1 }
  }
 }