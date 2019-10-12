/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50709
Source Host           : localhost:3306
Source Database       : onlineshop

Target Server Type    : MYSQL
Target Server Version : 50709
File Encoding         : 65001

Date: 2019-10-12 14:41:10
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for goods
-- ----------------------------
DROP TABLE IF EXISTS `goods`;
CREATE TABLE `goods` (
  `g_id` int(255) NOT NULL AUTO_INCREMENT,
  `g_name` varchar(255) NOT NULL,
  `g_price` float(250,2) NOT NULL,
  `g_url` varchar(2555) NOT NULL,
  `g_imglist` varchar(255) NOT NULL,
  `g_intro` varchar(255) DEFAULT NULL,
  `g_type` varchar(255) NOT NULL,
  `g_shop` varchar(255) NOT NULL,
  PRIMARY KEY (`g_id`)
) ENGINE=MyISAM AUTO_INCREMENT=234 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of goods
-- ----------------------------
INSERT INTO `goods` VALUES ('232', '【正品保税】2件 德国Aptamil爱他美婴幼儿奶粉2+...', '199.00', 'http://pic3.womai.com/upload/601/603/606/6590/6501/214561/586395/586395_1_pic270_5437.jpg', 'http://pic3.womai.com/upload/601/603/606/6590/6501/214561/586395/586395_1_pic270_5437.jpg', '', '全球购', '中粮全球店');
INSERT INTO `goods` VALUES ('233', '【正品保税】2件 德国Aptamil爱他美婴幼儿奶粉1+...', '189.00', 'http://pic1.womai.com/upload/601/603/606/6590/6501/214560/586397/586397_1_pic270_5321.jpg', 'http://pic1.womai.com/upload/601/603/606/6590/6501/214560/586397/586397_1_pic270_5321.jpg', '', '全球购', '中粮全球店');
INSERT INTO `goods` VALUES ('230', '【包邮】莲花居大闸蟹礼券1168型4对装（公3.5两 ...', '138.00', 'http://static.womai.com/images/spacer0.png', 'http://static.womai.com/images/spacer0.png', '', '全球购', '中粮全球店');
INSERT INTO `goods` VALUES ('231', '【包邮】莲花居大闸蟹礼券1288型5对装（公3.5两 ...', '168.00', 'http://static.womai.com/images/spacer0.png', 'http://static.womai.com/images/spacer0.png', '', '全球购', '中粮全球店');
INSERT INTO `goods` VALUES ('229', '【包邮】莲花居大闸蟹礼券989型5对装（公3.0两 母...', '128.00', 'http://static.womai.com/images/spacer0.png', 'http://static.womai.com/images/spacer0.png', '', '全球购', '中粮全球店');
INSERT INTO `goods` VALUES ('227', '【包邮】莲花居大闸蟹礼券1088型3对装（公3.5两 ...', '99.00', 'http://pic1.womai.com/upload/601/603/858694/659012/659012_1_pic270_9330.jpg', 'http: //pic1.womai.com/upload/601/603/858694/659012/659012_1_pic270_9330.jpg', '', '全球购', '中粮全球店');
INSERT INTO `goods` VALUES ('228', '【包邮】莲花居大闸蟹礼券798型8只装（全母2.5两）', '99.00', 'http://static.womai.com/images/spacer0.png', 'http: //static.womai.com/images/spacer0.png', '', '全球购', '中粮全球店');
INSERT INTO `goods` VALUES ('225', '【包邮】德国 爱思贝米粉  175g 全谷燕麦2段', '95.00', 'http://static.womai.com/images/spacer0.png', 'http: //static.womai.com/images/spacer0.png', '', '母婴食品', '母婴直销店');
INSERT INTO `goods` VALUES ('226', '【包邮】莲花居大闸蟹礼券868型4对装（公3.0两 母...', '108.00', 'http://pic2.womai.com/upload/601/603/858694/659010/659010_1_pic270_6299.jpg', 'http://pic2.womai.com/upload/601/603/858694/659010/659010_1_pic270_6299.jpg', '', '全球购', '中粮全球店');
INSERT INTO `goods` VALUES ('223', '【专仓直发包邮】美国YummyEarth 牙米滋棒棒糖 综...', '129.00', 'http://static.womai.com/images/spacer0.png', 'http://static.womai.com/images/spacer0.png', '', '母婴食品', '母婴直销店');
INSERT INTO `goods` VALUES ('224', '【包邮】日本 宝贝秀酱油 2瓶装  110ml*2 鲣鱼', '83.00', 'http://static.womai.com/images/spacer0.png', 'http: //static.womai.com/images/spacer0.png', '', '母婴食品', '母婴直销店');
INSERT INTO `goods` VALUES ('221', '【包邮】日本 前田 健康奶豆小馒头 3袋装   88g*3', '72.00', 'http://static.womai.com/images/spacer0.png', 'http: //static.womai.com/images/spacer0.png', '', '母婴食品', '母婴直销店');
INSERT INTO `goods` VALUES ('222', '【包邮】韩国进口 托马斯海苔组合 2.1g *10小袋*4包', '109.00', 'http://static.womai.com/images/spacer0.png', 'http://static.womai.com/images/spacer0.png', '', '母婴食品', '母婴直销店');
INSERT INTO `goods` VALUES ('220', '【专仓直发包邮】日本 前田 卵黄南瓜奶豆小馒头 3...', '72.00', 'http://static.womai.com/images/spacer0.png', 'http: //static.womai.com/images/spacer0.png', '', '母婴食品', '母婴直销店');
INSERT INTO `goods` VALUES ('218', '【包邮】kabrita佳贝艾特悠装婴儿配方羊奶粉3段800g', '328.00', 'http://static.womai.com/images/spacer0.png', 'http://static.womai.com/images/spacer0.png', '', '母婴食品', '母婴直销店');
INSERT INTO `goods` VALUES ('219', '【包邮】日本Wakodo 和光堂米饼四连包多口味组合...', '269.00', 'http://static.womai.com/images/spacer0.png', 'http://static.womai.com/images/spacer0.png', '', '母婴食品', '母婴直销店');
INSERT INTO `goods` VALUES ('217', '【包邮】Beakid 海绵宝宝不添加蔗糖和食盐 米饼2...', '49.90', 'http://pic1.womai.com/upload/601/603/606/853818/855831/855636/698384/698384_1_pic270_7813.jpg', 'http://pic1.womai.com/upload/601/603/606/853818/855831/855636/698384/698384_1_pic270_7813.jpg', '', '母婴食品', '母婴直销店');
INSERT INTO `goods` VALUES ('215', '客唻美蟹味棒（辣味）(鳕鱼肉制品）35g', '9.90', 'http://pic2.womai.com/upload/601/603/606/853818/855831/855636/691733/691733_2_pic270_6472.jpg', 'http://pic2.womai.com/upload/601/603/606/853818/855831/855636/691733/691733_2_pic270_6472.jpg', '', '母婴食品', '母婴直销店');
INSERT INTO `goods` VALUES ('216', '客唻美啵乐乐奶酪鳕鱼饼（虾味）36g', '12.00', 'http://pic3.womai.com/upload/601/602/979600/691735/691735_1_pic270_7952.jpg', 'http: //pic3.womai.com/upload/601/602/979600/691735/691735_1_pic270_7952.jpg', '', '母婴食品', '母婴直销店');
INSERT INTO `goods` VALUES ('214', '【包邮】斯利安孕妇钙孕妇专用钙片备孕孕期产后补...', '279.00', 'http://pic2.womai.com/upload/601/602/974195/690467/690467_1_pic270_9079.jpg', 'http://pic2.womai.com/upload/601/602/974195/690467/690467_1_pic270_9079.jpg', '', '母婴食品', '母婴直销店');
INSERT INTO `goods` VALUES ('213', '【包邮】优美加 桔子维生素C 补充VC 0.65g*30片', '19.90', 'http://pic2.womai.com/upload/601/602/10203802/690081/690081_1_pic270_1920.jpg', 'http://pic2.womai.com/upload/601/602/10203802/690081/690081_1_pic270_1920.jpg', '', '母婴食品', '母婴直销店');
INSERT INTO `goods` VALUES ('211', '中粮初萃  食用油礼盒1.8L*3(花生油+葵花籽油+菜...', '118.00', 'http://static.womai.com/images/spacer0.png', 'http://static.womai.com/images/spacer0.png', '', '调味粮油', '生活直销店');
INSERT INTO `goods` VALUES ('212', '【包邮】纽曼思海藻油DHA成人装60粒装', '399.00', 'http://pic1.womai.com/upload/601/603/90900/216060/216061/680988/680988_1_pic270_3081.jpg', 'http://pic1.womai.com/upload/601/603/90900/216060/216061/680988/680988_1_pic270_3081.jpg', '', '母婴食品', '母婴直销店');
INSERT INTO `goods` VALUES ('209', '中粮悠采 农家自留米礼盒1920g（320g*6包）', '99.90', 'http://static.womai.com/images/spacer0.png', 'http://static.womai.com/images/spacer0.png', '', '调味粮油', '生活直销店');
INSERT INTO `goods` VALUES ('210', '鲁花5S压榨一级花生油500ml花生油', '39.90', 'http://static.womai.com/images/spacer0.png', 'http://static.womai.com/images/spacer0.png', '', '调味粮油', '生活直销店');
INSERT INTO `goods` VALUES ('207', '福临门葵花籽清香食用调和油5L(新旧包装随机发)', '61.00', 'http://static.womai.com/images/spacer0.png', 'http: //static.womai.com/images/spacer0.png', '', '调味粮油', '生活直销店');
INSERT INTO `goods` VALUES ('208', '柴火大院 五常稻花香大米5kg', '75.00', 'http://static.womai.com/images/spacer0.png', 'http: //static.womai.com/images/spacer0.png', '', '调味粮油', '生活直销店');
INSERT INTO `goods` VALUES ('205', '福临门金典特选东北米(袋装 5kg)', '49.90', 'http://static.womai.com/images/spacer0.png', 'http://static.womai.com/images/spacer0.png', '', '调味粮油', '生活直销店');
INSERT INTO `goods` VALUES ('206', '福临门葵花籽油1.8L(新老包装更替中，以收到实物...', '42.90', 'http://static.womai.com/images/spacer0.png', 'http://static.womai.com/images/spacer0.png', '', '调味粮油', '生活直销店');
INSERT INTO `goods` VALUES ('204', '福临门稻花香米5kg', '89.90', 'http://static.womai.com/images/spacer0.png', 'http://static.womai.com/images/spacer0.png', '', '调味粮油', '生活直销店');
INSERT INTO `goods` VALUES ('202', '中粮悠采 特别栽培泰国茉莉香米5kg', '116.00', 'http://pic2.womai.com/upload/601/603/606/6200/6215/6214/613747/613747_1_pic270_2390.jpg', 'http://pic2.womai.com/upload/601/603/606/6200/6215/6214/613747/613747_1_pic270_2390.jpg', '', '调味粮油', '生活直销店');
INSERT INTO `goods` VALUES ('203', '五湖甄选东北米5kg', '45.90', 'http://pic1.womai.com/upload/601/603/606/6200/6215/6213/667960/667960_1_pic270_7940.jpg', 'http://pic1.womai.com/upload/601/603/606/6200/6215/6213/667960/667960_1_pic270_7940.jpg', '', '调味粮油', '生活直销店');
INSERT INTO `goods` VALUES ('201', '刀唛玉米油500ml', '18.00', 'http://pic1.womai.com/upload/601/603/606/6200/6201/6211/595008/595008_1_pic270_2198.jpg', 'http: //pic1.womai.com/upload/601/603/606/6200/6201/6211/595008/595008_1_pic270_2198.jpg', '', '调味粮油', '生活直销店');
INSERT INTO `goods` VALUES ('200', 'KOKO 红版 泰国香米 5kg（泰国香米 进口原粮 非东...', '68.90', 'http://pic1.womai.com/upload/601/603/606/6200/6215/6214/586907/586907_1_pic270_9821.jpg', 'http://pic1.womai.com/upload/601/603/606/6200/6215/6214/586907/586907_1_pic270_9821.jpg', '', '调味粮油', '生活直销店');
INSERT INTO `goods` VALUES ('199', '福临门浓香压榨一级花生油5L', '105.00', 'http://pic1.womai.com/upload/601/603/606/6200/6201/6206/586506/586506_1_pic270_6700.jpg', 'http://pic1.womai.com/upload/601/603/606/6200/6201/6206/586506/586506_1_pic270_6700.jpg', '', '调味粮油', '生活直销店');
INSERT INTO `goods` VALUES ('197', '【整箱特惠】教士（又名范佳乐）小麦啤酒 450ml*1...', '105.00', 'http://static.womai.com/images/spacer0.png', 'http://static.womai.com/images/spacer0.png', '', '饮料冲调', '饮品直销店');
INSERT INTO `goods` VALUES ('198', '福临门玉米油(瓶装 5L)（新老包装随机发货）', '69.90', 'http://pic2.womai.com/upload/601/603/606/6200/6201/6211/54753/54753_1_pic270_3816.jpg', 'http://pic2.womai.com/upload/601/603/606/6200/6201/6211/54753/54753_1_pic270_3816.jpg', '', '调味粮油', '生活直销店');
INSERT INTO `goods` VALUES ('196', '科罗娜特级啤酒 (瓶装 330ml)*24', '182.00', 'http://static.womai.com/images/spacer0.png', 'http://static.womai.com/images/spacer0.png', '', '饮料冲调', '饮品直销店');
INSERT INTO `goods` VALUES ('194', '中粮出品 悦活 杏仁牛奶高钙燕麦片350g', '26.90', 'http://static.womai.com/images/spacer0.png', 'http://static.womai.com/images/spacer0.png', '', '饮料冲调', '饮品直销店');
INSERT INTO `goods` VALUES ('195', '中粮出品 悦活 奇亚籽黑麦燕麦片 480g', '19.90', 'http://static.womai.com/images/spacer0.png', 'http://static.womai.com/images/spacer0.png', '', '饮料冲调', '饮品直销店');
INSERT INTO `goods` VALUES ('192', '【中粮直采】法国进口阿诺克斯DUC D`ARNOUX教皇新...', '398.00', 'http://static.womai.com/images/spacer0.png', 'http://static.womai.com/images/spacer0.png', '', '饮料冲调', '饮品直销店');
INSERT INTO `goods` VALUES ('193', '【当季新麦】中粮出品 悦活 澳洲纯燕麦片 醇厚麦...', '37.90', 'http://static.womai.com/images/spacer0.png', 'http://static.womai.com/images/spacer0.png', '', '饮料冲调', '饮品直销店');
INSERT INTO `goods` VALUES ('191', '【中粮直采】法国进口阿诺克斯DUC D`ARNOUX瓦奎拉...', '168.00', 'http://static.womai.com/images/spacer0.png', 'http://static.womai.com/images/spacer0.png', '', '饮料冲调', '饮品直销店');
INSERT INTO `goods` VALUES ('189', '山萃蜂蜜250g*2瓶', '44.00', 'http://pic2.womai.com/upload/601/604/439208/10562433/10562433_1_pic270_5484.jpg', 'http: //pic2.womai.com/upload/601/604/439208/10562433/10562433_1_pic270_5484.jpg', '', '饮料冲调', '饮品直销店');
INSERT INTO `goods` VALUES ('190', '【中粮直采】法国进口阿诺克斯DUC D`ARNOUX老藤窖...', '128.00', 'http://static.womai.com/images/spacer0.png', 'http://static.womai.com/images/spacer0.png', '', '饮料冲调', '饮品直销店');
INSERT INTO `goods` VALUES ('188', '剑南春52度(盒装 500ml）', '419.00', 'http://pic1.womai.com/upload/601/603/606/6800/6801/79007/79007_1_pic270_3511.jpg', 'http://pic1.womai.com/upload/601/603/606/6800/6801/79007/79007_1_pic270_3511.jpg', '', '饮料冲调', '饮品直销店');
INSERT INTO `goods` VALUES ('187', '【整箱特惠】教士（又名范佳乐）小麦黑啤酒 450ml...', '105.00', 'http://pic3.womai.com/upload/601/603/606/437406/437219/437254/10868828/10868828_1_pic270_8142.jpg', 'http://pic3.womai.com/upload/601/603/606/437406/437219/437254/10868828/10868828_1_pic270_8142.jpg', '', '饮料冲调', '饮品直销店');
INSERT INTO `goods` VALUES ('185', '中茶百年木仓黑茶980g 手筑茯砖礼盒 岁月金福', '288.00', 'http://pic2.womai.com/upload/601/603/606/6900/6905/603920/603920_1_pic270_2975.jpg', 'http://pic2.womai.com/upload/601/603/606/6900/6905/603920/603920_1_pic270_2975.jpg', '', '饮料冲调', '饮品直销店');
INSERT INTO `goods` VALUES ('186', '【中粮直采】西班牙进口酒之吻Beso de Vino老藤干...', '65.00', 'http://pic3.womai.com/upload/601/603/253820/647023/647023_0_pic270_6406.jpg', 'http: //pic3.womai.com/upload/601/603/253820/647023/647023_0_pic270_6406.jpg', '', '饮料冲调', '饮品直销店');
INSERT INTO `goods` VALUES ('184', '【中粮直采】西班牙进口拉科利慕斯 Lacrimus 陈酿...', '128.00', 'http://pic2.womai.com/upload/601/603/210640/210642/210646/553898/553898_0_pic270_9024.jpg', 'http://pic2.womai.com/upload/601/603/210640/210642/210646/553898/553898_0_pic270_9024.jpg', '', '饮料冲调', '饮品直销店');
INSERT INTO `goods` VALUES ('182', '百草味冻干榴莲干30g（新老包装随机发货）', '13.90', 'http://static.womai.com/images/spacer0.png', 'http://static.womai.com/images/spacer0.png', '', '休闲保健', '休闲直销店');
INSERT INTO `goods` VALUES ('183', '怡达山楂羹(袋装 300g)', '8.90', 'http://static.womai.com/images/spacer0.png', 'http://static.womai.com/images/spacer0.png', '', '休闲保健', '休闲直销店');
INSERT INTO `goods` VALUES ('180', '百草味芒果干120g（新老包装随机发货）', '11.50', 'http://static.womai.com/images/spacer0.png', 'http://static.womai.com/images/spacer0.png', '', '休闲保健', '休闲直销店');
INSERT INTO `goods` VALUES ('181', '乐事真脆薯条原味90克', '11.80', 'http://static.womai.com/images/spacer0.png', 'http://static.womai.com/images/spacer0.png', '', '休闲保健', '休闲直销店');
INSERT INTO `goods` VALUES ('178', '百草味开心果（盐焗味）200g（新老包装随机发货）', '26.90', 'http://static.womai.com/images/spacer0.png', 'http://static.womai.com/images/spacer0.png', '', '休闲保健', '休闲直销店');
INSERT INTO `goods` VALUES ('179', '百草味东北松子原味200g（新老包装随机发货）', '27.90', 'http://static.womai.com/images/spacer0.png', 'http://static.womai.com/images/spacer0.png', '', '休闲保健', '休闲直销店');
INSERT INTO `goods` VALUES ('176', '好丽友 蛋黄派 12枚276g', '19.90', 'http://static.womai.com/images/spacer0.png', 'http://static.womai.com/images/spacer0.png', '', '休闲保健', '休闲直销店');
INSERT INTO `goods` VALUES ('177', '绿箭 薄荷糖(茉莉花茶味 35粒铁盒装 23.8g) 新老...', '8.90', 'http://static.womai.com/images/spacer0.png', 'http://static.womai.com/images/spacer0.png', '', '休闲保健', '休闲直销店');
INSERT INTO `goods` VALUES ('175', '【店庆爆款】时怡 中粮优选雪域玉枣四星(袋装 450...', '69.90', 'http://pic2.womai.com/upload/601/603/606/6060/6062/6075/10318062/10318062_1_pic270_9757.jpg', 'http://pic2.womai.com/upload/601/603/606/6060/6062/6075/10318062/10318062_1_pic270_9757.jpg', '', '休闲保健', '休闲直销店');
INSERT INTO `goods` VALUES ('174', '【还原谷物本真香味】中粮出品 悦活 红豆薏米饼干...', '49.90', 'http://pic1.womai.com/upload/601/603/606/6060/6064/6082/688688/688688_1_pic270_6482.jpg', 'http://pic1.womai.com/upload/601/603/606/6060/6064/6082/688688/688688_1_pic270_6482.jpg', '', '休闲保健', '休闲直销店');
INSERT INTO `goods` VALUES ('173', '百草味每日坚果750g', '109.00', 'http://pic3.womai.com/upload/601/603/606/6060/6065/54804/656991/656991_1_pic270_6065.jpg', 'http://pic3.womai.com/upload/601/603/606/6060/6065/54804/656991/656991_1_pic270_6065.jpg', '', '休闲保健', '休闲直销店');
INSERT INTO `goods` VALUES ('172', '百草味巴旦木（奶油味）180g（新老包装随机发货）', '17.90', 'http://pic1.womai.com/upload/601/603/606/6060/6065/630746/630746_1_pic270_5218.jpg', 'http://pic1.womai.com/upload/601/603/606/6060/6065/630746/630746_1_pic270_5218.jpg', '', '休闲保健', '休闲直销店');
INSERT INTO `goods` VALUES ('171', '百草味牛肉粒（五香味）100g(新老包装随机发货)', '16.90', 'http://pic3.womai.com/upload/601/603/606/6060/6061/6072/630521/630521_1_pic270_5387.jpg', 'http://pic3.womai.com/upload/601/603/606/6060/6061/6072/630521/630521_1_pic270_5387.jpg', '', '休闲保健', '休闲直销店');
INSERT INTO `goods` VALUES ('170', 'BHB燕山甘栗仁100g*10袋 专供特惠装（新老包装随...', '49.90', 'http://pic1.womai.com/upload/601/603/210640/210642/210644/572327/572327_1_pic270_9042.jpg', 'http://pic1.womai.com/upload/601/603/210640/210642/210644/572327/572327_1_pic270_9042.jpg', '', '休闲保健', '休闲直销店');
INSERT INTO `goods` VALUES ('168', '蒙牛特仑苏低脂调制乳牛奶250ml*12/箱（新老包装...', '68.00', 'http://pic3.womai.com/upload/601/603/606/7400/7409/66549/66549_1_pic270_5708.jpg', 'http: //pic3.womai.com/upload/601/603/606/7400/7409/66549/66549_1_pic270_5708.jpg', '', '奶制品', '蒙牛直销店');
INSERT INTO `goods` VALUES ('169', '蒙牛纯甄常温酸奶利乐钻200g*6（新老包装随机）', '26.90', 'http://pic1.womai.com/upload/601/603/606/6600/6604/591562/591562_1_pic270_5128.jpg', 'http://pic1.womai.com/upload/601/603/606/6600/6604/591562/591562_1_pic270_5128.jpg', '', '奶制品', '蒙牛直销店');
INSERT INTO `goods` VALUES ('167', '伊利金典纯牛奶250ml*16/箱', '79.90', 'http://pic2.womai.com/upload/601/603/90900/216060/216061/613770/613770_1_pic270_5185.jpg', 'http://pic2.womai.com/upload/601/603/90900/216060/216061/613770/613770_1_pic270_5185.jpg', '', '奶制品', '蒙牛直销店');
INSERT INTO `goods` VALUES ('166', '伊利安慕希希腊风味酸奶 原味 205g*16盒/箱（新老...', '64.90', 'http://pic3.womai.com/upload/601/603/606/6600/6604/613767/613767_1_pic270_7814.jpg', 'http://pic3.womai.com/upload/601/603/606/6600/6604/613767/613767_1_pic270_7814.jpg', '', '奶制品', '蒙牛直销店');
INSERT INTO `goods` VALUES ('164', '伊利舒化无乳糖牛奶（高钙型）笑脸包220ml*12/箱 ...', '49.90', 'http://pic3.womai.com/upload/601/603/606/6600/242624/605431/605431_1_pic270_3566.jpg', 'http://pic3.womai.com/upload/601/603/606/6600/242624/605431/605431_1_pic270_3566.jpg', '', '奶制品', '蒙牛直销店');
INSERT INTO `goods` VALUES ('165', '蒙牛特仑苏纯牛奶250ml*16/箱 （新老包装随机发货）', '72.90', 'http://pic3.womai.com/upload/601/602/60549/605436/605436_1_pic270_4217.jpg', 'http://pic3.womai.com/upload/601/602/60549/605436/605436_1_pic270_4217.jpg', '', '奶制品', '蒙牛直销店');
INSERT INTO `goods` VALUES ('163', '蒙牛纯甄酸牛奶200g*12/箱(新老包装随机)', '49.90', 'http://pic1.womai.com/upload/601/603/606/6600/6604/544458/544458_1_pic270_8145.jpg', 'http://pic1.womai.com/upload/601/603/606/6600/6604/544458/544458_1_pic270_8145.jpg', '', '奶制品', '蒙牛直销店');
INSERT INTO `goods` VALUES ('162', '伊利舒化奶低脂无乳糖牛奶(利乐包）220ml*12/箱 ...', '56.00', 'http://pic3.womai.com/upload/601/603/606/7400/7409/506687/506687_1_pic270_8884.jpg', 'http: //pic3.womai.com/upload/601/603/606/7400/7409/506687/506687_1_pic270_8884.jpg', '', '奶制品', '蒙牛直销店');
INSERT INTO `goods` VALUES ('161', '认养一头牛 纯牛奶250ml*12礼盒装', '49.90', 'http://pic2.womai.com/upload/601/602/10203672/683403/683403_1_pic270_3643.jpg', 'http://pic2.womai.com/upload/601/602/10203672/683403/683403_1_pic270_3643.jpg', '', '奶制品', '蒙牛直销店');
INSERT INTO `goods` VALUES ('160', '认养一头牛 酸牛奶200g*12礼盒装', '49.90', 'http://pic3.womai.com/upload/601/602/10203672/683402/683402_1_pic270_5118.png', 'http://pic3.womai.com/upload/601/602/10203672/683402/683402_1_pic270_5118.png', '', '奶制品', '蒙牛直销店');
INSERT INTO `goods` VALUES ('159', '蒙牛纯牛奶无菌砖250ml×16盒(电商装) （新老包装...', '42.90', 'http://pic1.womai.com/upload/601/602/60549/603171/603171_1_pic270_7701.jpg', 'http://pic1.womai.com/upload/601/602/60549/603171/603171_1_pic270_7701.jpg', '', '奶制品', '蒙牛直销店');
INSERT INTO `goods` VALUES ('158', '伊利安慕希希腊风味酸奶 原味 205g*12/箱（新老包...', '54.90', 'http://pic1.womai.com/upload/601/603/606/6600/6604/573032/573032_1_pic270_1067.jpg', 'http://pic1.womai.com/upload/601/603/606/6600/6604/573032/573032_1_pic270_1067.jpg', '', '奶制品', '蒙牛直销店');
INSERT INTO `goods` VALUES ('157', '伊利金典纯牛奶250ml*12/箱', '53.90', 'http://pic1.womai.com/upload/601/603/606/7400/7409/506681/506681_1_pic270_1217.jpg', 'http://pic1.womai.com/upload/601/603/606/7400/7409/506681/506681_1_pic270_1217.jpg', '', '奶制品', '蒙牛直销店');
INSERT INTO `goods` VALUES ('156', '三元全脂灭菌乳纯牛奶250ml*24/箱（新老包装更替...', '54.90', 'http://pic3.womai.com/upload/601/602/66008/76349/76349_1_pic270_8477.jpg', 'http://pic3.womai.com/upload/601/602/66008/76349/76349_1_pic270_8477.jpg', '', '奶制品', '蒙牛直销店');
INSERT INTO `goods` VALUES ('155', '【包邮直发】中粮安萃陕西大荔冬枣盒装2斤单果10g...', '29.90', 'http://pic3.womai.com/upload/601/603/384225/693839/693839_1_pic270_4758.jpg', 'http://pic3.womai.com/upload/601/603/384225/693839/693839_1_pic270_4758.jpg', '', '时令蔬果', '鲜美直销店');
INSERT INTO `goods` VALUES ('154', '进口美国红蛇果4粒盒装（单果重220g-250g)', '100.00', 'http://pic1.womai.com/upload/601/603/606/64306/280374/82800/500239/670016/683554_1_pic270_4750.jpg', 'http://pic1.womai.com/upload/601/603/606/64306/280374/82800/500239/670016/683554_1_pic270_4750.jpg', '', '时令蔬果', '鲜美直销店');
INSERT INTO `goods` VALUES ('153', '中粮凌鲜原味青虾仁31/40（无添加剂，剔虾腺）500...', '99.00', 'http://pic3.womai.com/upload/601/603/606/64306/280375/219300/219301/632222/632222_1_pic270_1648.jpg', 'http: //pic3.womai.com/upload/601/603/606/64306/280375/219300/219301/632222/632222_1_pic270_1648.jpg', '', '时令蔬果', '鲜美直销店');
INSERT INTO `goods` VALUES ('152', '中粮凌鲜野生阿根廷红虾 L1 2KG 盒装 20-40只', '199.00', 'http://pic2.womai.com/upload/601/603/606/64306/280375/219300/219301/632221/632221_1_pic270_2774.jpg', 'http://pic2.womai.com/upload/601/603/606/64306/280375/219300/219301/632221/632221_1_pic270_2774.jpg', '', '时令蔬果', '鲜美直销店');
INSERT INTO `goods` VALUES ('151', '【包邮直发】中粮优选安萃特级软籽石榴8-12粒 礼...', '198.00', 'http://pic2.womai.com/upload/601/603/606/64306/280374/219481/696697/696697_1_pic270_5348.jpg', 'http://pic2.womai.com/upload/601/603/606/64306/280374/219481/696697/696697_1_pic270_5348.jpg', '', '时令蔬果', '鲜美直销店');
INSERT INTO `goods` VALUES ('150', '洛川红富士苹果盒装6个（单果重160g以上）', '100.00', 'http://pic3.womai.com/upload/601/603/606/64306/280374/82609/500231/670358/685184_1_pic270_8862.jpg', 'http://pic3.womai.com/upload/601/603/606/64306/280374/82609/500231/670358/685184_1_pic270_8862.jpg', '', '时令蔬果', '鲜美直销店');
INSERT INTO `goods` VALUES ('149', 'zespri佳沛 新西兰原箱进口金色阳光 金奇异果果王...', '219.00', 'http://pic1.womai.com/upload/601/603/606/64306/280374/82800/504210/650434_0_pic270_2842.jpg', 'http://pic1.womai.com/upload/601/603/606/64306/280374/82800/504210/650434_0_pic270_2842.jpg', '', '时令蔬果', '鲜美直销店');
INSERT INTO `goods` VALUES ('148', '【包邮直发】老宋西瓜 大兴庞各庄西瓜2粒装6-7斤...', '55.80', 'http://pic1.womai.com/upload/601/603/606/64306/280374/82609/500236/652573/686124_1_pic270_5705.jpg', 'http://pic1.womai.com/upload/601/603/606/64306/280374/82609/500236/652573/686124_1_pic270_5705.jpg', '', '时令蔬果', '鲜美直销店');
INSERT INTO `goods` VALUES ('147', 'zespri佳沛 新西兰进口金色阳光 金奇异果16粒礼盒...', '158.00', 'http://pic3.womai.com/upload/601/603/358812/378410/495231/495232/651176/651176_0_pic270_1618.jpg', 'http://pic3.womai.com/upload/601/603/358812/378410/495231/495232/651176/651176_0_pic270_1618.jpg', '', '时令蔬果', '鲜美直销店');
INSERT INTO `goods` VALUES ('146', '中粮凌鲜厄瓜多尔白虾50/60(87-105只) 1.75KG ...', '158.00', 'http://pic2.womai.com/upload/601/603/606/64306/280375/219300/219301/657730/657730_1_pic270_5789.jpg', 'http://pic2.womai.com/upload/601/603/606/64306/280375/219300/219301/657730/657730_1_pic270_5789.jpg', '', '海鲜肉类', '海鲜肉类直销店');
INSERT INTO `goods` VALUES ('145', '中粮安至选美国谷饲西冷厚切牛排 180g 盒装 （冷...', '69.00', 'http://pic1.womai.com/upload/601/603/606/64306/280375/82402/82505/631325/631325_1_pic270_3504.jpg', 'http: //pic1.womai.com/upload/601/603/606/64306/280375/82402/82505/631325/631325_1_pic270_3504.jpg', '', '海鲜肉类', '海鲜肉类直销店');
INSERT INTO `goods` VALUES ('144', '中粮安至选美国谷饲上脑厚切牛排 180g 盒装 （冷...', '39.00', 'http://pic3.womai.com/upload/601/603/606/64306/280375/82402/82505/631324/631324_1_pic270_8524.jpg', 'http: //pic3.womai.com/upload/601/603/606/64306/280375/82402/82505/631324/631324_1_pic270_8524.jpg', '', '海鲜肉类', '海鲜肉类直销店');
INSERT INTO `goods` VALUES ('143', '中粮安至选新西兰谷饲肉眼原切牛排 180g 盒装', '69.00', 'http://pic1.womai.com/upload/601/603/606/64306/280375/82402/82505/573694/573694_0_pic270_9954.jpg', 'http: //pic1.womai.com/upload/601/603/606/64306/280375/82402/82505/573694/573694_0_pic270_9954.jpg', '', '海鲜肉类', '海鲜肉类直销店');
INSERT INTO `goods` VALUES ('142', '【买5送2】马迭尔 冰棍香草味85g袋装', '105.00', 'http://pic3.womai.com/upload/601/603/606/64306/280375/206740/206743/623284/10706438_1_pic270_5257.jpg', 'http://pic3.womai.com/upload/601/603/606/64306/280375/206740/206743/623284/10706438_1_pic270_5257.jpg', '', '海鲜肉类', '海鲜肉类直销店');
INSERT INTO `goods` VALUES ('141', '【买五赠一】马迭尔 冰棍香草味85g袋装', '90.00', 'http://pic1.womai.com/upload/601/604/51700/84500/10529458/10529458_1_pic270_6597.jpg', 'http: //pic1.womai.com/upload/601/604/51700/84500/10529458/10529458_1_pic270_6597.jpg', '', '海鲜肉类', '海鲜肉类直销店');
INSERT INTO `goods` VALUES ('140', '【中粮海外直采】沃弗瑞熟冻虾仁(27-33只) 300g', '55.00', 'http://pic3.womai.com/upload/601/603/606/64306/280375/219300/219301/635879/635879_1_pic270_6466.jpg', 'http: //pic3.womai.com/upload/601/603/606/64306/280375/219300/219301/635879/635879_1_pic270_6466.jpg', '', '海鲜肉类', '海鲜肉类直销店');
INSERT INTO `goods` VALUES ('139', '中粮凌鲜加拿大野生北极虾（36-48只）400g 盒装', '72.80', 'http://pic1.womai.com/upload/601/603/90900/216060/216063/632219/632219_1_pic270_2505.jpg', 'http://pic1.womai.com/upload/601/603/90900/216060/216063/632219/632219_1_pic270_2505.jpg', '', '海鲜肉类', '海鲜肉类直销店');
INSERT INTO `goods` VALUES ('137', '【有好货】中粮安至选澳洲谷饲西冷原切牛排 180g ...', '52.00', 'http://pic3.womai.com/upload/601/603/606/64306/280375/82402/82505/584321/584321_0_pic270_8829.jpg', 'http: //pic3.womai.com/upload/601/603/606/64306/280375/82402/82505/584321/584321_0_pic270_8829.jpg', '', '海鲜肉类', '海鲜肉类直销店');
INSERT INTO `goods` VALUES ('138', '【中粮海外直采】哈根达斯冰淇淋礼盒4*95ml（香草...', '105.00', 'http://pic2.womai.com/upload/601/603/606/64306/280375/206740/206741/672784/672784_1_pic270_1803.jpg', 'http://pic2.womai.com/upload/601/603/606/64306/280375/206740/206741/672784/672784_1_pic270_1803.jpg', '', '海鲜肉类', '海鲜肉类直销店');
INSERT INTO `goods` VALUES ('136', '中粮安至选新西兰谷饲西冷原切牛排 180g 盒装', '58.00', 'http://pic1.womai.com/upload/601/603/606/64306/280375/82402/82505/573695/573695_0_pic270_1372.jpg', 'http: //pic1.womai.com/upload/601/603/606/64306/280375/82402/82505/573695/573695_0_pic270_1372.jpg', '', '海鲜肉类', '海鲜肉类直销店');
INSERT INTO `goods` VALUES ('135', '【中粮海外直采】哈根达斯草莓冰淇淋460ml 杯装（...', '78.00', 'http://pic2.womai.com/upload/601/603/606/64306/280375/206740/206741/650178/673131_1_pic270_6296.jpg', 'http: //pic2.womai.com/upload/601/603/606/64306/280375/206740/206741/650178/673131_1_pic270_6296.jpg', '', '海鲜肉类', '海鲜肉类直销店');
INSERT INTO `goods` VALUES ('134', '【中粮海外直采】Wharfresh加拿大生冻大龙虾550/6...', '108.00', 'http://pic1.womai.com/upload/601/603/606/64306/280375/219300/219301/665839/665839_1_pic270_8041.jpg', 'http://pic1.womai.com/upload/601/603/606/64306/280375/219300/219301/665839/665839_1_pic270_8041.jpg', '', '海鲜肉类', '海鲜肉类直销店');
INSERT INTO `goods` VALUES ('133', '中粮凌鲜鲳鱼礼盒（12条装）1.8KG  盒装', '299.00', 'http://pic1.womai.com/upload/601/603/606/64306/280375/82802/648083/648083_1_pic270_8505.jpg', 'http://pic1.womai.com/upload/601/603/606/64306/280375/82802/648083/648083_1_pic270_8505.jpg', '', '海鲜肉类', '海鲜肉类直销店');
INSERT INTO `goods` VALUES ('132', '莫纳罗盐焗味夏威夷果仁单罐装127g（美国进口 罐）', '59.90', 'http://pic3.womai.com/upload/601/602/10203613/680639/680639_1_pic270_7611.jpg', 'http://pic3.womai.com/upload/601/602/10203613/680639/680639_1_pic270_7611.jpg', '', '进口食品', '中粮进口直销店');
INSERT INTO `goods` VALUES ('131', '【中粮海外直采】淨糖屋原味牛轧糖80g（台湾进口 ...', '36.90', 'http://pic1.womai.com/upload/601/603/606/6060/6063/496845/659255/659255_2_pic270_7377.jpg', 'http://pic1.womai.com/upload/601/603/606/6060/6063/496845/659255/659255_2_pic270_7377.jpg', '', '进口食品', '中粮进口直销店');
INSERT INTO `goods` VALUES ('130', '趣莱福蒜味虾片240g（韩国进口 袋）', '38.00', 'http://pic3.womai.com/upload/601/603/606/66102/66110/496881/647019/647019_1_pic270_5150.jpg', 'http: //pic3.womai.com/upload/601/603/606/66102/66110/496881/647019/647019_1_pic270_5150.jpg', '', '进口食品', '中粮进口直销店');
INSERT INTO `goods` VALUES ('129', '【海外直采】三立提子馅饼180g（日本进口 袋）', '29.90', 'http://pic3.womai.com/upload/601/603/606/66102/66104/496880/635628/635628_1_pic270_3624.jpg', 'http://pic3.womai.com/upload/601/603/606/66102/66104/496880/635628/635628_1_pic270_3624.jpg', '', '进口食品', '中粮进口直销店');
INSERT INTO `goods` VALUES ('128', 'YBARRA CLASICO经典特级初榨橄榄油500ml(西班牙进...', '49.90', 'http://pic3.womai.com/upload/601/603/606/6200/6201/6210/534518/534518_1_pic270_7183.jpg', 'http://pic3.womai.com/upload/601/603/606/6200/6201/6210/534518/534518_1_pic270_7183.jpg', '', '进口食品', '中粮进口直销店');
INSERT INTO `goods` VALUES ('127', 'LIPO利葡面包干300g奶油味（越南进口 袋）', '14.80', 'http://pic3.womai.com/upload/601/603/505201/505201_0_pic270_9827.jpg', 'http://pic3.womai.com/upload/601/603/505201/505201_0_pic270_9827.jpg', '', '进口食品', '中粮进口直销店');
INSERT INTO `goods` VALUES ('126', '【爆款】丹麦蓝罐曲奇饼干礼盒908g（丹麦进口 盒）', '118.00', 'http://pic2.womai.com/upload/601/602/54607/57328/57328_1_pic270_8782.jpg', 'http://pic2.womai.com/upload/601/602/54607/57328/57328_1_pic270_8782.jpg', '', '进口食品', '中粮进口直销店');
INSERT INTO `goods` VALUES ('125', 'KJELDSENS丹麦蓝罐曲奇681g(丹麦进口 盒)新老包装...', '98.00', 'http://pic1.womai.com/upload/601/603/606/6060/6064/6082/57327/57327_1_pic270_9543.jpg', 'http: //pic1.womai.com/upload/601/603/606/6060/6064/6082/57327/57327_1_pic270_9543.jpg', '', '进口食品', '中粮进口直销店');
INSERT INTO `goods` VALUES ('124', 'Calbee佳可比薯条三兄弟咸味薯条80g（日本进口 盒）', '25.00', 'http://pic2.womai.com/upload/601/603/606/66102/66110/496883/638714/638714_1_pic270_8638.jpg', 'http: //pic2.womai.com/upload/601/603/606/66102/66110/496883/638714/638714_1_pic270_8638.jpg', '', '进口食品', '中粮进口直销店');
INSERT INTO `goods` VALUES ('123', '【中粮海外直采】Snack House零食屋盐焗腰果300g ...', '59.00', 'http://pic3.womai.com/upload/601/603/606/66102/66108/496884/619138/619138_1_pic270_3062.jpg', 'http: //pic3.womai.com/upload/601/603/606/66102/66108/496884/619138/619138_1_pic270_3062.jpg', '', '进口食品', '中粮进口直销店');
INSERT INTO `goods` VALUES ('122', '【爆款】老板仔经典香脆紫菜27g（泰国进口 盒）新...', '14.80', 'http://pic2.womai.com/upload/601/603/606/66102/66110/585440/585440_2_pic270_6946.jpg', 'http://pic2.womai.com/upload/601/603/606/66102/66110/585440/585440_2_pic270_6946.jpg', '', '进口食品', '中粮进口直销店');
INSERT INTO `goods` VALUES ('121', '【中粮海外直采】Ocean Spray优鲜沛蔓越莓干142g ...', '19.90', 'http://pic2.womai.com/upload/601/603/606/66102/66108/559388/559388_1_pic270_3721.jpg', 'http://pic2.womai.com/upload/601/603/606/66102/66108/559388/559388_1_pic270_3721.jpg', '', '进口食品', '中粮进口直销店');
INSERT INTO `goods` VALUES ('119', '【爆款】榴的华榴莲干100g(泰国进口 袋)', '39.90', 'http://pic2.womai.com/upload/601/602/58906/63827/63827_2_pic270_8842.jpg', 'http://pic2.womai.com/upload/601/602/58906/63827/63827_2_pic270_8842.jpg', '', '进口食品', '中粮进口直销店');
INSERT INTO `goods` VALUES ('120', '【中粮海外直采】Mamminger曼明格酸黄瓜670g （德...', '19.90', 'http://pic1.womai.com/upload/601/603/606/66102/66115/557151/557151_1_pic270_4551.jpg', 'http://pic1.womai.com/upload/601/603/606/66102/66115/557151/557151_1_pic270_4551.jpg', '', '进口食品', '中粮进口直销店');

