import { Context } from 'koa'

class IndexController {
  async index(ctx: Context) {
    ctx.body = [1, 10, 121]
  }
}

export default new IndexController()
