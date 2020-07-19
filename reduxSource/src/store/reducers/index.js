/*
 * @Author: yqj
 * @Date: 2020-07-16 16:55:28
 * @LastEditTime: 2020-07-18 12:41:21
 * @Description: 合并reducer
 */ 

import counter from './counter';
import counter1 from './counter1';
import combineReducers from '../../redux/combineReducers';
// import { combineReducers } from 'redux';

const reducers = {
  counter,
  counter1
}

const rootReducers = combineReducers(reducers);

export default rootReducers;
