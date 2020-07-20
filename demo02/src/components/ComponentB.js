/*
 * @Author: yqj
 * @Date: 2020-07-20 10:17:48
 * @LastEditTime: 2020-07-20 14:13:24
 * @Description: 
 */ 
import React from 'react';
import { connect } from "react-redux";

function ComponentB(props) {

  return(
    <div style={{width:200, height: 100, border: '1px solid #000', background: props.color}}>
       
    </div>
  )
}
const mapStateToProps = state => {
  return {
    color: state.color
  }
}

export default connect(
  mapStateToProps
)(ComponentB)