$(function(){
	var flag=["false","false","false"];
	var nameVal;
		$("#in_name").blur(function(){
				nameVal = $(this).val();
				var re=/^\w{6,20}$/g;
				var rez=re.test(nameVal);
				console.log(rez)
				if (!rez) {
					$("#name span:hidden").show();
					flag[0]=false;
				}else{
					$("#name span").hide();
					flag[0]=true;
				}
			})
			var reval;
	    $("#key .keyword").blur(function(){
	    		reval = $(this).val();
				var re=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\d]{6,20}$/g;;
				var rez=re.test(reval);
				if (!rez) {
					$("#key span:hidden").show();
					flag[1]=false;
				}else{
					$("#key span").hide();
					flag[1]=true;
				}
	    })
		var val;
		 $("#again_key .keyword").blur(function(){
	    		val = $(this).val();
				var reval=$("#key .keyword").val();
				if (val==reval) {
					$("#again_key span").hide();
					flag[2]=true;
				}else{
					
					$("#again_key span:hidden").show();
					flag[2]=false;
				}
	    })
		 
		 $("#but").click(function(){
		 	if (flag[0]==true&&flag[1]==true&&flag[2]==true) {
		 		alert("注册成功");
		 		if (localStorage.user==undefined) {
		 			var obj=[{name:nameVal,pass:reval}]
		 			var str=JSON.stringify(obj);
					localStorage.user=str;
			 		
		 			
		 		} else{
		 			var obj={name:nameVal,pass:reval};
		 			var Arr=JSON.parse(localStorage.user);
		 			Arr.push(obj);
		 			var str=JSON.stringify(Arr);
		 			localStorage.user=str;
		 		}
		 		window.location.href='login.html'
		 	}else{
		 		alert("注册失败");
		 		return false;
		 	}
		 })
	
})
