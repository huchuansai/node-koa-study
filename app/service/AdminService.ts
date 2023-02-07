import Admin from '../model/Admin'

class AdminService {
  async saveAdmin() {
    let data = new Admin()
    data.name = new Date().getSeconds + ''
    await Admin.create()
  }
  async getAdmin() {
    return Admin.findOne()
  }
}

export default new AdminService()
