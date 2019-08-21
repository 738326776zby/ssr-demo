import React from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import routes from '../Routes'
import { Provider } from 'react-redux'
import { getClientStore } from '../store'
const App = () => (
  <Provider store={getClientStore()}>
    <BrowserRouter>
      <Switch>
        {routes.map((route, key) => {
          return <Route {...route} key={key}/>
        })}
      </Switch>
    </BrowserRouter>
  </Provider>
)
ReactDom.render(<App />, document.getElementById('root'))
