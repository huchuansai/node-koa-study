import * as koaRouter from 'koa-router'
import IndexController from '../controller/IndexController'
// const router = new koaRouter({ prefix: '/admin' }) //定义前缀
const router = new koaRouter() //定义前缀
router.get('/user', IndexController.index)
console.log(router)
export default router
