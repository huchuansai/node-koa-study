import Koa from 'koa'
import router from './router'
import { Server } from 'http'

const app = new Koa()

app.use(router.routes()) // 注册路由

const run = (port: number): Server => {
  const server = app.listen(port)
  console.log('app start success on localhost:' + port)

  return server
}

export default run
