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
  const promises = []
  const matchedRoutes = matchRoutes(routes, req.path)
  // 获取路由项对应的组件
  matchedRoutes.forEach(item => {
    if(item.route.loadData){
      const promise = new Promise((resolve,reject)=>{
        item.route.loadData(store).then(resolve).catch(resolve)
      })
      promises.push(promise)
    }
  })

  Promise.all(promises)
    .then(res2 => {
      const context = {
        css:[]
      }
      const html = render(store, req, routes, context)
      
      if (context.action === 'REPLACE') {
        res.redirect(301, context.url)
      } else if (context.NOT_FOUND) {
        res.status(404)
        res.send(html)
      } else {
        res.send(html)
      }
    })
})

app.listen(3000)
