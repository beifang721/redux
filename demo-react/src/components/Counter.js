import React,{ useState, useEffect } from 'react';
import store from '../store';
import { ADD, MINUS } from '../store/actionType';


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
      <button onClick={()=>store.dispatch({type: MINUS})}>-</button>
      <button onClick={()=>store.dispatch({type: ADD})} >+</button>
    </>
  )
}