require('../utils/MongooseUntil');
const Models = require('./Models');

const UserDAO = {
    async selectAll() {
        const query = {};
        const users = await Models.User.find(query).exec();
        return users;
    },
    async insert(user) {
        const mongoose = require('mongoose');
        user._id = new mongoose.Types.ObjectId();
        const result = await Models.User.create(user);
        return result;
    },
    async update(user) {
        const newvalues = { 
            Name: user.name,
            Email: user.Email,
            Address: user.Address,
            Phone: user.Phone,
            Role: user.Role,
            username: user.username,
            password: user.password
        }
        const result = await Models.User.findByIdAndUpdate(user._id, newvalues, { new: true });
        return result;
    },
    async delete(_id) {
        const result = await Models.User.findByIdAndRemove(_id);
        return result;
    }
};
module.exports = UserDAO;