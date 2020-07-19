/*
 * @Author: yqj
 * @Date: 2020-07-14 14:41:25
 * @LastEditTime: 2020-07-18 17:30:26
 * @Description: 
 */ 
import React,{ useState, useEffect, memo } from 'react';
import store from '../store';

import bindActionCreators from '../redux/bindActionCreators';
import actions from '../store/actions/counter';

// import { connect }  from 'react-redux';

import { connect } from '../react-redux'

const boundActions = bindActionCreators(actions, store.dispatch);

// console.log(boundActions);
/**
 * 组件和仓库关联
 * 1.输入 组件可以读取仓库中的状态进行渲染和显示
 * 2.输出 组件可以通过派发动作修改仓库中的状态
 */
const Counter = memo(
  function Counter(props) {
    const { counter } = props;
    console.log('Counter---执行了----', props);
  
    // const [state, setstate] = useState(()=>{
    //   return store.getState().counter;
    // });
  
    // useEffect(() => {
    //   // console.log(props);
    //   const unsubscribe = store.subscribe(()=>{
    //     const data = store.getState().counter;
    //     setstate({ ...state, ...data });
    //   })
    //   return () => {
    //     unsubscribe()
    //   };
    // },[]);
    return (
      <>
        <p>{counter.name}: {counter.value}</p>
        {/* <button onClick={add()}>+</button>
        <button onClick={minus} >-</button> */}
        
        {/* <button onClick={()=>{boundActions.add(2)}}>+</button>
        <button onClick={boundActions.minus} >-</button> */}
        
        {/* <button onClick={()=>{props.add(2)}}>+</button>
        <button onClick={props.minus} >-</button> */}
  
        <button onClick={()=>{props.onIncreaseClick(2)}}>+</button>
        <button onClick={props.onDecreaseClick} >-</button>
      </>
    )
  }
  
)

const mapStateToProps = state =>{
  return {
    counter: state.counter
  }
}

const mapDispatchToProps = dispatch =>{
  return {
    onIncreaseClick: (mount) => dispatch(actions.add(mount)),
    onDecreaseClick: () => dispatch(actions.minus()),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)

// export default Counter