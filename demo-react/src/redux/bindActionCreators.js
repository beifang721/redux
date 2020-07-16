/*
 * @Author: yqj
 * @Date: 2020-07-15 11:27:43
 * @LastEditTime: 2020-07-16 14:36:49
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
}