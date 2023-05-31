require('../utils/MongooseUntil');
const Models = require('./Models');

const AreaDAO = {
    async selectAll() {
      const query = {};
      const area = await Models.Area.find(query).exec();
      return area;
    },
    async insert(area) {
      const mongoose = require('mongoose');
      area._id = new mongoose.Types.ObjectId();
      const result = await Models.Area.create(area);
      return result;
    },
     async update(area) {
        console.log(area)
      const result = await Models.Area.findByIdAndUpdate(area._id, area, { new: true });
      return result;
     },
     async delete(_id) {
      const result = await Models.Area.findByIdAndRemove(_id);
      return result;
    }

  };
  module.exports = AreaDAO;