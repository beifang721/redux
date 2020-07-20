/*
 * @Author: yqj
 * @Date: 2020-07-20 13:49:41
 * @LastEditTime: 2020-07-20 14:09:41
 * @Description: 
 */ 

import { CHANGE_COLOR } from "./action-type";

export default{
  changeColor(payload){
    return { type: CHANGE_COLOR, payload}
  }
}