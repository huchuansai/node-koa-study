import Admin from '../model/Admin'

class AdminService {
  async saveAdmin() {
    let data = new Admin()
    data.name = new Date().getSeconds + ''
    await Admin.create()
  }
  async getAdminById(id) {
    return Admin.findByPk(id)
  }
}

export default new AdminService()
