import { Context, Next } from 'koa'
import { myLogger } from '../logger'
function AcccessLogMiddleware(ctx: Context, next: Next) {
  const content = `path:${ctx.path} | method:${ctx.method} |ua:${ctx.header['user-agent']}`
  myLogger.info(content)
  return next
}
export default AcccessLogMiddleware
