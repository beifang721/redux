/*
 * @Author: yqj
 * @Date: 2020-07-20 10:17:17
 * @LastEditTime: 2020-07-20 14:23:12
 * @Description: 入口文件创建仓库
 */ 

import { createStore } from "redux";
import reducer from './reducer';

const store = createStore(reducer);

export default store;