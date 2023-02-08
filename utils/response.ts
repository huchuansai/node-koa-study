import { Context } from 'koa'

function success(
  ctx: Context,
  data: any,
  message: string = 'success',
  code: number = 200
) {
  ctx.body = {
    code,
    data,
    message,
  }
}

function error(ctx: Context, message: string = '操作失败', code: number = -1) {
  ctx.body = {
    code,
    message,
    data: '',
  }
}

export { success, error }
