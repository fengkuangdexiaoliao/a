

//数据加载

//头部和脚部的加载
$("#header").load("header.html","dd",function(){
	
})
$("#footer").load("footer.html","dd",function(){
	
})

//购物车改变函数
function getCar(){
			var tool=new Tools();
			var carStr=tool.getcookie("user");
			if (carStr==undefined) {
				$(".re_car i span").html("0");
				$(".header_bottom #head_car span").html("0");
			}else{
				var num=0;
				var carJson=JSON.parse(carStr);
				$.each(carJson, function() {
					num++
				});
				$(".re_car i span").html(num);
				$(".header_bottom #head_car span").html(num);
			}
		}




//猜你喜欢的json
var  s={"result":{"impr":"//knicks.jd.com/log/server?t=rec_common_exp&v=type=rec.619117$src=rec$action=0$reqsig=e68d0b3100b9201dcf8246bc896d3778c554d100$enb=1$csku=13038848047,2622540,11775777,12174895,15355405573,4357895,3786840,10397479839,13325860722,928128,3939915,4519585,30466617619,3291988,28118005047,4176180,3814459,680786,33588987843,867953,6571634,1533647584,12071212,4803334,6230581,12124169,1383843828,29096432904,1404743,20469288446,10562024897,30360464447,1486664101,31380911874,8514591,32117815214,4836293,918498,1070843,24042595745,24600128839,835723,28363852144,11967827,765646,18558729685,1006891,3458642,3671203,579671,3498249,1603413060,508411,4587481,692918,18295590849,1454536910,5887228,1275576,1588111,11629794514,10912871310,13898830352,13231722815,22972117771,6223907,4604577,29091531875,33581329559,6181467,4544040,10960247,15419184707,4065910,5273645,10261242482,10220681196,1151846,31762637120,3150591,31505463510,4543063,11258404213,838692,990602,6915391,18570496991,5553547,29476374566,11185437278,11978638,4053463,5731372,12342756,15531497507,2796199,1982314,19135502754,112165,11701352925$st=0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0$sku=0$p=619117$pin=$uuid=-1$expid=101$mexpid=$gm=page%5E1$rt=0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0$rid=2949391199560373714$ver=1$sig=e06d61587ba28d96cb5ad3679f2032ee78f4b024","data":[{"spu":13038848047,"jp":"28.9","img":"https://img13.360buyimg.com/jdcms/jfs/t24886/50/2246370270/722829/b1dc3163/5bc6f29aN2ba41a61.png","userCoupon":true,"type":0,"bn":"三只松鼠（Three Squirrels）","yushouStatus":0,"renl":99,"yuShou":0,"subsku":[],"mp":"75.0","impr":"1","yuyueStatus":0,"skuDateType":0,"clk":"//knicks.jd.com/log/server?t=rec_common_clk&v=type=rec.619117$src=rec$action=1$reqsig=e68d0b3100b9201dcf8246bc896d3778c554d100$enb=1$sku=0$p=619117$pin=$uuid=-1$csku=13038848047$index=0$st=0$adcli=$expid=101$mexpid=$im=$rid=2949391199560373714$ver=1$sig=6c109cb6eb6dc7f73a95f42ddd08dcb7809e70f6","c3":1595,"resultMessage":["[price1]"],"sku":13038848047,"wt":"1.0","stk":33,"w":5.0,"t":"三只松鼠 手撕面包1000g整箱装零食大礼包口袋面包孕妇零食早餐食品生日蛋糕小糕点点心礼盒装","rt":"0","tips":[{"v":"0","t":9999}]},{"spu":2622657,"jp":"12.9","img":"https://img13.360buyimg.com/jdcms/jfs/t2731/58/1586289173/265907/1c08c800/5742b58dN33a482d3.jpg","type":0,"bn":"绿之源","yushouStatus":0,"renl":0,"yuShou":0,"subsku":[],"mp":"49.0","impr":"1","yuyueStatus":0,"skuDateType":12,"clk":"//knicks.jd.com/log/server?t=rec_common_clk&v=type=rec.619117$src=rec$action=1$reqsig=e68d0b3100b9201dcf8246bc896d3778c554d100$enb=1$sku=0$p=619117$pin=$uuid=-1$csku=2622540$index=1$st=0$adcli=$expid=101$mexpid=$im=$rid=2949391199560373714$ver=1$sig=b045bd6588cbf41b3cac0d09d544d5accfebce5","c3":11880,"resultMessage":["[price2]"],"sku":2622540,"wt":"0.04","stk":33,"w":5.0,"t":"绿之源 多孔珊瑚去污洗车海绵 特大号海绵擦车吸水清洁刷车棉汽车用品工具","rt":"0","tips":[{"v":"0","t":9999}]},{"spu":11775777,"jp":"37.4","img":"https://img13.360buyimg.com/jdcms/jfs/t16867/187/1497803942/371584/3df37593/5acc578cN34e978a3.jpg","type":0,"bn":"新经典","yushouStatus":0,"renl":0,"yuShou":0,"subsku":[],"mp":"49.8","impr":"1","yuyueStatus":0,"skuDateType":12,"clk":"//knicks.jd.com/log/server?t=rec_common_clk&v=type=rec.619117$src=rec$action=1$reqsig=e68d0b3100b9201dcf8246bc896d3778c554d100$enb=1$sku=0$p=619117$pin=$uuid=-1$csku=11775777$index=2$st=0$adcli=$expid=101$mexpid=$im=$rid=2949391199560373714$ver=1$sig=648c46512dcfa2ec5e5dcf1ec82e63b016ef3616","c3":3311,"sku":11775777,"wt":"0.924","stk":33,"w":5.0,"t":"穆斯林的葬礼(2015版)","rt":"0","tips":[{"v":"0","t":9999}]},{"spu":12239650,"jp":"46.6","img":"https://img13.360buyimg.com/jdcms/jfs/t7438/177/2381955617/172904/76c3a01d/59ae13d2N9521015d.jpg","type":0,"bn":"","yushouStatus":0,"renl":0,"yuShou":0,"subsku":[],"mp":"49.0","impr":"1","yuyueStatus":0,"skuDateType":12,"clk":"//knicks.jd.com/log/server?t=rec_common_clk&v=type=rec.619117$src=rec$action=1$reqsig=e68d0b3100b9201dcf8246bc896d3778c554d100$enb=1$sku=0$p=619117$pin=$uuid=-1$csku=12174895$index=3$st=0$adcli=$expid=101$mexpid=$im=$rid=2949391199560373714$ver=1$sig=25cf24d19e3f74bf103e473154599f0ee7e0b7e","c3":3297,"resultMessage":["[price1]"],"sku":12174895,"wt":"0.32","stk":33,"w":5.0,"t":"兄弟（新版）","rt":"0","tips":[{"v":"0","t":9999}]},{"spu":15355405573,"jp":"65.8","img":"https://img13.360buyimg.com/jdcms/jfs/t7309/25/626948404/190868/ed597268/59956118Nd13afa6f.jpg","type":0,"bn":"妙管家（Magic Amah）","yushouStatus":0,"renl":99,"yuShou":0,"subsku":[],"mp":"109.0","impr":"1","yuyueStatus":0,"skuDateType":0,"clk":"//knicks.jd.com/log/server?t=rec_common_clk&v=type=rec.619117$src=rec$action=1$reqsig=e68d0b3100b9201dcf8246bc896d3778c554d100$enb=1$sku=0$p=619117$pin=$uuid=-1$csku=15355405573$index=4$st=0$adcli=$expid=101$mexpid=$im=$rid=2949391199560373714$ver=1$sig=66a5a67ceb222c7c1b0aeb73c4bb0866c1ee956e","c3":1662,"sku":15355405573,"wt":"4.1","stk":33,"w":5.0,"t":"妙管家（Magic Amah） 台湾进口浓缩中性洗衣液不伤手无荧光剂薰衣草4000g 浅紫色 8斤","rt":"0","tips":[{"v":"0","t":9999}]},{"spu":4357895,"jp":"29.9","img":"https://img13.360buyimg.com/jdcms/jfs/t21433/146/2475960872/257451/f63ca03d/5b569122N66db7469.jpg","type":0,"bn":"尚烤佳","yushouStatus":0,"renl":0,"yuShou":0,"subsku":[],"mp":"79.0","impr":"1","yuyueStatus":0,"skuDateType":12,"clk":"//knicks.jd.com/log/server?t=rec_common_clk&v=type=rec.619117$src=rec$action=1$reqsig=e68d0b3100b9201dcf8246bc896d3778c554d100$enb=1$sku=0$p=619117$pin=$uuid=-1$csku=4357895$index=5$st=0$adcli=$expid=101$mexpid=$im=$rid=2949391199560373714$ver=1$sig=50cc70a9ea9b026e21b8e350982f6b23503564fb","c3":6216,"resultMessage":["[price1]"],"sku":4357895,"wt":"0.34","stk":33,"w":5.0,"t":"尚烤佳 烘焙纸 吸油纸 硅油纸 烤盘烤箱烧烤纸 耐高温烤肉纸100张","rt":"0","tips":[{"v":"0","t":9999}]},{"spu":3786840,"jp":"99.0","img":"https://img13.360buyimg.com/jdcms/jfs/t27700/75/275166438/168785/80f7e96f/5b8cd5edN8eb5f2d6.jpg","type":0,"bn":"美的（Midea）","yushouStatus":0,"renl":0,"yuShou":0,"subsku":[],"mp":"299.0","impr":"1","yuyueStatus":0,"skuDateType":12,"clk":"//knicks.jd.com/log/server?t=rec_common_clk&v=type=rec.619117$src=rec$action=1$reqsig=e68d0b3100b9201dcf8246bc896d3778c554d100$enb=1$sku=0$p=619117$pin=$uuid=-1$csku=3786840$index=6$st=0$adcli=$expid=101$mexpid=$im=$rid=2949391199560373714$ver=1$sig=5929c5c5d239870617435f908336848029f1eff5","c3":760,"sku":3786840,"wt":"1.43","stk":33,"w":5.0,"t":"美的（Midea）电水壶热水壶电热水壶双层防烫304不锈钢1.7L容量 烧水壶WHJ1705b","rt":"0","tips":[{"v":"0","t":9999}]},{"spu":10397479838,"jp":"228.0","img":"https://img13.360buyimg.com/jdcms/jfs/t14389/270/1026482040/134271/388d7830/5a41e129N944b4e0f.jpg","type":0,"bn":"艾帝达姆","yushouStatus":0,"renl":99,"yuShou":0,"subsku":[],"mp":"956.0","impr":"1","yuyueStatus":0,"skuDateType":0,"clk":"//knicks.jd.com/log/server?t=rec_common_clk&v=type=rec.619117$src=rec$action=1$reqsig=e68d0b3100b9201dcf8246bc896d3778c554d100$enb=1$sku=0$p=619117$pin=$uuid=-1$csku=10397479839$index=7$st=0$adcli=$expid=101$mexpid=$im=$rid=2949391199560373714$ver=1$sig=865937337fbd6d5b93060a814cf9d52ecebfb8a3","c3":9439,"sku":10397479839,"wt":"10.0","stk":33,"w":5.0,"t":"西班牙进口艾帝达姆星小麦啤酒 大星啤酒Estrella Damm Inedit 新星啤酒 750ml*6瓶装","rt":"0","tips":[{"v":"0","t":9999}]},{"spu":13325860722,"jp":"49.0","img":"https://img13.360buyimg.com/jdcms/jfs/t15820/94/725483528/106009/db5ea66f/5a3a2875N8ae03b6c.jpg","type":0,"bn":"Meilen","yushouStatus":0,"renl":99,"yuShou":0,"subsku":[],"mp":"99.0","impr":"1","yuyueStatus":0,"skuDateType":0,"clk":"//knicks.jd.com/log/server?t=rec_common_clk&v=type=rec.619117$src=rec$action=1$reqsig=e68d0b3100b9201dcf8246bc896d3778c554d100$enb=1$sku=0$p=619117$pin=$uuid=-1$csku=13325860722$index=8$st=0$adcli=$expid=101$mexpid=$im=$rid=2949391199560373714$ver=1$sig=c0ed8045e138157fee62a765f73c42d5fd7cfcb8","c3":1289,"resultMessage":["[price1]"],"sku":13325860722,"wt":"1.3","stk":33,"w":5.0,"t":"【京东包邮 充电款】Meilen电子秤称重人体秤精准电子称家用计体重秤 USB充电版黑色","rt":"0","tips":[{"v":"0","t":9999}]},{"spu":928128,"jp":"159.0","img":"https://img13.360buyimg.com/jdcms/jfs/t20593/318/373105394/124709/6b0fc756/5b0b6a65N39a9c7d5.jpg","type":0,"bn":"飞利浦（PHILIPS）","yushouStatus":0,"renl":0,"yuShou":0,"subsku":[],"mp":"200.0","impr":"1","yuyueStatus":0,"skuDateType":12,"clk":"//knicks.jd.com/log/server?t=rec_common_clk&v=type=rec.619117$src=rec$action=1$reqsig=e68d0b3100b9201dcf8246bc896d3778c554d100$enb=1$sku=0$p=619117$pin=$uuid=-1$csku=928128$index=9$st=0$adcli=$expid=101$mexpid=$im=$rid=2949391199560373714$ver=1$sig=55d777b9be52caeeb62673ab98b2534f468165cb","c3":740,"sku":928128,"wt":"0.8","stk":33,"w":5.0,"t":"飞利浦（PHILIPS）电吹风机 HP8230 家用大功率恒温护发冷热风静音吹风筒","rt":"0","tips":[{"v":"0","t":9999}]},{"spu":4575680,"jp":"12.8","img":"https://img13.360buyimg.com/jdcms/jfs/t5836/95/261723066/176096/72056b02/591e640cNfce92487.jpg","type":0,"bn":"雷士（NVC）","yushouStatus":0,"renl":0,"yuShou":0,"subsku":[],"mp":"44.0","impr":"1","yuyueStatus":0,"skuDateType":12,"clk":"//knicks.jd.com/log/server?t=rec_common_clk&v=type=rec.619117$src=rec$action=1$reqsig=e68d0b3100b9201dcf8246bc896d3778c554d100$enb=1$sku=0$p=619117$pin=$uuid=-1$csku=3939915$index=10$st=0$adcli=$expid=101$mexpid=$im=$rid=2949391199560373714$ver=1$sig=ce8a4c74b3e08e28e9924d471113eed689062f84","c3":9903,"sku":3939915,"wt":"0.06","stk":33,"w":5.0,"t":"雷士（NVC）LED灯泡球泡 7瓦E27大螺口 光源节能灯 白光6500K","rt":"0","tips":[{"v":"0","t":9999}]},{"spu":4519563,"jp":"69.0","img":"https://img13.360buyimg.com/jdcms/jfs/t22921/89/2412277576/322518/bbc1f18d/5b7f6f04N66f159ea.jpg","type":0,"bn":"南极人（Nanjiren）","yushouStatus":0,"renl":0,"yuShou":0,"subsku":[],"mp":"199.0","impr":"1","yuyueStatus":0,"skuDateType":12,"clk":"//knicks.jd.com/log/server?t=rec_common_clk&v=type=rec.619117$src=rec$action=1$reqsig=e68d0b3100b9201dcf8246bc896d3778c554d100$enb=1$sku=0$p=619117$pin=$uuid=-1$csku=4519585$index=11$st=0$adcli=$expid=101$mexpid=$im=$rid=2949391199560373714$ver=1$sig=bf41ffbfa9f92b8a514e1223dc877a28c82150d5","c3":12015,"resultMessage":["[price3]"],"sku":4519585,"wt":"0.46","stk":33,"w":5.0,"t":"南极人秋衣秋裤男女士纯棉薄款套装纯棉圆领基础保暖打底棉毛衫裤 麻灰 3XL（185/110）","rt":"0","tips":[{"v":"0","t":9999}]},{"spu":30466617618,"jp":"159.0","img":"https://img13.360buyimg.com/jdcms/jfs/t1/2048/27/8567/350839/5ba9ddc7E360c274b/e4d90636134185f3.jpg","type":0,"bn":"茵曼（INMAN）","yushouStatus":0,"renl":99,"yuShou":0,"subsku":[],"mp":"319.0","impr":"1","yuyueStatus":0,"skuDateType":0,"clk":"//knicks.jd.com/log/server?t=rec_common_clk&v=type=rec.619117$src=rec$action=1$reqsig=e68d0b3100b9201dcf8246bc896d3778c554d100$enb=1$sku=0$p=619117$pin=$uuid=-1$csku=30466617619$index=12$st=0$adcli=$expid=101$mexpid=$im=$rid=2949391199560373714$ver=1$sig=17be06129142f64c41d8de4b5e2709442265b4f0","c3":1356,"resultMessage":["[price3]"],"sku":30466617619,"wt":"1.0","stk":36,"w":5.0,"t":"茵曼2018秋装新款初秋文艺拼色镂空提花套头针织衫女【G1883|302833】 蓝色 M","rt":"0","tips":[{"v":"0","t":9999}]},{"spu":2991995,"jp":"29.9","img":"https://img13.360buyimg.com/jdcms/jfs/t1/4320/10/8634/105994/5ba9ecd6Ea9d1a852/37ca841886f4a4bf.jpg","type":0,"bn":"大嘴猴（Paul Frank）","yushouStatus":0,"renl":0,"yuShou":0,"subsku":[],"mp":"99.0","impr":"1","yuyueStatus":0,"skuDateType":12,"clk":"//knicks.jd.com/log/server?t=rec_common_clk&v=type=rec.619117$src=rec$action=1$reqsig=e68d0b3100b9201dcf8246bc896d3778c554d100$enb=1$sku=0$p=619117$pin=$uuid=-1$csku=3291988$index=13$st=0$adcli=$expid=101$mexpid=$im=$rid=2949391199560373714$ver=1$sig=1a532a8f146bf9e8e01ba884bac81e73ee55e78b","c3":6911,"sku":3291988,"wt":"0.44","stk":33,"w":5.0,"t":"大嘴猴Paul Frank 情侣居家棉拖鞋 简约舒适毛绒保暖棉拖鞋男款 咖啡280码 PF-72607","rt":"0","tips":[{"v":"0","t":9999}]},{"spu":28118005044,"jp":"28.0","img":"https://img13.360buyimg.com/jdcms/jfs/t20644/281/22544287/62976/b93024c1/5af56fbdNcd790c13.jpg","type":0,"bn":"丹比诺（DANBINUO）","yushouStatus":0,"renl":99,"yuShou":0,"subsku":[],"mp":"60.0","impr":"1","yuyueStatus":0,"skuDateType":0,"clk":"//knicks.jd.com/log/server?t=rec_common_clk&v=type=rec.619117$src=rec$action=1$reqsig=e68d0b3100b9201dcf8246bc896d3778c554d100$enb=1$sku=0$p=619117$pin=$uuid=-1$csku=28118005047$index=14$st=0$adcli=$expid=101$mexpid=$im=$rid=2949391199560373714$ver=1$sig=f4f309f1d6b656764bfd2ac365374950c964387","c3":12114,"sku":28118005047,"wt":"1.0","stk":33,"w":5.0,"t":"瑜伽儿童呼啦圈中小学生初学者呼啦圈可拆卸加重体操圈游戏圈瑜珈YOGA 直径70M 绿色 适合中小学生","rt":"0","tips":[{"v":"0","t":9999}]},{"spu":4176180,"jp":"12.9","img":"https://img13.360buyimg.com/jdcms/jfs/t3847/338/2200026645/140646/c239125d/58537d88Nc15f021d.jpg","type":0,"bn":"海天","yushouStatus":0,"renl":0,"yuShou":0,"subsku":[],"mp":"21.9","impr":"1","yuyueStatus":0,"skuDateType":12,"clk":"//knicks.jd.com/log/server?t=rec_common_clk&v=type=rec.619117$src=rec$action=1$reqsig=e68d0b3100b9201dcf8246bc896d3778c554d100$enb=1$sku=0$p=619117$pin=$uuid=-1$csku=4176180$index=15$st=0$adcli=$expid=101$mexpid=$im=$rid=2949391199560373714$ver=1$sig=812bbf92901660efd466473ed6272628a82152b0","c3":2677,"sku":4176180,"wt":"2.28","stk":33,"w":5.0,"t":"海天 生抽酱油 1.9L","rt":"0","tips":[{"v":"0","t":9999}]},{"spu":3814459,"jp":"19.9","img":"https://img13.360buyimg.com/jdcms/jfs/t20776/161/187615935/336386/9c928b90/5b023aa7Nd0b68d07.jpg","type":0,"bn":"peppito","yushouStatus":0,"renl":0,"yuShou":0,"subsku":[],"mp":"22.5","impr":"1","yuyueStatus":0,"skuDateType":12,"clk":"//knicks.jd.com/log/server?t=rec_common_clk&v=type=rec.619117$src=rec$action=1$reqsig=e68d0b3100b9201dcf8246bc896d3778c554d100$enb=1$sku=0$p=619117$pin=$uuid=-1$csku=3814459$index=16$st=0$adcli=$expid=101$mexpid=$im=$rid=2949391199560373714$ver=1$sig=57c00584aaa75071c7eb1001556a24f52f2a6f82","c3":5020,"resultMessage":["[price1]"],"sku":3814459,"wt":"0.43","stk":33,"w":5.0,"t":"中国香港 GEL peppito 奶盐味梳打饼干405g 袋装 下午茶 早餐零食（新老包装随机发货）","rt":"0","tips":[{"v":"0","t":9999}]},{"spu":680786,"jp":"19.9","img":"https://img13.360buyimg.com/jdcms/jfs/t11578/269/458184117/192454/9541638f/59f13b64N1101b941.jpg","type":0,"bn":"京都念慈菴","yushouStatus":0,"renl":0,"yuShou":0,"subsku":[],"mp":"48.0","impr":"1","yuyueStatus":0,"skuDateType":12,"clk":"//knicks.jd.com/log/server?t=rec_common_clk&v=type=rec.619117$src=rec$action=1$reqsig=e68d0b3100b9201dcf8246bc896d3778c554d100$enb=1$sku=0$p=619117$pin=$uuid=-1$csku=680786$index=17$st=0$adcli=$expid=101$mexpid=$im=$rid=2949391199560373714$ver=1$sig=95d0555340c3ac296a73e44e519e705e01dc83e4","c3":5021,"resultMessage":["[price3]"],"sku":680786,"wt":"0.1","stk":33,"w":5.0,"t":"泰国进口 京都念慈菴 枇杷糖 润喉糖 水果味糖果零食 硬糖 60g","rt":"0","tips":[{"v":"0","t":9999}]},{"spu":30851802159,"jp":"99.0","img":"https://img13.360buyimg.com/jdcms/jfs/t1/4275/28/9166/227223/5bab5d22E4f126818/db4abfc2a1d55d57.jpg","type":0,"bn":"九道湾","yushouStatus":0,"renl":99,"yuShou":0,"subsku":[],"mp":"160.0","impr":"1","yuyueStatus":0,"skuDateType":0,"clk":"//knicks.jd.com/log/server?t=rec_common_clk&v=type=rec.619117$src=rec$action=1$reqsig=e68d0b3100b9201dcf8246bc896d3778c554d100$enb=1$sku=0$p=619117$pin=$uuid=-1$csku=33588987843$index=18$st=0$adcli=$expid=101$mexpid=$im=$rid=2949391199560373714$ver=1$sig=1683acee22e120701f9fd9d353311023b1d89452","c3":1589,"sku":33588987843,"wt":"2.0","stk":33,"w":5.0,"t":"新疆特产卡瓦斯.格瓦奇.格瓦斯天山蜂蜜与啤酒花发酵饮料 卡瓦斯500ml/瓶*16","rt":"0","tips":[{"v":"0","t":9999}]},{"spu":867953,"jp":"12.9","img":"https://img13.360buyimg.com/jdcms/jfs/t6748/259/742907997/246375/45b56ea9/5943a154N761e99e1.jpg","type":0,"bn":"双枪（Suncha）","yushouStatus":0,"renl":0,"yuShou":0,"subsku":[],"mp":"19.9","impr":"1","yuyueStatus":0,"skuDateType":12,"clk":"//knicks.jd.com/log/server?t=rec_common_clk&v=type=rec.619117$src=rec$action=1$reqsig=e68d0b3100b9201dcf8246bc896d3778c554d100$enb=1$sku=0$p=619117$pin=$uuid=-1$csku=867953$index=19$st=0$adcli=$expid=101$mexpid=$im=$rid=2949391199560373714$ver=1$sig=1da33498824d0f099c65499ccee4c77b20e47299","c3":6231,"sku":867953,"wt":"0.2","stk":33,"w":5.0,"t":"双枪（Suncha）竹雕刻 家用竹筷子套装12双装KZ1923","rt":"0","tips":[{"v":"0","t":9999}]},{"spu":6571634,"jp":"29.0","img":"https://img13.360buyimg.com/jdcms/jfs/t20359/349/1787682593/211110/c2bf31bd/5b37b191Nf6536418.jpg","type":0,"bn":"欧普（OPPLE）","yushouStatus":0,"renl":0,"yuShou":0,"subsku":[],"mp":"83.8","impr":"1","yuyueStatus":0,"skuDateType":12,"clk":"//knicks.jd.com/log/server?t=rec_common_clk&v=type=rec.619117$src=rec$action=1$reqsig=e68d0b3100b9201dcf8246bc896d3778c554d100$enb=1$sku=0$p=619117$pin=$uuid=-1$csku=6571634$index=20$st=0$adcli=$expid=101$mexpid=$im=$rid=2949391199560373714$ver=1$sig=4274ab2e14267f487f327f65d66a6de6fb66f4bc","c3":9905,"sku":6571634,"wt":"0.11","stk":33,"w":5.0,"t":"欧普照明（OPPLE）插电LED小夜灯床头婴儿宝宝喂奶月子灯 守望者两档调光","rt":"0","tips":[{"v":"0","t":9999}]},{"spu":1533605620,"jp":"29.0","img":"https://img13.360buyimg.com/jdcms/jfs/t17503/2/388205696/177133/4ceffe79/5a7092aaNa09fce6b.jpg","type":0,"bn":"带带帅","yushouStatus":0,"renl":99,"yuShou":0,"subsku":[],"mp":"598.0","impr":"1","yuyueStatus":0,"skuDateType":0,"clk":"//knicks.jd.com/log/server?t=rec_common_clk&v=type=rec.619117$src=rec$action=1$reqsig=e68d0b3100b9201dcf8246bc896d3778c554d100$enb=1$sku=0$p=619117$pin=$uuid=-1$csku=1533647584$index=21$st=0$adcli=$expid=101$mexpid=$im=$rid=2949391199560373714$ver=1$sig=6d0b814f8f0772de164c103910b04753820fcdd6","c3":12039,"resultMessage":["[price3]"],"sku":1533647584,"wt":"0.05","stk":33,"w":5.0,"t":"带带帅 男士商务正装宽8CM懒人一拉的结婚新郎领带 免打拉链领带韩版潮 礼盒装 海风蓝拉链款","rt":"0","tips":[{"v":"0","t":9999}]},{"spu":11994543,"jp":"28.5","img":"https://img13.360buyimg.com/jdcms/jfs/t3328/174/2119555497/364463/ec39e736/584130a2N04890786.jpg","type":0,"bn":"","yushouStatus":0,"renl":0,"yuShou":0,"subsku":[],"mp":"38.0","impr":"1","yuyueStatus":0,"skuDateType":12,"clk":"//knicks.jd.com/log/server?t=rec_common_clk&v=type=rec.619117$src=rec$action=1$reqsig=e68d0b3100b9201dcf8246bc896d3778c554d100$enb=1$sku=0$p=619117$pin=$uuid=-1$csku=12071212$index=22$st=0$adcli=$expid=101$mexpid=$im=$rid=2949391199560373714$ver=1$sig=dab943c1b86a72d9e56c7475ef08cf43ef4a9b02","c3":3470,"resultMessage":["[price1]"],"sku":12071212,"wt":"0.38","stk":33,"w":5.0,"t":"别输在不懂说话上：让你大受欢迎的说话技巧","rt":"0","tips":[{"v":"0","t":9999}]},{"spu":4803334,"jp":"29.9","img":"https://img13.360buyimg.com/jdcms/jfs/t24262/138/2006571271/132179/c19460c/5b70dff7N8effab87.jpg","type":0,"bn":"三只松鼠（Three Squirrels）","yushouStatus":0,"renl":0,"yuShou":0,"subsku":[],"mp":"49.9","impr":"1","yuyueStatus":0,"skuDateType":12,"clk":"//knicks.jd.com/log/server?t=rec_common_clk&v=type=rec.619117$src=rec$action=1$reqsig=e68d0b3100b9201dcf8246bc896d3778c554d100$enb=1$sku=0$p=619117$pin=$uuid=-1$csku=4803334$index=23$st=0$adcli=$expid=101$mexpid=$im=$rid=2949391199560373714$ver=1$sig=5024f9f2f78a8027218ea17ffc3e45acc4a47f91","c3":1591,"resultMessage":["[price1]"],"sku":4803334,"wt":"0.12","stk":33,"w":5.0,"t":"三只松鼠坚果炒货零食特产每日坚果开心果100g/袋","rt":"0","tips":[{"v":"0","t":9999}]},{"spu":1377604,"jp":"439.0","img":"https://img13.360buyimg.com/jdcms/jfs/t24202/348/221725757/169080/75639b14/5b29adcbNd66c135a.jpg","type":0,"bn":"亿力","yushouStatus":0,"renl":0,"yuShou":0,"subsku":[],"mp":"699.0","impr":"1","yuyueStatus":0,"skuDateType":12,"clk":"//knicks.jd.com/log/server?t=rec_common_clk&v=type=rec.619117$src=rec$action=1$reqsig=e68d0b3100b9201dcf8246bc896d3778c554d100$enb=1$sku=0$p=619117$pin=$uuid=-1$csku=6230581$index=24$st=0$adcli=$expid=101$mexpid=$im=$rid=2949391199560373714$ver=1$sig=52e97ced29a807795870b7c31e0d3e43f2664a3e","c3":13252,"sku":6230581,"wt":"11.75","stk":33,"w":5.0,"t":"亿力 YILI 家用洗车机感应电机高压清洗机洗车泵YLQ4440G-B 220V","rt":"0","tips":[{"v":"0","t":9999}]},{"spu":11965555,"jp":"38.0","img":"https://img13.360buyimg.com/jdcms/jfs/t6193/33/2204050787/357484/97c216d5/595f17c6N45cc2ef5.jpg","type":0,"bn":"未知","yushouStatus":0,"renl":0,"yuShou":0,"subsku":[],"mp":"38.0","impr":"1","yuyueStatus":0,"skuDateType":12,"clk":"//knicks.jd.com/log/server?t=rec_common_clk&v=type=rec.619117$src=rec$action=1$reqsig=e68d0b3100b9201dcf8246bc896d3778c554d100$enb=1$sku=0$p=619117$pin=$uuid=-1$csku=12124169$index=25$st=0$adcli=$expid=101$mexpid=$im=$rid=2949391199560373714$ver=1$sig=4a0dc3f9b9ad2c4ca14fb72e5d57a3dc1e611479","c3":3304,"resultMessage":["[price1]"],"sku":12124169,"wt":"0.38","stk":33,"w":5.0,"t":"东方快车谋杀案（精装纪念版）","rt":"0","tips":[{"v":"0","t":9999}]},{"spu":1383843828,"jp":"13.9","img":"https://img13.360buyimg.com/jdcms/jfs/t583/73/393080966/198505/bb01022e/546440d4Ne7e85e58.jpg","type":0,"bn":"普润（PU RUN）","yushouStatus":0,"renl":99,"yuShou":0,"subsku":[],"mp":"239.0","impr":"1","yuyueStatus":0,"skuDateType":0,"clk":"//knicks.jd.com/log/server?t=rec_common_clk&v=type=rec.619117$src=rec$action=1$reqsig=e68d0b3100b9201dcf8246bc896d3778c554d100$enb=1$sku=0$p=619117$pin=$uuid=-1$csku=1383843828$index=26$st=0$adcli=$expid=101$mexpid=$im=$rid=2949391199560373714$ver=1$sig=f95696ebb71e803182312f633f39112742186a66","c3":1663,"sku":1383843828,"wt":"0.3","stk":33,"w":5.0,"t":"普润 蓝泡泡洁厕宝洁厕灵 马桶清洁剂厕所除臭剂 40粒装","rt":"0","tips":[{"v":"0","t":9999}]},{"spu":29096432904,"jp":"15.0","img":"https://img13.360buyimg.com/jdcms/jfs/t21646/273/935499661/148470/e5ddf2bd/5b1b977fN2307d560.jpg","type":0,"bn":"嘉松尼尔（JIASONGNIER）","yushouStatus":0,"renl":99,"yuShou":0,"subsku":[],"mp":"20.0","impr":"1","yuyueStatus":0,"skuDateType":0,"clk":"//knicks.jd.com/log/server?t=rec_common_clk&v=type=rec.619117$src=rec$action=1$reqsig=e68d0b3100b9201dcf8246bc896d3778c554d100$enb=1$sku=0$p=619117$pin=$uuid=-1$csku=29096432904$index=27$st=0$adcli=$expid=101$mexpid=$im=$rid=2949391199560373714$ver=1$sig=4451c830e39c0d29bc7ba16bca6012ce80aed5a4","c3":11977,"sku":29096432904,"wt":"0.06","stk":33,"w":5.0,"t":"创意厨房用品 可调节按扣式水槽收纳挂篮 厨房置物架水龙头收纳海绵沥水挂袋 日常生活 厨房小用品 2个装颜色随机","rt":"0","tips":[{"v":"0","t":9999}]},{"spu":1404743,"jp":"359.0","img":"https://img13.360buyimg.com/jdcms/jfs/t22882/354/2650890958/162561/23866ed4/5b88b77eN8bbeab9f.jpg","type":0,"bn":"美的（Midea）","yushouStatus":0,"renl":0,"yuShou":0,"subsku":[],"mp":"399.0","impr":"1","yuyueStatus":0,"skuDateType":12,"clk":"//knicks.jd.com/log/server?t=rec_common_clk&v=type=rec.619117$src=rec$action=1$reqsig=e68d0b3100b9201dcf8246bc896d3778c554d100$enb=1$sku=0$p=619117$pin=$uuid=-1$csku=1404743$index=28$st=0$adcli=$expid=101$mexpid=$im=$rid=2949391199560373714$ver=1$sig=c2397ff77759213880eccd12ee9c8ee0f2f5123b","c3":758,"sku":1404743,"wt":"12.4","stk":33,"w":5.0,"t":"美的（Midea）M1-L213B 快捷微波炉 360°转盘加热 旋钮操控 精准控温 五档火力 21升","rt":"0","tips":[{"v":"0","t":9999}]},{"spu":20469288444,"jp":"110.0","img":"https://img13.360buyimg.com/jdcms/jfs/t17563/56/1096871643/164208/a5bb3c2b/5abc83edN0bd0b212.jpg","type":0,"bn":"小企鹅（Little Penguin）","yushouStatus":0,"renl":99,"yuShou":0,"subsku":[],"mp":"299.0","impr":"1","yuyueStatus":0,"skuDateType":0,"clk":"//knicks.jd.com/log/server?t=rec_common_clk&v=type=rec.619117$src=rec$action=1$reqsig=e68d0b3100b9201dcf8246bc896d3778c554d100$enb=1$sku=0$p=619117$pin=$uuid=-1$csku=20469288446$index=29$st=0$adcli=$expid=101$mexpid=$im=$rid=2949391199560373714$ver=1$sig=83e9b2d5dba8d5757c1af9740bfa9e90a4c3598c","c3":9438,"sku":20469288446,"wt":"2.0","stk":33,"w":5.0,"t":"澳大利亚进口红酒 小企鹅西拉/梅洛/赤霞珠双瓶 红葡萄酒 750ml*2瓶装 赤霞珠","rt":"0","tips":[{"v":"0","t":9999}]},{"spu":10562024896,"jp":"259.0","img":"https://img13.360buyimg.com/jdcms/jfs/t16549/71/2296691871/283189/6b8c5e35/5aa0ef02Nd963fcc8.jpg","type":0,"bn":"欧乐B（Oral-B）","yushouStatus":0,"renl":99,"yuShou":0,"subsku":[],"mp":"499.0","impr":"1","yuyueStatus":0,"skuDateType":0,"clk":"//knicks.jd.com/log/server?t=rec_common_clk&v=type=rec.619117$src=rec$action=1$reqsig=e68d0b3100b9201dcf8246bc896d3778c554d100$enb=1$sku=0$p=619117$pin=$uuid=-1$csku=10562024897$index=30$st=0$adcli=$expid=101$mexpid=$im=$rid=2949391199560373714$ver=1$sig=8d3675c536fafcdfb396bc8fb783d42917947b7f","c3":741,"resultMessage":["[price1]"],"sku":10562024897,"wt":"0.3","stk":33,"w":5.0,"t":"欧乐B 博朗欧乐b 3D旋转震动成人充电式智能电动牙刷 优雅紫色","rt":"0","tips":[{"v":"0","t":9999}]},{"spu":30360464431,"jp":"156.0","img":"https://img13.360buyimg.com/jdcms/jfs/t19831/348/2646928989/251578/fd039c10/5b4b1258N7dd2dfdc.jpg","type":0,"bn":"双铭联","yushouStatus":0,"renl":99,"yuShou":0,"subsku":[],"mp":"176.0","impr":"1","yuyueStatus":0,"skuDateType":0,"clk":"//knicks.jd.com/log/server?t=rec_common_clk&v=type=rec.619117$src=rec$action=1$reqsig=e68d0b3100b9201dcf8246bc896d3778c554d100$enb=1$sku=0$p=619117$pin=$uuid=-1$csku=30360464447$index=31$st=0$adcli=$expid=101$mexpid=$im=$rid=2949391199560373714$ver=1$sig=d42fd9abd0c99b07cbcc51fbc0bad32ec065990c","c3":9906,"sku":30360464447,"wt":"1.0","stk":33,"w":5.0,"t":"餐厅吊灯三头现代简约led创意个性餐桌温馨田园过道吧台小吊灯具 大花瓣三头长盘9瓦led白光","rt":"0","tips":[{"v":"0","t":9999}]},{"spu":1200768981,"jp":"59.0","img":"https://img13.360buyimg.com/jdcms/jfs/t27766/241/1326406043/293147/a003f72c/5bc69716N1deb264b.jpg","type":0,"bn":"七匹狼（SEPTWOLVES）","yushouStatus":0,"renl":99,"yuShou":0,"subsku":[],"mp":"89.0","impr":"1","yuyueStatus":0,"skuDateType":0,"clk":"//knicks.jd.com/log/server?t=rec_common_clk&v=type=rec.619117$src=rec$action=1$reqsig=e68d0b3100b9201dcf8246bc896d3778c554d100$enb=1$sku=0$p=619117$pin=$uuid=-1$csku=1486664101$index=32$st=0$adcli=$expid=101$mexpid=$im=$rid=2949391199560373714$ver=1$sig=1610fb6303968b0f4648298874b89b4df8be5d93","c3":9744,"sku":1486664101,"wt":"0.26","stk":33,"w":5.0,"t":"七匹狼男士内裤男平角裤中腰兰精粘纤透气大码四角裤头4条装 时尚款礼盒装 185/100（XXXL)","rt":"0","tips":[{"v":"0","t":9999}]},{"spu":31215816252,"jp":"78.0","img":"https://img13.360buyimg.com/jdcms/jfs/t26095/217/404506001/91072/754c027f/5b6e7fe9Na3b01c49.jpg","type":0,"bn":"紫伶语","yushouStatus":0,"renl":99,"yuShou":0,"subsku":[],"mp":"168.0","impr":"1","yuyueStatus":0,"skuDateType":0,"clk":"//knicks.jd.com/log/server?t=rec_common_clk&v=type=rec.619117$src=rec$action=1$reqsig=e68d0b3100b9201dcf8246bc896d3778c554d100$enb=1$sku=0$p=619117$pin=$uuid=-1$csku=31380911874$index=33$st=0$adcli=$expid=101$mexpid=$im=$rid=2949391199560373714$ver=1$sig=68af7123a3f362af6c48066e0d4ac86944a46b3","c3":1355,"resultMessage":["[price3]"],"sku":31380911874,"wt":"0.3","stk":33,"w":5.0,"t":"紫伶语 长袖T恤女宽松秋装2018新款纯棉打底衫女韩版小衫体恤妈妈上衣服 绿色 XL","rt":"0","tips":[{"v":"0","t":9999}]},{"spu":8302104,"jp":"199.0","img":"https://img13.360buyimg.com/jdcms/jfs/t1/3311/4/5229/107270/5b9f220eE6609ef16/f4f116f61128c5e4.jpg","type":0,"bn":"木林森","yushouStatus":0,"renl":0,"yuShou":0,"subsku":[],"mp":"399.0","impr":"1","yuyueStatus":0,"skuDateType":12,"clk":"//knicks.jd.com/log/server?t=rec_common_clk&v=type=rec.619117$src=rec$action=1$reqsig=e68d0b3100b9201dcf8246bc896d3778c554d100$enb=1$sku=0$p=619117$pin=$uuid=-1$csku=8514591$index=34$st=0$adcli=$expid=101$mexpid=$im=$rid=2949391199560373714$ver=1$sig=b91b41d451b2caf6a117d359844dde6f2df1e412","c3":6907,"sku":8514591,"wt":"1.12","stk":40,"w":5.0,"t":"木林森（MULINSEN）英伦风简约系带牛皮商务休闲皮鞋男 棕色 42码 SL87137","rt":"0","tips":[{"v":"0","t":9999}]},{"spu":32117815214,"jp":"6699.0","img":"https://img13.360buyimg.com/jdcms/jfs/t27259/151/1067094354/245157/1756ea90/5bc0414fNe3e304ec.jpg","type":0,"bn":"Reebok","yushouStatus":0,"renl":99,"yuShou":0,"subsku":[],"mp":"9999.0","impr":"1","yuyueStatus":0,"skuDateType":0,"clk":"//knicks.jd.com/log/server?t=rec_common_clk&v=type=rec.619117$src=rec$action=1$reqsig=e68d0b3100b9201dcf8246bc896d3778c554d100$enb=1$sku=0$p=619117$pin=$uuid=-1$csku=32117815214$index=35$st=0$adcli=$expid=101$mexpid=$im=$rid=2949391199560373714$ver=1$sig=2629f646efeacee53fd0790f2e2b8fa4faf60e4c","c3":1484,"resultMessage":["[price1]"],"sku":32117815214,"wt":"90.6","stk":33,"w":5.0,"t":"【锐步官方专卖店】英国Reebok 锐步跑步机家用电动静音折叠健身器材 跑步机智能款","rt":"0","tips":[{"v":"0","t":9999}]},{"spu":3208035,"jp":"259.0","img":"https://img13.360buyimg.com/jdcms/jfs/t7294/39/1455748933/151407/48b8423a/599d26dcNbba85c5d.jpg","type":0,"bn":"春禾秋牧","yushouStatus":0,"renl":0,"yuShou":0,"subsku":[],"mp":"361.0","impr":"1","yuyueStatus":0,"skuDateType":12,"clk":"//knicks.jd.com/log/server?t=rec_common_clk&v=type=rec.619117$src=rec$action=1$reqsig=e68d0b3100b9201dcf8246bc896d3778c554d100$enb=1$sku=0$p=619117$pin=$uuid=-1$csku=4836293$index=36$st=0$adcli=$expid=101$mexpid=$im=$rid=2949391199560373714$ver=1$sig=bb56ce258109381d60f5e760a9fc22260317600","c3":13582,"resultMessage":["[price2]"],"sku":4836293,"wt":"2.1","stk":33,"w":5.0,"t":"春禾秋牧 进口雪花牛排套餐6片装 1.2kg/盒 原切牛排礼盒装 健身推荐","rt":"0","tips":[{"v":"0","t":9999}]},{"spu":918498,"jp":"39.9","img":"https://img13.360buyimg.com/jdcms/jfs/t3166/299/1429417536/44627/c583f950/57cd2cdfN536d176e.jpg","type":0,"bn":"金龙鱼","yushouStatus":0,"renl":0,"yuShou":0,"subsku":[],"mp":"64.0","impr":"1","yuyueStatus":0,"skuDateType":12,"clk":"//knicks.jd.com/log/server?t=rec_common_clk&v=type=rec.619117$src=rec$action=1$reqsig=e68d0b3100b9201dcf8246bc896d3778c554d100$enb=1$sku=0$p=619117$pin=$uuid=-1$csku=918498$index=37$st=0$adcli=$expid=101$mexpid=$im=$rid=2949391199560373714$ver=1$sig=8b3a5ee4986ab8b3be864bfd1cde90d19ddc1475","c3":2676,"sku":918498,"wt":"4.723","stk":33,"w":5.0,"t":"金龙鱼 食用油 葵花籽食用调和油5L","rt":"0","tips":[{"v":"0","t":9999}]},{"spu":1070843,"jp":"89.0","img":"https://img13.360buyimg.com/jdcms/jfs/t3940/252/1200320664/512176/ab850a69/586b74afN5939fab5.jpg","type":0,"bn":"安佳（Anchor）","yushouStatus":0,"renl":0,"yuShou":0,"subsku":[],"mp":"189.0","impr":"1","yuyueStatus":0,"skuDateType":12,"clk":"//knicks.jd.com/log/server?t=rec_common_clk&v=type=rec.619117$src=rec$action=1$reqsig=e68d0b3100b9201dcf8246bc896d3778c554d100$enb=1$sku=0$p=619117$pin=$uuid=-1$csku=1070843$index=38$st=0$adcli=$expid=101$mexpid=$im=$rid=2949391199560373714$ver=1$sig=56efa624c63c23fdd3529a5207cf33d65f746b8f","c3":12215,"sku":1070843,"wt":"6.72","stk":33,"w":5.0,"t":"新西兰原装进口牛奶 安佳Anchor全脂牛奶UHT纯牛奶250ml*24 整箱装","rt":"0","tips":[{"v":"0","t":9999}]},{"spu":24042595745,"jp":"120.0","img":"https://img13.360buyimg.com/jdcms/jfs/t16750/141/1726924731/771998/962b0e7b/5ad5bfd3N861b0ee2.png","type":0,"bn":"鱼怪（YUGUAI）","yushouStatus":0,"renl":99,"yuShou":0,"subsku":[],"mp":"150.0","impr":"1","yuyueStatus":0,"skuDateType":0,"clk":"//knicks.jd.com/log/server?t=rec_common_clk&v=type=rec.619117$src=rec$action=1$reqsig=e68d0b3100b9201dcf8246bc896d3778c554d100$enb=1$sku=0$p=619117$pin=$uuid=-1$csku=24042595745$index=39$st=0$adcli=$expid=101$mexpid=$im=$rid=2949391199560373714$ver=1$sig=a277dc57d1fa894bde9809cb3c35e9d36e886035","c3":2656,"resultMessage":["[price1]"],"sku":24042595745,"wt":"0.4","stk":33,"w":5.0,"t":"口味王槟榔15元装11包 红花青果不烧口带葡萄干和成天下湘潭铺子红钻","rt":"0","tips":[{"v":"0","t":9999}]},{"spu":24600128839,"jp":"99.0","img":"https://img13.360buyimg.com/jdcms/jfs/t13324/361/1897344914/28477/56b15597/5aaf24b2N936c614f.jpg","type":0,"bn":"妍草堂","yushouStatus":0,"renl":99,"yuShou":0,"subsku":[],"mp":"128.0","impr":"1","yuyueStatus":0,"skuDateType":0,"clk":"//knicks.jd.com/log/server?t=rec_common_clk&v=type=rec.619117$src=rec$action=1$reqsig=e68d0b3100b9201dcf8246bc896d3778c554d100$enb=1$sku=0$p=619117$pin=$uuid=-1$csku=24600128839$index=40$st=0$adcli=$expid=101$mexpid=$im=$rid=2949391199560373714$ver=1$sig=2099d8ac41c77429b27bc0951c8b651470fad7d6","c3":2562,"resultMessage":["[price1]"],"sku":24600128839,"wt":"1.0","stk":33,"w":5.0,"t":"灰指甲药灰甲亮 灰指甲专用液 灰指甲脱甲精油 7天脱甲 买一送五(够用5个指甲)","rt":"0","tips":[{"v":"0","t":9999}]},{"spu":835723,"jp":"14.9","img":"https://img13.360buyimg.com/jdcms/jfs/t17770/116/2137643116/80331/53fb8366/5aec0634N00c8f790.jpg","type":0,"bn":"妙洁（MIAOJIE）","yushouStatus":0,"renl":0,"yuShou":0,"subsku":[],"mp":"21.8","impr":"1","yuyueStatus":0,"skuDateType":12,"clk":"//knicks.jd.com/log/server?t=rec_common_clk&v=type=rec.619117$src=rec$action=1$reqsig=e68d0b3100b9201dcf8246bc896d3778c554d100$enb=1$sku=0$p=619117$pin=$uuid=-1$csku=835723$index=41$st=0$adcli=$expid=101$mexpid=$im=$rid=2949391199560373714$ver=1$sig=106203ec8d3e4b4ed213246a10262392a33f8cc7","c3":6232,"sku":835723,"wt":"0.24","stk":33,"w":5.0,"t":"妙洁 保鲜膜盒装30米*30cm送15米组合装  经济实惠","rt":"0","tips":[{"v":"0","t":9999}]},{"spu":28363852144,"jp":"29.9","img":"https://img13.360buyimg.com/jdcms/jfs/t22153/88/155923004/418316/3cb12600/5affe864N4e8db9f4.jpg","type":0,"bn":"灵镜（LINGJING）","yushouStatus":0,"renl":99,"yuShou":0,"subsku":[],"mp":"39.9","impr":"1","yuyueStatus":0,"skuDateType":0,"clk":"//knicks.jd.com/log/server?t=rec_common_clk&v=type=rec.619117$src=rec$action=1$reqsig=e68d0b3100b9201dcf8246bc896d3778c554d100$enb=1$sku=0$p=619117$pin=$uuid=-1$csku=28363852144$index=42$st=0$adcli=$expid=101$mexpid=$im=$rid=2949391199560373714$ver=1$sig=4e911e89f1749669976c77033eb249d05d93214f","c3":9789,"resultMessage":["[price3]"],"sku":28363852144,"wt":"0.35","stk":33,"w":5.0,"t":"眼镜清洗液 眼镜清洗液喷雾清洁剂 洗眼镜液 眼镜水清洁水喷雾 眼睛镜片清洗液 眼镜护理液 六瓶装送镜布五条","rt":"0","tips":[{"v":"0","t":9999}]},{"spu":11967827,"jp":"22.0","img":"https://img13.360buyimg.com/jdcms/jfs/t9709/232/1593477494/68134/6654dbca/59e351b6Na0578570.jpg","type":0,"bn":"未知","yushouStatus":0,"renl":0,"yuShou":0,"subsku":[],"mp":"32.0","impr":"1","yuyueStatus":0,"skuDateType":12,"clk":"//knicks.jd.com/log/server?t=rec_common_clk&v=type=rec.619117$src=rec$action=1$reqsig=e68d0b3100b9201dcf8246bc896d3778c554d100$enb=1$sku=0$p=619117$pin=$uuid=-1$csku=11967827$index=43$st=0$adcli=$expid=101$mexpid=$im=$rid=2949391199560373714$ver=1$sig=7dbda4fa2858f8dbd21103ee31e28d69fa934af3","c3":3459,"resultMessage":["[price2]"],"sku":11967827,"wt":"0.255","stk":33,"w":5.0,"t":"所谓情商高，就是会说话","rt":"0","tips":[{"v":"0","t":9999}]},{"spu":765647,"jp":"3399.0","img":"https://img13.360buyimg.com/jdcms/jfs/t13675/28/554934801/171004/ea69fc71/5a0e5a99N2a0f42c6.jpg","type":0,"bn":"天梭（TISSOT）","yushouStatus":0,"renl":0,"yuShou":0,"subsku":[],"mp":"4200.0","impr":"1","yuyueStatus":0,"skuDateType":12,"clk":"//knicks.jd.com/log/server?t=rec_common_clk&v=type=rec.619117$src=rec$action=1$reqsig=e68d0b3100b9201dcf8246bc896d3778c554d100$enb=1$sku=0$p=619117$pin=$uuid=-1$csku=765646$index=44$st=0$adcli=$expid=101$mexpid=$im=$rid=2949391199560373714$ver=1$sig=1a112b264cd4fadb9ad29f039be76b85d28c921a","c3":13673,"resultMessage":["[price1]"],"sku":765646,"wt":"0.84","stk":33,"w":5.0,"t":"天梭(TISSOT)瑞士手表 经典系列机械男表T065.430.11.031.00","rt":"0","tips":[{"v":"0","t":9999}]},{"spu":18558729685,"jp":"95.0","img":"https://img13.360buyimg.com/jdcms/jfs/t11803/215/343659052/608546/36a11b61/59edb6daN85aed7fe.jpg","type":0,"bn":"富卡莎（FUKASHA）","yushouStatus":0,"renl":99,"yuShou":0,"subsku":[],"mp":"168.0","impr":"1","yuyueStatus":0,"skuDateType":0,"clk":"//knicks.jd.com/log/server?t=rec_common_clk&v=type=rec.619117$src=rec$action=1$reqsig=e68d0b3100b9201dcf8246bc896d3778c554d100$enb=1$sku=0$p=619117$pin=$uuid=-1$csku=18558729685$index=45$st=0$adcli=$expid=101$mexpid=$im=$rid=2949391199560373714$ver=1$sig=8dab3393c5af30900a3cce27fa89c6bd5fc0e61a","c3":11161,"resultMessage":["[price3]"],"sku":18558729685,"wt":"1.0","stk":33,"w":5.0,"t":"富卡莎 欧式飘窗垫窗台垫冬季加厚毛绒卧室阳台垫坐垫榻榻米垫子可机洗飘窗毯纯色蕾丝边可定做 淡绿 (60+15)x150cm 一条装","rt":"0","tips":[{"v":"0","t":9999}]},{"spu":1934319,"jp":"29.0","img":"https://img13.360buyimg.com/jdcms/g17/M00/01/13/rBEbSlNxuSwIAAAAAAD5pkkJuYcAAAhGwL5W5EAAPm-947.jpg","type":0,"bn":"妮维雅（NIVEA）","yushouStatus":0,"renl":0,"yuShou":0,"subsku":[],"mp":"29.0","impr":"1","yuyueStatus":0,"skuDateType":12,"clk":"//knicks.jd.com/log/server?t=rec_common_clk&v=type=rec.619117$src=rec$action=1$reqsig=e68d0b3100b9201dcf8246bc896d3778c554d100$enb=1$sku=0$p=619117$pin=$uuid=-1$csku=1006891$index=46$st=0$adcli=$expid=101$mexpid=$im=$rid=2949391199560373714$ver=1$sig=3ce82a425c60de854b367d03480ecf257ceb9d5","c3":1391,"resultMessage":["[price1, price2]"],"sku":1006891,"wt":"0.12","stk":33,"w":5.0,"t":"妮维雅(NIVEA)柔美润肤霜200ml（乳液面霜 身体乳 护肤化妆品 朱一龙同款）","rt":"0","tips":[{"v":"0","t":9999}]},{"spu":2733472,"jp":"10.5","img":"https://img13.360buyimg.com/jdcms/jfs/t26170/112/409905892/96188/d5c9d9c/5b90e7f4N5e794c84.jpg","type":0,"bn":"隆力奇","yushouStatus":0,"renl":0,"yuShou":0,"subsku":[],"mp":"25.6","impr":"1","yuyueStatus":0,"skuDateType":12,"clk":"//knicks.jd.com/log/server?t=rec_common_clk&v=type=rec.619117$src=rec$action=1$reqsig=e68d0b3100b9201dcf8246bc896d3778c554d100$enb=1$sku=0$p=619117$pin=$uuid=-1$csku=3458642$index=47$st=0$adcli=$expid=101$mexpid=$im=$rid=2949391199560373714$ver=1$sig=30ca0ebdef80646614d02a383b2c79a08389c458","c3":16783,"resultMessage":["[price1]"],"sku":3458642,"wt":"0.06","stk":33,"w":5.0,"t":"隆力奇蛇油果酸护手霜50g","rt":"0","tips":[{"v":"0","t":9999}]},{"spu":3671203,"jp":"45.0","img":"https://img13.360buyimg.com/jdcms/jfs/t3673/110/1843877571/91661/b4af3cc7/5833b5eeN65d52785.jpg","type":0,"bn":"普联（TP-LINK）","yushouStatus":0,"renl":0,"yuShou":0,"subsku":[],"mp":"69.0","impr":"1","yuyueStatus":0,"skuDateType":12,"clk":"//knicks.jd.com/log/server?t=rec_common_clk&v=type=rec.619117$src=rec$action=1$reqsig=e68d0b3100b9201dcf8246bc896d3778c554d100$enb=1$sku=0$p=619117$pin=$uuid=-1$csku=3671203$index=48$st=0$adcli=$expid=101$mexpid=$im=$rid=2949391199560373714$ver=1$sig=a0e8599ac8c78b1b478a3cbe07dc11490aa27f0f","c3":701,"sku":3671203,"wt":"0.035","stk":33,"w":5.0,"t":"TP-LINK TL-WN725N免驱版 迷你USB无线网卡mini 笔记本台式机通用随身wifi接收器  智能安装","rt":"0","tips":[{"v":"0","t":9999}]},{"spu":1087970,"jp":"69.0","img":"https://img13.360buyimg.com/jdcms/jfs/t5635/242/3232583055/52465/20ac5dd1/593920b9Ne9747ae3.jpg","type":0,"bn":"妈咪宝贝（Mamypoko）","yushouStatus":0,"renl":0,"yuShou":0,"subsku":[],"mp":"76.0","impr":"1","yuyueStatus":0,"skuDateType":12,"clk":"//knicks.jd.com/log/server?t=rec_common_clk&v=type=rec.619117$src=rec$action=1$reqsig=e68d0b3100b9201dcf8246bc896d3778c554d100$enb=1$sku=0$p=619117$pin=$uuid=-1$csku=579671$index=49$st=0$adcli=$expid=101$mexpid=$im=$rid=2949391199560373714$ver=1$sig=8425caf2145bbfd0804254e2257fa2ba0ee57e2f","c3":1548,"resultMessage":["[price1]"],"sku":579671,"wt":"3.17","stk":33,"w":5.0,"t":"尤妮佳 妈咪宝贝 MamyPoko 婴儿湿纸巾【水感爽肤型】72片*8包","rt":"0","tips":[{"v":"0","t":9999}]},{"spu":3497361,"jp":"38.0","img":"https://img13.360buyimg.com/jdcms/jfs/t19669/257/111212361/491544/e4f12b75/5a5dc522N971ac95a.jpg","type":0,"bn":"MOONY","yushouStatus":0,"renl":0,"yuShou":0,"subsku":[],"mp":"41.8","impr":"1","yuyueStatus":0,"skuDateType":12,"clk":"//knicks.jd.com/log/server?t=rec_common_clk&v=type=rec.619117$src=rec$action=1$reqsig=e68d0b3100b9201dcf8246bc896d3778c554d100$enb=1$sku=0$p=619117$pin=$uuid=-1$csku=3498249$index=50$st=0$adcli=$expid=101$mexpid=$im=$rid=2949391199560373714$ver=1$sig=8cd34ea5b65bf0d789a53e0d959b1f0a89eeed29","c3":7057,"resultMessage":["[price1]"],"sku":3498249,"wt":"0.08","stk":33,"w":5.0,"t":"日本尤妮佳（Moony）游泳裤（男）XL3片(12-17kg)（官方进口）","rt":"0","tips":[{"v":"0","t":9999}]},{"spu":1603413044,"jp":"148.0","img":"https://img13.360buyimg.com/jdcms/jfs/t25090/40/2056746528/203898/33db4868/5bc1ba25N62611ed2.jpg","type":0,"bn":"吉普（JEEP）","yushouStatus":0,"renl":99,"yuShou":0,"subsku":[],"mp":"399.0","impr":"1","yuyueStatus":0,"skuDateType":0,"clk":"//knicks.jd.com/log/server?t=rec_common_clk&v=type=rec.619117$src=rec$action=1$reqsig=e68d0b3100b9201dcf8246bc896d3778c554d100$enb=1$sku=0$p=619117$pin=$uuid=-1$csku=1603413060$index=51$st=0$adcli=$expid=101$mexpid=$im=$rid=2949391199560373714$ver=1$sig=30ac7c775bd587b6eab53fc6de63f9cd149b12f7","c3":9736,"resultMessage":["[price3]"],"sku":1603413060,"wt":"0.5","stk":33,"w":5.0,"t":"吉普JEEP休闲裤男装裤子男士商务休闲2018秋冬直筒中腰休闲裤纯棉微弹长裤子男宽松厚款 厚款A872黑色 36码","rt":"0","tips":[{"v":"0","t":9999}]},{"spu":3945905,"jp":"27.0","img":"https://img13.360buyimg.com/jdcms/jfs/t24466/364/2305915215/208098/67e6d60/5b7b9167N1a48e42d.jpg","type":0,"bn":"雀巢（Nestle）","yushouStatus":0,"renl":0,"yuShou":0,"subsku":[],"mp":"32.0","impr":"1","yuyueStatus":0,"skuDateType":12,"clk":"//knicks.jd.com/log/server?t=rec_common_clk&v=type=rec.619117$src=rec$action=1$reqsig=e68d0b3100b9201dcf8246bc896d3778c554d100$enb=1$sku=0$p=619117$pin=$uuid=-1$csku=508411$index=52$st=0$adcli=$expid=101$mexpid=$im=$rid=2949391199560373714$ver=1$sig=7a109fb6397d85ea21ae4c34e737ab9a5adcb5e8","c3":1590,"sku":508411,"wt":"0.72","stk":33,"w":5.0,"t":"雀巢（Nestle）脆脆鲨 休闲零食 威化饼干巧克力味24*20g+8*20g(新老包装交替发货）","rt":"0","tips":[{"v":"0","t":9999}]},{"spu":4587481,"jp":"39.9","img":"https://img13.360buyimg.com/jdcms/jfs/t21619/134/1067577885/432579/41f90423/5b1f6243N1af96539.jpg","type":0,"bn":"晟旎尚品","yushouStatus":0,"renl":0,"yuShou":0,"subsku":[],"mp":"89.0","impr":"1","yuyueStatus":0,"skuDateType":12,"clk":"//knicks.jd.com/log/server?t=rec_common_clk&v=type=rec.619117$src=rec$action=1$reqsig=e68d0b3100b9201dcf8246bc896d3778c554d100$enb=1$sku=0$p=619117$pin=$uuid=-1$csku=4587481$index=53$st=0$adcli=$expid=101$mexpid=$im=$rid=2949391199560373714$ver=1$sig=d1484f528caa5c880179bf548102ae3276339c71","c3":1660,"resultMessage":["[price3]"],"sku":4587481,"wt":"1.32","stk":33,"w":5.0,"t":"晟旎尚品 衣架 宽肩无痕晾衣架 防滑干湿两用塑料晾衣架 成人儿童防滑衣服撑子 加厚防滑无痕 混色 20只装","rt":"0","tips":[{"v":"0","t":9999}]},{"spu":712153,"jp":"52.0","img":"https://img13.360buyimg.com/jdcms/jfs/t4399/69/1096230420/105927/323eeeea/58d8c345Nb9154a84.jpg","type":0,"bn":"罗技（Logitech）","yushouStatus":0,"renl":0,"yuShou":0,"subsku":[],"mp":"60.0","impr":"1","yuyueStatus":0,"skuDateType":12,"clk":"//knicks.jd.com/log/server?t=rec_common_clk&v=type=rec.619117$src=rec$action=1$reqsig=e68d0b3100b9201dcf8246bc896d3778c554d100$enb=1$sku=0$p=619117$pin=$uuid=-1$csku=692918$index=54$st=0$adcli=$expid=101$mexpid=$im=$rid=2949391199560373714$ver=1$sig=501a5d40272a8068d503a0c79b369da877c7e785","c3":690,"sku":692918,"wt":"0.16","stk":33,"w":5.0,"t":"罗技（Logitech）M100r 光电鼠标 即插即用 三年质保（黑色）","rt":"0","tips":[{"v":"0","t":9999}]},{"spu":18295590845,"jp":"209.0","img":"https://img13.360buyimg.com/jdcms/jfs/t24565/83/947465191/361982/7d1ce024/5b481c94N4555e014.jpg","type":0,"bn":"碧然德","yushouStatus":0,"renl":99,"yuShou":0,"subsku":[],"mp":"2229.0","impr":"1","yuyueStatus":0,"skuDateType":0,"clk":"//knicks.jd.com/log/server?t=rec_common_clk&v=type=rec.619117$src=rec$action=1$reqsig=e68d0b3100b9201dcf8246bc896d3778c554d100$enb=1$sku=0$p=619117$pin=$uuid=-1$csku=18295590849$index=55$st=0$adcli=$expid=101$mexpid=$im=$rid=2949391199560373714$ver=1$sig=1ec79880b354db67410585b94ad87dd21aec0435","c3":898,"resultMessage":["[price3]"],"sku":18295590849,"wt":"0.2","stk":33,"w":5.0,"t":"碧然德 （BRITA）Maxtra家用办公净水器净水壶过滤水壶通用过滤芯双效多效【升级三代滤芯】 6只装店长推荐","rt":"0","tips":[{"v":"0","t":9999}]},{"spu":1454536892,"jp":"118.0","img":"https://img13.360buyimg.com/jdcms/jfs/t598/305/1195157149/360934/76be1614/54ba3eefN1ecb9d8d.jpg","type":0,"bn":"母羊","yushouStatus":0,"renl":99,"yuShou":0,"subsku":[],"mp":"399.0","impr":"1","yuyueStatus":0,"skuDateType":0,"clk":"//knicks.jd.com/log/server?t=rec_common_clk&v=type=rec.619117$src=rec$action=1$reqsig=e68d0b3100b9201dcf8246bc896d3778c554d100$enb=1$sku=0$p=619117$pin=$uuid=-1$csku=1454536910$index=56$st=0$adcli=$expid=101$mexpid=$im=$rid=2949391199560373714$ver=1$sig=10dc0c8911dae2a661f1309b263b8fd88303ab75","c3":6914,"sku":1454536910,"wt":"0.5","stk":33,"w":5.0,"t":"春秋季妈妈鞋牛皮坡跟软底中老年女鞋平底鞋大码中年女皮鞋单鞋女 酒红色 34","rt":"0","tips":[{"v":"0","t":9999}]},{"spu":3598223,"jp":"249.0","img":"https://img13.360buyimg.com/jdcms/jfs/t20659/161/2134849658/443577/656040b2/5b487894Nf98c871b.jpg","type":0,"bn":"CROSSGEAR","yushouStatus":0,"renl":0,"yuShou":0,"subsku":[],"mp":"499.0","impr":"1","yuyueStatus":0,"skuDateType":12,"clk":"//knicks.jd.com/log/server?t=rec_common_clk&v=type=rec.619117$src=rec$action=1$reqsig=e68d0b3100b9201dcf8246bc896d3778c554d100$enb=1$sku=0$p=619117$pin=$uuid=-1$csku=5887228$index=57$st=0$adcli=$expid=101$mexpid=$im=$rid=2949391199560373714$ver=1$sig=6f07e0c95228f6220838109c0deec75057e7d2af","c3":3997,"sku":5887228,"wt":"1.28","stk":33,"w":5.0,"t":"CROSSGEAR【加密防盗】电脑包 男商务大容量多功能15.6/17.3英寸游戏本双肩书包旅行背包 CR-8112 黑色","rt":"0","tips":[{"v":"0","t":9999}]},{"spu":1275576,"jp":"15.0","img":"https://img13.360buyimg.com/jdcms/jfs/t23509/79/1116996275/416633/6bee2f97/5b50599dNeb808d4d.jpg","type":0,"bn":"佳格","yushouStatus":0,"renl":0,"yuShou":0,"subsku":[],"mp":"74.0","impr":"1","yuyueStatus":0,"skuDateType":12,"clk":"//knicks.jd.com/log/server?t=rec_common_clk&v=type=rec.619117$src=rec$action=1$reqsig=e68d0b3100b9201dcf8246bc896d3778c554d100$enb=1$sku=0$p=619117$pin=$uuid=-1$csku=1275576$index=58$st=0$adcli=$expid=101$mexpid=$im=$rid=2949391199560373714$ver=1$sig=182084d661227eaf33f4195bd9274d7cc573adf2","c3":1476,"sku":1275576,"wt":"0.14","stk":33,"w":5.0,"t":"佳格LED强光手电筒远射王户外充电式应急照明矿灯8915B","rt":"0","tips":[{"v":"0","t":9999}]},{"spu":1588111,"jp":"12.5","img":"https://img13.360buyimg.com/jdcms/jfs/t16126/235/1787013053/498586/4f7ed8ce/5a65532bNec46ad48.jpg","type":0,"bn":"得力（deli）","yushouStatus":0,"renl":0,"yuShou":0,"subsku":[],"mp":"29.0","impr":"1","yuyueStatus":0,"skuDateType":12,"clk":"//knicks.jd.com/log/server?t=rec_common_clk&v=type=rec.619117$src=rec$action=1$reqsig=e68d0b3100b9201dcf8246bc896d3778c554d100$enb=1$sku=0$p=619117$pin=$uuid=-1$csku=1588111$index=59$st=0$adcli=$expid=101$mexpid=$im=$rid=2949391199560373714$ver=1$sig=85f8438a2d60dd2bf2e784290a49f30c7da4dab1","c3":4840,"resultMessage":["[price2]"],"sku":1588111,"wt":"0.18","stk":33,"w":5.0,"t":"得力(deli)4只A4防水网格拉链袋 彩色资料袋文件袋 4混色装33182","rt":"0","tips":[{"v":"0","t":9999}]},{"spu":11629794512,"jp":"60.0","img":"https://img13.360buyimg.com/jdcms/jfs/t3073/364/8886183892/296417/febf3622/58ca10c9Na6ef5b1c.jpg","type":0,"bn":"康中医","yushouStatus":0,"renl":99,"yuShou":0,"subsku":[],"mp":"99.0","impr":"1","yuyueStatus":0,"skuDateType":0,"clk":"//knicks.jd.com/log/server?t=rec_common_clk&v=type=rec.619117$src=rec$action=1$reqsig=e68d0b3100b9201dcf8246bc896d3778c554d100$enb=1$sku=0$p=619117$pin=$uuid=-1$csku=11629794514$index=60$st=0$adcli=$expid=101$mexpid=$im=$rid=2949391199560373714$ver=1$sig=ec928f1f2154e83a2e6d082982c8b17ff8ee3047","c3":1407,"sku":11629794514,"wt":"0.2","stk":33,"w":5.0,"t":"康中医牙医漱口水口臭溃疡上火护龈110毫升口腔宝漱口水 丁香味 6瓶漱口水","rt":"0","tips":[{"v":"0","t":9999}]},{"spu":10912871310,"jp":"42.0","img":"https://img13.360buyimg.com/jdcms/jfs/t15847/73/1938694475/174646/b190421/5a69764dN92d1f30d.jpg","type":0,"bn":"驰文骏（Chi Wen Jun）","yushouStatus":0,"renl":99,"yuShou":0,"subsku":[],"mp":"100.0","impr":"1","yuyueStatus":0,"skuDateType":0,"clk":"//knicks.jd.com/log/server?t=rec_common_clk&v=type=rec.619117$src=rec$action=1$reqsig=e68d0b3100b9201dcf8246bc896d3778c554d100$enb=1$sku=0$p=619117$pin=$uuid=-1$csku=10912871310$index=61$st=0$adcli=$expid=101$mexpid=$im=$rid=2949391199560373714$ver=1$sig=17e17f3809c31b859076f5f474c6edb7b3fea9eb","c3":11953,"sku":10912871310,"wt":"1.0","stk":33,"w":5.0,"t":"驰文骏 本田凌派挡泥板 广本凌派改装专用烤漆后挡泥板 塔夫绸白2片装","rt":"0","tips":[{"v":"0","t":9999}]},{"spu":13898830352,"jp":"15.0","img":"https://img13.360buyimg.com/jdcms/jfs/t5950/195/4662157628/540100/8ca67ea1/5965f76aN133dc966.jpg","type":0,"bn":"凡霓","yushouStatus":0,"renl":99,"yuShou":0,"subsku":[],"mp":"29.0","impr":"1","yuyueStatus":0,"skuDateType":0,"clk":"//knicks.jd.com/log/server?t=rec_common_clk&v=type=rec.619117$src=rec$action=1$reqsig=e68d0b3100b9201dcf8246bc896d3778c554d100$enb=1$sku=0$p=619117$pin=$uuid=-1$csku=13898830352$index=62$st=0$adcli=$expid=101$mexpid=$im=$rid=2949391199560373714$ver=1$sig=eea8e8f68752ccbab976b1a58154c0192cc3de58","c3":6187,"resultMessage":["[price3]"],"sku":13898830352,"wt":"0.01","stk":33,"w":5.0,"t":"【买二送一】天然紫水晶消磁石100g 石榴石消磁净化 能量十足 水晶清洗观赏碎石 紫水晶 100G","rt":"0","tips":[{"v":"0","t":9999}]},{"spu":13231722815,"jp":"19.9","img":"https://img13.360buyimg.com/jdcms/jfs/t25774/335/2205524032/205260/6046f101/5bc60d57N748af54e.jpg","type":0,"bn":"浪漫满屋","yushouStatus":0,"renl":99,"yuShou":0,"subsku":[],"mp":"70.0","impr":"1","yuyueStatus":0,"skuDateType":0,"clk":"//knicks.jd.com/log/server?t=rec_common_clk&v=type=rec.619117$src=rec$action=1$reqsig=e68d0b3100b9201dcf8246bc896d3778c554d100$enb=1$sku=0$p=619117$pin=$uuid=-1$csku=13231722815$index=63$st=0$adcli=$expid=101$mexpid=$im=$rid=2949391199560373714$ver=1$sig=1ba23a219b4e0ba04a2f07a0b332f935dc683759","c3":11965,"resultMessage":["[price3]"],"sku":13231722815,"wt":"1.0","stk":33,"w":5.0,"t":"【3件7折】厨房防油贴纸防油耐高温防油烟贴纸厨房壁纸装饰玻璃贴纸墙贴画防水自粘墙纸灶台防油贴瓷砖贴 【热卖款】趣享生活D款60*90厘米 PVC材质","rt":"0","tips":[{"v":"0","t":9999}]},{"spu":22972117771,"jp":"59.0","img":"https://img13.360buyimg.com/jdcms/jfs/t17425/196/1195826022/222324/cc57bc6d/5abf61b3N60fcb259.jpg","type":0,"bn":"芙妮菲儿（fairily）","yushouStatus":0,"renl":99,"yuShou":0,"subsku":[],"mp":"298.0","impr":"1","yuyueStatus":0,"skuDateType":0,"clk":"//knicks.jd.com/log/server?t=rec_common_clk&v=type=rec.619117$src=rec$action=1$reqsig=e68d0b3100b9201dcf8246bc896d3778c554d100$enb=1$sku=0$p=619117$pin=$uuid=-1$csku=22972117771$index=64$st=0$adcli=$expid=101$mexpid=$im=$rid=2949391199560373714$ver=1$sig=8e7f271fbed88baca73430063ebf32b5a1c54ba1","c3":4699,"resultMessage":["[price1]"],"sku":22972117771,"wt":"0.1","stk":33,"w":5.0,"t":"芙妮菲儿（fairily） 假发女 发套女士中老年妈妈假发 时尚修脸整顶假发 真人发假发 自然黑【哑光高温丝】","rt":"0","tips":[{"v":"0","t":9999}]},{"spu":5018522,"jp":"79.0","img":"https://img13.360buyimg.com/jdcms/jfs/t23953/93/1888440608/298458/e1ec551a/5b6d52acN302ecca0.jpg","type":0,"bn":"氣味圖書館（SCENT LIBRARY）","yushouStatus":0,"renl":0,"yuShou":0,"subsku":[],"mp":"109.0","impr":"1","yuyueStatus":0,"skuDateType":12,"clk":"//knicks.jd.com/log/server?t=rec_common_clk&v=type=rec.619117$src=rec$action=1$reqsig=e68d0b3100b9201dcf8246bc896d3778c554d100$enb=1$sku=0$p=619117$pin=$uuid=-1$csku=6223907$index=65$st=0$adcli=$expid=101$mexpid=$im=$rid=2949391199560373714$ver=1$sig=2da54d3d389eb866a3f75d1878f7acb8355c57dc","c3":11932,"resultMessage":["[price1]"],"sku":6223907,"wt":"0.265","stk":33,"w":5.0,"t":"气味图书馆（SCENT LIBRARY）红色魔盒香水女士淡香水小样礼盒 2ml*10","rt":"0","tips":[{"v":"0","t":9999}]},{"spu":4604577,"jp":"159.0","img":"https://img13.360buyimg.com/jdcms/jfs/t1/356/26/3065/380181/5b9781fcE252a76ff/63971900e5e6e9c6.jpg","type":0,"bn":"爱华仕（OIWAS）","yushouStatus":0,"renl":0,"yuShou":0,"subsku":[],"mp":"179.0","impr":"1","yuyueStatus":0,"skuDateType":12,"clk":"//knicks.jd.com/log/server?t=rec_common_clk&v=type=rec.619117$src=rec$action=1$reqsig=e68d0b3100b9201dcf8246bc896d3778c554d100$enb=1$sku=0$p=619117$pin=$uuid=-1$csku=4604577$index=66$st=0$adcli=$expid=101$mexpid=$im=$rid=2949391199560373714$ver=1$sig=b99c69bb6da41973dcb42111a3a73ef16d0ba1a5","c3":5260,"resultMessage":["[price1]"],"sku":4604577,"wt":"0.34","stk":33,"w":5.0,"t":"爱华仕（OIWAS）女包单肩包女休闲斜挎包印花小方包 OCK1642叶子图案","rt":"0","tips":[{"v":"0","t":9999}]},{"spu":29091531875,"jp":"118.0","img":"https://img13.360buyimg.com/jdcms/jfs/t20875/25/1421784372/501176/9549ef70/5b28ca28Nb56ce968.jpg","type":0,"bn":"新潮代","yushouStatus":0,"renl":99,"yuShou":0,"subsku":[],"mp":"199.0","impr":"1","yuyueStatus":0,"skuDateType":0,"clk":"//knicks.jd.com/log/server?t=rec_common_clk&v=type=rec.619117$src=rec$action=1$reqsig=e68d0b3100b9201dcf8246bc896d3778c554d100$enb=1$sku=0$p=619117$pin=$uuid=-1$csku=29091531875$index=67$st=0$adcli=$expid=101$mexpid=$im=$rid=2949391199560373714$ver=1$sig=f903a3f13ab54edde4f7624e3bfff71d74581b94","c3":12071,"sku":29091531875,"wt":"0.76","stk":33,"w":5.0,"t":"【下单送定制三级头】新潮代 三级包绝地求生吃鸡同款背包潮流中小学生书包帆布休闲运动男士双肩包 迷彩蓝（大号）","rt":"0","tips":[{"v":"0","t":9999}]},{"spu":33581329548,"jp":"14.26","img":"https://img13.360buyimg.com/jdcms/jfs/t25924/363/1561610406/235954/5b1d401f/5bb4cfd1N0c2d2020.jpg","type":0,"bn":"飞鹅","yushouStatus":0,"renl":99,"yuShou":0,"subsku":[],"mp":"20.96","impr":"1","yuyueStatus":0,"skuDateType":0,"clk":"//knicks.jd.com/log/server?t=rec_common_clk&v=type=rec.619117$src=rec$action=1$reqsig=e68d0b3100b9201dcf8246bc896d3778c554d100$enb=1$sku=0$p=619117$pin=$uuid=-1$csku=33581329559$index=68$st=0$adcli=$expid=101$mexpid=$im=$rid=2949391199560373714$ver=1$sig=71593e8e2c58792ee12873ae5af90886db3e4b83","c3":6189,"sku":33581329559,"wt":"1.0","stk":33,"w":5.0,"t":"999纯银小挂件diy配件手工串珠配饰足银串饰女手链宝宝红绳银饰品 福袋钱袋","rt":"0","tips":[{"v":"0","t":9999}]},{"spu":6141720,"jp":"159.0","img":"https://img13.360buyimg.com/jdcms/jfs/t19687/352/1862944322/414887/343f7daf/5adc49a5N8949562b.jpg","type":0,"bn":"家逸","yushouStatus":0,"renl":0,"yuShou":0,"subsku":[],"mp":"199.0","impr":"1","yuyueStatus":0,"skuDateType":12,"clk":"//knicks.jd.com/log/server?t=rec_common_clk&v=type=rec.619117$src=rec$action=1$reqsig=e68d0b3100b9201dcf8246bc896d3778c554d100$enb=1$sku=0$p=619117$pin=$uuid=-1$csku=6181467$index=69$st=0$adcli=$expid=101$mexpid=$im=$rid=2949391199560373714$ver=1$sig=cf53b22064174ff1ee10b0a33029b50be483516d","c3":9887,"resultMessage":["[price1]"],"sku":6181467,"wt":"1.824","stk":33,"w":5.0,"t":"家逸 实木隔板墙上置物架 创意一字隔板机顶盒架  90cm原木色","rt":"0","tips":[{"v":"0","t":9999}]},{"spu":4544040,"jp":"17.9","img":"https://img13.360buyimg.com/jdcms/jfs/t17779/280/799477129/122424/d2850b67/5aa8c68dN22a71603.jpg","type":0,"bn":"良品铺子","yushouStatus":0,"renl":0,"yuShou":0,"subsku":[],"mp":"29.0","impr":"1","yuyueStatus":0,"skuDateType":12,"clk":"//knicks.jd.com/log/server?t=rec_common_clk&v=type=rec.619117$src=rec$action=1$reqsig=e68d0b3100b9201dcf8246bc896d3778c554d100$enb=1$sku=0$p=619117$pin=$uuid=-1$csku=4544040$index=70$st=0$adcli=$expid=101$mexpid=$im=$rid=2949391199560373714$ver=1$sig=c8ff28dec775ed8d7e6b41da747ae7851c90bf50","c3":1595,"resultMessage":["[price1]"],"sku":4544040,"wt":"0.44","stk":33,"w":5.0,"t":"良品铺子酥脆薄饼薄脆 原味饼干 盒装咸味零食小吃早餐休闲食品300g","rt":"0","tips":[{"v":"0","t":9999}]},{"spu":10960247,"jp":"24.0","img":"https://img13.360buyimg.com/jdcms/18913/607f3d85-38a8-40f9-9634-a2a8e7248690.jpg","type":0,"bn":"新经典","yushouStatus":0,"renl":0,"yuShou":0,"subsku":[],"mp":"25.0","impr":"1","yuyueStatus":0,"skuDateType":12,"clk":"//knicks.jd.com/log/server?t=rec_common_clk&v=type=rec.619117$src=rec$action=1$reqsig=e68d0b3100b9201dcf8246bc896d3778c554d100$enb=1$sku=0$p=619117$pin=$uuid=-1$csku=10960247$index=71$st=0$adcli=$expid=101$mexpid=$im=$rid=2949391199560373714$ver=1$sig=eefea2667a045e4f26ac05294c089dc21215d98e","c3":3311,"resultMessage":["[price1]"],"sku":10960247,"wt":"0.34","stk":33,"w":5.0,"t":"人生","rt":"0","tips":[{"v":"0","t":9999}]}],"totalSize":100}}
//楼层的Json
var floorJson={"result":[
			{"name":"名特优品",
			"big":"img/itf0b787.bmp",
			"small":"img/shbvf0in.bmp",
			"shop":[
			 {"img":"img/0ryrliq0.bmp"},
			 {"img":"img/11i2vo77.bmp"},
			 {"img":"img/auz6e8xt.bmp"},
			 {"img":"img/jztalpbh.bmp"},
			 {"img":"img/tu4dk4oo.bmp"},
			 {"img":"img/zxzsc9x8.bmp"}
			],
			"floor":[
			{"spu":2965403,"jp":"69.0","img":"https://img13.360buyimg.com/jdcms/jfs/t27037/152/1040158174/278017/5f94a6fe/5bbf1a1bN6f24f086.jpg","type":0,"bn":"恒源祥","yushouStatus":0,"renl":0,"yuShou":0,"subsku":[],"mp":"199.0","impr":"1","yuyueStatus":0,"skuDateType":12,"clk":"//knicks.jd.com/log/server?t=rec_common_clk&v=type=rec.619117$src=rec$action=1$reqsig=e68d0b3100b9201dcf8246bc896d3778c554d100$enb=1$sku=0$p=619117$pin=$uuid=-1$csku=3150591$index=79$st=0$adcli=$expid=101$mexpid=$im=$rid=2949391199560373714$ver=1$sig=4980db0a8ff6e58f3c0d77529cd101f6729af225","c3":12015,"resultMessage":["[price1]"],"sku":3150591,"wt":"0.67","stk":40,"w":5.0,"t":"恒源祥纯棉秋衣秋裤男士薄款保暖内衣套装 舒适打底棉毛衫 黑色175/100","rt":"0","tips":[{"v":"0","t":9999}]},
			{"spu":31505455995,"jp":"118.0","img":"https://img13.360buyimg.com/jdcms/jfs/t22456/45/2105561788/646616/a61be4f/5b72857aN7a3bd86b.jpg","type":0,"bn":"蕊晟（ruisheng）","yushouStatus":0,"renl":99,"yuShou":0,"subsku":[],"mp":"299.0","impr":"1","yuyueStatus":0,"skuDateType":0,"clk":"//knicks.jd.com/log/server?t=rec_common_clk&v=type=rec.619117$src=rec$action=1$reqsig=e68d0b3100b9201dcf8246bc896d3778c554d100$enb=1$sku=0$p=619117$pin=$uuid=-1$csku=31505463510$index=80$st=0$adcli=$expid=101$mexpid=$im=$rid=2949391199560373714$ver=1$sig=3d364380a50b7995091409f5f47ce91b77532961","c3":1356,"resultMessage":["[price3]"],"sku":31505463510,"wt":"0.5","stk":33,"w":5.0,"t":"蕊晟 针织衫女2018秋冬新款套头外穿V领修身型韩版长袖毛衣8937 灰色 XL","rt":"0","tips":[{"v":"0","t":9999}]},
			{"spu":4543001,"jp":"19.0","img":"https://img13.360buyimg.com/jdcms/jfs/t17785/121/1113404276/345744/2292cd66/5abc8a9eNadeb6197.jpg","type":0,"bn":"南极人（Nanjiren）","yushouStatus":0,"renl":0,"yuShou":0,"subsku":[],"mp":"39.9","impr":"1","yuyueStatus":0,"skuDateType":12,"clk":"//knicks.jd.com/log/server?t=rec_common_clk&v=type=rec.619117$src=rec$action=1$reqsig=e68d0b3100b9201dcf8246bc896d3778c554d100$enb=1$sku=0$p=619117$pin=$uuid=-1$csku=4543063$index=81$st=0$adcli=$expid=101$mexpid=$im=$rid=2949391199560373714$ver=1$sig=4a8757801128e7162d4b7299f2cb6df7109bcf19","c3":6911,"sku":4543063,"wt":"0.344","stk":33,"w":5.0,"t":"南极人 拖鞋洗澡漏水防滑情侣居家浴室拖鞋 女款粉色38-39码18001","rt":"0","tips":[{"v":"0","t":9999}]},
			{"spu":11258399791,"jp":"168.0","img":"https://img13.360buyimg.com/jdcms/jfs/t3175/75/5765729604/138525/29f905b0/587c4128N220bc131.jpg","type":0,"bn":"芊年美丽","yushouStatus":0,"renl":99,"yuShou":0,"subsku":[],"mp":"366.0","impr":"1","yuyueStatus":0,"skuDateType":0,"clk":"//knicks.jd.com/log/server?t=rec_common_clk&v=type=rec.619117$src=rec$action=1$reqsig=e68d0b3100b9201dcf8246bc896d3778c554d100$enb=1$sku=0$p=619117$pin=$uuid=-1$csku=11258404213$index=82$st=0$adcli=$expid=101$mexpid=$im=$rid=2949391199560373714$ver=1$sig=eb070f96dd479f6605684c63b51716307a455acb","c3":12114,"sku":11258404213,"wt":"0.8","stk":33,"w":5.0,"t":"芊年美丽男式交谊舞两点底广场舞鞋国标舞蹈鞋男跳舞鞋 室内皮底3cm 39","rt":"0","tips":[{"v":"0","t":9999}]},
			{"spu":838692,"jp":"10.9","img":"https://img13.360buyimg.com/jdcms/jfs/t19711/215/958439120/146345/736d1bfd/5ab476edN3ca13f93.jpg","type":0,"bn":"王致和","yushouStatus":0,"renl":0,"yuShou":0,"subsku":[],"mp":"15.8","impr":"1","yuyueStatus":0,"skuDateType":12,"clk":"//knicks.jd.com/log/server?t=rec_common_clk&v=type=rec.619117$src=rec$action=1$reqsig=e68d0b3100b9201dcf8246bc896d3778c554d100$enb=1$sku=0$p=619117$pin=$uuid=-1$csku=838692$index=83$st=0$adcli=$expid=101$mexpid=$im=$rid=2949391199560373714$ver=1$sig=e9f0a147ff07b028edec9c057cf7348850dcceaa","c3":2677,"sku":838692,"wt":"1.88","stk":33,"w":5.0,"t":"王致和料酒 去腥调味增鲜 厨房调料调味品1.75L中华老字号","rt":"0","tips":[{"v":"0","t":9999}]},
			{"spu":990602,"jp":"19.5","img":"https://img13.360buyimg.com/jdcms/jfs/t5944/343/5666623751/199570/e50a1a36/596c93c7Nf4804b2e.jpg","type":0,"bn":"麦维他（McVitie's）","yushouStatus":0,"renl":0,"yuShou":0,"subsku":[],"mp":"21.9","impr":"1","yuyueStatus":0,"skuDateType":12,"clk":"//knicks.jd.com/log/server?t=rec_common_clk&v=type=rec.619117$src=rec$action=1$reqsig=e68d0b3100b9201dcf8246bc896d3778c554d100$enb=1$sku=0$p=619117$pin=$uuid=-1$csku=990602$index=84$st=0$adcli=$expid=101$mexpid=$im=$rid=2949391199560373714$ver=1$sig=de9ab75a85d351b76359435b28c8d25621744876","c3":5020,"resultMessage":["[price1, price3]"],"sku":990602,"wt":"0.42","stk":33,"w":5.0,"t":"英国进口 麦维他（Mcvitie's）原味全麦粗粮酥性消化饼干 400g 早餐下午茶零食","rt":"0","tips":[{"v":"0","t":9999}]}
			]},
			{"name":"保健养生",
			"big":"img/big.jpg",
			"small":"img/small1.jpg",
			"shop":[
			 {"img":"img/kangjin.jpg"},
			 {"img":"img/may.jpg"},
			 {"img":"img/fusheng.gif"}
			],
			"floor":[
			{"spu":6915391,"jp":"17.8","img":"https://img13.360buyimg.com/jdcms/jfs/t16501/40/2621501012/431400/2fdd32cc/5abdacb6N660199ce.jpg","type":0,"bn":"悠哈","yushouStatus":0,"renl":0,"yuShou":0,"subsku":[],"mp":"19.9","impr":"1","yuyueStatus":0,"skuDateType":12,"clk":"//knicks.jd.com/log/server?t=rec_common_clk&v=type=rec.619117$src=rec$action=1$reqsig=e68d0b3100b9201dcf8246bc896d3778c554d100$enb=1$sku=0$p=619117$pin=$uuid=-1$csku=6915391$index=85$st=0$adcli=$expid=101$mexpid=$im=$rid=2949391199560373714$ver=1$sig=3a9e5cc9b33a22e7d526a6fbcc6e4355e44f90a3","c3":5021,"resultMessage":["[price3]"],"sku":6915391,"wt":"0.05","stk":33,"w":5.0,"t":"日本进口 悠哈（UHA）紫葡萄味 味觉糖 48g","rt":"0","tips":[{"v":"0","t":9999}]},
			{"spu":18570496991,"jp":"18.9","img":"https://img13.360buyimg.com/jdcms/jfs/t11821/246/413789862/512424/c0557613/59f027b1Ned2ae42d.jpg","type":0,"bn":"蛋蛋猫（DDMOO）","yushouStatus":0,"renl":99,"yuShou":0,"subsku":[],"mp":"99.0","impr":"1","yuyueStatus":0,"skuDateType":0,"clk":"//knicks.jd.com/log/server?t=rec_common_clk&v=type=rec.619117$src=rec$action=1$reqsig=e68d0b3100b9201dcf8246bc896d3778c554d100$enb=1$sku=0$p=619117$pin=$uuid=-1$csku=18570496991$index=86$st=0$adcli=$expid=101$mexpid=$im=$rid=2949391199560373714$ver=1$sig=992e22642eb5fdcb7bb2192a2527c1c047539e63","c3":1589,"sku":18570496991,"wt":"1.0","stk":33,"w":5.0,"t":" 伊朗椰枣伊拉克枣黄椰枣蜜枣波斯枣海枣 500g","rt":"0","tips":[{"v":"0","t":9999}]},
			{"spu":2438441,"jp":"18.9","img":"https://img13.360buyimg.com/jdcms/jfs/t25255/85/2114402219/394074/9975e676/5bc40540N027d825f.jpg","type":0,"bn":"唐宗筷","yushouStatus":0,"renl":0,"yuShou":0,"subsku":[],"mp":"44.9","impr":"1","yuyueStatus":0,"skuDateType":12,"clk":"//knicks.jd.com/log/server?t=rec_common_clk&v=type=rec.619117$src=rec$action=1$reqsig=e68d0b3100b9201dcf8246bc896d3778c554d100$enb=1$sku=0$p=619117$pin=$uuid=-1$csku=5553547$index=87$st=0$adcli=$expid=101$mexpid=$im=$rid=2949391199560373714$ver=1$sig=a040766de1eb8260dd3c2343d3682da577d44f17","c3":6231,"resultMessage":["[price1]"],"sku":5553547,"wt":"0.66","stk":33,"w":5.0,"t":"唐宗筷 筷子 野营家用快餐一次性卫生筷子独立包装筷子100双装C6250","rt":"0","tips":[{"v":"0","t":9999}]},
			{"spu":29476374564,"jp":"14.9","img":"https://img13.360buyimg.com/jdcms/jfs/t20431/250/1416288148/258905/26a2e907/5b2a2a33Nbd48ddd7.png","type":0,"bn":"科优特","yushouStatus":0,"renl":99,"yuShou":0,"subsku":[],"mp":"24.0","impr":"1","yuyueStatus":0,"skuDateType":0,"clk":"//knicks.jd.com/log/server?t=rec_common_clk&v=type=rec.619117$src=rec$action=1$reqsig=e68d0b3100b9201dcf8246bc896d3778c554d100$enb=1$sku=0$p=619117$pin=$uuid=-1$csku=29476374566$index=88$st=0$adcli=$expid=101$mexpid=$im=$rid=2949391199560373714$ver=1$sig=49a61b72326168be8f98bb96a3e85357297d41fb","c3":9905,"sku":29476374566,"wt":"0.03","stk":33,"w":5.0,"t":"床头插电节能灯光控小夜灯led灯感应灯插座灯夜光灯婴儿喂奶灯宝宝起夜灯睡眠灯智能氛围小灯卧室梦幻创意 自带开关0.8瓦LED黄光 儿童睡觉婴儿母婴灯暖光","rt":"0","tips":[{"v":"0","t":9999}]},
			{"spu":11185437267,"jp":"138.0","img":"https://img13.360buyimg.com/jdcms/jfs/t5614/338/2872224341/387121/42b1710/5934d528N33a1a095.jpg","type":0,"bn":"汉尼（HANY）","yushouStatus":0,"renl":99,"yuShou":0,"subsku":[],"mp":"198.0","impr":"1","yuyueStatus":0,"skuDateType":0,"clk":"//knicks.jd.com/log/server?t=rec_common_clk&v=type=rec.619117$src=rec$action=1$reqsig=e68d0b3100b9201dcf8246bc896d3778c554d100$enb=1$sku=0$p=619117$pin=$uuid=-1$csku=11185437278$index=89$st=0$adcli=$expid=101$mexpid=$im=$rid=2949391199560373714$ver=1$sig=d4c698b0c5036a12f4850b2fa8e5295808cb60c9","c3":12039,"sku":11185437278,"wt":"0.1","stk":33,"w":5.0,"t":"HANY男士短脚胸针 商务西装胸针胸扣时尚简约西装配饰 短脚胸针 卡拉卓华","rt":"0","tips":[{"v":"0","t":9999}]},
			{"spu":11946055,"jp":"36.0","img":"https://img13.360buyimg.com/jdcms/jfs/t2821/109/2975108189/117042/484beb3a/577b5f19N3c4c5d4f.jpg","type":0,"bn":"中信出版","yushouStatus":0,"renl":0,"yuShou":0,"subsku":[],"mp":"48.0","impr":"1","yuyueStatus":0,"skuDateType":12,"clk":"//knicks.jd.com/log/server?t=rec_common_clk&v=type=rec.619117$src=rec$action=1$reqsig=e68d0b3100b9201dcf8246bc896d3778c554d100$enb=1$sku=0$p=619117$pin=$uuid=-1$csku=11978638$index=90$st=0$adcli=$expid=101$mexpid=$im=$rid=2949391199560373714$ver=1$sig=6d07ac46badadb597daadb46ab6f6fd0f35b3d7a","c3":3470,"resultMessage":["[price2]"],"sku":11978638,"wt":"0.56","stk":33,"w":5.0,"t":"演讲的力量：如何让公众表达变成影响力","rt":"0","tips":[{"v":"0","t":9999}]}
			]},
			{"name":"健康饮品",
			"big":"img/big1.jpg",
			"small":"img/small2.jpg",
			"shop":[
			 {"img":"img/a1.jpg"},
			 {"img":"img/a2.jpg"},
			 {"img":"img/a3.jpg"},
			 {"img":"img/a4.jpg"},
			 {"img":"img/a5.jpg"},
			 {"img":"img/a6.jpg"}
			],"floor":[
			{"spu":4053463,"jp":"24.8","img":"https://img13.360buyimg.com/jdcms/jfs/t23128/362/2012598249/139510/885b72e6/5b70e0f8N7b7da2ac.jpg","type":0,"bn":"三只松鼠（Three Squirrels）","yushouStatus":0,"renl":0,"yuShou":0,"subsku":[],"mp":"59.0","impr":"1","yuyueStatus":0,"skuDateType":12,"clk":"//knicks.jd.com/log/server?t=rec_common_clk&v=type=rec.619117$src=rec$action=1$reqsig=e68d0b3100b9201dcf8246bc896d3778c554d100$enb=1$sku=0$p=619117$pin=$uuid=-1$csku=4053463$index=91$st=0$adcli=$expid=101$mexpid=$im=$rid=2949391199560373714$ver=1$sig=9cb7fe1ab8cbb59bf1f2ef97be349fb511b50a4c","c3":1591,"resultMessage":["[price1]"],"sku":4053463,"wt":"0.12","stk":33,"w":5.0,"t":"三只松鼠坚果炒货零食每日坚果手剥开口松子100g/袋","rt":"0","tips":[{"v":"0","t":9999}]},
			{"spu":2782288,"jp":"799.0","img":"https://img13.360buyimg.com/jdcms/jfs/t11035/167/1277310288/65275/60a4c4b1/59ffb2edN4bc5bf42.jpg","type":0,"bn":"KARCHER","yushouStatus":0,"renl":0,"yuShou":0,"subsku":[],"mp":"1299.0","impr":"1","yuyueStatus":0,"skuDateType":12,"clk":"//knicks.jd.com/log/server?t=rec_common_clk&v=type=rec.619117$src=rec$action=1$reqsig=e68d0b3100b9201dcf8246bc896d3778c554d100$enb=1$sku=0$p=619117$pin=$uuid=-1$csku=5731372$index=92$st=0$adcli=$expid=101$mexpid=$im=$rid=2949391199560373714$ver=1$sig=d8cc5b21405abc2407fa3518b709a346594cdb4d","c3":13252,"sku":5731372,"wt":"8.86","stk":33,"w":5.0,"t":"karcher卡赫 德国凯驰集团高压洗车机 家用清洗机自带水箱交流电版本轻松拖动随身而行K2 Follow Me标配 220V","rt":"0","tips":[{"v":"0","t":9999}]},
			{"spu":11452840,"jp":"152.6","img":"https://img13.360buyimg.com/jdcms/jfs/t16762/353/1550443284/919041/7ecd779f/5acdddbfN46d60ef9.jpg","type":0,"bn":"新经典","yushouStatus":0,"renl":0,"yuShou":0,"subsku":[],"mp":"159.0","impr":"1","yuyueStatus":0,"skuDateType":12,"clk":"//knicks.jd.com/log/server?t=rec_common_clk&v=type=rec.619117$src=rec$action=1$reqsig=e68d0b3100b9201dcf8246bc896d3778c554d100$enb=1$sku=0$p=619117$pin=$uuid=-1$csku=12342756$index=93$st=0$adcli=$expid=101$mexpid=$im=$rid=2949391199560373714$ver=1$sig=4df757b25156f73566d4d03bf32cee51fd59c067","c3":3304,"resultMessage":["[price1]"],"sku":12342756,"wt":"1.794","stk":33,"w":5.0,"t":"东野圭吾：东野圭吾四大推理套装（共4册）","rt":"0","tips":[{"v":"0","t":9999}]},
			{"spu":15531497507,"jp":"49.0","img":"https://img13.360buyimg.com/jdcms/jfs/t7843/82/1223970752/234390/8c85e885/599b911cN61454502.jpg","type":0,"bn":"妙管家（Magic Amah）","yushouStatus":0,"renl":99,"yuShou":0,"subsku":[],"mp":"80.0","impr":"1","yuyueStatus":0,"skuDateType":0,"clk":"//knicks.jd.com/log/server?t=rec_common_clk&v=type=rec.619117$src=rec$action=1$reqsig=e68d0b3100b9201dcf8246bc896d3778c554d100$enb=1$sku=0$p=619117$pin=$uuid=-1$csku=15531497507$index=94$st=0$adcli=$expid=101$mexpid=$im=$rid=2949391199560373714$ver=1$sig=fa7e66d390f9eb255ada285ccaae9d959d74f2d2","c3":1663,"sku":15531497507,"wt":"1.5","stk":33,"w":5.0,"t":"台湾妙管家酸性浴厕清洁剂原装进口厕所浴室除臭去污垢马桶洁厕灵1.44kg 酸性浴厕清洁剂 720g*2","rt":"0","tips":[{"v":"0","t":9999}]},
			{"spu":2796199,"jp":"89.0","img":"https://img13.360buyimg.com/jdcms/jfs/t2782/273/1104830483/229169/9527fed3/57340062Nfd5ad387.jpg","type":0,"bn":"美厨（maxcook）","yushouStatus":0,"renl":0,"yuShou":0,"subsku":[],"mp":"289.0","impr":"1","yuyueStatus":0,"skuDateType":12,"clk":"//knicks.jd.com/log/server?t=rec_common_clk&v=type=rec.619117$src=rec$action=1$reqsig=e68d0b3100b9201dcf8246bc896d3778c554d100$enb=1$sku=0$p=619117$pin=$uuid=-1$csku=2796199$index=95$st=0$adcli=$expid=101$mexpid=$im=$rid=2949391199560373714$ver=1$sig=e86f8f1e4f036804a3a74cf9fd7c62bf2282c739","c3":11977,"resultMessage":["[price1]"],"sku":2796199,"wt":"2.615","stk":33,"w":5.0,"t":"美厨（maxcook）厨房置物架 不锈钢三层刀架砧板架调料瓶架 带挂钩筷子筒 MC3035","rt":"0","tips":[{"v":"0","t":9999}]},
			{"spu":3372774,"jp":"639.0","img":"https://img13.360buyimg.com/jdcms/jfs/t26800/276/1222892746/263360/473fe84e/5bc46e81N113cb4a5.jpg","type":0,"bn":"格兰仕（Galanz）","yushouStatus":0,"renl":1,"yuShou":0,"subsku":[],"mp":"1399.0","impr":"1","yuyueStatus":0,"skuDateType":12,"clk":"//knicks.jd.com/log/server?t=rec_common_clk&v=type=rec.619117$src=rec$action=1$reqsig=e68d0b3100b9201dcf8246bc896d3778c554d100$enb=1$sku=0$p=619117$pin=$uuid=-1$csku=1982314$index=96$st=0$adcli=$expid=101$mexpid=$im=$rid=2949391199560373714$ver=1$sig=43bb8c8c66f11cb258ba602ef1b5c4644622719e","c3":758,"resultMessage":["[price2]"],"sku":1982314,"wt":"16.5","stk":33,"w":5.0,"t":"格兰仕（Galanz）G90F25CN3L-C2(G1)微波炉 烤箱一体机 家用25升900瓦 APP智能操控 光波烧烤 微晶平板","rt":"0","tips":[{"v":"0","t":9999}]}
			]},
	]
};
//推荐的Json
var recomJson={"data":[
			{"spu":3635253,"jp":"29.9","img":"https://img13.360buyimg.com/jdcms/jfs/t18721/346/652013674/595400/8e02f575/5a9f46f5N4610a528.jpg","type":0,"bn":"厨美","yushouStatus":0,"renl":0,"yuShou":0,"subsku":[],"mp":"45.0","impr":"1","yuyueStatus":0,"skuDateType":12,"clk":"//knicks.jd.com/log/server?t=rec_common_clk&v=type=rec.619117$src=rec$action=1$reqsig=e68d0b3100b9201dcf8246bc896d3778c554d100$enb=1$sku=0$p=619117$pin=$uuid=-1$csku=4065910$index=73$st=0$adcli=$expid=101$mexpid=$im=$rid=2949391199560373714$ver=1$sig=d8dbb2343ab71881494be97d06bda3d94681856f","c3":6216,"resultMessage":["[price1]"],"sku":4065910,"wt":"0.25","stk":33,"w":5.0,"t":"厨美圆形28CM蒸笼纸 包子馒头点心垫纸 烘焙纸不粘笼屉纸 100张 带孔","rt":"0","tips":[{"v":"0","t":9999}]},
			{"spu":5273645,"jp":"109.0","img":"https://img13.360buyimg.com/jdcms/jfs/t25414/343/1176278311/234056/54ce6ace/5b8cf39bN47bb8def.jpg","type":0,"bn":"美的（Midea）","yushouStatus":0,"renl":0,"yuShou":0,"subsku":[],"mp":"199.0","impr":"1","yuyueStatus":0,"skuDateType":12,"clk":"//knicks.jd.com/log/server?t=rec_common_clk&v=type=rec.619117$src=rec$action=1$reqsig=e68d0b3100b9201dcf8246bc896d3778c554d100$enb=1$sku=0$p=619117$pin=$uuid=-1$csku=5273645$index=74$st=0$adcli=$expid=101$mexpid=$im=$rid=2949391199560373714$ver=1$sig=57d9e318410c0af40deaa9d4ac9efc8f5db5fd4d","c3":760,"sku":5273645,"wt":"1.37","stk":33,"w":5.0,"t":"美的（Midea）电水壶热水壶电热水壶304不锈钢水壶双层防烫全钢无缝开水壶烧水壶MK-HJ1512d","rt":"0","tips":[{"v":"0","t":9999}]},
			{"spu":10261242482,"jp":"78.0","img":"https://img13.360buyimg.com/jdcms/jfs/t17542/197/2336313780/458659/331850c6/5aed8aefNb5460d54.jpg","type":0,"bn":"燕京","yushouStatus":0,"renl":99,"yuShou":0,"subsku":[],"mp":"280.0","impr":"1","yuyueStatus":0,"skuDateType":0,"clk":"//knicks.jd.com/log/server?t=rec_common_clk&v=type=rec.619117$src=rec$action=1$reqsig=e68d0b3100b9201dcf8246bc896d3778c554d100$enb=1$sku=0$p=619117$pin=$uuid=-1$csku=10261242482$index=75$st=0$adcli=$expid=101$mexpid=$im=$rid=2949391199560373714$ver=1$sig=c4ecb93085bb9c5a83f0a66cf747c088f6bd36ce","c3":9439,"sku":10261242482,"wt":"12.0","stk":33,"w":5.0,"t":"燕京啤酒 330ml*24罐 特制啤酒 整箱","rt":"0","tips":[{"v":"0","t":9999}]},
			{"spu":10220681196,"jp":"39.0","img":"https://img13.360buyimg.com/jdcms/jfs/t4033/324/1135701092/228977/dadeb04a/5869e68fN857d8af6.jpg","type":0,"bn":"Meilen","yushouStatus":0,"renl":99,"yuShou":0,"subsku":[],"mp":"138.0","impr":"1","yuyueStatus":0,"skuDateType":0,"clk":"//knicks.jd.com/log/server?t=rec_common_clk&v=type=rec.619117$src=rec$action=1$reqsig=e68d0b3100b9201dcf8246bc896d3778c554d100$enb=1$sku=0$p=619117$pin=$uuid=-1$csku=10220681196$index=76$st=0$adcli=$expid=101$mexpid=$im=$rid=2949391199560373714$ver=1$sig=3b7f2c5c372d961cec5a77ded298c1c618b7674b","c3":1289,"resultMessage":["[price1]"],"sku":10220681196,"wt":"1.28","stk":33,"w":5.0,"t":"【京东包邮】Meilen电子秤称重人体秤精准电子称健康秤家用计体重秤 幸福三猴","rt":"0","tips":[{"v":"0","t":9999}]},
			{"spu":1151846,"jp":"55.0","img":"https://img13.360buyimg.com/jdcms/jfs/t1/9/4/4357/99659/5b98c28bE026b6e1e/d915ff45b5abc368.jpg","type":0,"bn":"飞科（FLYCO）","yushouStatus":0,"renl":0,"yuShou":0,"subsku":[],"mp":"199.0","impr":"1","yuyueStatus":0,"skuDateType":12,"clk":"//knicks.jd.com/log/server?t=rec_common_clk&v=type=rec.619117$src=rec$action=1$reqsig=e68d0b3100b9201dcf8246bc896d3778c554d100$enb=1$sku=0$p=619117$pin=$uuid=-1$csku=1151846$index=77$st=0$adcli=$expid=101$mexpid=$im=$rid=2949391199560373714$ver=1$sig=b7a56afef092e90b683e645f78e0f724e679b2f8","c3":740,"sku":1151846,"wt":"0.74","stk":33,"w":5.0,"t":"飞科(FLYCO)电吹风机家用FH6232大功率吹风筒 2000W","rt":"0","tips":[{"v":"0","t":9999}]},
			{"spu":1460667762,"jp":"31.9","img":"https://img13.360buyimg.com/jdcms/jfs/t11470/32/296789831/74715/48ade959/59ecc725N756ea77d.jpg","type":0,"bn":"欧普（OPPLE）","yushouStatus":0,"renl":99,"yuShou":0,"subsku":[],"mp":"129.0","impr":"1","yuyueStatus":0,"skuDateType":0,"clk":"//knicks.jd.com/log/server?t=rec_common_clk&v=type=rec.619117$src=rec$action=1$reqsig=e68d0b3100b9201dcf8246bc896d3778c554d100$enb=1$sku=0$p=619117$pin=$uuid=-1$csku=31762637120$index=78$st=0$adcli=$expid=101$mexpid=$im=$rid=2949391199560373714$ver=1$sig=34fe30b9d47ef1ff30f852666efdf25c288b752a","c3":9903,"resultMessage":["[price1, price3]"],"sku":31762637120,"wt":"0.01","stk":33,"w":5.0,"t":"欧普照明（OPPLE） led灯泡节能大螺口家用商用大功率光源超亮E27球泡E14螺旋-XG 【单只装】12瓦  E27螺口 暖白光","rt":"0","tips":[{"v":"0","t":9999}]}
			]}

