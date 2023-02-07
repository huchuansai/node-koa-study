import { Context, Next } from 'koa'
import { myLogger } from '../logger'
function AcccessLogMiddleware(ctx: Context, next: Next) {
  const content = `path:${ctx.path} | method:${ctx.method} }`
  myLogger.info(content)
  return next
}
export default AcccessLogMiddleware
