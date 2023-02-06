import { Context } from 'koa'
import { myLogger } from '../logger'

class IndexController {
  async index(ctx: Context) {
    myLogger.info('hhhhhhhhhhh')
    ctx.body = [1, 10, 121]
  }
}

export default new IndexController()