//加载商品推荐
$(".cheaper img").each(function(index,ele){
	$(this).attr("src",recomJson.data[index].img);
	$(this).next("span").html(recomJson.data[index].t);
})

//加载pid
$(".cheaper div").each(function(index,ele){
	$(this).attr("pid",recomJson.data[index].spu);
})

//商品推荐的动画效果
function cheaperChange(num){
	var i=1;

	$(".cheaper div").each(function(){
		
		$(".cheaper div").eq(num).removeClass().addClass("p"+i);
		num++;
		i++;
		if (num>$(".cheaper div").length-1) {
			num=0;
		}
		
	})		
}

$(".cheaper div").click(function(){
	if ($(this).hasClass("p1")) {
		window.location.href="goods.html?pid="+$(this).attr("pid");
	} else{
		
		cheaperChange($(this).index());
	}
})









//加载楼层
var floorStr = "";
$.each(floorJson.result, function(index,ele) {
	var floorNumber=index+1;
	floorStr +='<div class="goods_floor fl">'
				+'<div class="floor_top">'
					+'<p>'+(Number(floorNumber)+1)+'F '+ele.name+'</p>'
					+'<ul>'
						+'<li>精选特卖</li>'
						+'<li>云南特产</li>'
						+'<li>四川特产</li>'
						+'<li>广东特产</li>'
					+'</ul>'
				+'</div>'
				+'<div class="floor_bottom">'
					+'<div class="floor_bottom_bigbox">'
						+'<div class="floor_bottom_small">'
							
						+'</div></a>'
						+'<div class="floor_bottom_big">'
							+'<ul class="variety">'
								
							+'</ul>'
						+'</div></a>'	
					+'</div>'
					+'<ul class="floor_lis">'
						
						
					+'</ul>'
				+'</div>'
			+'</div>'
		+'</div>'
});
$("#floor_wrap").html(floorStr)

