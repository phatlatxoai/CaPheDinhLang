require('../utils/MongooseUntil');
const Models = require('./Models');

const CustomerDAO = {
  async selectAll() {
    const query = {};
    const customers = await Models.Customer.find(query).exec();
    return customers;
  },
  async insert(customer) {
    const mongoose = require('mongoose');
    customer._id = new mongoose.Types.ObjectId();
    const result = await Models.Customer.create(customer);
    return result;
  },
   async update(customer) {
    
    const result = await Models.Customer.findByIdAndUpdate(customer._id, customer, { new: true });
    return result;
   },
   async delete(_id) {
    const result = await Models.Customer.findByIdAndRemove(_id);
    return result;
  }

};
module.exports = CustomerDAO;