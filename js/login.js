$(function(){
	
	$("#submit").click(function(){
		var Arr=JSON.parse(localStorage.user);
		var nameVal=$("#name").val();
		var keyVal = $("#keyword").val();
		var codeValue=$(".code_value").html();
		var code=$("#code").val();
		var flag=true;
		console.log(Arr)
		
		if (nameVal=="") {
			alert("请输入用户名")
			return;
		} else if(keyVal==""){
			alert("请输入密码")
			return;
		} else if(code==""){
			alert("请输入验证码")
			return;
		}else if(code!=codeValue){
			alert("验证码错误")
			return;
		}else{
			$.each(Arr, function(index,ele) {
				if (ele.name==nameVal&&ele.pass==keyVal) {
					alert("登录成功");
					flag=false;

					localStorage.login=JSON.stringify(ele);
					window.location.href='main.html'
				}
			});
			
		}
		
		
		
		
		
		
		if (flag) {
			alert("用户不存在或密码错误")
			
		}
		
	})
	
	
	$(".code_value").click(function(){
		var code="";
		 var selectChar = new Array(0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f','g','h','i','j','k',
  		'l','m','n','o','p','q','r','s','t','u','v','w','x','y','z');
  		
  		for (var i=0;i<4;i++) {
  			var charIndex =Math.floor(Math.random()*36);
 			code +=selectChar[charIndex]; 
  		}
  		$(this).html(code);
	})
	
	
})