//加载广告图
$.each(floorJson.result, function(index,ele) {
	var smallStr="";
		smallStr+='<img src="'+ele.small+'"/>'
	
	$(".floor_bottom_small").eq(index).html(smallStr);

	$(".floor_bottom_big").eq(index).css({"background":"url("+ele.big+")","background-size": "cover"})
	
})

//加载推荐商家
$.each(floorJson.result, function(index,ele) {
	var shopStr="";
	$.each(ele.shop, function(ind,elet) {
		shopStr+='<li><img src="'+elet.img+'"/></li>'	
	});
	$(".variety").eq(index).html(shopStr);
});



//加载商品列表
$.each(floorJson.result, function(index,ele) {
	var floorProStr="";
	$.each(ele.floor, function(ind,elet) {
		floorProStr+='<li>'
							
							+'<img class="profloor_bottom_photo pro" pid='+elet.spu+' src="'+elet.img+'"/>'	
						
							+'<p class="floor_saying">'+elet.t+'</p>'
							+'<p class="floor_price" jp="'+elet.jp+'"><span>¥'+elet.jp+'</span>&nbsp;&nbsp;&nbsp;<span>¥48.00</span></p>'
							+'<div class="slice"><button class="slice_buy">立即购买</button><button class="slice_car">加入购物车</button></div>'
						+'</li>'
	});

	
	$(".floor_lis").eq(index).html(floorProStr);
});



