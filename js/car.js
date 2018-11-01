$(function(){
	//头部和脚部的加载
	$("#header").load("header.html","dd",function(){
	
	})
	$("#footer").load("footer2.html","dd",function(){
	
	})
	var tool=new Tools();
	var cookie=JSON.parse(tool.getcookie("user"));
	$.ajax({
		type:"get",
		url:"produce.json",
		async:true,
		dataType:"json",
		success:function(res){
			//购物车内容加载
			var str="";
			$.each(cookie, function(ind,elet) {
				var pid=elet.pid;
				var amo=elet.num;
				var cookPrice=elet.price;
				console.log(elet)
				$.each(res.result.data, function(index,ele) {
					if (ele.spu==pid) {
						
						str+='<div class="car_wrap">'
						+'<div class="store">'
							+'店铺名称：<a href=""><span>'+ele.bn+'<i><img src="img/34fkulyk.bmp"/></i></span></a>'
						+'</div>'
						+'<div class="car_con" pid='+pid+'>'
							+'<input type="checkbox" class="in"/>'
							+'<img src="'+ele.img+'"/>'
							+'<span class="intruduce">'+ele.t+'</span>'
							+'<div class="car_price" >'
								+'￥'+cookPrice
							+'</div>'
							+'<input type="number" class="num" style="width: 60px" value="'+amo+'"/>'
							+'<div class="total_price">'
								+'￥'+cookPrice*amo
							+'</div>'
							+'<div class="tool">'
								+'<span>收藏</span>'
								+'<span>分享</span>'
								+'<span class="de">删除</span>'
							+'</div>'
						+'</div>'
						+'</div>'
					}
				});
			});
			$(".car_produce").html(str);
			
//总价改变的分装方法			
			function priChange(){
				var totalNum=0;
				$(".car_produce :checkbox").each(function(){
					var ind=$(this).index(".car_produce :checkbox")
					if ($(this).prop("checked")) {
						totalNum+=cookie[ind].price*cookie[ind].num;
					}
				})
				$(".allprice").html(totalNum);
				var str=JSON.stringify(cookie);
				cookieOject.setcook({"name":"user","value":str});
			}
			
//			购物车数据改变
			$(".num").change(function(){
				var that=cookie[$(this).index(".num")];
				that.num=$(this).val();
				$(".total_price").eq($(this).index(".num")).html("￥"+that.num*that.price);
				priChange();
			})
			
			//总价改变
			$(".all_in").change(function(ele){
				if ($(this).prop("checked")) {
					$(":checkbox").prop("checked",true);
				}else{
					$(":checkbox").prop("checked",false);
				}
				priChange();
			})

			$(".in").change(function(){
				priChange();
			})
			
			//购买键加载
			$(".buy").click(function(){
				var Arr=[];
				$.each($(".in"), function(index,ele) {
					if (ele.checked) {
						
						Arr.push(cookie[$(this).index(".in")]);
					}
				});
				localStorage.buy=JSON.stringify(Arr);
				console.log(localStorage.buy)
				window.location.href="buy.html";
			})
			
			
			
			//删除键的效果
			function de(){
				$(".car_produce :checkbox").each(function(){
					if ($(this).prop("checked")) {
						var ind=$(this).index(".car_produce :checkbox")
						cookie.splice(ind,1)
						$(".car_wrap").eq(ind).remove();
						$(".re_car i span").html(cookie.length);
						$(".header_bottom #head_car span").html(cookie.length);
						priChange();
					}
				})
			}
			$(".dele").click(function(){
				de();
			})
			
			$(".de").click(function(){
				var ind=$(this).index(".de")
				cookie.splice(ind,1)
				$(".car_wrap").eq(ind).remove();
				$(".re_car i span").html(cookie.length);
				$(".header_bottom #head_car span").html(cookie.length);
				priChange();
			})
			
		}
	});
})
