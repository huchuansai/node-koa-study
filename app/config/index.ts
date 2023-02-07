import * as Dotenv from 'dotenv'
Dotenv.config()
const config = {
  server: { port: process.env.SERVER_PORT },
  db: {
    host: process.env.DB_HOST,
    database_name: process.env.DB_DATABASE,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
  },
  log: {
    appenders: {
      info: { type: 'file', filename: 'logs/info.log' }, // 配置日志文件显示
      consoleLogger: { type: 'console' }, // 配置控制台显示
    },
    categories: {
      default: { appenders: ['info', 'consoleLogger'], level: 'info' },
    },
  },
  jwt: {
    JWT_SECRET: process.env.JWT_SECRET_KEY,
    expire: process.env.JWT_EXPIRE,
  },
}
export default config