//加载猜你喜欢
var likeStr="";
$.each(s.result.data, function(index,ele) {
	likeStr+='<div class="like_produce">'
				+'<img class="pro" pid='+ele.spu+' src="'+ele.img+'"/>'
				+'<p class="like_name">'+ele.t+'</p>'
				+'<p class="like_price" jp="'+ele.jp+'">'+ele.jp+'元</p>'
				+'<div class="slice"><button class="slice_buy">立即购买</button><button class="slice_car">加入购物车</button></div>'
			+'</div>'
});
$("#yourLike_con").html(likeStr);




var banner = document.getElementById("banner");
var imgs = banner.getElementsByTagName("img");
var lis = banner.getElementsByTagName("li");
var banLeft = banner.getElementsByClassName("ban_left")[0];
var banright = banner.getElementsByClassName("ban_right")[0];
var wrap = document.getElementById("wrap");
var time;
var co=0;
var col =["#e3e3e5","#fdf2d6","#ffce5f"];
function change(){
	if (co>imgs.length-1) {
		co=0;
	}
	if (co<0) {
		co=imgs.length-1;
	}
	for (var i=0;i<lis.length;i++) {
		lis[i].classList.remove("banchange");
		imgs[i].style.display="none";
	}
	lis[co].classList.toggle("banchange");
	imgs[co].style.display = "block";
	wrap.style.backgroundColor = col[co];
}


