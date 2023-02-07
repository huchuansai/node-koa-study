import * as path from 'path'
import { Sequelize } from 'sequelize-typescript'
import config from '../config'
import { consoleLogger } from '../logger'
import Admin from '../model/Admin'

const sequelize = new Sequelize(
  config.db.database_name,
  config.db.username,
  config.db.password,
  {
    host: config.db.host,
    port: config.db.port as unknown as number,
    dialect: 'mysql',
    logging: (msg) => consoleLogger.info(msg),
    define: {
      timestamps: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at',
      deletedAt: 'deleted_at',
    },
    models: [path.join(__dirname, '../model/**/*.ts')], // or [Player, Team],
  }
)

const db = async () => {
  try {
    await sequelize.authenticate()
    console.log('Connection has been established successfully.')
    await Admin.sync({
      alter: true, //这将检查数据库中表的当前状态(它具有哪些列,它们的数据类型等),然后在表中进行必要的更改以使其与模型匹配.
    })
    console.log('模型Admin同步完毕！')
  } catch (error) {
    console.error('Unable to connect to the database:', error)
  }
}

export default db
