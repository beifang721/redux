/*
 * @Author: yqj
 * @Date: 2020-07-14 14:41:25
 * @LastEditTime: 2020-07-16 14:47:52
 * @Description: 
 */ 
import React,{ useState, useEffect } from 'react';
import store from '../store';

import bindActionCreators from '../redux/bindActionCreators';
import actions from '../store/actions/counter';


const boundActions = bindActionCreators(actions, store.dispatch);

console.log(boundActions);
/**
 * 组件和仓库关联
 * 1.输入 组件可以读取仓库中的状态进行渲染和显示
 * 2.输出 组件可以通过派发动作修改仓库中的状态
 */
export default function Counter() {
  const [state, setstate] = useState(()=>{
    return store.getState();
  });


  useEffect(() => {
    const unsubscribe = store.subscribe(()=>{
      const data = store.getState();
      setstate({ ...state, ...data });
    })
    return () => {
      unsubscribe()
    };
  },[]);
  return (
    <>
      <p>{state.name}: {state.value}</p>
      {/* <button onClick={add()}>+</button>
      <button onClick={minus} >-</button> */}
      
      <button onClick={()=>{boundActions.add(2)}}>+</button>
      <button onClick={boundActions.minus} >-</button>
    </>
  )
}