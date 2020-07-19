/*
 * @Author: yqj
 * @Date: 2020-07-18 15:03:15
 * @LastEditTime: 2020-07-18 17:30:13
 * @Description: 关联组件和store
 */
import React, { useContext, useState, useEffect, useMemo } from 'react';
import ReactReduxContext from './context';
import bindActionCreators from '../redux/bindActionCreators'

export default function (mapStateToProps, mapDispatchToProps) {

  return function (WrappedComponent) { //高阶函数为了方便扩展
    return function (props) {

      const { dispatch, getState, subscribe } = useContext(ReactReduxContext);
      const [state, setstate] = useState(mapStateToProps(getState()));
      // useMemo()
      const boundActionCreator = useMemo(()=>{
        return mapDispatchToPropsIsType(mapDispatchToProps , dispatch);
      },[]);

      useEffect(() => {
        const unsubscribe = subscribe(()=>{
          setstate(mapStateToProps(getState()));
        })
        return ()=>{
          unsubscribe();
        }
      }, []);

      return (
        <WrappedComponent {...state} {...boundActionCreator} />
      )
    }
  }

}

function mapDispatchToPropsIsType(mapDispatchToProps, dispatch) {
  if(typeof mapDispatchToProps === 'function'){
    return mapDispatchToProps(dispatch);
  }

  if(typeof mapDispatchToProps === 'object') {
    return bindActionCreators(mapDispatchToProps , dispatch);
  }
}