function setTime(){
	time =setInterval(function(){
		co++
		change();
	},1000)
}
setTime();
banner.onmouseover = function(){
	clearInterval(time);
	banLeft.parentElement.style.display = "block";
}
banner.onmouseout = function(){
	setTime();
	banLeft.parentElement.style.display = "none";
}
banLeft.onmouseover=function(){
	banLeft.style.opacity = "0.8";
}
banLeft.onmouseout=function(){
	banLeft.style.opacity = "0.3";
}
banright.onmouseover=function(){
	banright.style.opacity = "0.8";
}
banright.onmouseout=function(){
	banright.style.opacity = "0.3";
}
banLeft.onclick = function(){
	co--;
	change();
}
banright.onclick = function(){
	co++;
	change();
}
for (var j=0;j<lis.length;j++) {
	lis[j].ind = j;
	lis[j].onmouseover = function(){
		co=this.ind;
		change();
	}
}
//轮播图的结束
//导航栏的开始
var nav = document.getElementById("nav");
var navCon = document.getElementsByClassName("nav_con");
var navLis = document.querySelectorAll("#nav>ul>li")

console.log(navLis)

for (var i=0;i<navLis.length;i++) {
	navLis[i].ind=i;
	navLis[i].onmouseenter = function(){
		this.style.backgroundColor = "white";
		this.style.color = "grey";
		navCon[this.ind].style.display="block";
		this.firstElementChild.style.backgroundPositionY="-175px"
	}
	navLis[i].onmouseleave = function(){
		this.style.backgroundColor = "#c72727";
		this.style.color = "white";
		navCon[this.ind].style.display="none";
		this.firstElementChild.style.backgroundPositionY="-135px"
	}
}


