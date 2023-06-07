require('../utils/MongooseUntil');
const Models = require('./Models');

const BillDAO = {
    async selectAll() {
      const query = {};
      const Bill = await Models.Bill.find(query).exec();
      return Bill;
    },
    async insert(Bill) {
      const mongoose = require('mongoose');
      Bill._id = new mongoose.Types.ObjectId();
      const result = await Models.Bill.create(Bill);
      return result;
    },
     async update(Bill) {
        console.log(Bill)
      const result = await Models.Bill.findByIdAndUpdate(Bill._id, Bill, { new: true });
      return result;
     },
     async delete(_id) {
      const result = await Models.Bill.findByIdAndRemove(_id);
      return result;
    }

  };
  module.exports = BillDAO;