const express = require('express');
const router = express.Router();
// utils
const JwtUtil = require('../utils/JwtUntil');
// daos
const AdminDAO = require('../models/AdminDAO');

// login
router.post('/login', async function (req, res) {
  const username = req.body.username;
  const password = req.body.password;
  if (username && password) {
    const admin = await AdminDAO.selectByUsernameAndPassword(username,password);
    if (admin) {
      const token = JwtUtil.genToken();
      res.json({ success: true, message: 'Authentication successful', token: token });
    } else {
      res.json({ success: false, message: 'Incorrect username or password' });
    }
  } else {
    res.json({ success: false, message: 'Please input username and password' });
  }
});


router.get('/token', JwtUtil.checkToken, function (req, res) {
  const token = req.headers['x-access-token'] || req.headers['authorization'];
  res.json({ success: true, message: 'Token is valid', token: token });
});

// USERS
// trả toàn bộ users
router.get('/users', JwtUtil.checkToken, async function (req, res) {
  const users = await UserDAO.selectAll();
  res.json(users);
});
//thêm user
router.post('/users', JwtUtil.checkToken, async function (req, res) {
  const name = req.body.name;
  const email = req.body.email;
  const address = req.body.address;
  const phone = req.body.phone;
  const role = req.body.role;
  const username = req.body.username;
  const password = req.body.password;
  const user = {
    name: name,
    email: email,
    address: address,
    phone: phone,
    role: role,
    username: username,
    password: password
  };
  const result = await UserDAO.insert(user);
  res.json(result);
});
//sửa user
router.put('/users/:_id', JwtUtil.checkToken, async function (req, res) {
  const _id = req.params._id;
  const name = req.body.name;
  const email = req.body.email;
  const address = req.body.address;
  const phone = req.body.phone;
  const role = req.body.role;
  const username = req.body.username;
  const password = req.body.password;
  const user = {
    _id: _id,
    name: name,
    email: email,
    address: address,
    phone: phone,
    role: role,
    username: username,
    password: password
  };
  const result = await UserDAO.update(user);
  res.json(result);
});
//xóa user
router.delete('/users/:_id', JwtUtil.checkToken, async function (req, res) {
  const _id = req.params._id;
  const result = await UserDAO.delete(_id);
  res.json(result);
});

module.exports = router;