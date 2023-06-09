//CLI: npm install mongoose --save
const mongoose = require('mongoose');
// schemas Admin



// schemas Area
const AreasSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  BranchName: String,
}, {
  timestamps: true
}, { versionKey: false });

const tablesSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  TableName: String,
  Status: String,
  Area: AreasSchema
}, {
  timestamps: true
}, { versionKey: false });

const CategoriesSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  CateName: String,
}, {
  timestamps: true
}, { versionKey: false });

const CustomersSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  CustomerName: String,
  PhoneNumber: String,
  Email: String,
  Address: String,
  Note: String,
  Birthday: Date,
  Gender: String,
}, {
  timestamps: true
}, { versionKey: false });

const MenusSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  NameMenu: String,
  Price: Number,
  Images: String,
  Unit: String,
  Size: String,
  Categories: CategoriesSchema,
}, {
  timestamps: true
}, { versionKey: false });

const BilldetailSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  Name: String,
  Size:String,
  Quantity: Number,
  Price: Number,
}, {
  timestamps: true
}, { versionKey: false });

const SuppliersSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  Namesupplier: String,
  Email: String,
  Phone: String,
  Address: String,
  Note: String,
  Debit: Number,
  Avatar: String
}, {
  timestamps: true
}, { versionKey: false });

const ProductsSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  NameProduct: String,
  Quantity: Number,
  Unit: String,
  Images: String,
  CostPrice: Number,
  SallingPrice: Number,
  Supplier: SuppliersSchema
}, {
  timestamps: true
}, { versionKey: false });

const StorereceiptsSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  Paymentmethod: Number,
  Note: String,
  Image: String,
  Totalprice: Number
}, {
  timestamps: true
}, { versionKey: false });

const StoresSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  StoreName: String
}, {
  timestamps: true
}, { versionKey: false });

const UsersSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  Name: String,
  Email: String,
  Address: String,
  Phone: String,
  Role: String,
  Username: String,
  Password: String,
}, {
  timestamps: true
}, { versionKey: false });

const BillsSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  BranchName: String,
  Sale: String,
  Status: String,
  Totalprice: String,
  Note: String,
  Table: tablesSchema,
  Billdetail: [BilldetailSchema],
  User: UsersSchema



}, {
  timestamps: true
}, { versionKey: false });

//model
const Area = mongoose.model('Area', AreasSchema);
const Bill = mongoose.model('Bill', BillsSchema);
const Billdetail = mongoose.model('Billdetail', BilldetailSchema);
const Category = mongoose.model('Category', CategoriesSchema);
const Customer = mongoose.model('Customer', CustomersSchema);
const Menu = mongoose.model('Menu', MenusSchema);
const Product = mongoose.model('Product', ProductsSchema);
const Storereceipt = mongoose.model('Storereceipt', StorereceiptsSchema);
const Store = mongoose.model('Store', StoresSchema);
const Supplier = mongoose.model('Supplier', SuppliersSchema);
const Table = mongoose.model('Table', tablesSchema);
const User = mongoose.model('User', UsersSchema);
module.exports = {  Area, Bill, Billdetail, Category, Customer, Menu, Product, Storereceipt, Store, Supplier, Table, User };