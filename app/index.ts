import * as Koa from 'koa'
import router from './router'
import { Server } from 'http'
import db from './db'
import AcccessLogMiddleware from './middleware/AcccessLogMiddleware'
import AuthMiddleware from './middleware/AuthMiddleware'
db()
const app = new Koa()

app.use(AcccessLogMiddleware).use(AuthMiddleware).use(router.routes()) // 注册路由
// app.use(AcccessLogMiddleware) // 注册路由
const run = (port: number): Server => {
  const server = app.listen(port)
  console.log(`app start success on localhost:${port}`)

  return server
}

export default run
