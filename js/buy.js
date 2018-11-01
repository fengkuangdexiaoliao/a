//数据加载

$(function(){
	
	//头部和脚部的加载
	$("#header").load("header2.html","dd",function(){
	
	})
	$("#footer").load("footer2.html","dd",function(){
	
	})
	
	var Arr=JSON.parse(localStorage.buy);
	console.log(Arr);
	var str="";
	var nu=0;
	$.each(Arr, function(index,ele) {
		console.log(ele)
		str+='<div class="goods">'
					+'<div class="goods_con">'
						+'<div>'
							+'<p>配送方式</p>'
							+'<p>可配送方式：'
								+'<select name="">'
									+'<option value="">平邮[0.00元]</option>'
									+'<option value="">快递[0.00元]</option>'
									+'<option value="">EMS[0.00元]</option>'
								+'</select>'
							+'</p>'
							+'<p>买家附言</p>'
							+'<textarea name="" rows="" cols=""></textarea>'
						+'</div>'
						+'<div>'
							+'<p>店铺名称</p>'
							+'<ul>'
								+'<li><img src="'+ele.img+'"/></li>'
								+'<li>'+ele.t+'</li>'
							+'</ul>'
						+'</div>'
					+'</div>'
					+'<div><span>￥'+ele.price+'</span></div>'
					+'<div><span>×'+ele.num+'</span></div>'
					+'<div><span>￥'+ele.price*ele.num+'</span></div>'
				+'</div>'
				nu+=ele.price*ele.num;
				
	});
	
	$("#content").append(str);
	$(".total").html("￥"+nu)
	
	
	
})