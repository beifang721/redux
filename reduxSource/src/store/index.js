/*
 * @Author: yqj
 * @Date: 2020-07-14 14:48:19
 * @LastEditTime: 2020-07-16 17:37:58
 * @Description: 
 */ 
import createStore from '../redux/createStore';
import rootReducer from './reducers'

import counter from './reducers/counter'

const store = createStore(rootReducer);

export default store;
