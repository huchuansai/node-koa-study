import {
  sign as JwtSign,
  verify as Jwtverify,
  JwtPayload,
  JsonWebTokenError,
} from 'jsonwebtoken'
import config from '../app/config'
import { myLogger } from '../app/logger'
function sign(data: any) {
  // 此处的第一个参数应该是一个对象
  return JwtSign({ data }, config.jwt.JWT_SECRET, {
    expiresIn: config.jwt.expire,
  })
}
function verify(token: string): {
  admin: JwtPayload | string
  error: JsonWebTokenError
} {
  try {
    const decode = Jwtverify(token, config.jwt.JWT_SECRET)
    return {
      admin: decode,
      error: null,
    }
  } catch (err) {
    return {
      admin: null,
      error: err,
    }
  }
}
export { sign, verify }
