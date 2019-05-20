/*
Navicat MySQL Data Transfer

Source Server         : mydb
Source Server Version : 50709
Source Host           : localhost:3306
Source Database       : liangqinwei

Target Server Type    : MYSQL
Target Server Version : 50709
File Encoding         : 65001

Date: 2019-03-24 20:05:46
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for list
-- ----------------------------
DROP TABLE IF EXISTS `list`;
CREATE TABLE `list` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `icon` varchar(255) NOT NULL,
  `img` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `price` decimal(10,0) unsigned NOT NULL,
  `del` decimal(10,0) unsigned DEFAULT NULL,
  `search_pl` varchar(255) NOT NULL,
  `xx` varchar(255) NOT NULL,
  `kk` varchar(255) NOT NULL,
  `jiaru` varchar(255) DEFAULT NULL,
  `shouc` varchar(255) DEFAULT NULL,
  `ted1` varchar(255) DEFAULT NULL,
  `ted2` varchar(255) DEFAULT NULL,
  `img2` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=70 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of list
-- ----------------------------
INSERT INTO `list` VALUES ('1', '【自营】', 'http://p0.jmstatic.com/product/001/329/1329220_std/1329220_350_350.jpg', 'W.DRESSROOM香氛杀菌喷雾30ml', '120', '130', '新品上线', 'rating', 'zuhe_zhifu_dingjing', '', '', '装扮', '', 'http://p0.jmstatic.com/product/001/329/1329220_std/1329220_1000_1000.jpg');
INSERT INTO `list` VALUES ('2', '【自营】', 'http://p1.jmstatic.com/product/003/418/3418326_std/3418326_350_350.jpg', 'W.DRESSROOM香氛喷雾70ml', '128', '139', '月销32', '', 'zuhe_zhifu_dingjing', '', '', '装扮', '', 'http://p1.jmstatic.com/product/003/418/3418326_std/3418326_1000_1000.jpg');
INSERT INTO `list` VALUES ('3', '【自营】', 'http://p3.jmstatic.com/product/001/666/1666048_std/1666048_350_350.jpg', '卡尔文克雷恩卡莱优淡香水 200ml', '136', '148', '月销120', '', 'zuhe_zhifu_dingjing', '', '', '装扮', '香氛', 'http://p3.jmstatic.com/product/001/666/1666048_std/1666048_1000_1000.jpg');
INSERT INTO `list` VALUES ('4', '【自营】', 'http://p4.jmstatic.com/product/001/329/1329219_std/1329219_350_350.jpg', '卡文克莱卡雷比香水100ml', '144', '0', '月销208', 'rating', 'btn_addcart', 'btn_addcart', 'btn_fav', '装扮', '香氛', 'http://p4.jmstatic.com/product/001/329/1329219_std/1329219_1000_1000.jpg');
INSERT INTO `list` VALUES ('5', '【自营】', 'http://p4.jmstatic.com/product/003/875/3875984_std/3875984_350_350.jpg', 'W.DRESSROOM香氛杀菌喷雾30ml', '152', '166', '月销296', '', 'btn_addcart', 'btn_addcart', 'btn_fav', '装扮', '', 'http://p4.jmstatic.com/product/003/875/3875984_std/3875984_1000_1000.jpg');
INSERT INTO `list` VALUES ('6', '【自营】', 'http://p0.jmstatic.com/product/003/402/3402970_std/3402970_350_350.jpg', '美国?卡尔文克雷恩(CALVIN KLEIN)卡雷优淡香水（炫金限量版）100ml', '160', '175', '月销384', 'rating', 'btn_addcart', 'btn_addcart', 'btn_fav', '装扮', '', 'http://p0.jmstatic.com/product/003/402/3402970_std/3402970_1000_1000.jpg');
INSERT INTO `list` VALUES ('7', '【自营】', 'http://p0.jmstatic.com/product/000/004/4740_std/4740_350_350.jpg', '美国?卡尔文克雷恩(CALVIN KLEIN)卡雷优香水（又名卡莱优淡香水）50ml', '168', '184', '新品上线', 'rating', 'btn_addcart', 'btn_addcart', 'btn_fav', '装扮', '', 'http://p0.jmstatic.com/product/000/004/4740_std/4740_1000_1000.jpg');
INSERT INTO `list` VALUES ('8', '【自营】', 'http://p4.jmstatic.com/product/001/497/1497059_std/1497059_350_350.jpg', '英国?祖.玛珑JO MALONE蓝风铃香水/又名香水（蓝风铃香型）30ML', '123', '193', '新品上线', 'rating', 'btn_addcart', 'btn_addcart', 'btn_fav', '装扮', '', 'http://p4.jmstatic.com/product/001/497/1497059_std/1497059_1000_1000.jpg');
INSERT INTO `list` VALUES ('9', '【自营】', 'http://p2.jmstatic.com/product/004/744/4744532_std/4744532_350_350.jpg', '卡尔文克雷恩卡雷优香水(幸运当红版)100ml', '123', '0', '新品上线', '', 'btn_addcart', 'btn_addcart', 'btn_fav', '装扮', '', 'http://p2.jmstatic.com/product/004/744/4744532_std/4744532_1000_1000.jpg');
INSERT INTO `list` VALUES ('10', '【自营】', 'http://p2.jmstatic.com/product/000/002/2282_std/2282_350_350.jpg', '美国?卡尔文克雷恩(CALVIN KLEIN)卡雷比香水(又名卡文克莱卡莱比淡香水)50ml', '123', '0', '新品上线', '', 'btn_addcart', 'btn_addcart', 'btn_fav', '装扮', '', 'http://p2.jmstatic.com/product/000/002/2282_std/2282_1000_1000.jpg');
INSERT INTO `list` VALUES ('11', '【海外自营】', 'http://p2.jmstatic.com/product/001/497/1497042_std/1497042_350_350.jpg', '英国?祖.玛珑JO MALONE香水（鼠尾草与海盐香型）30ML', '123', '220', '新品上线', '', 'btn_addcart', 'btn_addcart', 'btn_fav', '装扮', '', 'http://p2.jmstatic.com/product/001/497/1497042_std/1497042_1000_1000.jpg');
INSERT INTO `list` VALUES ('12', '【海外自营】', 'http://p2.jmstatic.com/product/003/821/3821812_std/3821812_350_350.jpg', '宝格丽绿色经典淡香水（绿茶香）40ml', '123', '0', '新品上线', '', 'btn_addcart', 'btn_addcart', 'btn_fav', '装扮', '', 'http://p2.jmstatic.com/product/003/821/3821812_std/3821812_1000_1000.jpg');
INSERT INTO `list` VALUES ('13', '【海外自营】', 'http://p4.jmstatic.com/product/004/578/4578714_std/4578714_350_350.jpg', 'layered fragrance 试管香水10ml', '123', '238', '新品上线', '', 'zuhe_zhifu_dingjing', '', '', '装扮', '', 'http://p4.jmstatic.com/product/004/578/4578714_std/4578714_1000_1000.jpg');
INSERT INTO `list` VALUES ('14', '【海外自营】', 'http://p0.jmstatic.com/product/003/821/3821810_std/3821810_350_350.jpg', '宝格丽茗珍中性古龙水75ml', '224', '0', '新品上线', '', 'zuhe_zhifu_dingjing', '', '', '装扮', '香氛', 'http://p0.jmstatic.com/product/003/821/3821810_std/3821810_1000_1000.jpg');
INSERT INTO `list` VALUES ('15', '【海外自营】', 'http://p3.jmstatic.com/product/003/402/3402968_std/3402968_350_350.jpg', '美国?卡尔文克雷恩(CALVIN KLEIN)卡雷优淡香水(炫金限量版)50ml', '232', '256', '新品上线', '', 'zuhe_zhifu_dingjing', '', '', '装扮', '香氛', 'http://p3.jmstatic.com/product/003/402/3402968_std/3402968_1000_1000.jpg');
INSERT INTO `list` VALUES ('16', '【自营】', 'http://p4.jmstatic.com/product/001/497/1497019_std/1497019_350_350.jpg', '英国?祖.玛珑JO MALONE 香水（英国梨与小苍兰香型）30ml', '240', '265', '新品上线', 'rating', 'zuhe_zhifu_dingjing', '', '', '香氛', '香氛', 'http://p4.jmstatic.com/product/001/497/1497019_std/1497019_1000_1000.jpg');
INSERT INTO `list` VALUES ('17', '【自营】', 'http://p4.jmstatic.com/product/001/497/1497019_std/1497019_350_350.jpg', '美国?卡尔文克雷恩（CALVIN KLEIN）卡莱优淡/卡雷优香水（又名卡文克莱卡莱优淡香水）100ml', '248', '274', '新品上线', 'rating', 'zuhe_zhifu_dingjing', '', '', '香氛', '香氛', 'http://p4.jmstatic.com/product/001/497/1497019_std/1497019_1000_1000.jpg');
INSERT INTO `list` VALUES ('18', '【自营】', 'http://p4.jmstatic.com/product/004/105/4105134_std/4105134_350_350.jpg', '卡尔文克雷恩(CALVIN KLEIN)卡雷欧淡香水100ml', '256', '283', '新品上线', 'rating', 'zuhe_zhifu_dingjing', '', '', '香氛', '香氛', 'http://p4.jmstatic.com/product/004/105/4105134_std/4105134_1000_1000.jpg');
INSERT INTO `list` VALUES ('19', '【自营】', 'http://p3.jmstatic.com/product/001/054/1054218_std/1054218_350_350.jpg', '美国?卡尔文克雷恩(CALVIN KLEIN) 卡雷比香水（又名卡文克莱卡莱比淡香水）100ml', '145', '292', '新品上线', '', 'zuhe_zhifu_dingjing', '', '', '香氛', '香氛', 'http://p3.jmstatic.com/product/001/054/1054218_std/1054218_1000_1000.jpg');
INSERT INTO `list` VALUES ('20', '【自营】', 'http://p2.jmstatic.com/product/001/497/1497037_std/1497037_350_350.jpg', '英国?祖.玛珑JO MALONE橙花香水 30ML', '145', '301', '新品上线', 'rating', 'btn_addcart', '', '', '香氛', '香氛', 'http://p2.jmstatic.com/product/001/497/1497037_std/1497037_1000_1000.jpg');
INSERT INTO `list` VALUES ('21', '【自营】', 'http://p1.jmstatic.com/product/001/497/1497076_std/1497076_350_350.jpg', '英国?祖.玛珑JO MALONE英国梨与小苍兰香水100ML', '145', '310', '新品上线', 'rating', 'btn_addcart', 'btn_addcart', 'btn_fav', '香氛', '香氛', 'http://p1.jmstatic.com/product/001/497/1497076_std/1497076_1000_1000.jpg');
INSERT INTO `list` VALUES ('22', '【自营】', 'http://p4.jmstatic.com/product/001/054/1054219_std/1054219_350_350.jpg', '美国?卡尔文克雷恩(CALVIN?KLEIN)卡雷比香水(又名卡文克莱卡莱比淡香水)200ml', '145', '0', '新品上线', 'rating', 'btn_addcart', 'btn_addcart', 'btn_fav', '香氛', '香氛', 'http://p4.jmstatic.com/product/001/054/1054219_std/1054219_1000_1000.jpg');
INSERT INTO `list` VALUES ('23', '【自营】', 'http://p1.jmstatic.com/product/004/446/4446776_std/4446776_350_350.jpg', '卡尔文克雷恩卡雷优香水20ml', '296', '328', '新品上线', '', 'btn_addcart', 'btn_addcart', 'btn_fav', '香氛', '香氛', 'http://p1.jmstatic.com/product/004/446/4446776_std/4446776_1000_1000.jpg');
INSERT INTO `list` VALUES ('24', '【自营】', 'http://p3.jmstatic.com/product/003/231/3231308_std/3231308_350_350.jpg', '英国?祖.玛珑JO MALONE香水（法国菩提花香型）30ml', '304', '337', '新品上线', '', 'btn_addcart', 'btn_addcart', 'btn_fav', '香氛', '香氛', 'http://p3.jmstatic.com/product/003/231/3231308_std/3231308_1000_1000.jpg');
INSERT INTO `list` VALUES ('25', '【自营】', 'http://p2.jmstatic.com/product/001/054/1054222_std/1054222_350_350.jpg', '美国?卡尔文克雷恩(CALVIN KLEIN)卡莱优淡香水/卡雷优香水/卡文克莱卡莱优淡香水 200ml', '312', '0', '新品上线', '', 'btn_addcart', 'btn_addcart', 'btn_fav', '香氛', '香氛', 'http://p2.jmstatic.com/product/001/054/1054222_std/1054222_1000_1000.jpg');
INSERT INTO `list` VALUES ('26', '【海外自营】', 'http://p1.jmstatic.com/product/001/497/1497081_std/1497081_350_350.jpg', '英国?祖.玛珑JO MALONE红玫瑰香水 100ML', '320', '355', '月销32', '', 'btn_addcart', 'btn_addcart', 'btn_fav', '香氛', '香氛', 'http://p1.jmstatic.com/product/001/497/1497081_std/1497081_1000_1000.jpg');
INSERT INTO `list` VALUES ('27', '【海外自营】', 'http://p2.jmstatic.com/product/001/497/1497082_std/1497082_350_350.jpg', '英国?祖.玛珑JO MALONE橙花香水 100ML', '328', '364', '月销120', '', 'btn_addcart', 'btn_addcart', 'btn_fav', '香氛', '香氛', 'http://p2.jmstatic.com/product/001/497/1497082_std/1497082_1000_1000.jpg');
INSERT INTO `list` VALUES ('28', '【海外自营】', 'http://p1.jmstatic.com/product/001/614/1614436_std/1614436_350_350.jpg', '法国?克丽丝汀迪奥 (DIOR)永恒的爱淡香水50ml', '111', '373', '月销208', '', 'btn_addcart', 'btn_addcart', 'btn_fav', '装扮', '', 'http://p1.jmstatic.com/product/001/614/1614436_std/1614436_1000_1000.jpg');
INSERT INTO `list` VALUES ('29', '【海外自营】', 'http://p4.jmstatic.com/product/003/030/3030759_std/3030759_350_350.jpg', '法国?香邂格蕾古法古龙水100ML', '111', '382', '月销296', '', 'btn_addcart', 'btn_addcart', 'btn_fav', '装扮', '', 'http://p4.jmstatic.com/product/003/030/3030759_std/3030759_1000_1000.jpg');
INSERT INTO `list` VALUES ('30', '【海外自营】', 'http://p4.jmstatic.com/product/003/231/3231309_std/3231309_350_350.jpg', '英国?祖.玛珑JO MALONE154号香水30ml', '111', '0', '月销384', '', 'zuhe_zhifu_dingjing', '', '', '装扮', '', 'http://p4.jmstatic.com/product/003/231/3231309_std/3231309_1000_1000.jpg');
INSERT INTO `list` VALUES ('31', '【自营】', 'http://p2.jmstatic.com/product/003/231/3231307_std/3231307_350_350.jpg', '英国?祖.玛珑JO MALONE黑石榴香水30ml', '360', '400', '月销32', '', 'zuhe_zhifu_dingjing', '', '', '装扮', '', 'http://p2.jmstatic.com/product/003/231/3231307_std/3231307_1000_1000.jpg');
INSERT INTO `list` VALUES ('32', '【自营】', 'http://p1.jmstatic.com/product/001/497/1497051_std/1497051_350_350.jpg', '英国?祖.玛珑JO MALONE黑莓与月桂叶香水 /又名香水（黑莓与月桂叶香型）30ML', '368', '0', '月销120', '', 'zuhe_zhifu_dingjing', '', '', '装扮', '香氛', 'http://p1.jmstatic.com/product/001/497/1497051_std/1497051_1000_1000.jpg');
INSERT INTO `list` VALUES ('33', '【自营】', 'http://p4.jmstatic.com/product/003/231/3231304_std/3231304_350_350.jpg', '英国?祖.玛珑JO MALONE柚子香水30ml', '376', '418', '月销208', 'rating', 'zuhe_zhifu_dingjing', '', '', '装扮', '香氛', 'http://p4.jmstatic.com/product/003/231/3231304_std/3231304_1000_1000.jpg');
INSERT INTO `list` VALUES ('34', '【自营】', 'http://p4.jmstatic.com/product/001/497/1497099_std/1497099_350_350.jpg', '英国?祖.玛珑JO MALONE香水（牡丹与胭红麂绒香型）100ML', '384', '427', '月销296', 'rating', 'zuhe_zhifu_dingjing', '', '', '装扮', '香氛', 'http://p4.jmstatic.com/product/001/497/1497099_std/1497099_1000_1000.jpg');
INSERT INTO `list` VALUES ('35', '【自营】', 'http://p0.jmstatic.com/product/001/553/1553290_std/1553290_350_350.jpg', '法国?法国娇兰(Guerlain) 小黑裙浓香水100ml', '214', '436', '月销384', 'rating', 'zuhe_zhifu_dingjing', '', '', '装扮', '香氛', 'http://p0.jmstatic.com/product/001/553/1553290_std/1553290_1000_1000.jpg');
INSERT INTO `list` VALUES ('36', '【自营】', 'http://p2.jmstatic.com/product/004/105/4105132_std/4105132_350_350.jpg', '卡尔文克雷恩(CALVIN KLEIN)卡雷欧淡香水 50ml', '214', '445', '月销32', '', 'zuhe_zhifu_dingjing', '', '', '装扮', '香氛', 'http://p2.jmstatic.com/product/004/105/4105132_std/4105132_1000_1000.jpg');
INSERT INTO `list` VALUES ('37', '【自营】', 'http://p0.jmstatic.com/product/001/329/1329220_std/1329220_350_350.jpg', '美国?卡尔文克雷恩(CALVIN KLEIN)卡雷比香水(又名卡文克莱卡莱比淡香水)50ml', '214', '454', '月销120', '', 'zuhe_zhifu_dingjing', '', '', '装扮', '香氛', 'http://p0.jmstatic.com/product/001/329/1329220_std/1329220_1000_1000.jpg');
INSERT INTO `list` VALUES ('38', '【自营】', 'http://p1.jmstatic.com/product/003/418/3418326_std/3418326_350_350.jpg', '英国?祖.玛珑JO MALONE香水（鼠尾草与海盐香型）30ML', '416', '463', '月销208', 'rating', 'btn_addcart', 'btn_addcart', 'btn_fav', '装扮', '香氛', 'http://p1.jmstatic.com/product/003/418/3418326_std/3418326_1000_1000.jpg');
INSERT INTO `list` VALUES ('39', '【自营】', 'http://p3.jmstatic.com/product/001/666/1666048_std/1666048_350_350.jpg', '宝格丽绿色经典淡香水（绿茶香）40ml', '424', '472', '月销296', 'rating', 'btn_addcart', 'btn_addcart', 'btn_fav', '装扮', '香氛', 'http://p3.jmstatic.com/product/001/666/1666048_std/1666048_1000_1000.jpg');
INSERT INTO `list` VALUES ('40', '【自营】', 'http://p4.jmstatic.com/product/001/329/1329219_std/1329219_350_350.jpg', 'layered fragrance 试管香水10ml', '214', '481', '月销384', 'rating', 'btn_addcart', 'btn_addcart', 'btn_fav', '香氛', '香氛', 'http://p4.jmstatic.com/product/001/329/1329219_std/1329219_1000_1000.jpg');
INSERT INTO `list` VALUES ('41', '【海外自营】', 'http://p4.jmstatic.com/product/003/875/3875984_std/3875984_350_350.jpg', '宝格丽茗珍中性古龙水75ml', '214', '490', '4人已购买|', 'rating', 'btn_addcart', 'btn_addcart', 'btn_fav', '香氛', '香氛', 'http://p4.jmstatic.com/product/003/875/3875984_std/3875984_1000_1000.jpg');
INSERT INTO `list` VALUES ('42', '【海外自营】', 'http://p0.jmstatic.com/product/003/402/3402970_std/3402970_350_350.jpg', '美国?卡尔文克雷恩(CALVIN KLEIN)卡雷优淡香水(炫金限量版)50ml', '214', '499', '5人已购买|', 'rating', 'btn_addcart', 'btn_addcart', 'btn_fav', '香氛', '香氛', 'http://p0.jmstatic.com/product/003/402/3402970_std/3402970_1000_1000.jpg');
INSERT INTO `list` VALUES ('43', '【海外自营】', 'http://p0.jmstatic.com/product/000/004/4740_std/4740_350_350.jpg', '英国?祖.玛珑JO MALONE 香水（英国梨与小苍兰香型）30ml', '214', '0', '6人已购买|', 'rating', 'btn_addcart', 'btn_addcart', 'btn_fav', '香氛', '香氛', 'http://p0.jmstatic.com/product/000/004/4740_std/4740_1000_1000.jpg');
INSERT INTO `list` VALUES ('44', '【海外自营】', 'http://p4.jmstatic.com/product/001/497/1497059_std/1497059_350_350.jpg', '美国?卡尔文克雷恩（CALVIN KLEIN）卡莱优淡/卡雷优香水（又名卡文克莱卡莱优淡香水）100ml', '214', '517', '7人已购买|', '', 'btn_addcart', 'btn_addcart', 'btn_fav', '香氛', '香氛', 'http://p4.jmstatic.com/product/001/497/1497059_std/1497059_1000_1000.jpg');
INSERT INTO `list` VALUES ('45', '【海外自营】', 'http://p2.jmstatic.com/product/004/744/4744532_std/4744532_350_350.jpg', '卡尔文克雷恩(CALVIN KLEIN)卡雷欧淡香水100ml', '472', '526', '8人已购买|', '', 'btn_addcart', 'btn_addcart', 'btn_fav', '香氛', '香氛', 'http://p2.jmstatic.com/product/004/744/4744532_std/4744532_1000_1000.jpg');
INSERT INTO `list` VALUES ('46', '【自营】', 'http://p2.jmstatic.com/product/000/002/2282_std/2282_350_350.jpg', '美国?卡尔文克雷恩(CALVIN KLEIN) 卡雷比香水（又名卡文克莱卡莱比淡香水）100ml', '480', '535', '9人已购买|', '', 'btn_addcart', 'btn_addcart', 'btn_fav', '装扮', '香氛', 'http://p2.jmstatic.com/product/000/002/2282_std/2282_1000_1000.jpg');
INSERT INTO `list` VALUES ('47', '【自营】', 'http://p2.jmstatic.com/product/001/497/1497042_std/1497042_350_350.jpg', '英国?祖.玛珑JO MALONE橙花香水 30ML', '488', '0', '10人已购买|', '', 'btn_addcart', 'btn_addcart', 'btn_fav', '装扮', '香氛', 'http://p2.jmstatic.com/product/001/497/1497042_std/1497042_1000_1000.jpg');
INSERT INTO `list` VALUES ('48', '【自营】', 'http://p2.jmstatic.com/product/003/821/3821812_std/3821812_350_350.jpg', '英国?祖.玛珑JO MALONE英国梨与小苍兰香水100ML', '496', '553', '11人已购买|', '', 'btn_addcart', 'btn_addcart', 'btn_fav', '装扮', '', 'http://p2.jmstatic.com/product/003/821/3821812_std/3821812_1000_1000.jpg');
INSERT INTO `list` VALUES ('49', '【海外自营】', 'http://p4.jmstatic.com/product/004/578/4578714_std/4578714_350_350.jpg', '美国?卡尔文克雷恩(CALVIN?KLEIN)卡雷比香水(又名卡文克莱卡莱比淡香水)200ml', '504', '562', '12人已购买|', 'rating', 'btn_addcart', 'btn_addcart', 'btn_fav', '装扮', '香氛', 'http://p4.jmstatic.com/product/004/578/4578714_std/4578714_1000_1000.jpg');
INSERT INTO `list` VALUES ('50', '【海外自营】', 'http://p0.jmstatic.com/product/003/821/3821810_std/3821810_350_350.jpg', '卡尔文克雷恩卡雷优香水20ml', '221', '0', '13人已购买|', 'rating', 'btn_addcart', 'btn_addcart', 'btn_fav', '装扮', '香氛', 'http://p0.jmstatic.com/product/003/821/3821810_std/3821810_1000_1000.jpg');
INSERT INTO `list` VALUES ('51', '【自营】', 'http://p1.jmstatic.com/product/003/418/3418326_std/3418326_350_350.jpg', '英国?祖.玛珑JO MALONE香水（法国菩提花香型）30ml', '221', '580', '14人已购买|', 'rating', 'btn_addcart', 'btn_addcart', 'btn_fav', '', '香氛', 'http://p1.jmstatic.com/product/003/418/3418326_std/3418326_1000_1000.jpg');
INSERT INTO `list` VALUES ('52', '【自营】', 'http://p3.jmstatic.com/product/001/666/1666048_std/1666048_350_350.jpg', '美国?卡尔文克雷恩(CALVIN KLEIN)卡莱优淡香水/卡雷优香水/卡文克莱卡莱优淡香水 200ml', '221', '589', '月销208', '', 'btn_addcart', 'btn_addcart', 'btn_fav', '', '香氛', 'http://p3.jmstatic.com/product/001/666/1666048_std/1666048_1000_1000.jpg');
INSERT INTO `list` VALUES ('53', '【自营】', 'http://p4.jmstatic.com/product/001/329/1329219_std/1329219_350_350.jpg', '英国?祖.玛珑JO MALONE红玫瑰香水 100ML', '221', '598', '月销296', '', 'btn_addcart', 'btn_addcart', 'btn_fav', '', '香氛', 'http://p4.jmstatic.com/product/001/329/1329219_std/1329219_1000_1000.jpg');
INSERT INTO `list` VALUES ('54', '【海外自营】', 'http://p4.jmstatic.com/product/003/875/3875984_std/3875984_350_350.jpg', '英国?祖.玛珑JO MALONE橙花香水 100ML', '544', '0', '月销384', 'rating', 'btn_addcart', 'btn_addcart', 'btn_fav', '装扮', '香氛', 'http://p4.jmstatic.com/product/003/875/3875984_std/3875984_1000_1000.jpg');
INSERT INTO `list` VALUES ('55', '【海外自营】', 'http://p0.jmstatic.com/product/003/402/3402970_std/3402970_350_350.jpg', '法国?克丽丝汀迪奥 (DIOR)永恒的爱淡香水50ml', '552', '616', '月销32', 'rating', 'btn_addcart', 'btn_addcart', 'btn_fav', '装扮', '香氛', 'http://p0.jmstatic.com/product/003/402/3402970_std/3402970_1000_1000.jpg');
INSERT INTO `list` VALUES ('56', '【海外自营】', 'http://p0.jmstatic.com/product/000/004/4740_std/4740_350_350.jpg', '法国?香邂格蕾古法古龙水100ML', '560', '625', '月销120', 'rating', 'btn_addcart', 'btn_addcart', 'btn_fav', '装扮', '', 'http://p0.jmstatic.com/product/000/004/4740_std/4740_1000_1000.jpg');
INSERT INTO `list` VALUES ('57', '【海外自营】', 'http://p4.jmstatic.com/product/001/497/1497059_std/1497059_350_350.jpg', '英国?祖.玛珑JO MALONE154号香水30ml', '568', '0', '月销208', '', 'btn_addcart', 'btn_addcart', 'btn_fav', '装扮', '', 'http://p4.jmstatic.com/product/001/497/1497059_std/1497059_1000_1000.jpg');
INSERT INTO `list` VALUES ('58', '【海外自营】', 'http://p2.jmstatic.com/product/004/744/4744532_std/4744532_350_350.jpg', '英国?祖.玛珑JO MALONE黑石榴香水30ml', '123', '643', '月销296', '', 'btn_addcart', 'btn_addcart', 'btn_fav', '装扮', '', 'http://p2.jmstatic.com/product/004/744/4744532_std/4744532_1000_1000.jpg');
INSERT INTO `list` VALUES ('59', '【自营】', 'http://p2.jmstatic.com/product/000/002/2282_std/2282_350_350.jpg', '英国?祖.玛珑JO MALONE黑莓与月桂叶香水 /又名香水（黑莓与月桂叶香型）30ML', '123', '0', '月销384', 'rating', 'btn_addcart', 'btn_addcart', 'btn_fav', '装扮', '', 'http://p2.jmstatic.com/product/000/002/2282_std/2282_1000_1000.jpg');
INSERT INTO `list` VALUES ('60', '【自营】', 'http://p2.jmstatic.com/product/001/497/1497042_std/1497042_350_350.jpg', '英国?祖.玛珑JO MALONE柚子香水30ml', '123', '661', '月销32', 'rating', 'btn_addcart', 'btn_addcart', 'btn_fav', '装扮', '', 'http://p2.jmstatic.com/product/001/497/1497042_std/1497042_1000_1000.jpg');
INSERT INTO `list` VALUES ('61', '【自营】', 'http://p2.jmstatic.com/product/003/821/3821812_std/3821812_350_350.jpg', '英国?祖.玛珑JO MALONE香水（牡丹与胭红麂绒香型）100ML', '123', '0', '月销32', 'rating', 'btn_addcart', 'btn_addcart', 'btn_fav', '装扮', '', 'http://p2.jmstatic.com/product/003/821/3821812_std/3821812_1000_1000.jpg');
INSERT INTO `list` VALUES ('62', '【海外自营】', 'http://p0.jmstatic.com/product/000/004/4740_std/4740_350_350.jpg', '法国?香邂格蕾古法古龙水100ML', '112', '625', '月销120', 'rating', 'btn_addcart', 'btn_addcart', 'btn_fav', '装扮', '', 'http://p0.jmstatic.com/product/000/004/4740_std/4740_1000_1000.jpg');
INSERT INTO `list` VALUES ('63', '【海外自营】', 'http://p4.jmstatic.com/product/001/497/1497059_std/1497059_350_350.jpg', '英国?祖.玛珑JO MALONE154号香水30ml', '112', '0', '月销208', '', 'btn_addcart', 'btn_addcart', 'btn_fav', '装扮', '', 'http://p4.jmstatic.com/product/001/497/1497059_std/1497059_1000_1000.jpg');
INSERT INTO `list` VALUES ('64', '【海外自营】', 'http://p2.jmstatic.com/product/004/744/4744532_std/4744532_350_350.jpg', '英国?祖.玛珑JO MALONE黑石榴香水30ml', '112', '643', '月销296', '', 'btn_addcart', 'btn_addcart', 'btn_fav', '装扮', '', 'http://p2.jmstatic.com/product/004/744/4744532_std/4744532_1000_1000.jpg');
INSERT INTO `list` VALUES ('65', '【自营】', 'http://p2.jmstatic.com/product/000/002/2282_std/2282_350_350.jpg', '英国?祖.玛珑JO MALONE黑莓与月桂叶香水 /又名香水（黑莓与月桂叶香型）30ML', '584', '0', '月销384', 'rating', 'btn_addcart', 'btn_addcart', 'btn_fav', '装扮', '', 'http://p2.jmstatic.com/product/000/002/2282_std/2282_1000_1000.jpg');
INSERT INTO `list` VALUES ('66', '【自营】', 'http://p2.jmstatic.com/product/001/497/1497042_std/1497042_350_350.jpg', '英国?祖.玛珑JO MALONE柚子香水30ml', '592', '661', '月销32', 'rating', 'btn_addcart', 'btn_addcart', 'btn_fav', '装扮', '', 'http://p2.jmstatic.com/product/001/497/1497042_std/1497042_1000_1000.jpg');
INSERT INTO `list` VALUES ('67', '【自营】', 'http://p2.jmstatic.com/product/003/821/3821812_std/3821812_350_350.jpg', '英国?祖.玛珑JO MALONE香水（牡丹与胭红麂绒香型）100ML', '455', '0', '月销32', 'rating', 'btn_addcart', 'btn_addcart', 'btn_fav', '装扮', '', 'http://p2.jmstatic.com/product/003/821/3821812_std/3821812_1000_1000.jpg');
INSERT INTO `list` VALUES ('68', '【自营】', 'http://p2.jmstatic.com/product/001/497/1497042_std/1497042_350_350.jpg', '英国?祖.玛珑JO MALONE柚子香水30ml', '592', '661', '月销32', 'rating', 'btn_addcart', 'btn_addcart', 'btn_fav', '装扮', '', 'http://p2.jmstatic.com/product/001/497/1497042_std/1497042_1000_1000.jpg');
INSERT INTO `list` VALUES ('69', '【自营】', 'http://p2.jmstatic.com/product/003/821/3821812_std/3821812_350_350.jpg', '英国?祖.玛珑JO MALONE香水（牡丹与胭红麂绒香型）100ML', '600', '0', '月销32', 'rating', 'btn_addcart', 'btn_addcart', 'btn_fav', '装扮', '', 'http://p2.jmstatic.com/product/003/821/3821812_std/3821812_1000_1000.jpg');

-- ----------------------------
-- Table structure for reg
-- ----------------------------
DROP TABLE IF EXISTS `reg`;
CREATE TABLE `reg` (
  `id` int(6) unsigned NOT NULL AUTO_INCREMENT,
  `user` varchar(255) NOT NULL,
  `psw` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=14 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of reg
-- ----------------------------
INSERT INTO `reg` VALUES ('1', '13189404509', '123456');
INSERT INTO `reg` VALUES ('2', '13184839985', 'q111111');
INSERT INTO `reg` VALUES ('3', '13111111111', 'q111111');
INSERT INTO `reg` VALUES ('4', '13190909090', 'q11111');
INSERT INTO `reg` VALUES ('5', '13122222222', 'w222222');
INSERT INTO `reg` VALUES ('6', '13111111122', 'q222222');
INSERT INTO `reg` VALUES ('7', '13111111133', 'e333333');
INSERT INTO `reg` VALUES ('8', '13189898899', 's123456');
INSERT INTO `reg` VALUES ('9', '13145454545', 'r123456');
INSERT INTO `reg` VALUES ('10', '13109090909', 'q111111');
INSERT INTO `reg` VALUES ('11', '13787877911', 's12345');
INSERT INTO `reg` VALUES ('12', '13189898989', 't123456');
INSERT INTO `reg` VALUES ('13', '13178787878', 'q123456');

-- ----------------------------
-- Table structure for shopping
-- ----------------------------
DROP TABLE IF EXISTS `shopping`;
CREATE TABLE `shopping` (
  `id` int(8) unsigned NOT NULL,
  `name` varchar(255) NOT NULL,
  `price` varchar(255) NOT NULL,
  `img` varchar(255) NOT NULL,
  `num` int(8) unsigned NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of shopping
-- ----------------------------
INSERT INTO `shopping` VALUES ('2', 'W.DRESSROOM香氛喷雾70ml', '128', 'http://p1.jmstatic.com/product/003/418/3418326_std/3418326_350_350.jpg', '1');
INSERT INTO `shopping` VALUES ('6', '美国?卡尔文克雷恩(CALVIN KLEIN)卡雷优淡香水（炫金限量版）100ml', '160', 'http://p0.jmstatic.com/product/003/402/3402970_std/3402970_350_350.jpg', '1');

-- ----------------------------
-- Table structure for shouye
-- ----------------------------
DROP TABLE IF EXISTS `shouye`;
CREATE TABLE `shouye` (
  `id` int(255) unsigned NOT NULL AUTO_INCREMENT,
  `scr` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `price` decimal(10,0) unsigned NOT NULL,
  `del` decimal(10,0) unsigned NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=39 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of shouye
-- ----------------------------
INSERT INTO `shouye` VALUES ('1', '20504_dx_1000_400.jpg', '欣兰多媚卡雅黑冻膜225g，强力吸附灰尘污垢。', '80', '82');
INSERT INTO `shouye` VALUES ('2', '4032986_dx_1000_400.jpg', '娜斯丽卸妆洁面啫哩香橙，卸妆护肤一步到位。', '95', '97');
INSERT INTO `shouye` VALUES ('3', '4442380_dx_1000_400.jpg', '花印清新净颜卸妆水(滋养型)380ml，恢复纯净真素颜', '110', '112');
INSERT INTO `shouye` VALUES ('4', '4816812_dx_1000_400.jpg', '【第2件1元】完美日记十二色探险家动物眼影', '125', '127');
INSERT INTO `shouye` VALUES ('5', '68578_dx_1000_400.jpg', '花印水漾洁净洗面乳150g，富含11种氨基酸温和不紧绷', '140', '142');
INSERT INTO `shouye` VALUES ('6', '3021_dx_1000_400.jpg', '花印水漾润透补水面膜(免洗型)80g，一夜水润尽享！', '155', '157');
INSERT INTO `shouye` VALUES ('7', '3469884_350_350.jpg', '水宝宝纯净防晒乳237ml，呵护你的娇嫩美肌。', '170', '172');
INSERT INTO `shouye` VALUES ('8', '4318192_dx_1000_400.jpg', '娜斯丽保湿化妆水香橙500ml，唤醒肌肤活力。', '185', '187');
INSERT INTO `shouye` VALUES ('9', '3469882_dx_1000_400.jpg', '确美同水宝宝纯净防晒乳59ML，宝宝都能用的防晒霜。', '200', '202');
INSERT INTO `shouye` VALUES ('10', '3365132_dx_1000_400.jpg', 'AHC 高浓缩B5玻尿酸水乳套装120ml+120ml，重磅来袭', '215', '217');
INSERT INTO `shouye` VALUES ('11', '20504_dx_1000_400.jpg', '欣兰多媚卡雅黑冻膜226g，强力吸附灰尘污垢。', '230', '232');
INSERT INTO `shouye` VALUES ('12', '4032986_dx_1000_400.jpg', '娜斯丽卸妆洁面啫哩香橙，卸妆护肤一步到位。', '245', '247');
INSERT INTO `shouye` VALUES ('13', '4442380_dx_1000_400.jpg', '花印清新净颜卸妆水(滋养型)381ml，恢复纯净真素颜', '260', '262');
INSERT INTO `shouye` VALUES ('14', '4816812_dx_1000_400.jpg', '【第2件2元】完美日记十二色探险家动物眼影', '275', '277');
INSERT INTO `shouye` VALUES ('15', '68578_dx_1000_400.jpg', '花印水漾洁净洗面乳150g，富含12种氨基酸温和不紧绷', '290', '292');
INSERT INTO `shouye` VALUES ('16', '3021_dx_1000_400.jpg', '花印水漾润透补水面膜(免洗型)81g，一夜水润尽享！', '305', '307');
INSERT INTO `shouye` VALUES ('17', '3469884_350_350.jpg', '水宝宝纯净防晒乳238ml，呵护你的娇嫩美肌。', '320', '322');
INSERT INTO `shouye` VALUES ('18', '4318192_dx_1000_400.jpg', '娜斯丽保湿化妆水香橙501ml，唤醒肌肤活力。', '335', '337');
INSERT INTO `shouye` VALUES ('19', '3469882_dx_1000_400.jpg', '确美同水宝宝纯净防晒乳60ML，宝宝都能用的防晒霜。', '350', '352');
INSERT INTO `shouye` VALUES ('20', '3365132_dx_1000_400.jpg', 'AHC 高浓缩B5玻尿酸水乳套装120ml+121ml，重磅来袭', '365', '367');
INSERT INTO `shouye` VALUES ('21', '20504_dx_1000_400.jpg', '欣兰多媚卡雅黑冻膜227g，强力吸附灰尘污垢。', '380', '382');
INSERT INTO `shouye` VALUES ('22', '4032986_dx_1000_400.jpg', '娜斯丽卸妆洁面啫哩香橙，卸妆护肤一步到位。', '395', '397');
INSERT INTO `shouye` VALUES ('23', '4442380_dx_1000_400.jpg', '花印清新净颜卸妆水(滋养型)382ml，恢复纯净真素颜', '410', '412');
INSERT INTO `shouye` VALUES ('24', '4816812_dx_1000_400.jpg', '【第2件3元】完美日记十二色探险家动物眼影', '425', '427');
INSERT INTO `shouye` VALUES ('25', '68578_dx_1000_400.jpg', '花印水漾洁净洗面乳150g，富含13种氨基酸温和不紧绷', '440', '442');
INSERT INTO `shouye` VALUES ('26', '3021_dx_1000_400.jpg', '花印水漾润透补水面膜(免洗型)82g，一夜水润尽享！', '455', '457');
INSERT INTO `shouye` VALUES ('27', '3469884_350_350.jpg', '水宝宝纯净防晒乳239ml，呵护你的娇嫩美肌。', '470', '472');
INSERT INTO `shouye` VALUES ('28', '4318192_dx_1000_400.jpg', '娜斯丽保湿化妆水香橙502ml，唤醒肌肤活力。', '485', '487');
INSERT INTO `shouye` VALUES ('29', '3469882_dx_1000_400.jpg', '确美同水宝宝纯净防晒乳61ML，宝宝都能用的防晒霜。', '500', '502');
INSERT INTO `shouye` VALUES ('30', '3365132_dx_1000_400.jpg', 'AHC 高浓缩B5玻尿酸水乳套装120ml+122ml，重磅来袭', '515', '517');
INSERT INTO `shouye` VALUES ('31', '20504_dx_1000_400.jpg', '欣兰多媚卡雅黑冻膜228g，强力吸附灰尘污垢。', '530', '532');
INSERT INTO `shouye` VALUES ('32', '4032986_dx_1000_400.jpg', '娜斯丽卸妆洁面啫哩香橙，卸妆护肤一步到位。', '545', '547');
INSERT INTO `shouye` VALUES ('33', '4442380_dx_1000_400.jpg', '花印清新净颜卸妆水(滋养型)383ml，恢复纯净真素颜', '560', '562');
INSERT INTO `shouye` VALUES ('34', '4816812_dx_1000_400.jpg', '【第2件4元】完美日记十二色探险家动物眼影', '575', '577');
INSERT INTO `shouye` VALUES ('35', '68578_dx_1000_400.jpg', '花印水漾洁净洗面乳150g，富含14种氨基酸温和不紧绷', '590', '592');
INSERT INTO `shouye` VALUES ('36', '3021_dx_1000_400.jpg', '花印水漾润透补水面膜(免洗型)83g，一夜水润尽享！', '605', '607');
INSERT INTO `shouye` VALUES ('37', '3469884_350_350.jpg', '水宝宝纯净防晒乳240ml，呵护你的娇嫩美肌。', '620', '622');
INSERT INTO `shouye` VALUES ('38', '4318192_dx_1000_400.jpg', '娜斯丽保湿化妆水香橙503ml，唤醒肌肤活力。', '635', '637');

-- ----------------------------
-- Table structure for xinxi
-- ----------------------------
DROP TABLE IF EXISTS `xinxi`;
CREATE TABLE `xinxi` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `icon` varchar(255) DEFAULT NULL,
  `img` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `price` decimal(10,0) unsigned NOT NULL,
  `del` decimal(10,0) unsigned NOT NULL,
  `search_pl` varchar(255) NOT NULL,
  `xx` varchar(255) NOT NULL,
  `kk` varchar(255) NOT NULL,
  `jiaru` varchar(255) NOT NULL,
  `shouc` varchar(255) DEFAULT NULL,
  `ted1` varchar(255) DEFAULT NULL,
  `ted2` varchar(255) DEFAULT NULL,
  `img2` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=70 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of xinxi
-- ----------------------------
INSERT INTO `xinxi` VALUES ('1', '【自营】', 'http://p0.jmstatic.com/product/001/329/1329220_std/1329220_350_350.jpg', 'W.DRESSROOM香氛杀菌喷雾30ml', '120', '130', '新品上线', 'rating', 'zuhe_zhifu_dingjing', '', '', '装扮', '', 'http://p0.jmstatic.com/product/001/329/1329220_std/1329220_1000_1000.jpg');
INSERT INTO `xinxi` VALUES ('2', '【自营】', 'http://p1.jmstatic.com/product/003/418/3418326_std/3418326_350_350.jpg', 'W.DRESSROOM香氛喷雾70ml', '128', '139', '月销32', '', 'zuhe_zhifu_dingjing', '', '', '装扮', '', 'http://p1.jmstatic.com/product/003/418/3418326_std/3418326_1000_1000.jpg');
INSERT INTO `xinxi` VALUES ('3', '【自营】', 'http://p3.jmstatic.com/product/001/666/1666048_std/1666048_350_350.jpg', '卡尔文克雷恩卡莱优淡香水 200ml', '136', '148', '月销120', '', 'zuhe_zhifu_dingjing', '', '', '装扮', '香氛', 'http://p3.jmstatic.com/product/001/666/1666048_std/1666048_1000_1000.jpg');
INSERT INTO `xinxi` VALUES ('4', '【自营】', 'http://p4.jmstatic.com/product/001/329/1329219_std/1329219_350_350.jpg', '卡文克莱卡雷比香水100ml', '144', '0', '月销208', 'rating', 'btn_addcart', 'btn_addcart', 'btn_fav', '装扮', '香氛', 'http://p4.jmstatic.com/product/001/329/1329219_std/1329219_1000_1000.jpg');
INSERT INTO `xinxi` VALUES ('5', '【自营】', 'http://p4.jmstatic.com/product/003/875/3875984_std/3875984_350_350.jpg', 'W.DRESSROOM香氛杀菌喷雾30ml', '152', '166', '月销296', '', 'btn_addcart', 'btn_addcart', 'btn_fav', '装扮', '', 'http://p4.jmstatic.com/product/003/875/3875984_std/3875984_1000_1000.jpg');
INSERT INTO `xinxi` VALUES ('6', '【自营】', 'http://p0.jmstatic.com/product/003/402/3402970_std/3402970_350_350.jpg', '美国?卡尔文克雷恩(CALVIN KLEIN)卡雷优淡香水（炫金限量版）100ml', '160', '175', '月销384', 'rating', 'btn_addcart', 'btn_addcart', 'btn_fav', '装扮', '', 'http://p0.jmstatic.com/product/003/402/3402970_std/3402970_1000_1000.jpg');
INSERT INTO `xinxi` VALUES ('7', '【自营】', 'http://p0.jmstatic.com/product/000/004/4740_std/4740_350_350.jpg', '美国?卡尔文克雷恩(CALVIN KLEIN)卡雷优香水（又名卡莱优淡香水）50ml', '168', '184', '新品上线', 'rating', 'btn_addcart', 'btn_addcart', 'btn_fav', '装扮', '', 'http://p0.jmstatic.com/product/000/004/4740_std/4740_1000_1000.jpg');
INSERT INTO `xinxi` VALUES ('8', '【自营】', 'http://p4.jmstatic.com/product/001/497/1497059_std/1497059_350_350.jpg', '英国?祖.玛珑JO MALONE蓝风铃香水/又名香水（蓝风铃香型）30ML', '123', '193', '新品上线', 'rating', 'btn_addcart', 'btn_addcart', 'btn_fav', '装扮', '', 'http://p4.jmstatic.com/product/001/497/1497059_std/1497059_1000_1000.jpg');
INSERT INTO `xinxi` VALUES ('9', '【自营】', 'http://p2.jmstatic.com/product/004/744/4744532_std/4744532_350_350.jpg', '卡尔文克雷恩卡雷优香水(幸运当红版)100ml', '123', '0', '新品上线', '', 'btn_addcart', 'btn_addcart', 'btn_fav', '装扮', '', 'http://p2.jmstatic.com/product/004/744/4744532_std/4744532_1000_1000.jpg');
INSERT INTO `xinxi` VALUES ('10', '【自营】', 'http://p2.jmstatic.com/product/000/002/2282_std/2282_350_350.jpg', '美国?卡尔文克雷恩(CALVIN KLEIN)卡雷比香水(又名卡文克莱卡莱比淡香水)50ml', '123', '0', '新品上线', '', 'btn_addcart', 'btn_addcart', 'btn_fav', '装扮', '', 'http://p2.jmstatic.com/product/000/002/2282_std/2282_1000_1000.jpg');
INSERT INTO `xinxi` VALUES ('11', '【海外自营】', 'http://p2.jmstatic.com/product/001/497/1497042_std/1497042_350_350.jpg', '英国?祖.玛珑JO MALONE香水（鼠尾草与海盐香型）30ML', '123', '220', '新品上线', '', 'btn_addcart', 'btn_addcart', 'btn_fav', '装扮', '', 'http://p2.jmstatic.com/product/001/497/1497042_std/1497042_1000_1000.jpg');
INSERT INTO `xinxi` VALUES ('12', '【海外自营】', 'http://p2.jmstatic.com/product/003/821/3821812_std/3821812_350_350.jpg', '宝格丽绿色经典淡香水（绿茶香）40ml', '123', '0', '新品上线', '', 'btn_addcart', 'btn_addcart', 'btn_fav', '装扮', '', 'http://p2.jmstatic.com/product/003/821/3821812_std/3821812_1000_1000.jpg');
INSERT INTO `xinxi` VALUES ('13', '【海外自营】', 'http://p4.jmstatic.com/product/004/578/4578714_std/4578714_350_350.jpg', 'layered fragrance 试管香水10ml', '123', '238', '新品上线', '', 'zuhe_zhifu_dingjing', '', '', '装扮', '', 'http://p4.jmstatic.com/product/004/578/4578714_std/4578714_1000_1000.jpg');
INSERT INTO `xinxi` VALUES ('14', '【海外自营】', 'http://p0.jmstatic.com/product/003/821/3821810_std/3821810_350_350.jpg', '宝格丽茗珍中性古龙水75ml', '224', '0', '新品上线', '', 'zuhe_zhifu_dingjing', '', '', '装扮', '香氛', 'http://p0.jmstatic.com/product/003/821/3821810_std/3821810_1000_1000.jpg');
INSERT INTO `xinxi` VALUES ('15', '【海外自营】', 'http://p3.jmstatic.com/product/003/402/3402968_std/3402968_350_350.jpg', '美国?卡尔文克雷恩(CALVIN KLEIN)卡雷优淡香水(炫金限量版)50ml', '232', '256', '新品上线', '', 'zuhe_zhifu_dingjing', '', '', '装扮', '香氛', 'http://p3.jmstatic.com/product/003/402/3402968_std/3402968_1000_1000.jpg');
INSERT INTO `xinxi` VALUES ('16', '【自营】', 'http://p4.jmstatic.com/product/001/497/1497019_std/1497019_350_350.jpg', '英国?祖.玛珑JO MALONE 香水（英国梨与小苍兰香型）30ml', '240', '265', '新品上线', 'rating', 'zuhe_zhifu_dingjing', '', '', '香氛', '香氛', 'http://p4.jmstatic.com/product/001/497/1497019_std/1497019_1000_1000.jpg');
INSERT INTO `xinxi` VALUES ('17', '【自营】', 'http://p4.jmstatic.com/product/001/497/1497019_std/1497019_350_350.jpg', '美国?卡尔文克雷恩（CALVIN KLEIN）卡莱优淡/卡雷优香水（又名卡文克莱卡莱优淡香水）100ml', '248', '274', '新品上线', 'rating', 'zuhe_zhifu_dingjing', '', '', '香氛', '香氛', 'http://p4.jmstatic.com/product/001/497/1497019_std/1497019_1000_1000.jpg');
INSERT INTO `xinxi` VALUES ('18', '【自营】', 'http://p4.jmstatic.com/product/004/105/4105134_std/4105134_350_350.jpg', '卡尔文克雷恩(CALVIN KLEIN)卡雷欧淡香水100ml', '256', '283', '新品上线', 'rating', 'zuhe_zhifu_dingjing', '', '', '香氛', '香氛', 'http://p4.jmstatic.com/product/004/105/4105134_std/4105134_1000_1000.jpg');
INSERT INTO `xinxi` VALUES ('19', '【自营】', 'http://p3.jmstatic.com/product/001/054/1054218_std/1054218_350_350.jpg', '美国?卡尔文克雷恩(CALVIN KLEIN) 卡雷比香水（又名卡文克莱卡莱比淡香水）100ml', '145', '292', '新品上线', '', 'zuhe_zhifu_dingjing', '', '', '香氛', '香氛', 'http://p3.jmstatic.com/product/001/054/1054218_std/1054218_1000_1000.jpg');
INSERT INTO `xinxi` VALUES ('20', '【自营】', 'http://p2.jmstatic.com/product/001/497/1497037_std/1497037_350_350.jpg', '英国?祖.玛珑JO MALONE橙花香水 30ML', '145', '301', '新品上线', 'rating', 'btn_addcart', '', '', '香氛', '香氛', 'http://p2.jmstatic.com/product/001/497/1497037_std/1497037_1000_1000.jpg');
INSERT INTO `xinxi` VALUES ('21', '【自营】', 'http://p1.jmstatic.com/product/001/497/1497076_std/1497076_350_350.jpg', '英国?祖.玛珑JO MALONE英国梨与小苍兰香水100ML', '145', '310', '新品上线', 'rating', 'btn_addcart', 'btn_addcart', 'btn_fav', '香氛', '香氛', 'http://p1.jmstatic.com/product/001/497/1497076_std/1497076_1000_1000.jpg');
INSERT INTO `xinxi` VALUES ('22', '【自营】', 'http://p4.jmstatic.com/product/001/054/1054219_std/1054219_350_350.jpg', '美国?卡尔文克雷恩(CALVIN?KLEIN)卡雷比香水(又名卡文克莱卡莱比淡香水)200ml', '145', '0', '新品上线', 'rating', 'btn_addcart', 'btn_addcart', 'btn_fav', '香氛', '香氛', 'http://p4.jmstatic.com/product/001/054/1054219_std/1054219_1000_1000.jpg');
INSERT INTO `xinxi` VALUES ('23', '【自营】', 'http://p1.jmstatic.com/product/004/446/4446776_std/4446776_350_350.jpg', '卡尔文克雷恩卡雷优香水20ml', '296', '328', '新品上线', '', 'btn_addcart', 'btn_addcart', 'btn_fav', '香氛', '香氛', 'http://p1.jmstatic.com/product/004/446/4446776_std/4446776_1000_1000.jpg');
INSERT INTO `xinxi` VALUES ('24', '【自营】', 'http://p3.jmstatic.com/product/003/231/3231308_std/3231308_350_350.jpg', '英国?祖.玛珑JO MALONE香水（法国菩提花香型）30ml', '304', '337', '新品上线', '', 'btn_addcart', 'btn_addcart', 'btn_fav', '香氛', '香氛', 'http://p3.jmstatic.com/product/003/231/3231308_std/3231308_1000_1000.jpg');
INSERT INTO `xinxi` VALUES ('25', '【自营】', 'http://p2.jmstatic.com/product/001/054/1054222_std/1054222_350_350.jpg', '美国?卡尔文克雷恩(CALVIN KLEIN)卡莱优淡香水/卡雷优香水/卡文克莱卡莱优淡香水 200ml', '312', '0', '新品上线', '', 'btn_addcart', 'btn_addcart', 'btn_fav', '香氛', '香氛', 'http://p2.jmstatic.com/product/001/054/1054222_std/1054222_1000_1000.jpg');
INSERT INTO `xinxi` VALUES ('26', '【海外自营】', 'http://p1.jmstatic.com/product/001/497/1497081_std/1497081_350_350.jpg', '英国?祖.玛珑JO MALONE红玫瑰香水 100ML', '320', '355', '月销32', '', 'btn_addcart', 'btn_addcart', 'btn_fav', '香氛', '香氛', 'http://p1.jmstatic.com/product/001/497/1497081_std/1497081_1000_1000.jpg');
INSERT INTO `xinxi` VALUES ('27', '【海外自营】', 'http://p2.jmstatic.com/product/001/497/1497082_std/1497082_350_350.jpg', '英国?祖.玛珑JO MALONE橙花香水 100ML', '328', '364', '月销120', '', 'btn_addcart', 'btn_addcart', 'btn_fav', '香氛', '香氛', 'http://p2.jmstatic.com/product/001/497/1497082_std/1497082_1000_1000.jpg');
INSERT INTO `xinxi` VALUES ('28', '【海外自营】', 'http://p1.jmstatic.com/product/001/614/1614436_std/1614436_350_350.jpg', '法国?克丽丝汀迪奥 (DIOR)永恒的爱淡香水50ml', '111', '373', '月销208', '', 'btn_addcart', 'btn_addcart', 'btn_fav', '装扮', '', 'http://p1.jmstatic.com/product/001/614/1614436_std/1614436_1000_1000.jpg');
INSERT INTO `xinxi` VALUES ('29', '【海外自营】', 'http://p4.jmstatic.com/product/003/030/3030759_std/3030759_350_350.jpg', '法国?香邂格蕾古法古龙水100ML', '111', '382', '月销296', '', 'btn_addcart', 'btn_addcart', 'btn_fav', '装扮', '', 'http://p4.jmstatic.com/product/003/030/3030759_std/3030759_1000_1000.jpg');
INSERT INTO `xinxi` VALUES ('30', '【海外自营】', 'http://p4.jmstatic.com/product/003/231/3231309_std/3231309_350_350.jpg', '英国?祖.玛珑JO MALONE154号香水30ml', '111', '0', '月销384', '', 'zuhe_zhifu_dingjing', '', '', '装扮', '', 'http://p4.jmstatic.com/product/003/231/3231309_std/3231309_1000_1000.jpg');
INSERT INTO `xinxi` VALUES ('31', '【自营】', 'http://p2.jmstatic.com/product/003/231/3231307_std/3231307_350_350.jpg', '英国?祖.玛珑JO MALONE黑石榴香水30ml', '360', '400', '月销32', '', 'zuhe_zhifu_dingjing', '', '', '装扮', '', 'http://p2.jmstatic.com/product/003/231/3231307_std/3231307_1000_1000.jpg');
INSERT INTO `xinxi` VALUES ('32', '【自营】', 'http://p1.jmstatic.com/product/001/497/1497051_std/1497051_350_350.jpg', '英国?祖.玛珑JO MALONE黑莓与月桂叶香水 /又名香水（黑莓与月桂叶香型）30ML', '368', '0', '月销120', '', 'zuhe_zhifu_dingjing', '', '', '装扮', '香氛', 'http://p1.jmstatic.com/product/001/497/1497051_std/1497051_1000_1000.jpg');
INSERT INTO `xinxi` VALUES ('33', '【自营】', 'http://p4.jmstatic.com/product/003/231/3231304_std/3231304_350_350.jpg', '英国?祖.玛珑JO MALONE柚子香水30ml', '376', '418', '月销208', 'rating', 'zuhe_zhifu_dingjing', '', '', '装扮', '香氛', 'http://p4.jmstatic.com/product/003/231/3231304_std/3231304_1000_1000.jpg');
INSERT INTO `xinxi` VALUES ('34', '【自营】', 'http://p4.jmstatic.com/product/001/497/1497099_std/1497099_350_350.jpg', '英国?祖.玛珑JO MALONE香水（牡丹与胭红麂绒香型）100ML', '384', '427', '月销296', 'rating', 'zuhe_zhifu_dingjing', '', '', '装扮', '香氛', 'http://p4.jmstatic.com/product/001/497/1497099_std/1497099_1000_1000.jpg');
INSERT INTO `xinxi` VALUES ('35', '【自营】', 'http://p0.jmstatic.com/product/001/553/1553290_std/1553290_350_350.jpg', '法国?法国娇兰(Guerlain) 小黑裙浓香水100ml', '214', '436', '月销384', 'rating', 'zuhe_zhifu_dingjing', '', '', '装扮', '香氛', 'http://p0.jmstatic.com/product/001/553/1553290_std/1553290_1000_1000.jpg');
INSERT INTO `xinxi` VALUES ('36', '【自营】', 'http://p2.jmstatic.com/product/004/105/4105132_std/4105132_350_350.jpg', '卡尔文克雷恩(CALVIN KLEIN)卡雷欧淡香水 50ml', '214', '445', '月销32', '', 'zuhe_zhifu_dingjing', '', '', '装扮', '香氛', 'http://p2.jmstatic.com/product/004/105/4105132_std/4105132_1000_1000.jpg');
INSERT INTO `xinxi` VALUES ('37', '【自营】', 'http://p0.jmstatic.com/product/001/329/1329220_std/1329220_350_350.jpg', '美国?卡尔文克雷恩(CALVIN KLEIN)卡雷比香水(又名卡文克莱卡莱比淡香水)50ml', '214', '454', '月销120', '', 'zuhe_zhifu_dingjing', '', '', '装扮', '香氛', 'http://p0.jmstatic.com/product/001/329/1329220_std/1329220_1000_1000.jpg');
INSERT INTO `xinxi` VALUES ('38', '【自营】', 'http://p1.jmstatic.com/product/003/418/3418326_std/3418326_350_350.jpg', '英国?祖.玛珑JO MALONE香水（鼠尾草与海盐香型）30ML', '416', '463', '月销208', 'rating', 'btn_addcart', 'btn_addcart', 'btn_fav', '装扮', '香氛', 'http://p1.jmstatic.com/product/003/418/3418326_std/3418326_1000_1000.jpg');
INSERT INTO `xinxi` VALUES ('39', '【自营】', 'http://p3.jmstatic.com/product/001/666/1666048_std/1666048_350_350.jpg', '宝格丽绿色经典淡香水（绿茶香）40ml', '424', '472', '月销296', 'rating', 'btn_addcart', 'btn_addcart', 'btn_fav', '装扮', '香氛', 'http://p3.jmstatic.com/product/001/666/1666048_std/1666048_1000_1000.jpg');
INSERT INTO `xinxi` VALUES ('40', '【自营】', 'http://p4.jmstatic.com/product/001/329/1329219_std/1329219_350_350.jpg', 'layered fragrance 试管香水10ml', '214', '481', '月销384', 'rating', 'btn_addcart', 'btn_addcart', 'btn_fav', '香氛', '香氛', 'http://p4.jmstatic.com/product/001/329/1329219_std/1329219_1000_1000.jpg');
INSERT INTO `xinxi` VALUES ('41', '【海外自营】', 'http://p4.jmstatic.com/product/003/875/3875984_std/3875984_350_350.jpg', '宝格丽茗珍中性古龙水75ml', '214', '490', '4人已购买|', 'rating', 'btn_addcart', 'btn_addcart', 'btn_fav', '香氛', '香氛', 'http://p4.jmstatic.com/product/003/875/3875984_std/3875984_1000_1000.jpg');
INSERT INTO `xinxi` VALUES ('42', '【海外自营】', 'http://p0.jmstatic.com/product/003/402/3402970_std/3402970_350_350.jpg', '美国?卡尔文克雷恩(CALVIN KLEIN)卡雷优淡香水(炫金限量版)50ml', '214', '499', '5人已购买|', 'rating', 'btn_addcart', 'btn_addcart', 'btn_fav', '香氛', '香氛', 'http://p0.jmstatic.com/product/003/402/3402970_std/3402970_1000_1000.jpg');
INSERT INTO `xinxi` VALUES ('43', '【海外自营】', 'http://p0.jmstatic.com/product/000/004/4740_std/4740_350_350.jpg', '英国?祖.玛珑JO MALONE 香水（英国梨与小苍兰香型）30ml', '214', '0', '6人已购买|', 'rating', 'btn_addcart', 'btn_addcart', 'btn_fav', '香氛', '香氛', 'http://p0.jmstatic.com/product/000/004/4740_std/4740_1000_1000.jpg');
INSERT INTO `xinxi` VALUES ('44', '【海外自营】', 'http://p4.jmstatic.com/product/001/497/1497059_std/1497059_350_350.jpg', '美国?卡尔文克雷恩（CALVIN KLEIN）卡莱优淡/卡雷优香水（又名卡文克莱卡莱优淡香水）100ml', '214', '517', '7人已购买|', '', 'btn_addcart', 'btn_addcart', 'btn_fav', '香氛', '香氛', 'http://p4.jmstatic.com/product/001/497/1497059_std/1497059_1000_1000.jpg');
INSERT INTO `xinxi` VALUES ('45', '【海外自营】', 'http://p2.jmstatic.com/product/004/744/4744532_std/4744532_350_350.jpg', '卡尔文克雷恩(CALVIN KLEIN)卡雷欧淡香水100ml', '472', '526', '8人已购买|', '', 'btn_addcart', 'btn_addcart', 'btn_fav', '香氛', '香氛', 'http://p2.jmstatic.com/product/004/744/4744532_std/4744532_1000_1000.jpg');
INSERT INTO `xinxi` VALUES ('46', '【自营】', 'http://p2.jmstatic.com/product/000/002/2282_std/2282_350_350.jpg', '美国?卡尔文克雷恩(CALVIN KLEIN) 卡雷比香水（又名卡文克莱卡莱比淡香水）100ml', '480', '535', '9人已购买|', '', 'btn_addcart', 'btn_addcart', 'btn_fav', '装扮', '香氛', 'http://p2.jmstatic.com/product/000/002/2282_std/2282_1000_1000.jpg');
INSERT INTO `xinxi` VALUES ('47', '【自营】', 'http://p2.jmstatic.com/product/001/497/1497042_std/1497042_350_350.jpg', '英国?祖.玛珑JO MALONE橙花香水 30ML', '488', '0', '10人已购买|', '', 'btn_addcart', 'btn_addcart', 'btn_fav', '装扮', '香氛', 'http://p2.jmstatic.com/product/001/497/1497042_std/1497042_1000_1000.jpg');
INSERT INTO `xinxi` VALUES ('48', '【自营】', 'http://p2.jmstatic.com/product/003/821/3821812_std/3821812_350_350.jpg', '英国?祖.玛珑JO MALONE英国梨与小苍兰香水100ML', '496', '553', '11人已购买|', '', 'btn_addcart', 'btn_addcart', 'btn_fav', '装扮', '', 'http://p2.jmstatic.com/product/003/821/3821812_std/3821812_1000_1000.jpg');
INSERT INTO `xinxi` VALUES ('49', '【海外自营】', 'http://p4.jmstatic.com/product/004/578/4578714_std/4578714_350_350.jpg', '美国?卡尔文克雷恩(CALVIN?KLEIN)卡雷比香水(又名卡文克莱卡莱比淡香水)200ml', '504', '562', '12人已购买|', 'rating', 'btn_addcart', 'btn_addcart', 'btn_fav', '装扮', '香氛', 'http://p4.jmstatic.com/product/004/578/4578714_std/4578714_1000_1000.jpg');
INSERT INTO `xinxi` VALUES ('50', '【海外自营】', 'http://p0.jmstatic.com/product/003/821/3821810_std/3821810_350_350.jpg', '卡尔文克雷恩卡雷优香水20ml', '221', '0', '13人已购买|', 'rating', 'btn_addcart', 'btn_addcart', 'btn_fav', '装扮', '香氛', 'http://p0.jmstatic.com/product/003/821/3821810_std/3821810_1000_1000.jpg');
INSERT INTO `xinxi` VALUES ('51', '【自营】', 'http://p1.jmstatic.com/product/003/418/3418326_std/3418326_350_350.jpg', '英国?祖.玛珑JO MALONE香水（法国菩提花香型）30ml', '221', '580', '14人已购买|', 'rating', 'btn_addcart', 'btn_addcart', 'btn_fav', '', '香氛', 'http://p1.jmstatic.com/product/003/418/3418326_std/3418326_1000_1000.jpg');
INSERT INTO `xinxi` VALUES ('52', '【自营】', 'http://p3.jmstatic.com/product/001/666/1666048_std/1666048_350_350.jpg', '美国?卡尔文克雷恩(CALVIN KLEIN)卡莱优淡香水/卡雷优香水/卡文克莱卡莱优淡香水 200ml', '221', '589', '月销208', '', 'btn_addcart', 'btn_addcart', 'btn_fav', '', '香氛', 'http://p3.jmstatic.com/product/001/666/1666048_std/1666048_1000_1000.jpg');
INSERT INTO `xinxi` VALUES ('53', '【自营】', 'http://p4.jmstatic.com/product/001/329/1329219_std/1329219_350_350.jpg', '英国?祖.玛珑JO MALONE红玫瑰香水 100ML', '221', '598', '月销296', '', 'btn_addcart', 'btn_addcart', 'btn_fav', '', '香氛', 'http://p4.jmstatic.com/product/001/329/1329219_std/1329219_1000_1000.jpg');
INSERT INTO `xinxi` VALUES ('54', '【海外自营】', 'http://p4.jmstatic.com/product/003/875/3875984_std/3875984_350_350.jpg', '英国?祖.玛珑JO MALONE橙花香水 100ML', '544', '0', '月销384', 'rating', 'btn_addcart', 'btn_addcart', 'btn_fav', '装扮', '香氛', 'http://p4.jmstatic.com/product/003/875/3875984_std/3875984_1000_1000.jpg');
INSERT INTO `xinxi` VALUES ('55', '【海外自营】', 'http://p0.jmstatic.com/product/003/402/3402970_std/3402970_350_350.jpg', '法国?克丽丝汀迪奥 (DIOR)永恒的爱淡香水50ml', '552', '616', '月销32', 'rating', 'btn_addcart', 'btn_addcart', 'btn_fav', '装扮', '香氛', 'http://p0.jmstatic.com/product/003/402/3402970_std/3402970_1000_1000.jpg');
INSERT INTO `xinxi` VALUES ('56', '【海外自营】', 'http://p0.jmstatic.com/product/000/004/4740_std/4740_350_350.jpg', '法国?香邂格蕾古法古龙水100ML', '560', '625', '月销120', 'rating', 'btn_addcart', 'btn_addcart', 'btn_fav', '装扮', '', 'http://p0.jmstatic.com/product/000/004/4740_std/4740_1000_1000.jpg');
INSERT INTO `xinxi` VALUES ('57', '【海外自营】', 'http://p4.jmstatic.com/product/001/497/1497059_std/1497059_350_350.jpg', '英国?祖.玛珑JO MALONE154号香水30ml', '568', '0', '月销208', '', 'btn_addcart', 'btn_addcart', 'btn_fav', '装扮', '', 'http://p4.jmstatic.com/product/001/497/1497059_std/1497059_1000_1000.jpg');
INSERT INTO `xinxi` VALUES ('58', '【海外自营】', 'http://p2.jmstatic.com/product/004/744/4744532_std/4744532_350_350.jpg', '英国?祖.玛珑JO MALONE黑石榴香水30ml', '123', '643', '月销296', '', 'btn_addcart', 'btn_addcart', 'btn_fav', '装扮', '', 'http://p2.jmstatic.com/product/004/744/4744532_std/4744532_1000_1000.jpg');
INSERT INTO `xinxi` VALUES ('59', '【自营】', 'http://p2.jmstatic.com/product/000/002/2282_std/2282_350_350.jpg', '英国?祖.玛珑JO MALONE黑莓与月桂叶香水 /又名香水（黑莓与月桂叶香型）30ML', '123', '0', '月销384', 'rating', 'btn_addcart', 'btn_addcart', 'btn_fav', '装扮', '', 'http://p2.jmstatic.com/product/000/002/2282_std/2282_1000_1000.jpg');
INSERT INTO `xinxi` VALUES ('60', '【自营】', 'http://p2.jmstatic.com/product/001/497/1497042_std/1497042_350_350.jpg', '英国?祖.玛珑JO MALONE柚子香水30ml', '123', '661', '月销32', 'rating', 'btn_addcart', 'btn_addcart', 'btn_fav', '装扮', '', 'http://p2.jmstatic.com/product/001/497/1497042_std/1497042_1000_1000.jpg');
INSERT INTO `xinxi` VALUES ('61', '【自营】', 'http://p2.jmstatic.com/product/003/821/3821812_std/3821812_350_350.jpg', '英国?祖.玛珑JO MALONE香水（牡丹与胭红麂绒香型）100ML', '123', '0', '月销32', 'rating', 'btn_addcart', 'btn_addcart', 'btn_fav', '装扮', '', 'http://p2.jmstatic.com/product/003/821/3821812_std/3821812_1000_1000.jpg');
INSERT INTO `xinxi` VALUES ('62', '【海外自营】', 'http://p0.jmstatic.com/product/000/004/4740_std/4740_350_350.jpg', '法国?香邂格蕾古法古龙水100ML', '112', '625', '月销120', 'rating', 'btn_addcart', 'btn_addcart', 'btn_fav', '装扮', '', 'http://p0.jmstatic.com/product/000/004/4740_std/4740_1000_1000.jpg');
INSERT INTO `xinxi` VALUES ('63', '【海外自营】', 'http://p4.jmstatic.com/product/001/497/1497059_std/1497059_350_350.jpg', '英国?祖.玛珑JO MALONE154号香水30ml', '112', '0', '月销208', '', 'btn_addcart', 'btn_addcart', 'btn_fav', '装扮', '', 'http://p4.jmstatic.com/product/001/497/1497059_std/1497059_1000_1000.jpg');
INSERT INTO `xinxi` VALUES ('64', '【海外自营】', 'http://p2.jmstatic.com/product/004/744/4744532_std/4744532_350_350.jpg', '英国?祖.玛珑JO MALONE黑石榴香水30ml', '112', '643', '月销296', '', 'btn_addcart', 'btn_addcart', 'btn_fav', '装扮', '', 'http://p2.jmstatic.com/product/004/744/4744532_std/4744532_1000_1000.jpg');
INSERT INTO `xinxi` VALUES ('65', '【自营】', 'http://p2.jmstatic.com/product/000/002/2282_std/2282_350_350.jpg', '英国?祖.玛珑JO MALONE黑莓与月桂叶香水 /又名香水（黑莓与月桂叶香型）30ML', '584', '0', '月销384', 'rating', 'btn_addcart', 'btn_addcart', 'btn_fav', '装扮', '', 'http://p2.jmstatic.com/product/000/002/2282_std/2282_1000_1000.jpg');
INSERT INTO `xinxi` VALUES ('66', '【自营】', 'http://p2.jmstatic.com/product/001/497/1497042_std/1497042_350_350.jpg', '英国?祖.玛珑JO MALONE柚子香水30ml', '592', '661', '月销32', 'rating', 'btn_addcart', 'btn_addcart', 'btn_fav', '装扮', '', 'http://p2.jmstatic.com/product/001/497/1497042_std/1497042_1000_1000.jpg');
INSERT INTO `xinxi` VALUES ('67', '【自营】', 'http://p2.jmstatic.com/product/003/821/3821812_std/3821812_350_350.jpg', '英国?祖.玛珑JO MALONE香水（牡丹与胭红麂绒香型）100ML', '455', '0', '月销32', 'rating', 'btn_addcart', 'btn_addcart', 'btn_fav', '装扮', '', 'http://p2.jmstatic.com/product/003/821/3821812_std/3821812_1000_1000.jpg');
INSERT INTO `xinxi` VALUES ('68', '【自营】', 'http://p2.jmstatic.com/product/001/497/1497042_std/1497042_350_350.jpg', '英国?祖.玛珑JO MALONE柚子香水30ml', '592', '661', '月销32', 'rating', 'btn_addcart', 'btn_addcart', 'btn_fav', '装扮', '', 'http://p2.jmstatic.com/product/001/497/1497042_std/1497042_1000_1000.jpg');
INSERT INTO `xinxi` VALUES ('69', '【自营】', 'http://p2.jmstatic.com/product/003/821/3821812_std/3821812_350_350.jpg', '英国?祖.玛珑JO MALONE香水（牡丹与胭红麂绒香型）100ML', '600', '0', '月销32', 'rating', 'btn_addcart', 'btn_addcart', 'btn_fav', '装扮', '', 'http://p2.jmstatic.com/product/003/821/3821812_std/3821812_1000_1000.jpg');
SET FOREIGN_KEY_CHECKS=1;
