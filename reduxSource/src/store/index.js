/*
 * @Author: yqj
 * @Date: 2020-07-14 14:48:19
 * @LastEditTime: 2020-07-31 17:15:14
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
    /* 
    // 这里的next就是 这个函数
    function(action){
      console.log('promise---------');
      if (typeof action.then === 'function') {
        action.then(dispatch);
      }else if(action.amount && typeof action.amount.then === 'function'){
        action.amount.then((amount)=> {
          dispatch({ ...action, amount });
        }).catch(error => {
          dispatch({...action, amount: error, error: true})
        })
      }else{
        next(action);
      }
    } */
    return function(action){  //这其实就是改造后的dispatch
      console.log(1);
      if (typeof action === 'function') { 
        action(dispatch, getState);
      }else{
        next(action);
      }
    }
  }
};

const promise = function ({getState, dispatch}) {
  return function(next){ 
    // next 就是 这个函数 
    /* function(action){
      console.log('老状态', getState());
      next(action);
      console.log('新状态', getState())
    } */
    return function(action){
      console.log('promise---------');
      if (typeof action.then === 'function') {
        action.then(dispatch);
      }else if(action.amount && typeof action.amount.then === 'function'){
        action.amount.then((amount)=> {
          dispatch({ ...action, amount });
        }).catch(error => {
          dispatch({...action, amount: error, error: true})
        })
      }else{
        next(action);
      }
    }
  }
};



// 接受一个中间件返回的是增强版的 store
function applyMiddleware(...middlewares){
  return function(createStore){
    return function(rootReducer){
      let store = createStore(rootReducer);
      let dispatch = null;
      const middlewareAPI = {
        getState: store.getState,
        dispatch: (...args)=> {
          // 当执行的时候 dispatch === 合并后的dispatch
          return dispatch(...args)
        }
      } 
      console.log(dispatch);
      const chain = middlewares.map(middleware => middleware(middlewareAPI));
      const [thunk, promise, logger] = chain;
      // dispatch = thunk(promise(logger(store.dispatch)));  
      dispatch = compose(...chain)(store.dispatch); // 合并后的dispatch 大致等于 116行的代码
      console.log(logger(store.dispatch));
      return {
        ...store,
        dispatch
      };
    }
  }
}

function compose(...fns){
  return fns.reduce((a,b)=>{
    return (str)=>{
      return b(a(str))
    }
  })
}


const store = applyMiddleware( thunk,promise , logger)(createStore)(rootReducer);

export default store;

/* 
let oldDispatch = store.dispatch;
store.dispatch = function(action){
  if (typeof action === 'function') {
    action(store.dispatch);
  }else{
    if(typeof action.then === 'function'){
      action.then(dispatch);
    }else if(action.amount && typeof action.amount.then === 'function'){
      action.amount.then()
      .catch()
    }else{  
      console.log();
      oldDispatch(action);
    }
  }
} */

// 老的方法
// let dispatch = store.dispatch;
/* 
store.dispatch = function(action){ 
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
  }else if(typeof action.amount.then === 'function'){
    action.amount.then((amount)=> {
      store.dispatch({ ...action, amount })
    })
  }else{
    console.log(action);
    dispatch(action);
  }
}
 */