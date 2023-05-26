//CLI: npm install mongoose --save
const mongoose = require('mongoose');
// schemas Admin
const AdminsSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  Username: String,
  Password: String,
}, { versionKey: false })


// schemas Area
const AreasSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  BranchName: String,
}, {
  timestamps: true
}, { versionKey: false });

const BillsSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  BranchName: String,
  Sale: Number,
  Status: Boolean,
  Totalprice: Number,
  Note: String,
  Table: tablesSchema,
  Billdetail: BilldetailSchema,
  Customer: CustomersSchema,
  User: usersSchema
}, {
  timestamps: true
}, { versionKey: false });

const BilldetailSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  Quantity: Number,
  Price: Number,
  Menu: [MenusSchema]
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
  Categories: CategoriesSchema,
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

const tablesSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  TableName: String,
  Status: String,
  Phone: String,
  Area: AreasSchema
}, {
  timestamps: true
}, { versionKey: false });

const usersSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  Name: String,
  Email: String,
  Address: String,
  Phone: String,
  Role: String,
  username: String,
  password: String,
}, {
  timestamps: true
}, { versionKey: false });

//model
const Admin = mongoose.model('Admin', AdminSchema);
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
const User = mongoose.model('User', usersSchema);
module.exports = { Admin, Area, Bill, Billdetail, Category, Customer, Menu, Product, Storereceipt, Store, Supplier, Table, User };