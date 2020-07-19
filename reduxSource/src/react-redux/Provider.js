/*
 * @Author: yqj
 * @Date: 2020-07-18 15:03:03
 * @LastEditTime: 2020-07-18 16:25:43
 * @Description: 创建Provider组件
 */ 
import React from 'react';

import  ReactReduxContext  from './context';

export default function Provider(props){
  
  return(
    // 这里的就是高层组件传入的store   有{ dispatch, getState, subscribe }等方法
    <ReactReduxContext.Provider value={props.store}>
      {props.children}
    </ReactReduxContext.Provider>
  )
}