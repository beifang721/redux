/*
 * @Author: yqj
 * @Date: 2020-07-18 15:06:37
 * @LastEditTime: 2020-07-18 15:58:01
 * @Description: 创建上下文
 */ 
import React, { createContext } from 'react';

const ReactReduxContext = createContext(null); //创建ReactRedux上下文

ReactReduxContext.displayName = 'ReactRedux';

export default ReactReduxContext;