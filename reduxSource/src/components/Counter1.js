/*
 * @Author: yqj
 * @Date: 2020-07-14 14:41:25
 * @LastEditTime: 2020-07-18 17:23:21
 * @Description: 
 */ 
import React,{ useState, useEffect, memo } from 'react';
import store from '../store';

import bindActionCreators from '../redux/bindActionCreators';
import actions from '../store/actions/counter1';
import { connect } from '../react-redux';

const boundActions = bindActionCreators(actions, store.dispatch);

// console.log(boundActions);
/**
 * 组件和仓库关联
 * 1.输入 组件可以读取仓库中的状态进行渲染和显示
 * 2.输出 组件可以通过派发动作修改仓库中的状态
 */

 const Counter1 = memo(
  function Counter1(props) {
    console.log('Counter1---执行了----' ,props);
  
    // const [state, setstate] = useState(()=>{
    //   return props.counter1;
    // });
    // useEffect(() => {
    //   const unsubscribe = store.subscribe(()=>{
    //     const data = store.getState().counter1;
    //     setstate({ ...state, ...data });
    //   })
    //   return () => {
    //     unsubscribe()
    //   };
    // },[]);
    
    return (
      <>
        <p>{props.counter1.name}: {props.counter1.value}</p>
        {/* <button onClick={add()}>+</button>
        <button onClick={minus} >-</button> */}
        
        {/* <button onClick={()=>{boundActions.add1(2)}}>+</button>
        <button onClick={boundActions.minus1} >-</button> */}
  
        <button onClick={()=>{props.add1(10)}}>+</button>
        <button onClick={props.minus1} >-</button>
      </>
    )
  }
 )

const mapStateToProps = state => {
  return {
    counter1: state.counter1
  }
}

export default connect(
  mapStateToProps,
  actions
)(Counter1)