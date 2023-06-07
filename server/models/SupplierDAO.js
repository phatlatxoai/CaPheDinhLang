require('../utils/MongooseUntil');
const Models = require('./Models');

const SupplierDAO = {
    async selectAll() {
        const query = {};
        const users = await Models.Supplier.find(query).exec();
        return users;
    },
    async insert(supplier) {
        const mongoose = require('mongoose');
        supplier._id = new mongoose.Types.ObjectId();
        const result = await Models.Supplier.create(supplier);
        return result;
    },
    async update(supplier) {
        const result = await Models.Supplier.findByIdAndUpdate(supplier._id, supplier, { new: true });
        return result;
    },
    async delete(_id) {
        const result = await Models.Supplier.findByIdAndRemove(_id);
        return result;
    }
};
module.exports = SupplierDAO;