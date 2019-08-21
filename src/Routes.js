import React, { Fragment } from 'react'
import Home from './containers/Home'
import Login from './containers/Login'

let routes = [
  {
    path: '/',
    component: Home,
    loadData:Home.loadData,
    exact: true
  },
  {
    path: '/login',
    component: Login,
    exact: true
  }
]
export default routes