//画布效果
var but = document.getElementsByTagName("button")[0];
			var can = document.getElementById("can");
			var ctx = can.getContext("2d");
			const colors = ["#33B5E5","#0099CC","#AA66CC","#9933CC","#99CC00","#669900","#FFBB33","#FF8800","#FF4444","#CC0000"]	
//生成动画效果		
		setInterval(function(){
			ctx.clearRect(0,0,1200,600);
		            render( ctx );
		        }, 1000);
		        

		        //制作钟表 的时间小球
		        		function draw (time,posi,color){
		        			for (var n=0;n<num[time].length;n++) {	
		        				for (var a=0;a<num[time][n].length;a++) {
		        					if (num[time][n][a] != "0") {
		        						ctx.beginPath();
		        						ctx.lineWidth = "1";
		        						ctx.fillStyle = color;
		        						ctx.arc(400+posi+a*5,50+n*5,2,0,360,false);
										
										ctx.shadowColor="black";
		        						ctx.closePath();
		        						ctx.fill();	
		        					}	
		        				}	
		        			}
		        		}
		        		
		   
		        		
		        		
		//制作钟表的蓝点        		
				        var time;
						var day;
						var da;
						var hour;
						var min;
						var sec;
						var nexthour;
						var nextmin;
						var nextsec;
						var nn=0;
						var t;
						function render(ctx){
								var color=colors[nn]
								
								 day = new Date;
								 da=new Date(2018, 9, 27).getTime();
								 t=day.getTime();
								var ti=da-t;
								 hour = parseInt(ti/3600/1000);
								 min = parseInt(ti/1000/60%60);
								 sec = parseInt(ti/1000%60);
									
								draw((parseInt(hour/10)),0,color);	
								draw((parseInt(hour%10)),50,color);
								draw(10,95);
								draw((parseInt(min/10)),140,color);
								draw((parseInt(min%10)),190,color);	
								draw(10,235);
								draw((parseInt(sec/10)),285,color);	
								draw((parseInt(sec%10)),335,color);
			ctx.font = "italic 35px 黑体";
			ctx.fillStyle = "Red";
			ctx.fillText("活动剩余时间：",150,80,200);
				
		        		
						nn++
						if (nn>colors.length) {
							nn=0;
						}
					
					}
		        	 		







