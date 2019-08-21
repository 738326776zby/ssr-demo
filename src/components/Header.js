import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Head extends Component {
  render() {
    return (
      <div>
        <Link to="/">主页</Link>
        <br />
        <Link to="/login">登录页面</Link>
      </div>
    )
  }
}
