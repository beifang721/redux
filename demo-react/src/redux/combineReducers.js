/*
 * @Author: yqj
 * @Date: 2020-07-16 19:50:17
 * @LastEditTime: 2020-07-16 19:51:02
 * @Description: 合并reducde方法
 */ 



// 合并reducer 返回一个方法，在createStore.js中  reducer方法执行的就是这个返回函数
// reducer目的我们要清楚， 其实就是返回一个新状态
export default function combineReducers(reducers) {
  const reducerKeys = Object.keys(reducers);
  return function(state={}, action){
    const newState = {};
    for (const key of reducerKeys) { //遍历所有的reducerKeys, 拿到所有reducer方法
      // 获取reducer方法
      const reduer = reducers[key]; 
      // 获取老状态
      const previousState = state[key];
      // 调用reducer， 得到最新的状态，并且赋值给 合并后的大状态（newState），key对应的 reducers对象的key
      newState[key] = reduer(previousState , action);
    }
    return newState;
  }
}