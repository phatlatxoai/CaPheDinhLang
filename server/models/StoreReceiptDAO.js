require('../utils/MongooseUntil');
const Models = require('./Models');

const StoreReceiptDAO = {
    async selectAll() {
      const query = {};
      const storereceipts  = await Models.Storereceipt.find(query).exec();
      return storereceipts;
    },
    async insert(storereceipt) {
        const mongoose = require('mongoose');
        storereceipt._id = new mongoose.Types.ObjectId();
        console.log(storereceipt)
        const result = await Models.Storereceipt.create(storereceipt);
        console.log(result)
        return result;
    },
    async update(storereceipt) {
        
        const result = await Models.Storereceipt.findByIdAndUpdate(storereceipt._id, storereceipt, { new: true });
        return result;
    },
    async delete(_id) {
        const result = await Models.Storereceipt.findByIdAndRemove(_id);
        return result;
    }
  };
  module.exports = StoreReceiptDAO;