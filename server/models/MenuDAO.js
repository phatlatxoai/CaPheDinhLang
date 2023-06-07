require('../utils/MongooseUntil');
const Models = require('./Models');

const MenuDAO = {
  async selectAll() {
    const query = {};
    const menus = await Models.Menu.find(query).exec();
    return menus;
  },
  async insert(menu) {
    const mongoose = require('mongoose');
    menu._id = new mongoose.Types.ObjectId();
    const result = await Models.Menu.create(menu);
    return result;  
  },
   async update(menu) {
    
    const result = await Models.Menu.findByIdAndUpdate(menu._id, menu, { new: true });
    return result;
   },
   async delete(_id) {
    const result = await Models.Menu.findByIdAndRemove(_id);
    return result;
  }

};
module.exports = MenuDAO;