-- ----------------------------
-- Table structure for orders
-- ----------------------------
DROP TABLE IF EXISTS `orders`;
CREATE TABLE `orders` (
  `o_id` int(255) NOT NULL AUTO_INCREMENT,
  `g_id` int(255) NOT NULL,
  `u_id` int(255) NOT NULL,
  `count` int(255) NOT NULL,
  PRIMARY KEY (`o_id`)
) ENGINE=MyISAM AUTO_INCREMENT=24 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of orders
-- ----------------------------
INSERT INTO `orders` VALUES ('11', '144', '10', '1');
INSERT INTO `orders` VALUES ('10', '148', '10', '5');
INSERT INTO `orders` VALUES ('13', '159', '10', '2');
INSERT INTO `orders` VALUES ('12', '169', '10', '1');
INSERT INTO `orders` VALUES ('18', '136', '14', '15');
INSERT INTO `orders` VALUES ('19', '169', '14', '1');
INSERT INTO `orders` VALUES ('16', '154', '1', '1');
INSERT INTO `orders` VALUES ('17', '152', '1', '1');
INSERT INTO `orders` VALUES ('20', '161', '14', '1');
INSERT INTO `orders` VALUES ('21', '124', '15', '5');
INSERT INTO `orders` VALUES ('22', '150', '15', '4');
INSERT INTO `orders` VALUES ('23', '227', '15', '6');

-- ----------------------------
-- Table structure for userdb
-- ----------------------------
DROP TABLE IF EXISTS `userdb`;
CREATE TABLE `userdb` (
  `u_id` int(255) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `tel` varchar(255) NOT NULL,
  PRIMARY KEY (`u_id`)
) ENGINE=MyISAM AUTO_INCREMENT=16 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of userdb
-- ----------------------------
INSERT INTO `userdb` VALUES ('1', 'admin123', 'tzc123241', '123456789019');
INSERT INTO `userdb` VALUES ('10', 'tangzhicheng', 'tzc241241', '18570567018');
INSERT INTO `userdb` VALUES ('15', 'tang1234', 'tzc241241', '18237381238');
INSERT INTO `userdb` VALUES ('14', 'tang2411', 'tzc241241', '185828283818');
SET FOREIGN_KEY_CHECKS=1;
