import { Context } from 'koa'
import { sign } from '../../utils/auth'
import { error, success } from '../../utils/response'
import AdminService from '../service/AdminService'

class LoginController {
  async index(ctx: Context) {
    const admin = await AdminService.getAdminById(2)
    if(!admin){
     return error(ctx,'未查询到该用户')
    }
    const token = sign(admin.name)
    ctx.body = {
      token,
    }
    success(ctx, { token })
  }
}
export default new LoginController()
