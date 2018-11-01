//加载头部和脚部
$("#header").load("header.html","dd",function(){})
$("#footer").load("footer2.html","dd",function(){
})

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



//获取商品pid
function GetQueryString(name) {
		    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
		    var r = decodeURI(window.location.search.substr(1)).match(reg);
		    if (r != null)return unescape(r[2]);
		    return null;
		}

var pid=GetQueryString("pid"); 

//加载数据
$.ajax({
	type:"get",
	url:"produce.json",
	async:true,
	dataType:"json",
	success:function(res){
		console.log(res);
		$.each(res.result.data, function(inedx,ele) {
			if (ele.spu==pid) {
				//pid相同则加载数据
				console.log(ele)
				$("#conleft_small").css({"background":"url("+ele.img+")","background-size":"contain","background-repeat":"no-repeat"})
				$("#conleft_big img").attr("src",ele.img)
				var str='<div>'
						+'<h3>'+ele.t+'</h3>'
						+'<p>东北三省不发货</p>'
					+'</div>'
					+'<div><span>售价</span><h4>￥'+ele.jp+'</h4><s>￥39.00</s></div>'
					+'<div>'
						+'<p>物流运送费:云南省 昆明市 | 至'
						+'<select name="" id="">'
							+'<option>广州</option>'
							+'<option>北京</option>'
							+'<option>深圳</option>'
						+'</select>'
						+'快递：￥9'
						+'</p>'
						+'<p>累计评价 <span>114</span><i></i>收藏商品（1人气）</p>'
						+'<p>数量：<input type="number" id="amount" value="1"/>件 （库存：500件）</p>'
					+'</div>'
					+'<div>'
						+'<div id="buy">'
							+'立即购买'
						+'</div>'
						+'<div id="add_car">'
							+'加入购物车'
						+'</div>'
					+'</div>'
				$(".contect_right").html(str);
			$("#add_car").click(function(){
				
				if (localStorage.login==undefined) {
					window.location.href="login.html"
				} else{
					
					//点击弹出确认框
					$("#confirm").slideDown();
					var confirmStr="";
					confirmStr='<img src="'+ele.img+'"/>'
										+'<p>'+ele.t+'</p>'
										+'<p  style="color: red;margin-top:30px;font-size:20px">￥'+ele.jp+'</p>'
									
					$("#confirm>div").html(confirmStr);
				
				
				}
				
				
			})
			
			
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
					cookJson.push({pid:pid,num:amount,price:ele.jp,img:ele.img,t:ele.t});
					cookStr=JSON.stringify(cookJson);
					cookieOject.setcook({"name":"user","value":cookStr});
					getCar();
					
					//点击框消失
					$("#confirm").slideUp();
					
				})
				$("#confirm button").eq(1).click(function(){
					$("#confirm").slideUp();
				})
			
			
			

			
			}
		});
	},
	error:function(){
		console.log("aa")
	}
});


var conSmall = document.getElementById("conleft_small");
var conBig = document.getElementById("conleft_big");
var conChange = document.getElementById("conleft_change");
//tab切换
var objPic={
	"result":{
		"data":[
			{"pid":"10261242482","pic":["img/tab/p1.jpg","img/tab/p2.jpg","img/tab/p3.jpg","img/tab/p4.jpg","img/tab/p4.jpg"]},
			{"pid":"3635253","pic":["img/tab/bao1.jpg","img/tab/bao2.jpg","img/tab/bao3.jpg","img/tab/bao4.jpg","img/tab/bao5.jpg"]},
			{"pid":"1151846","pic":["img/tab/cui1.jpg","img/tab/cui2.jpg","img/tab/cui3.jpg","img/tab/cui4.jpg","img/tab/cui5.jpg"]},
			{"pid":"10220681196","pic":["img/tab/cen1.jpg","img/tab/cen2.jpg","img/tab/cen3.jpg","img/tab/cen4.jpg","img/tab/cen5.jpg"]},
			{"pid":"5273645","pic":["img/tab/hu1.jpg","img/tab/hu2.jpg","img/tab/hu3.jpg","img/tab/hu4.jpg","img/tab/hu5.jpg"]}
		
		]
	}
}



