/*
 * @Author: yqj
 * @Date: 2020-07-15 11:27:43
 * @LastEditTime: 2020-07-16 20:09:49
 * @Description: 
 */ 

export default function bindActionCreators(actions, dispatch) {
  if (typeof actions === 'function') {
    return function(){
      dispatch(actions(...arguments))
    }
  }

  const boundActionCreators = {};
  for (const key in actions) {
    const action = actions[key];
    if (actions.hasOwnProperty(key) && typeof action === 'function') {
      boundActionCreators[key] = function(){
        dispatch(action(...arguments))
      }
    }
  }
  return boundActionCreators;  
  //返回的key不变， 函数从原来的action函数，变为dispatch函数

  // 原来的
  // add(amount){
  //   return { type: ADD, amount }
  // }

  // 新的
  // add(amount){
  //   return dispatch(add(amount))
  // }
}