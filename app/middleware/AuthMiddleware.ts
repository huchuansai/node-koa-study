import { Context, Next } from 'koa'
import { verify } from '../../utils/auth'
import { consoleLogger } from '../logger'

function AuthMiddleware(ctx: Context, next: Next) {
  const token = ctx.header['authorization']
  if (token) {
    consoleLogger.info('开始校验')
    //进行校验
    const { error } = verify(token as string)
    {
      if (error) {
        ctx.body = {
          message: error.message,
          code: 401,
        }
        return
      } else {
        return next()
      }
    }
  }
  return next()
}
export default AuthMiddleware