var tab = document.getElementsByClassName("tab")[0];
var tabLis = tab.getElementsByTagName("li");
var objBig;
var objSmall;
var picFlag=true;
$.each(objPic.result.data, function(index,ele) {
	if (ele.pid==pid) {
		objBig=ele.pic;
		objSmall=ele.pic;
		picFlag=false;
	} 
	
});
	if(picFlag){
		objBig=["img/goods/big_1.jpg","img/goods/big_2.jpg","img/goods/big_3.jpg","img/goods/big_4.jpg","img/goods/big_5.jpg"];
		objSmall=["img/goods/small_1.jpg","img/goods/small_2.jpg","img/goods/small_3.jpg","img/goods/small_4.jpg","img/goods/small_5.jpg"]
		console.log("false");
	}

	


for (var i=0;i<tabLis.length;i++) {
	tabLis[i].style.background = "url("+objSmall[i]+")";
	tabLis[i].style.backgroundSize="cover";
	tabLis[i].ind = i;
	tabLis[i].onclick =function(){
		for (var j=0;j<tabLis.length;j++) {
			tabLis[j].style.border = "none";
			tabLis[j].style.opacity = "0.7";
		}
		conSmall.style.background = "url("+objBig[this.ind]+")";
		conSmall.style.backgroundSize="cover";
		conBig.innerHTML = "<img src='"+objBig[this.ind]+"'/>"
		console.log(conBig.children);
		this.style.border = "1px red solid";
		this.style.opacity = "1";
	}
}





//放大镜效果

conSmall.onmouseenter = function(){
	conBig.style.display = "block";
	conChange.style.display = "block";
	conSmall.onmousemove = function(e){
		var e=e||window.event;
		var clienLeft = e.pageX-conSmall.offsetLeft-conChange.offsetWidth/2;
		var clienTop = e.pageY-conSmall.offsetTop-conChange.offsetHeight/2;
		clienLeft=clienLeft>5?clienLeft:5;
		clienTop=clienTop>5?clienTop:5;
		clienLeft=clienLeft<(conSmall.offsetWidth-conChange.offsetWidth-6)?clienLeft:(conSmall.offsetWidth-conChange.offsetWidth-6);
		clienTop = clienTop<(conSmall.offsetHeight-conChange.offsetHeight-6)?clienTop:(conSmall.offsetHeight-conChange.offsetHeight-6);
		conChange.style.top = clienTop+"px";
		conChange.style.left = clienLeft+"px";
		var a = conSmall.offsetWidth/conChange.offsetWidth;
		var b=conSmall.offsetHeight/conChange.offsetHeight;
		conBig.scrollLeft =clienLeft*a;
		conBig.scrollTop =clienTop*b;
	}
}
conSmall.onmouseleave = function(){
	conBig.style.display = "none";
	conChange.style.display = "none";
}

