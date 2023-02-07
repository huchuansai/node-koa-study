import * as koaRouter from 'koa-router'
import IndexController from '../controller/IndexController'
const router = new koaRouter({ prefix: '/admin' }) //定义前缀
router.get('/user', IndexController.index)
export default router
