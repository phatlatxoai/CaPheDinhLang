require('../utils/MongooseUntil');
const Models = require('./Models');

const StoreDAO = {
    async selectAll() {
      const query = {};
      const stores  = await Models.Store.find(query).exec();
      return stores;
    },
    async insert(store) {
        const mongoose = require('mongoose');
        store._id = new mongoose.Types.ObjectId();
        console.log(store)
        const result = await Models.Store.create(store);
        console.log(result)
        return result;
    },
    async update(store) {
        const newvalues = { StoreName: store.StoreName }
        const result = await Models.Store.findByIdAndUpdate(store._id, newvalues, { new: true });
        return result;
    },
    async delete(_id) {
        const result = await Models.Store.findByIdAndRemove(_id);
        return result;
    }
  };
  module.exports = StoreDAO;