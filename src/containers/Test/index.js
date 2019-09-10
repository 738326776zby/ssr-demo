import React, { Component,Fragment } from 'react'
import {Redirect} from 'react-router-dom'
import { connect } from 'react-redux'
const Login = props => (
  <Fragment>{
    props.chongdingxiang?'sdad':<Redirect to="/login"></Redirect>
  }</Fragment>
)
const mapStateToProps = state => {
  let home = state.get('home')

  return {
    chongdingxiang: home.get('chongdingxiang')
  }
}

const mapDispatchToProps = dispatch => ({})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)