import { renderToString } from 'react-dom/server'
import React from 'react'
import { StaticRouter, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import { renderRoutes } from 'react-router-config'
export const render = (store, req, routes) => {
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.path} context={{}}>
        <Switch>
          {renderRoutes(routes)}
        </Switch>
      </StaticRouter>
    </Provider>
  )
  return `<html>
      <head>
      <title>ssh</title>
      </head>
      <body>
        <div id="root">
          ${content}
        </div>
        <script>
          window.context ={
            state:${JSON.stringify(store.getState())}
          } 
        </script>
        <script src="/index.js"></script>
      </body>
    </html>`
}
