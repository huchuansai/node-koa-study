import * as koaRouter from 'koa-router'
import IndexController from '../controller/IndexController'
import LoginController from '../controller/LoginController'
const router = new koaRouter({ prefix: '/admin' }) //定义前缀
router.get('/user', IndexController.index)
router.get('/login', LoginController.index)
export default router