//加载推荐商品数据
var b={"message":"success","dat":{"impr":"//knicks.jd.com/log/server?t=rec_common_exp&v=type=rec.619120$src=rec$action=0$reqsig=6a020302543bf8ab32e4fad26ad2ecaa8f833dcc$enb=1$csku=2718810,3059256,3786840,6136247,1072238,4764260,6440987,1161131,1582013,4611704$st=0,0,0,0,0,0,0,0,0,0$sku=5273645$p=619120$pin=$uuid=-1$expid=100$mexpid=$gm=$rt=0,0,0,0,0,0,0,0,0,0$rid=8109504228942790600$ver=1$sig=1c50692d349b62c2dc18875617da4892145f5bcd","data":[{"spu":2718810,"jp":"99.0","img":"https://img13.360buyimg.com/jdcms/jfs/t26236/122/265974863/291404/84489602/5b8cd4bdNfe47e792.jpg","type":0,"bn":"美的（Midea）","yushouStatus":0,"renl":0,"yuShou":0,"subsku":[],"mp":"299.0","impr":"1","yuyueStatus":0,"skuDateType":12,"clk":"//knicks.jd.com/log/server?t=rec_common_clk&v=type=rec.619120$src=rec$action=1$reqsig=6a020302543bf8ab32e4fad26ad2ecaa8f833dcc$enb=1$sku=5273645$p=619120$pin=$uuid=-1$csku=2718810$index=0$st=0$adcli=$expid=100$mexpid=$im=$rid=8109504228942790600$ver=1$sig=7cc94891c6193ff7410ce33e9510b24a2e54e4f7","c3":760,"sku":2718810,"wt":"1.39","stk":33,"w":0.9167,"t":"美的（Midea）电水壶热水壶电热水壶304不锈钢1.7L容量 双层防烫烧水壶WHJ1705C","rt":"0","tips":[{"v":"0","t":9999}]},{"spu":3059256,"jp":"109.0","img":"https://img13.360buyimg.com/jdcms/jfs/t27490/303/167698755/93586/281f9320/5b87d500N62f23cdb.jpg","type":0,"bn":"苏泊尔（SUPOR）","yushouStatus":0,"renl":0,"yuShou":0,"subsku":[],"mp":"299.0","impr":"1","yuyueStatus":0,"skuDateType":12,"clk":"//knicks.jd.com/log/server?t=rec_common_clk&v=type=rec.619120$src=rec$action=1$reqsig=6a020302543bf8ab32e4fad26ad2ecaa8f833dcc$enb=1$sku=5273645$p=619120$pin=$uuid=-1$csku=3059256$index=1$st=0$adcli=$expid=100$mexpid=$im=$rid=8109504228942790600$ver=1$sig=fc0c71bdc3df50baf1975ff8045bee596f34db18","c3":760,"sku":3059256,"wt":"1.5","stk":33,"w":0.8461,"t":"苏泊尔（SUPOR）电水壶热水壶  1.7L全钢无缝双层防烫电热水壶 304不锈钢烧水壶  SWF17E20C","rt":"0","tips":[{"v":"0","t":9999}]},{"spu":3786840,"jp":"99.0","img":"https://img13.360buyimg.com/jdcms/jfs/t27700/75/275166438/168785/80f7e96f/5b8cd5edN8eb5f2d6.jpg","type":0,"bn":"美的（Midea）","yushouStatus":0,"renl":0,"yuShou":0,"subsku":[],"mp":"299.0","impr":"1","yuyueStatus":0,"skuDateType":12,"clk":"//knicks.jd.com/log/server?t=rec_common_clk&v=type=rec.619120$src=rec$action=1$reqsig=6a020302543bf8ab32e4fad26ad2ecaa8f833dcc$enb=1$sku=5273645$p=619120$pin=$uuid=-1$csku=3786840$index=2$st=0$adcli=$expid=100$mexpid=$im=$rid=8109504228942790600$ver=1$sig=25ecec639b2bfe0b07a354e9f08e057ff00c3d4f","c3":760,"sku":3786840,"wt":"1.43","stk":33,"w":0.7857,"t":"美的（Midea）电水壶热水壶电热水壶双层防烫304不锈钢1.7L容量 烧水壶WHJ1705b","rt":"0","tips":[{"v":"0","t":9999}]},{"spu":5273645,"jp":"119.0","img":"https://img13.360buyimg.com/jdcms/jfs/t25540/85/1237856596/204884/3e14bc7f/5b8cf3c5Na97aa50f.jpg","type":0,"bn":"美的（Midea）","yushouStatus":0,"renl":0,"yuShou":0,"subsku":[],"mp":"139.0","impr":"1","yuyueStatus":0,"skuDateType":12,"clk":"//knicks.jd.com/log/server?t=rec_common_clk&v=type=rec.619120$src=rec$action=1$reqsig=6a020302543bf8ab32e4fad26ad2ecaa8f833dcc$enb=1$sku=5273645$p=619120$pin=$uuid=-1$csku=6136247$index=3$st=0$adcli=$expid=100$mexpid=$im=$rid=8109504228942790600$ver=1$sig=8b1eecfa9735834488bffd12aa696d6b4a467eb3","c3":760,"sku":6136247,"wt":"1.36","stk":33,"w":0.7333,"t":"美的（Midea）电水壶热水壶电热水壶304不锈钢水壶双层防烫烧水壶MK-HJ1512（WHJ1512e）","rt":"0","tips":[{"v":"0","t":9999}]},{"spu":1072238,"jp":"109.0","img":"https://img13.360buyimg.com/jdcms/jfs/t26335/268/270993056/149137/987fea7/5b8cd420N5b543ffc.jpg","type":0,"bn":"美的（Midea）","yushouStatus":0,"renl":0,"yuShou":0,"subsku":[],"mp":"199.0","impr":"1","yuyueStatus":0,"skuDateType":12,"clk":"//knicks.jd.com/log/server?t=rec_common_clk&v=type=rec.619120$src=rec$action=1$reqsig=6a020302543bf8ab32e4fad26ad2ecaa8f833dcc$enb=1$sku=5273645$p=619120$pin=$uuid=-1$csku=1072238$index=4$st=0$adcli=$expid=100$mexpid=$im=$rid=8109504228942790600$ver=1$sig=f840c6980ad5ce6fc00f6cae3e9397b992fcf4c9","c3":760,"sku":1072238,"wt":"1.47","stk":33,"w":0.6875,"t":"美的（Midea）电水壶热水壶电热水壶304不锈钢1.7L容量 双层防烫全钢无缝烧水壶WH517E2b","rt":"0","tips":[{"v":"0","t":9999}]},{"spu":4764260,"jp":"159.0","img":"https://img13.360buyimg.com/jdcms/jfs/t24856/84/1074389635/155730/bcfa9b57/5b878d04N7a78fe09.jpg","type":0,"bn":"苏泊尔（SUPOR）","yushouStatus":0,"renl":0,"yuShou":0,"subsku":[],"mp":"299.0","impr":"1","yuyueStatus":0,"skuDateType":12,"clk":"//knicks.jd.com/log/server?t=rec_common_clk&v=type=rec.619120$src=rec$action=1$reqsig=6a020302543bf8ab32e4fad26ad2ecaa8f833dcc$enb=1$sku=5273645$p=619120$pin=$uuid=-1$csku=4764260$index=5$st=0$adcli=$expid=100$mexpid=$im=$rid=8109504228942790600$ver=1$sig=88eb8893e2137577f95d8471a022b744bd488068","c3":760,"sku":4764260,"wt":"1.4","stk":33,"w":0.6471,"t":"苏泊尔（SUPOR）电水壶热水壶 1.7L全钢无缝双层防烫电热水壶  304不锈钢烧水壶 SWF17E13B","rt":"0","tips":[{"v":"0","t":9999}]},{"spu":1035839,"jp":"129.0","img":"https://img13.360buyimg.com/jdcms/jfs/t25729/127/1196213876/224816/a8a9e69e/5b8cd2b4Nf1410ea0.jpg","type":0,"bn":"美的（Midea）","yushouStatus":0,"renl":0,"yuShou":0,"subsku":[],"mp":"219.0","impr":"1","yuyueStatus":0,"skuDateType":12,"clk":"//knicks.jd.com/log/server?t=rec_common_clk&v=type=rec.619120$src=rec$action=1$reqsig=6a020302543bf8ab32e4fad26ad2ecaa8f833dcc$enb=1$sku=5273645$p=619120$pin=$uuid=-1$csku=6440987$index=6$st=0$adcli=$expid=100$mexpid=$im=$rid=8109504228942790600$ver=1$sig=b2ba9c96007636c95ff7edd8874d1e7b17e57e31","c3":760,"sku":6440987,"wt":"1.48","stk":33,"w":0.6111,"t":"美的（Midea）电水壶热水壶电热水壶304不锈钢水壶双钢无缝烧水壶MK-H317E4","rt":"0","tips":[{"v":"0","t":9999}]},{"spu":1161131,"jp":"89.0","img":"https://img13.360buyimg.com/jdcms/jfs/t21493/282/2548587469/236256/d70e7e51/5b8cd465Nefac1a4b.jpg","type":0,"bn":"美的（Midea）","yushouStatus":0,"renl":0,"yuShou":0,"subsku":[],"mp":"199.0","impr":"1","yuyueStatus":0,"skuDateType":12,"clk":"//knicks.jd.com/log/server?t=rec_common_clk&v=type=rec.619120$src=rec$action=1$reqsig=6a020302543bf8ab32e4fad26ad2ecaa8f833dcc$enb=1$sku=5273645$p=619120$pin=$uuid=-1$csku=1161131$index=7$st=0$adcli=$expid=100$mexpid=$im=$rid=8109504228942790600$ver=1$sig=e12eacb35790be589aa43e9e00607d4e455681b5","c3":760,"sku":1161131,"wt":"1.465","stk":33,"w":0.5789,"t":"美的（Midea）电水壶热水壶电热水壶304不锈钢水壶双层防烫全钢无缝烧水壶WH415E2g","rt":"0","tips":[{"v":"0","t":9999}]},{"spu":2765619,"jp":"59.0","img":"https://img13.360buyimg.com/jdcms/jfs/t21637/314/296155210/102851/b3da51f/5b08bf39N98251b07.jpg","type":0,"bn":"志高（CHIGO）","yushouStatus":0,"renl":0,"yuShou":0,"subsku":[],"mp":"99.0","impr":"1","yuyueStatus":0,"skuDateType":12,"clk":"//knicks.jd.com/log/server?t=rec_common_clk&v=type=rec.619120$src=rec$action=1$reqsig=6a020302543bf8ab32e4fad26ad2ecaa8f833dcc$enb=1$sku=5273645$p=619120$pin=$uuid=-1$csku=1582013$index=8$st=0$adcli=$expid=100$mexpid=$im=$rid=8109504228942790600$ver=1$sig=7c7d170fcc4906d604a7c20bf1cd83bc73e546ab","c3":760,"sku":1582013,"wt":"1.2","stk":33,"w":0.55,"t":"志高（CHIGO）电热水壶 304不锈钢 双层防烫烧水壶 ZD18A-708G8 1.8L电水壶 紫色","rt":"0","tips":[{"v":"0","t":9999}]},{"spu":1081982,"jp":"89.0","img":"https://img13.360buyimg.com/jdcms/jfs/t21046/131/400176093/92162/c9f02c09/5b0cc732N08b5b17e.jpg","type":0,"bn":"九阳（Joyoung）","yushouStatus":0,"renl":0,"yuShou":0,"subsku":[],"mp":"159.0","impr":"1","yuyueStatus":0,"skuDateType":12,"clk":"//knicks.jd.com/log/server?t=rec_common_clk&v=type=rec.619120$src=rec$action=1$reqsig=6a020302543bf8ab32e4fad26ad2ecaa8f833dcc$enb=1$sku=5273645$p=619120$pin=$uuid=-1$csku=4611704$index=9$st=0$adcli=$expid=100$mexpid=$im=$rid=8109504228942790600$ver=1$sig=a0346fc0befaf8cc55ec585390f82a5220aefdd0","c3":760,"sku":4611704,"wt":"1.24","stk":33,"w":0.5238,"t":"九阳（Joyoung）电水壶 热水壶 1.7L一体全钢 电热水壶 烧水壶 进口品牌温控器K17-S66","rt":"0","tips":[{"v":"0","t":9999}]}]},"code":0}
console.log(b);
var introStr="";
$.each(b.dat.data, function(index,ele) {
	introStr+='<div class="left_con">'
						+'<img src="'+ele.img+'"/>'
						+'<p class="intro_text">'+ele.bn+'</p>'
						+'<p class="intro_price">'+ele.jp+'</p>'
					+'</div>'

});
$(".int_left").html(introStr);

