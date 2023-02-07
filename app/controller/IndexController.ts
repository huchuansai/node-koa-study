import { Context } from 'koa'
import { myLogger } from '../logger'
import AdminService from '../service/AdminService'

class IndexController {
  async index(ctx: Context) {
    myLogger.info('hhhhhhhh')
    ctx.body = await AdminService.getAdmin()
  }
}

export default new IndexController()
