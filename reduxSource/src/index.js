/*
 * @Author: yqj
 * @Date: 2020-07-14 14:12:01
 * @LastEditTime: 2020-07-18 16:19:31
 * @Description: 
 */ 
import React from 'react';       
import ReactDOM from 'react-dom';
import Counter from './components/Counter';
import Counter1 from './components/Counter1';
import { Provider  } from 'react-redux';
import store from './store';

import { MyProveder } from './react-redux';


ReactDOM.render(
    <React.StrictMode>
  <MyProveder store={store}>

      <Counter />
      <hr/>
      <Counter1></Counter1>

  </MyProveder>
    </React.StrictMode>,
  document.getElementById('root')
);

