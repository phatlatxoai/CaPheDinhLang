require('../utils/MongooseUntil');
const Models = require('./Models');

const TableDAO = {
    async selectAll() {
      const query = {};
      const Table = await Models.Table.find(query).exec();
      return Table;
    },
    async insert(Table) {
      const mongoose = require('mongoose');
      Table._id = new mongoose.Types.ObjectId();
      const result = await Models.Table.create(Table);
      return result;
    },
     async update(Table) {
        console.log(Table)
      const result = await Models.Table.findByIdAndUpdate(Table._id, Table, { new: true });
      return result;
     },
     async delete(_id) {
      const result = await Models.Table.findByIdAndRemove(_id);
      return result;
    }

  };
  module.exports = TableDAO;

