-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th9 26, 2019 lúc 03:34 AM
-- Phiên bản máy phục vụ: 10.3.16-MariaDB
-- Phiên bản PHP: 7.1.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `cms_pos`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `areas`
--

CREATE TABLE `areas` (
  `IdArea` int(10) NOT NULL,
  `BranchName` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `IdStore` int(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `areas`
--

INSERT INTO `areas` (`IdArea`, `BranchName`, `IdStore`) VALUES
(1, 'Tầng 1', 1),
(2, 'Sân Vườn', 1),
(3, 'Tầng 3', NULL),
(4, 'Tầng 4', NULL),
(5, 'Tầng 2', NULL);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `bill`
--

CREATE TABLE `bill` (
  `IdBill` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `IdUser` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `IdTable` int(11) DEFAULT NULL,
  `IdStore` int(10) DEFAULT NULL,
  `IdCustomer` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `create_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `Sale` int(3) DEFAULT NULL,
  `Status` int(1) DEFAULT NULL,
  `Totalprice` int(10) DEFAULT NULL,
  `Note` text COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `bill`
--

INSERT INTO `bill` (`IdBill`, `IdUser`, `IdTable`, `IdStore`, `IdCustomer`, `create_at`, `Sale`, `Status`, `Totalprice`, `Note`) VALUES
('DH001', 'admin', 3, NULL, 'KH001', '2019-02-24 06:03:49', NULL, 1, 165000, 'test'),
('DH0010', 'admin', 1, NULL, 'KH001', '2019-03-01 15:51:51', NULL, 1, 100000, ''),
('DH0011', 'admin', 4, NULL, 'KH001', '2019-03-05 09:47:31', NULL, 1, 20000, ''),
('DH0012', 'admin', 5, NULL, 'KH001', '2019-03-08 02:06:11', NULL, 1, 90000, ''),
('DH0013', 'admin', 3, NULL, 'KH001', '2019-08-03 03:10:05', NULL, 1, 80000, ''),
('DH0014', 'admin', 1, NULL, 'KH001', '2019-08-13 02:09:46', NULL, 1, 105000, ''),
('DH0015', 'admin', 2, NULL, 'KH001', '2019-08-26 06:28:45', NULL, 1, 65000, ''),
('DH0016', 'admin', 1, NULL, 'KH001', '2019-09-23 01:54:24', NULL, 0, 80000, ''),
('DH002', 'admin', 6, NULL, 'KH001', '2019-02-24 06:04:25', NULL, 1, 60000, ''),
('DH003', 'admin', 10, NULL, 'KH002', '2019-02-24 06:15:12', NULL, 1, 40000, ''),
('DH004', 'admin', 10, NULL, 'KH001', '2019-02-26 03:19:26', NULL, 1, 85000, ''),
('DH005', 'admin', 3, NULL, 'KH001', '2019-02-27 12:34:49', NULL, 1, 175000, ''),
('DH006', 'admin', 7, NULL, 'KH001', '2019-02-27 12:40:58', NULL, 1, 65000, ''),
('DH007', 'admin', 7, NULL, 'KH001', '2019-02-27 12:45:29', NULL, 1, 40000, ''),
('DH008', 'admin', 7, NULL, 'KH001', '2019-03-01 13:13:47', NULL, 1, 145000, ''),
('DH009', 'admin', 7, NULL, 'KH001', '2019-03-01 13:16:46', NULL, 1, 65000, '');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `billdetail`
--

CREATE TABLE `billdetail` (
  `IdDetail` int(11) NOT NULL,
  `IdBill` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `IdMenu` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `Quantity` int(3) DEFAULT NULL,
  `Price` varchar(11) COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `billdetail`
--

INSERT INTO `billdetail` (`IdDetail`, `IdBill`, `IdMenu`, `Quantity`, `Price`) VALUES
(43, 'DH001', 'M001', 3, ''),
(44, 'DH001', 'M002', 4, ''),
(45, 'DH001', 'M003', 1, ''),
(46, 'DH002', 'M004', 1, ''),
(47, 'DH002', 'M003', 1, ''),
(48, 'DH002', 'M002', 1, ''),
(59, 'DH003', 'M004', 1, '15000'),
(60, 'DH003', 'M003', 1, '25000'),
(62, 'DH004', 'M003', 1, '25000'),
(63, 'DH004', 'M004', 1, '15000'),
(64, 'DH004', 'M005', 1, '20000'),
(65, 'DH004', 'M006', 1, '25000'),
(87, 'DH005', 'M004', 1, '15000'),
(88, 'DH005', 'M003', 1, '25000'),
(89, 'DH005', 'M002', 1, '20000'),
(90, 'DH005', 'M001', 1, '20000'),
(91, 'DH005', 'M005', 1, '20000'),
(92, 'DH005', 'M006', 1, '25000'),
(93, 'DH005', 'M007', 1, '30000'),
(94, 'DH005', 'M009', 1, '20000'),
(107, 'DH006', 'M001', 1, '20000'),
(108, 'DH006', 'M002', 1, '20000'),
(109, 'DH006', 'M003', 1, '25000'),
(115, 'DH007', 'M001', 1, '20000'),
(116, 'DH007', 'M002', 1, '20000'),
(123, 'DH008', 'M007', 1, '30000'),
(124, 'DH008', 'M009', 1, '20000'),
(125, 'DH008', 'M002', 1, '20000'),
(126, 'DH008', 'M006', 3, '25000'),
(130, 'DH009', 'M001', 1, '20000'),
(131, 'DH009', 'M002', 1, '20000'),
(132, 'DH009', 'M003', 1, '25000'),
(137, 'DH0010', 'M002', 1, '20000'),
(138, 'DH0010', 'M003', 1, '25000'),
(139, 'DH0010', 'M004', 1, '15000'),
(140, 'DH0010', 'M001', 2, '20000'),
(141, 'DH0011', 'M001', 1, '20000'),
(145, 'DH0012', 'M003', 2, '25000'),
(146, 'DH0012', 'M002', 1, '20000'),
(147, 'DH0012', 'M001', 1, '20000'),
(148, 'DH0013', 'M002', 4, '20000'),
(151, 'DH0014', 'M001', 3, '20000'),
(152, 'DH0014', 'M002', 1, '20000'),
(153, 'DH0014', 'M003', 1, '25000'),
(154, 'DH0015', 'M002', 2, '20000'),
(155, 'DH0015', 'M003', 1, '25000'),
(156, 'DH0016', 'M001', 1, '20000'),
(157, 'DH0016', 'M002', 1, '20000'),
(158, 'DH0016', 'M003', 1, '25000'),
(159, 'DH0016', 'M004', 1, '15000');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `categories`
--

CREATE TABLE `categories` (
  `Idcate` int(10) NOT NULL,
  `CateName` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `ParentId` int(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `categories`
--

INSERT INTO `categories` (`Idcate`, `CateName`, `ParentId`) VALUES
(1, 'Đồ Ăn', NULL),
(2, 'Nước Uống', NULL),
(3, 'Bia', NULL),
(4, 'Thuốc Lá', NULL);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `customers`
--

CREATE TABLE `customers` (
  `IdCustomer` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `CustomerName` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `PhoneNumber` int(10) DEFAULT NULL,
  `Email` varchar(200) COLLATE utf8_unicode_ci DEFAULT NULL,
  `Address` varchar(200) COLLATE utf8_unicode_ci DEFAULT NULL,
  `Note` text COLLATE utf8_unicode_ci DEFAULT NULL,
  `Birthday` date DEFAULT NULL,
  `Gender` varchar(3) COLLATE utf8_unicode_ci DEFAULT NULL,
  `Debit` int(10) DEFAULT NULL,
  `Avatar` varchar(200) COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `customers`
--

INSERT INTO `customers` (`IdCustomer`, `CustomerName`, `PhoneNumber`, `Email`, `Address`, `Note`, `Birthday`, `Gender`, `Debit`, `Avatar`) VALUES
('KH001', 'Hoang Truong An', 935421855, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
('KH002', 'Phan Thành Linh', 72109096, 'linhphan96@gmail.com', NULL, NULL, NULL, 'Nam', NULL, NULL),
('KH003', 'Phan Thanh Linh', 344226514, 'huynhhuynh02@gmail.com', NULL, NULL, NULL, NULL, NULL, NULL),
('KH004', 'a', 0, 'c', 'c', '', NULL, NULL, NULL, NULL),
('KH005', 'Khánh', 344226514, 'abc@gmail.com', '124 Tran Nhan Tong', '', NULL, NULL, NULL, NULL),
('KH006', 'Test', 12345, 'huynh@gmail.com', 'Hoi An', '', NULL, NULL, NULL, NULL),
('KH007', 'test2', 0, '', '', '', NULL, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `groups`
--

CREATE TABLE `groups` (
  `GroupId` int(10) NOT NULL,
  `GroupName` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `Level` int(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `groups`
--

INSERT INTO `groups` (`GroupId`, `GroupName`, `Level`) VALUES
(0, 'Ban giám Đốc', 1),
(1, 'Thu Ngân', 2);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `ingredients`
--

CREATE TABLE `ingredients` (
  `IngredientID` int(11) NOT NULL,
  `IdMenu` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `IdProduct` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `Quanty` int(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `menus`
--

CREATE TABLE `menus` (
  `IdMenu` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `NameMenu` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `Price` int(10) DEFAULT NULL,
  `Images` varchar(200) COLLATE utf8_unicode_ci DEFAULT NULL,
  `Unit` varchar(3) COLLATE utf8_unicode_ci DEFAULT NULL,
  `Idcate` int(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `menus`
--

INSERT INTO `menus` (`IdMenu`, `NameMenu`, `Price`, `Images`, `Unit`, `Idcate`) VALUES
('M001', 'Coffe Sữa', 20000, 'caffesuada.jpg', 'Ly', 2),
('M002', 'Coffe Sữa Sài Gòn', 20000, 'caffesuanong.jpg', 'Ly', 2),
('M003', 'Nước ép cà rốt', 25000, 'nuocepcarot.jpg', 'Ly', 2),
('M004', 'Bò Húc', 15000, 'bohuc.jpg', 'Lon', 2),
('M005', 'Nước cam ép', 20000, 'nuoccamep.jpg', 'Ly', 2),
('M006', 'Thuốc Ngựa', 25000, 'marlborored.jpg', 'Gói', 4),
('M007', 'Bánh Cookies ', 30000, 'banhcookies.jpg', 'Đĩa', 1),
('M009', 'Bánh flan', 20000, 'banhflan.jpg', 'Cái', 1);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `payslips`
--

CREATE TABLE `payslips` (
  `IdPayslip` int(11) NOT NULL,
  `UserId` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `IdStore` int(10) NOT NULL,
  `DatePay` date DEFAULT NULL,
  `Note` text COLLATE utf8_unicode_ci DEFAULT NULL,
  `Format` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `Image` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `Totalprice` int(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `payslips`
--

INSERT INTO `payslips` (`IdPayslip`, `UserId`, `IdStore`, `DatePay`, `Note`, `Format`, `Image`, `Totalprice`) VALUES
(1, 'admin', 1, '2019-02-16', 'Tiền xăng xe', NULL, '', 150000);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `products`
--

CREATE TABLE `products` (
  `IdProduct` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `NameProduct` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `Quantity` int(10) DEFAULT NULL,
  `Unit` varchar(10) COLLATE utf8_unicode_ci DEFAULT NULL,
  `Images` varchar(200) COLLATE utf8_unicode_ci DEFAULT NULL,
  `CostPrice` int(10) DEFAULT NULL,
  `SallingPrice` int(10) DEFAULT NULL,
  `IdSupplier` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `Idcate` int(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `products`
--

INSERT INTO `products` (`IdProduct`, `NameProduct`, `Quantity`, `Unit`, `Images`, `CostPrice`, `SallingPrice`, `IdSupplier`, `Idcate`) VALUES
('CF', 'Cafe Bột', 500, 'g', NULL, 50000, NULL, 'NCC001', NULL),
('DT', 'Đường Trắng', 10, 'kg', NULL, 9000, NULL, 'NCC001', NULL);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `receiptdetail`
--

CREATE TABLE `receiptdetail` (
  `DetaiId` int(11) NOT NULL,
  `Idreceipt` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `IdProduct` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `Quantity` int(10) DEFAULT NULL,
  `Unit` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `Price` int(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `receipts`
--

CREATE TABLE `receipts` (
  `IdReceipt` int(10) NOT NULL,
  `UserId` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `IdStore` int(10) NOT NULL,
  `Totalprice` int(11) DEFAULT NULL,
  `Note` text COLLATE utf8_unicode_ci DEFAULT NULL,
  `Image` varchar(200) COLLATE utf8_unicode_ci DEFAULT NULL,
  `Date` date DEFAULT NULL,
  `Format` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `receipts`
--

INSERT INTO `receipts` (`IdReceipt`, `UserId`, `IdStore`, `Totalprice`, `Note`, `Image`, `Date`, `Format`) VALUES
(1, 'admin', 1, 1000000, 'Tiền khách bo', NULL, '2019-02-16', NULL);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `storereceipts`
--

CREATE TABLE `storereceipts` (
  `Idreceipt` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `IdUser` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `IdStore` int(30) NOT NULL,
  `Idsupplier` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `Dateinput` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `Note` text COLLATE utf8_unicode_ci DEFAULT NULL,
  `Paymentmethod` int(1) DEFAULT NULL,
  `Image` varchar(200) COLLATE utf8_unicode_ci DEFAULT NULL,
  `Totalprice` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `stores`
--

CREATE TABLE `stores` (
  `IdStore` int(10) NOT NULL,
  `StoreName` varchar(200) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `stores`
--

INSERT INTO `stores` (`IdStore`, `StoreName`) VALUES
(1, 'Hội An');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `suppliers`
--

CREATE TABLE `suppliers` (
  `Idsupplier` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `Namesupplier` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `Email` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `Phone` int(10) DEFAULT NULL,
  `Address` varchar(200) COLLATE utf8_unicode_ci DEFAULT NULL,
  `Note` text COLLATE utf8_unicode_ci DEFAULT NULL,
  `Debit` int(10) DEFAULT NULL,
  `Avatar` varchar(200) COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `suppliers`
--

INSERT INTO `suppliers` (`Idsupplier`, `Namesupplier`, `Email`, `Phone`, `Address`, `Note`, `Debit`, `Avatar`) VALUES
('NCC001', 'Hoàng Trường An', 'hta.1795@gmail.com', 935421855, '124 Trần Nhân Tông', NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `tables`
--

CREATE TABLE `tables` (
  `IdTable` int(11) NOT NULL,
  `TableName` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `Status` int(1) NOT NULL,
  `IdArea` int(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `tables`
--

INSERT INTO `tables` (`IdTable`, `TableName`, `Status`, `IdArea`) VALUES
(1, 'Bàn 1', 1, 1),
(2, 'Bàn 2', 0, 1),
(3, 'Bàn 3', 0, 1),
(4, 'Bàn 4', 0, 1),
(5, 'Bàn 5', 0, 1),
(6, 'Bàn 6', 0, 1),
(7, 'Bàn 7', 0, 2),
(8, 'Bàn 8', 0, 2),
(9, 'Bàn 9', 0, 2),
(10, 'Bàn 10', 0, 2),
(11, 'Bàn 11', 0, 1),
(12, 'Bàn 12', 0, 2),
(13, 'Bàn VIP', 0, 1),
(14, 'Bàn VIP 2', 0, 1),
(15, 'Bàn 14', 0, 1),
(16, 'Bàn 15', 0, 1),
(17, 'Bàn 13', 0, 1),
(18, 'Bàn 16', 0, 4);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `users`
--

CREATE TABLE `users` (
  `UserId` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `UserName` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `Email` varchar(200) COLLATE utf8_unicode_ci DEFAULT NULL,
  `IdNumber` int(9) DEFAULT NULL,
  `Address` varchar(200) COLLATE utf8_unicode_ci DEFAULT NULL,
  `Phone` int(10) DEFAULT NULL,
  `Avatar` varchar(200) COLLATE utf8_unicode_ci DEFAULT NULL,
  `Birthday` date NOT NULL,
  `Pass` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `GroupId` int(10) DEFAULT NULL,
  `IdStore` int(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `users`
--

INSERT INTO `users` (`UserId`, `UserName`, `Email`, `IdNumber`, `Address`, `Phone`, `Avatar`, `Birthday`, `Pass`, `GroupId`, `IdStore`) VALUES
('admin', 'Huynh Thanh Huynh', 'huynhhuynh02@gmail.com', 205896784, NULL, 935421855, NULL, '0000-00-00', '12345', 0, 1);

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `areas`
--
ALTER TABLE `areas`
  ADD PRIMARY KEY (`IdArea`),
  ADD KEY `IdStore` (`IdStore`);

--
-- Chỉ mục cho bảng `bill`
--
ALTER TABLE `bill`
  ADD PRIMARY KEY (`IdBill`),
  ADD KEY `IdUser` (`IdUser`),
  ADD KEY `IdTable` (`IdTable`),
  ADD KEY `IdStore` (`IdStore`),
  ADD KEY `IdCustomer` (`IdCustomer`);

--
-- Chỉ mục cho bảng `billdetail`
--
ALTER TABLE `billdetail`
  ADD PRIMARY KEY (`IdDetail`),
  ADD KEY `IdBill` (`IdBill`),
  ADD KEY `IdMenu` (`IdMenu`);

--
-- Chỉ mục cho bảng `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`Idcate`);

--
-- Chỉ mục cho bảng `customers`
--
ALTER TABLE `customers`
  ADD PRIMARY KEY (`IdCustomer`);

--
-- Chỉ mục cho bảng `groups`
--
ALTER TABLE `groups`
  ADD PRIMARY KEY (`GroupId`);

--
-- Chỉ mục cho bảng `ingredients`
--
ALTER TABLE `ingredients`
  ADD PRIMARY KEY (`IngredientID`),
  ADD KEY `IdMenu` (`IdMenu`),
  ADD KEY `IdProduct` (`IdProduct`);

--
-- Chỉ mục cho bảng `menus`
--
ALTER TABLE `menus`
  ADD PRIMARY KEY (`IdMenu`),
  ADD KEY `Idcate` (`Idcate`);

--
-- Chỉ mục cho bảng `payslips`
--
ALTER TABLE `payslips`
  ADD PRIMARY KEY (`IdPayslip`),
  ADD KEY `UserId` (`UserId`),
  ADD KEY `IdStore` (`IdStore`);

--
-- Chỉ mục cho bảng `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`IdProduct`),
  ADD KEY `IdSupplier` (`IdSupplier`),
  ADD KEY `Idcate` (`Idcate`);

--
-- Chỉ mục cho bảng `receiptdetail`
--
ALTER TABLE `receiptdetail`
  ADD PRIMARY KEY (`DetaiId`),
  ADD KEY `Idreceipt` (`Idreceipt`),
  ADD KEY `IdProduct` (`IdProduct`);

--
-- Chỉ mục cho bảng `receipts`
--
ALTER TABLE `receipts`
  ADD PRIMARY KEY (`IdReceipt`),
  ADD KEY `UserId` (`UserId`),
  ADD KEY `IdStore` (`IdStore`);

--
-- Chỉ mục cho bảng `storereceipts`
--
ALTER TABLE `storereceipts`
  ADD PRIMARY KEY (`Idreceipt`),
  ADD KEY `IdUser` (`IdUser`),
  ADD KEY `IdStore` (`IdStore`),
  ADD KEY `Idsupplier` (`Idsupplier`);

--
-- Chỉ mục cho bảng `stores`
--
ALTER TABLE `stores`
  ADD PRIMARY KEY (`IdStore`);

--
-- Chỉ mục cho bảng `suppliers`
--
ALTER TABLE `suppliers`
  ADD PRIMARY KEY (`Idsupplier`);

--
-- Chỉ mục cho bảng `tables`
--
ALTER TABLE `tables`
  ADD PRIMARY KEY (`IdTable`),
  ADD KEY `IdArea` (`IdArea`);

--
-- Chỉ mục cho bảng `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`UserId`),
  ADD KEY `GroupId` (`GroupId`),
  ADD KEY `IdStore` (`IdStore`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `areas`
--
ALTER TABLE `areas`
  MODIFY `IdArea` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT cho bảng `billdetail`
--
ALTER TABLE `billdetail`
  MODIFY `IdDetail` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=160;

--
-- AUTO_INCREMENT cho bảng `categories`
--
ALTER TABLE `categories`
  MODIFY `Idcate` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT cho bảng `ingredients`
--
ALTER TABLE `ingredients`
  MODIFY `IngredientID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `payslips`
--
ALTER TABLE `payslips`
  MODIFY `IdPayslip` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT cho bảng `receiptdetail`
--
ALTER TABLE `receiptdetail`
  MODIFY `DetaiId` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `receipts`
--
ALTER TABLE `receipts`
  MODIFY `IdReceipt` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT cho bảng `stores`
--
ALTER TABLE `stores`
  MODIFY `IdStore` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT cho bảng `tables`
--
ALTER TABLE `tables`
  MODIFY `IdTable` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- Các ràng buộc cho các bảng đã đổ
--

--
-- Các ràng buộc cho bảng `areas`
--
ALTER TABLE `areas`
  ADD CONSTRAINT `areas_ibfk_1` FOREIGN KEY (`IdStore`) REFERENCES `stores` (`IdStore`);

--
-- Các ràng buộc cho bảng `bill`
--
ALTER TABLE `bill`
  ADD CONSTRAINT `bill_ibfk_1` FOREIGN KEY (`IdUser`) REFERENCES `users` (`UserId`),
  ADD CONSTRAINT `bill_ibfk_2` FOREIGN KEY (`IdTable`) REFERENCES `tables` (`IdTable`),
  ADD CONSTRAINT `bill_ibfk_3` FOREIGN KEY (`IdStore`) REFERENCES `stores` (`IdStore`),
  ADD CONSTRAINT `bill_ibfk_4` FOREIGN KEY (`IdCustomer`) REFERENCES `customers` (`IdCustomer`);

--
-- Các ràng buộc cho bảng `billdetail`
--
ALTER TABLE `billdetail`
  ADD CONSTRAINT `billdetail_ibfk_1` FOREIGN KEY (`IdBill`) REFERENCES `bill` (`IdBill`),
  ADD CONSTRAINT `billdetail_ibfk_2` FOREIGN KEY (`IdMenu`) REFERENCES `menus` (`IdMenu`);

--
-- Các ràng buộc cho bảng `ingredients`
--
ALTER TABLE `ingredients`
  ADD CONSTRAINT `ingredients_ibfk_1` FOREIGN KEY (`IdMenu`) REFERENCES `menus` (`IdMenu`),
  ADD CONSTRAINT `ingredients_ibfk_2` FOREIGN KEY (`IdProduct`) REFERENCES `products` (`IdProduct`);

--
-- Các ràng buộc cho bảng `menus`
--
ALTER TABLE `menus`
  ADD CONSTRAINT `menus_ibfk_1` FOREIGN KEY (`Idcate`) REFERENCES `categories` (`Idcate`);

--
-- Các ràng buộc cho bảng `payslips`
--
ALTER TABLE `payslips`
  ADD CONSTRAINT `payslips_ibfk_1` FOREIGN KEY (`UserId`) REFERENCES `users` (`UserId`),
  ADD CONSTRAINT `payslips_ibfk_2` FOREIGN KEY (`IdStore`) REFERENCES `stores` (`IdStore`);

--
-- Các ràng buộc cho bảng `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_ibfk_1` FOREIGN KEY (`IdSupplier`) REFERENCES `suppliers` (`Idsupplier`),
  ADD CONSTRAINT `products_ibfk_2` FOREIGN KEY (`Idcate`) REFERENCES `categories` (`Idcate`);

--
-- Các ràng buộc cho bảng `receiptdetail`
--
ALTER TABLE `receiptdetail`
  ADD CONSTRAINT `receiptdetail_ibfk_1` FOREIGN KEY (`Idreceipt`) REFERENCES `storereceipts` (`Idreceipt`),
  ADD CONSTRAINT `receiptdetail_ibfk_2` FOREIGN KEY (`IdProduct`) REFERENCES `products` (`IdProduct`);

--
-- Các ràng buộc cho bảng `receipts`
--
ALTER TABLE `receipts`
  ADD CONSTRAINT `receipts_ibfk_1` FOREIGN KEY (`UserId`) REFERENCES `users` (`UserId`),
  ADD CONSTRAINT `receipts_ibfk_2` FOREIGN KEY (`IdStore`) REFERENCES `stores` (`IdStore`);

--
-- Các ràng buộc cho bảng `storereceipts`
--
ALTER TABLE `storereceipts`
  ADD CONSTRAINT `storereceipts_ibfk_1` FOREIGN KEY (`IdUser`) REFERENCES `users` (`UserId`),
  ADD CONSTRAINT `storereceipts_ibfk_2` FOREIGN KEY (`IdStore`) REFERENCES `stores` (`IdStore`),
  ADD CONSTRAINT `storereceipts_ibfk_3` FOREIGN KEY (`Idsupplier`) REFERENCES `suppliers` (`Idsupplier`);

--
-- Các ràng buộc cho bảng `tables`
--
ALTER TABLE `tables`
  ADD CONSTRAINT `tables_ibfk_1` FOREIGN KEY (`IdArea`) REFERENCES `areas` (`IdArea`);

--
-- Các ràng buộc cho bảng `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_ibfk_1` FOREIGN KEY (`GroupId`) REFERENCES `groups` (`GroupId`),
  ADD CONSTRAINT `users_ibfk_2` FOREIGN KEY (`IdStore`) REFERENCES `stores` (`IdStore`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
