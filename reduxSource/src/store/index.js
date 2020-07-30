/*
 * @Author: yqj
 * @Date: 2020-07-14 14:48:19
 * @LastEditTime: 2020-07-30 14:27:25
 * @Description: 
 */ 
import createStore from '../redux/createStore';
import rootReducer from './reducers';
import counter from './reducers/counter';

// 所有的中间件遵循一样的格式
const logger = function ({getState, dispatch}) {
  return function(next){
    return function(action){
      console.log('老状态', getState());
      next(action);
      console.log('新状态', getState())
    }
  }
};

const thunk = function ({getState, dispatch}) {
  return function(next){
    return function(action){
      if (typeof action === 'function') { 
        action(store.dispatch);
      }else{
        dispatch(action);
      }
    }
  }
};

const promise = function ({getState, dispatch}) {
  return function(next){
    return function(action){
      if (typeof action.then === 'function') {
        action.then(store.dispatch)
      }else if(typeof action.payload.then === 'function'){
        action.payload.then((payload)=> {
          store.dispatch({ ...action, payload })
        })
      }else{
        console.log(action);
        dispatch(action);
      }
    }
  }
};



// 接受一个中间件返回的是增强版的 store
function applyMiddleware(...middlewares){
  return function(createStore){
    return function(rootReducer){
      let store = createStore(rootReducer);
      let dispatch = store.dispatch;
      store.dispatch = logger(store)(dispatch)
      return store;
    }
  }
}


const store = applyMiddleware(thunk, promise ,logger)(createStore)(rootReducer);

export default store;

// 老的方法
/* store.dispatch = function(action){ 
  if (typeof action === 'function') { 
    action(store.dispatch);
  }else{
    dispatch(action);
  }
} */

/* 
store.dispatch = function(action){ // 这一步真是高明  promise
  if (typeof action.then === 'function') {
    action.then(store.dispatch)
  }else if(typeof action.payload.then === 'function'){
    action.payload.then((payload)=> {
      store.dispatch({ ...action, payload })
    })
  }else{
    console.log(action);
    dispatch(action);
  }
}
 */