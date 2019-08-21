import React from 'react'
import Header from './components/Header'
import { renderRoutes } from 'react-router-config'
const App = ({ route }) => (
  <div>
    <Header />
    {renderRoutes(route.routes)}
  </div>
)
export default App
