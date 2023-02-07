import * as path from 'path'
import { Sequelize } from 'sequelize-typescript'
import config from '../config'
const sequelize = new Sequelize({
  host: config.db.host,
  database: config.db.database_name,
  dialect: 'mysql',
  port: config.db.port as unknown as number,
  username: config.db.username,
  password: config.db.password,
  define: {
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    deletedAt: 'deleted_at',
  },
  models: [path.join(__dirname, '..', 'model/**/*.ts')], // or [Player, Team],
})

const db = async () => {
  sequelize
    .authenticate()
    .then(() => {
      console.log('Connection has ok')
    })
    .catch((err) => {
      console.log(err)
      throw err
    })
}

export default db