//楼层的跳转
var floor = document.getElementById("floor");
var floorLis = floor.getElementsByTagName("li");
var floorCon=["每日特卖","名特优品","保健养生","健康饮品","猜你喜欢"]

for (var i=0;i<floorLis.length;i++) {
	floorLis[i].ind = i;
	floorLis[i].onmouseover = function(){
		this.classList.add("floor_over");
		this.innerHTML = (Number(this.ind)+1)+"F<br/>"+floorCon[this.ind];
	}
	floorLis[i].onmouseout = function(){
		this.classList.remove("floor_over");
		this.innerHTML ="";
	}
}

$("#floor li").click(function(ele){
	var ToTop=Number($(".fl").eq($(this).index()).offset().top);
	console.log(ToTop);
	 $("html,body").animate({scrollTop:ToTop}, 500);
})



//楼层的js效果
var gFloor = document.getElementsByClassName("goods_floor");
for (var i=0;i<gFloor.length;i++) {
	var gSmall = gFloor[i].getElementsByClassName("floor_bottom_small")[0];
	gSmall.onmouseenter=function(){
		this.style.width="200px"

	}
	gSmall.onmouseleave=function(){
		this.style.width="181px"

	}
	var gTop = gFloor[i].getElementsByClassName("floor_top")[0];
	var gTopLis = gTop.getElementsByTagName("li");
	for (var j=0;j<gTopLis.length;j++) {
		gTopLis[j].onclick = function(){
			for (var a=0;a<this.parentElement.children.length;a++) {
				this.parentElement.children[a].style.backgroundColor = "white";
				this.parentElement.children[a].style.color = "black";
			}
			this.style.backgroundColor = "skyblue";
			this.style.color = "white";
		}
		gTopLis[j].onmouseenter = function(){
			this.style.color = "red";
		}
		gTopLis[j].onmouseleave = function(){
			if (this.style.color=="red") {
				this.style.color = "black";
				
			} 
		}
	}
}

