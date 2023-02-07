import { Column, Model, Table } from 'sequelize-typescript'

@Table
export default class Admin extends Model {
  @Column //定义为列
  name: string

  @Column //定义为列
  mobile: string

  @Column //定义为列
  email: string
}
