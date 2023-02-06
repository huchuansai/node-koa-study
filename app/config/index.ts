import Dotenv from 'dotenv'
console.log(Dotenv)

// Dotenv.config({ path: __dirname + './env' })
const config = {
  server: { port: process.env.SERVER_PORT },
  // db: {
  //   db_host: process.env.DB_HOST,
  //   db_user: process.env.DB_USER,
  //   db_name: process.env.DB_NAME,
  //   db_port: process.env.DB_PORT,
  // },
  log: {
    appenders: {
      info: { type: 'file', filename: 'logs/info.log' }, // 配置日志文件显示
      consoleLogger: { type: 'console' }, // 配置控制台显示
    },
    categories: {
      default: { appenders: ['info', 'consoleLogger'], level: 'info' },
    },
  },
}
export default config
