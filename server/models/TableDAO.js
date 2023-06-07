require('../utils/MongooseUntil');
const Models = require('./Models');

const TableDAO = {
    async selectAll() {
        const query = {};
        const tables = await Models.Table.find(query).exec();
        return tables;
    },
    async insert(table) {
        const mongoose = require('mongoose');
        table._id = new mongoose.Types.ObjectId();
        console.log(table)
        const result = await Models.Table.create(table);
        console.log(result)

        return result;
    },
    async update(table) {
        
        const result = await Models.Table.findByIdAndUpdate(table._id, table, { new: true });
        return result;
    },
    async delete(_id) {
        const result = await Models.Table.findByIdAndRemove(_id);
        return result;
    }
};
module.exports = TableDAO;