/*
 * @Author: yqj
 * @Date: 2020-07-20 13:33:57
 * @LastEditTime: 2020-07-20 14:11:12
 * @Description: 
 */ 

import { CHANGE_COLOR } from "./action-type";

export default function reducer(state={ color: '#fff' }, action) {
   switch (action.type) {
     case CHANGE_COLOR:
       return {...state, color: action.payload };
     default:
       return state;
   }
}