//商品划入划出效果
$(".pro").parent().hover(function(){
	$(this).find(".slice").css("top","155px");
},function(){
	$(this).find(".slice").css("top","240px");
}
)





//商品下滑遮挡效果的购物车添加
$(".slice .slice_car").click(function(ele){
	if (localStorage.login==undefined) {
		if (confirm("还未登录，是否登录？")) {
			window.location.href="login.html";
			
		}
	} else{
		window.pi=$(this).parent().prevAll("img").attr("pid");
		window.jp=$(this).parent().prev().attr("jp");
		window.im=$(this).parent().prevAll("img").attr("src");
		window.tt=$(this).parent().prev().prev().html();
		$("#confirm").slideDown();
		var confirmStr="";
		confirmStr='<img src="'+im+'"/>'
							+'<p>'+tt+'</p>'
							+'<p  style="color: red;margin-top:30px;font-size:20px">￥'+jp+'</p>'
						
		$("#confirm>div").html(confirmStr);
		
	
		
	}
	
	
})

//购买页加载
$(".slice_buy").click(function(){
	
	if (localStorage.login==undefined) {
		if (confirm("还未登录，是否登录？")) {
			window.location.href="login.html";
			
		}
	} else{
		window.pi=$(this).parent().prevAll("img").attr("pid");
		window.jp=$(this).parent().prev().attr("jp");
		window.im=$(this).parent().prevAll("img").attr("src");
		window.tt=$(this).parent().prev().prev().html();
		var Arr=[{pid:pi,num:1,price:jp,img:im,t:tt}];
		var str=JSON.stringify(Arr);
		localStorage.buy=str;
		console.log(str);
		window.location.href="buy.html";
	
		
	}
})




	//cook不存在时，添加一个空数组，
			$("#confirm button").eq(0).click(function(){
					
					//cook不存在时，添加一个空数组，
					var tool=new Tools();
					var amount=$("#amount").val();
					console.log(tool.getcookie("user")==undefined)
					if (tool.getcookie("user")==undefined) {
						cookieOject.setcook({"name":"user","value":"[]"});
					}
					//在cook中添加购物信息
					var cookStr=tool.getcookie("user");
					var cookJson=JSON.parse(cookStr);
					cookJson.push({pid:pi,num:1,price:jp,img:im,t:tt});
					cookStr=JSON.stringify(cookJson);
					cookieOject.setcook({"name":"user","value":cookStr});
					getCar();
					
					//点击框消失
					$("#confirm").slideUp();
					
				})
				$("#confirm button").eq(1).click(function(){
					$("#confirm").slideUp();
				})



//		




//显示更多的yourlike
var yourNum=0;
$("#yourLike_more").click(function(){
	if (yourNum%2==0) {
		$("#yourLike_con").css("height","3100px")
		$(this).html("收起")
		
	} else{
		$("#yourLike_con").css("height","565px")
		$(this).html("加载更多")
	}
	yourNum++;
})


$("window").scroll(function(){
	if ($(document).scrollTop()!=0) {
		sessionStorage.setItem("mytop",$(document).scrollTop());
	}
	
	
})






$(".pro").click(function(){
//	console.log($(this).attr("pid"))
			window.location.href="goods.html?pid="+$(this).attr("pid");
			
		})


