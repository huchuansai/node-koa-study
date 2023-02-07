import { Context, Next } from 'koa'
import { consoleLogger } from '../logger'
function AcccessLogMiddleware(ctx: Context, next: Next) {
  const content = `path:${ctx.path} | method:${ctx.method} }`
  consoleLogger.info(content)
  return next()
}
export default AcccessLogMiddleware
