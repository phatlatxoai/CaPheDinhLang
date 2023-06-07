const express = require('express');
const router = express.Router();
// utils
const JwtUtil = require('../utils/JwtUntil');
// daos
const AdminDAO = require('../models/AdminDAO');
const UserDAO = require('../models/UserDAO');
const SupplierDAO = require('../models/SupplierDAO');
const CategoryDAO = require('../models/CategoryDAO');
const AreaDAO = require('../models/AreaDAO');
const StoreDAO = require('../models/StoreDAO');
const StoreReceiptDAO = require('../models/StoreReceiptDAO');
const TableDAO = require('../models/TableDAO');
const CustomerDAO = require('../models/CustomerDAO');
const ProductDAO = require('../models/ProductDAO');
const MenuDAO = require('../models/MenuDAO');
const BillDAO = require('../models/BillDAO');
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
//CATEGORY
// trả toàn bộ category
router.get('/category', JwtUtil.checkToken, async function (req, res) {
  const category = await CategoryDAO.selectAll();
  res.json(category);
});
//thêm category
router.post('/category', JwtUtil.checkToken, async function (req, res) {
  const CateName = req.body.CateName;
  const category = {
    CateName
  };
  const result = await CategoryDAO.insert(category);
  res.json(result);
});
//sửa category
router.put('/category', JwtUtil.checkToken, async function (req, res) {
  const _id = req.body._id;
  const CateName = req.body.CateName;
  const category = {
    _id: _id,
    CateName
  };
  const result = await CategoryDAO.update(category);
  res.json(result);
});
//xóa category
router.delete('/category/:_id', JwtUtil.checkToken, async function (req, res) {
  const _id = req.params._id;
  const result = await CategoryDAO.delete(_id);
  res.json(result);
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
    Name: name,
    Email: email,
    Address: address,
    Phone: phone,
    Role: role,
    Username: username,
    Password: password
  };
  console.log(user)
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
    Name: name,
    Email: email,
    Address: address,
    Phone: phone,
    Role: role,
    Username: username,
    Password: password
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

//SUPPLIERS
// trả toàn bộ suppliers
router.get('/suppliers', JwtUtil.checkToken, async function (req, res) {
  const suppliers = await SupplierDAO.selectAll();
  res.json(suppliers);
});
//thêm supplier
router.post('/suppliers', JwtUtil.checkToken, async function (req, res) {
  const NameSupplier = req.body.NameSupplier;
  const email = req.body.email;
  const phone = req.body.phone;
  const address = req.body.address;
  const note = req.body.note;
  const debit = req.body.debit;
  const avatar = req.body.avatar;
  const supplier = {
    Namesupplier: NameSupplier,
    Email: email,
    Phone: phone,
    Address: address,
    Note: note,
    Debit: debit,
    Avatar: avatar
  };
  const result = await SupplierDAO.insert(supplier);
  res.json(result);
});
//sửa supplier
router.put('/suppliers/:_id', JwtUtil.checkToken, async function (req, res) {
  const _id = req.params._id;
  const NameSupplier = req.body.NameSupplier;
  const email = req.body.email;
  const phone = req.body.phone;
  const address = req.body.address;
  const note = req.body.note;
  const debit = req.body.debit;
  const avatar = req.body.avatar;
  const supplier = {
    _id: _id,
    Namesupplier: NameSupplier,
    Email: email,
    Phone: phone,
    Address: address,
    Note: note,
    Debit: debit,
    Avatar: avatar
  };
  const result = await SupplierDAO.update(supplier);
  res.json(result);
});
//xóa supplier
router.delete('/suppliers/:_id', JwtUtil.checkToken, async function (req, res) {
  const _id = req.params._id;
  const result = await SupplierDAO.delete(_id);
  res.json(result);
});


// Area .
// trả toàn bộ
router.get('/areas', JwtUtil.checkToken, async function (req, res) {
  try {
    const area = await AreaDAO.selectAll();
    if(area){
      res.json({success:true,data:area});

    }else{
      res.json({success:true,message:"Không có dữ liệu"});

    }
  } catch (error) {
    res.json(error);
  }
});
//thêm supplier
router.post('/areas', JwtUtil.checkToken, async function (req, res) {
  try {
    const BranchName = req.body.BranchName;
    console.log(BranchName)
    if(BranchName){
      const Area = {
        BranchName: BranchName,
      };
      const result = await AreaDAO.insert(Area);
      res.json(
        {success:true,
        message:"Thêm Thành công",result
        }
        );

    }else{
      res.json(
        {success:false,
        message:"Vui lòng nhập đủ các trường"
        }
        );
    }
  } catch (error) {
    res.json(error);

  }

});
//sửa supplier
router.put('/areas/:_id', JwtUtil.checkToken, async function (req, res) {
  try {
    const _id = req.params._id;
  const BranchName = req.body.BranchName;
  if(_id && BranchName){
    const area = {
      _id,
      BranchName
    };
    const result = await AreaDAO.update(area);
    res.json(
      {success:true,
      message:"Sửa thành công",result
      }
      );
  }else{
    res.json({success:false,message:"Vui lòng nhập đủ các trường"});
      }
  } catch (error) {
    res.json({success:false,error});
  }

});
//xóa supplier
router.delete('/areas/:_id', JwtUtil.checkToken, async function (req, res) {
  try {
    const _id = req.params._id;
  if(_id){
    const area = {
      _id

    };
    const result = await AreaDAO.update(area);
    res.json(
      {success:true,
      message:"Xoá thành công",result
      }
      );
  }else{
    res.json({success:false,message:"_id không hợp lệ"});
      }
  } catch (error) {
    res.json({success:false,error});
  }
});


//Store
//Trả toàn bộ store
router.get('/stores', JwtUtil.checkToken, async function (req, res) {
  try {
    const store = await StoreDAO.selectAll();
    if(store){
      res.json({success:true,data:store});

    }else{
      res.json({success:true,message:"Không có dữ liệu"});

// Area .
// trả toàn bộ
router.get('/tables', JwtUtil.checkToken, async function (req, res) {
  try {
    const table = await TableDAO.selectAll();
    if(table){
      res.json({success:true,data:table});

    }else{
      res.json({success:true,message:"Không có dữ liệu"});


    }
  } catch (error) {
    res.json(error);

  }

});
//Thêm store
router.post('/stores', JwtUtil.checkToken, async function (req, res) {
  const NameStore = req.body.NameStore;
  const store = {
    StoreName: NameStore
  };
  console.log(store)
  const result = await StoreDAO.insert(store);
  res.json(result);
});
//Sửa store
router.put('/stores/:_id', JwtUtil.checkToken, async function (req, res) {
  const _id = req.params._id;
  const NameStore = req.body.NameStore;
  const store = {
    _id: _id,
    StoreName: NameStore,
  };
  const result = await StoreDAO.update(store);
  res.json(result);
});
//Xoá Store
router.delete('/stores/:_id', JwtUtil.checkToken, async function (req, res) {
  const _id = req.params._id;
  const result = await StoreDAO.delete(_id);
  res.json(result);
});

//StoreReceipt
//Trả toàn bộ StoreReceipt
router.get('/storereceipts', JwtUtil.checkToken, async function (req, res) {
  try {
    const storereceipts = await StoreReceiptDAO.selectAll();
    if(storereceipts){
      res.json({success:true,data:storereceipts});

    }else{
      res.json({success:true,message:"Không có dữ liệu"});
    }
  } catch (error) {
    res.json(error);
  }
});
//Thêm StoreReceipt
router.post('/storereceipts', JwtUtil.checkToken, async function (req, res) {
  const Paymentmethod = req.body.Paymentmethod;
  const Note = req.body.Note;
  const Image = req.body.Image;
  const Totalprice = req.body.Totalprice;
  const storereceipt = {
    Paymentmethod: Paymentmethod,
    Note: Note,
    Image: Image,
    Totalprice: Totalprice
  };
  console.log(storereceipt)
  const result = await StoreReceiptDAO.insert(storereceipt);
  res.json(result);
});
//Sửa StoreReceipt
router.put('/storereceipts/:_id', JwtUtil.checkToken, async function (req, res) {
  const _id = req.params._id;
  const Paymentmethod = req.body.Paymentmethod;
  const Note = req.body.Note;
  const Image = req.body.Image;
  const Totalprice = req.body.Totalprice;
  const storereceipt = {
    _id: _id,
    Paymentmethod: Paymentmethod,
    Note: Note,
    Image: Image,
    Totalprice: Totalprice
  };
  const result = await StoreReceiptDAO.update(storereceipt);
  res.json(result);
});
//Xoá StoreReceipt
router.delete('/storereceipts/:_id', JwtUtil.checkToken, async function (req, res) {
  const _id = req.params._id;
  const result = await StoreReceiptDAO.delete(_id);
  res.json(result);
});

//Table
//Trả toàn bộ Table
router.get('/tables', JwtUtil.checkToken, async function (req, res) {
  try {
    const table = await TableDAO.selectAll();
    if(table){
      res.json({success:true,data:table});

    }else{
      res.json({success:true,message:"Không có dữ liệu"});
    }
  } catch (error) {
    res.json(error);
  }
});
//Thêm Table
router.post('/tables', JwtUtil.checkToken, async function (req, res) {
  const TableName = req.body.TableName;
  const Status = req.body.Status;
  const table = {
    TableName: TableName,
    Status: Status
  };
  console.log(table)
  const result = await TableDAO.insert(table);
  res.json(result);
});
//Sửa Table
router.put('/tables/:_id', JwtUtil.checkToken, async function (req, res) {
  const _id = req.params._id;
  const TableName = req.body.TableName;
  const Status = req.body.Status;
  const table = {
    _id: _id,
    TableName: TableName,
    Status: Status
  };
  const result = await TableDAO.update(table);
  res.json(result);
});
//Xoá Table
router.delete('/tables/:_id', JwtUtil.checkToken, async function (req, res) {
  const _id = req.params._id;
  const result = await TableDAO.delete(_id);
  res.json(result);
});

//CUSTOMER
// trả toàn bộ customer
router.get('/customers', JwtUtil.checkToken, async function (req, res) {
  const customers = await CustomerDAO.selectAll();
  res.json(customers);
});
//thêm customer
router.post('/customers', JwtUtil.checkToken, async function (req, res) {
  const CustomerName = req.body.CustomerName;
  const PhoneNumber = req.body.PhoneNumber;
  const Email = req.body.Email;
  const Address = req.body.Address;
  const Note = req.body.Note;
  const Birthday = req.body.Birthday;
  const Gender = req.body.Gender;
  const customer = {
    CustomerName: CustomerName,
    PhoneNumber: PhoneNumber,
    Email: Email,
    Address: Address,
    Note: Note,
    Birthday: Birthday,
    Gender: Gender
  };
  const result = await CustomerDAO.insert(customer);
  res.json(result);
});
//sửa customer
router.put('/customers/:_id', JwtUtil.checkToken, async function (req, res) {
  const _id = req.params._id;
  const CustomerName = req.body.CustomerName;
  const PhoneNumber = req.body.PhoneNumber;
  const Email = req.body.Email;
  const Address = req.body.Address;
  const Note = req.body.Note;
  const Birthday = req.body.Birthday;
  const Gender = req.body.Gender;
  const customer = {
    _id: _id,
    CustomerName: CustomerName,
    PhoneNumber: PhoneNumber,
    Email: Email,
    Address: Address,
    Note: Note,
    Birthday: Birthday,
    Gender: Gender
  };
  const result = await CustomerDAO.update(customer);
  res.json(result);
});
//xóa customer
router.delete('/customers/:_id', JwtUtil.checkToken, async function (req, res) {
  const _id = req.params._id;
  const result = await CustomerDAO.delete(_id);
  res.json(result);
});

//PRODUCT
// trả toàn bộ product
router.get('/products', JwtUtil.checkToken, async function (req, res) {
  const products = await ProductDAO.selectAll();
  res.json(products);
});
//thêm product
router.post('/products', JwtUtil.checkToken, async function (req, res) {
  const NameProduct = req.body.NameProduct;
  const Quantity = req.body.Quantity;
  const Unit = req.body.Unit;
  const Images = req.body.Images;
  const CostPrice = req.body.CostPrice;
  const SallingPrice = req.body.SallingPrice;
  const product = {
    NameProduct: NameProduct,
    Quantity: Quantity,
    Unit: Unit,
    Images: Images,
    CostPrice: CostPrice,
    SallingPrice: SallingPrice,
  };
  const result = await ProductDAO.insert(product);
  res.json(result);
});
//sửa product
router.put('/products/:_id', JwtUtil.checkToken, async function (req, res) {
  const _id = req.params._id;
  const NameProduct = req.body.NameProduct;
  const Quantity = req.body.Quantity;
  const Unit = req.body.Unit;
  const Images = req.body.Images;
  const CostPrice = req.body.CostPrice;
  const SallingPrice = req.body.SallingPrice;
  const product = {
    _id: _id,
    NameProduct: NameProduct,
    Quantity: Quantity,
    Unit: Unit,
    Images: Images,
    CostPrice: CostPrice,
    SallingPrice: SallingPrice,
  };
  const result = await ProductDAO.update(product);
  res.json(result);
});
//xóa product
router.delete('/products/:_id', JwtUtil.checkToken, async function (req, res) {
  const _id = req.params._id;
  const result = await ProductDAO.delete(_id);
  res.json(result);
});

//MENU
// trả toàn bộ menu
router.get('/menus', JwtUtil.checkToken, async function (req, res) {
  const menus = await MenuDAO.selectAll();
  res.json(menus);
});
//thêm menu
router.post('/menus', JwtUtil.checkToken, async function (req, res) {
  const NameMenu = req.body.NameMenu;
  const Price = req.body.Price;
  const Images = req.body.Images;
  const Unit = req.body.Unit;
  const menu = {
    NameMenu: NameMenu,
    Price: Price,
    Unit: Unit,
    Images: Images,
  };
  const result = await MenuDAO.insert(menu);
  res.json(result);
});
//sửa menu
router.put('/menus/:_id', JwtUtil.checkToken, async function (req, res) {
  const _id = req.params._id;
  const NameMenu = req.body.NameMenu;
  const Price = req.body.Price;
  const Images = req.body.Images;
  const Unit = req.body.Unit;
  const menu = {
    _id: _id,
    NameMenu: NameMenu,
    Price: Price,
    Unit: Unit,
    Images: Images,
  };
  const result = await MenuDAO.update(menu);
  res.json(result);
});
//xóa menu
router.delete('/menus/:_id', JwtUtil.checkToken, async function (req, res) {
  const _id = req.params._id;
  const result = await MenuDAO.delete(_id);
  res.json(result);
});
=======

});


//thêm table
router.post('/tables', JwtUtil.checkToken, async function (req, res) {
  try {
    const TableName = req.body.TableName;
    const Status = req.body.Status;
    const Area = req.body.Area;
    console.log(TableName,Status,Area)
    if(TableName&&Area){
      const Table = {
        TableName,
        Status,
        Area
      };
      console.log(TableName,Status,Area)

      const result = await TableDAO.insert(Table);
      res.json(
        {success:true,
        message:"Thêm Thành công",result
        }
        );

    }else{
      res.json(
        {success:false,
        message:"Vui lòng nhập đủ các trường"
        }
        );
    }
  } catch (error) {
    res.json(error);

  }

});

//sửa supplier
router.put('/tables/:_id', JwtUtil.checkToken, async function (req, res) {
  try {
    const _id = req.params._id;
    const TableName = req.body.TableName;
    const Status = req.body.Status;
    const Area = req.body.Area;
  if(_id && TableName&&Status&&Area){
    const table = {
      _id,
      TableName,
      Status,
      Area
    };
    const result = await TableDAO.update(table);
    res.json(
      {success:true,
      message:"Sửa thành công",result
      }
      );
  }else{
    res.json({success:false,message:"Vui lòng nhập đủ các trường"});
      }
  } catch (error) {
    res.json({success:false,error});
  }

});


//xóa table
router.delete('/tables/:_id', JwtUtil.checkToken, async function (req, res) {
  try {
    const _id = req.params._id;
  if(_id){
    const area = {
      _id

    };
    const result = await TableDAO.update(area);
    res.json(
      {success:true,
      message:"Xoá thành công",result
      }
      );
  }else{
    res.json({success:false,message:"_id không hợp lệ"});
      }
  } catch (error) {
    res.json({success:false,error});
  }
});


router.get('/bills', JwtUtil.checkToken, async function (req, res) {
  try {
    const bills = await BillDAO.selectAll();
    if(bills){
      res.json({success:true,data:bills});

    }else{
      res.json({success:true,message:"Không có dữ liệu"});

    }
  } catch (error) {
    res.json(error);

  }

});


//thêm Bill
router.post('/bills', JwtUtil.checkToken, async function (req, res) {
  try {
    const BranchName = req.body.BranchName;
    const Sale = req.body.Sale;
    const Totalprice = req.body.Totalprice;
    const Status = req.body.Status;
    const Note = req.body.Note;
    const Table = req.body.Table;
    const Billdetail = req.body.Billdetail;
    const User = req.body.User;
    console.log({
      BranchName,
      Sale,
      Status,
      Totalprice,
      Note,
      Table,
      Billdetail,
      User
   })


    if(BranchName){
      const Bill = {
        BranchName,
        Sale,
        Totalprice,
        Note,
        Table,
        Billdetail,
        User
      };
      console.log(Bill,"2")

      const result = await BillDAO.insert(Bill);
      res.json(
        {success:true,
        message:"Thêm Thành công",result
        }
        );

    }else{
      res.json(
        {success:false,
        message:"Vui lòng nhập đủ các trường"
        }
        );
    }
  } catch (error) {
    res.json(error);

  }

 });


module.exports = router;