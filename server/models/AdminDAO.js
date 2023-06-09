require('../utils/MongooseUntil');
const Models = require('./Models');

const AdminDAO = {
  async selectByUsernameAndPassword(username, password) {
    const query = { username: username, password: password };
    const admin = await Models.User.findOne(query);
    return admin;
  }
};
module.exports = AdminDAO;