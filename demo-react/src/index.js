/*
 * @Author: yqj
 * @Date: 2020-07-14 14:12:01
 * @LastEditTime: 2020-07-16 16:48:56
 * @Description: 
 */ 
import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './components/Counter';
import Counter1 from './components/Counter1';
import { } from 'react-redux';

ReactDOM.render(
  <React.StrictMode>
    <Counter />
    <hr/>
    <Counter1></Counter1>
  </React.StrictMode>,
  document.getElementById('root')
);

