import { Context } from 'koa'
import { myLogger } from '../logger'
import AdminService from '../service/AdminService'

class IndexController {
  async index(ctx: Context) {
    const data = await AdminService.getAdmin()
    ctx.body = data
  }

  async save(ctx: Context) {
    myLogger.info('save..........')
    await AdminService.saveAdmin()
    ctx.body = '成功'
  }
}

export default new IndexController()
