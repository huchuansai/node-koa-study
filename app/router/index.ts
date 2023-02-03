import koaRouter from 'koa-router'
import IndexController from '../controller/IndexController'
const router = new koaRouter({ prefix: '/admin' }) //定义前缀
router.get('/', IndexController.index)
export default router
