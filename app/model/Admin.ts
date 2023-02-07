import { Column, Model, Table } from 'sequelize-typescript'

@Table
export default class Admin extends Model {
  @Column
  name: string

  constructor() {
    super()
    this.name = ''
  }
}
