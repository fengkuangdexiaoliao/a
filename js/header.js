//右边联系栏
$(function(){
	//登录与注册链接
	if (localStorage.login) {
		console.log(localStorage.login);
		$(".register").html("用户名："+JSON.parse(localStorage.login).name);
		$(".enter").html("退出登录");
		$(".enter").click(function(){
			localStorage.removeItem("login");
			window.location.href="login.html";
		})
	} else{
		$(".register").click(function(){
			window.location.href="register.html";
		})
		$(".enter").click(function(){
			window.location.href="login.html";
		})
	}

	
	
	
	
	var relation = document.getElementById("relation");
	console.log(relation);
	var reLis = relation.getElementsByTagName("li");
	var reCon = relation.getElementsByClassName("re_con");

	for (var i=0;i<reLis.length;i++) {
		reLis[i].ind=i;
		reLis[i].onmouseenter = function(){
			this.style.backgroundColor = "#CC0000";
			if (this.ind==4) {
				reCon[this.ind].style.left = "-140px";
			}else{
				reCon[this.ind].style.left = "-63px";
			
			}
		}
		reLis[i].onmouseleave = function(){
			this.style.backgroundColor = "#444444";
			reCon[this.ind].style.left = "65px";
		}
	}
	//购物车信息获取
	function getCar(){
		var tool=new Tools();
		var carStr=tool.getcookie("user");
		if (carStr==undefined) {
			$(".re_car i span").html("0")
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
	
	getCar();
	//进入购物车
	$(".header_bottom #head_car").click(function(){
		window.location.href="car.html";
	})
	
	
	
	//回到首页
	$(".header_bottom_left").click(function(){

		window.location.href="main.html";
	})
	
	
	
	
	
	//打开购物栏
	
	$(".re_car").click(function(){
		
			$("#relation").css({"right":"400px"})
			$("#relation_car").css({"display":"block"})
			
			if (localStorage.login) {
					var tool=new Tools();
					var cook=$.parseJSON(tool.getcookie("user"));
					var str="";
			
					console.log(cook);
			
					$.each(cook, function(index,ele) {
							str+='<div class="relation_car_lis">'
										+'<img src="'+ele.img+'"/>'
										+'<div class="relation_car_con">'
											+'<p>价格：'+ele.price+'</p>'
											+'<p>数量'+ele.num+'</p>'
										+'</div>'
										+'<div class="del">'
											+'删除'
										+'</div>'
									+'</div>'
					});
							
					$(".relation_car_top").html(str);
					
					$(".del").click(function(){
						var ind=$(this).index(".del")
						cook.splice(ind,1)
						$(".relation_car_lis").eq(ind).remove();
						$(".re_car i span").html(cook.length);
						$(".header_bottom #head_car span").html(cook.length);
						var str=JSON.stringify(cook);
						cookieOject.setcook({"name":"user","value":str});
					})
			} else{
				$(".relation_car_top").html("请登录账号");
				$("#go_in").html("马上登录")
				$(".relation_car_top").css({"color":"red","font-size":"30px","text-align":"center",width:"100%"})
			}
			
	})
			
	$("#relation").mouseleave(function(){
		$("#relation").css({"right":"0px"})
	})
			
			
			
//		} else{
//			
//		}
//		carNum++;
	
	//购物车链接
	$("#go_in").click(function(){
		if (localStorage.login==undefined) {
			window.location.href="login.html";
		} else{
			
			window.location.href="car.html";
		}
	})
	
	$("#back").click(function(){
		  $("html,body").animate({scrollTop:0}, 500);
	})
	
	
})