/*
 * @Author: yqj
 * @Date: 2020-07-20 10:17:34
 * @LastEditTime: 2020-07-20 14:19:00
 * @Description: 
 */ 
import React from 'react';
import { connect } from "react-redux";
import actions from '../store/action';

function ComponentA(props) {

  const changeColor = (val) => {
    if(val === '#fff'){
      props.changeColor('#8B4513')
    }else{
      props.changeColor('#fff')
    }
  }

  return(
    <button style={{width: 150}} onClick={()=>{changeColor(props.color)}}>color: {props.color}</button>
  )
}

const mapStateToProps = state =>{
  return {
    color: state.color
  }
}

export default connect(
  mapStateToProps,
  actions
)(ComponentA);