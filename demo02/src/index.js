/*
 * @Author: yqj
 * @Date: 2020-07-20 10:00:19
 * @LastEditTime: 2020-07-20 14:06:54
 * @Description: 
 */ 
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import ComponentA from './components/ComponentA';
import ComponentB from './components/ComponentB';
import ComponentC from './components/ComponentC';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <div style={{display:'flex', width: 600, justifyContent: 'space-between'}}>
        <ComponentA />
        <ComponentB />
        <ComponentC />
      </div>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
