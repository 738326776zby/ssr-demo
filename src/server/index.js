import express from 'express'
import { render } from './utils'
import { matchRoutes } from 'react-router-config'
import { getStore } from '../store'
import routes from '../Routes'
import proxy from 'express-http-proxy'
const app = express()

app.use(
  '/api',
  proxy('http://posting-api.jiedaibao.com', {
    proxyReqPathResolver: function(req) {
      console.log(req.url)
      return new Promise(function(resolve, reject) {
        setTimeout(function() {
          resolve(req.url)
        }, 200)
      })
    }
  })
)
app.use(express.static('public'))
app.get('*', (req, res) => {
  const store = getStore()
  const promise = []
  const matchedRoutes = matchRoutes(routes, req.path)
  matchedRoutes.forEach(item => {
    item.route.loadData && promise.push(item.route.loadData(store))
  })

  Promise.all(promise).then(res2 => {
    res.send(render(store, req, routes))
  })
})

app.listen(3000)
