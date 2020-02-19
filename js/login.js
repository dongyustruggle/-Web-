var e = 1;
function login() {
	if ($.trim($('#telephone').val()).length == 0) {
		$('#telephoneError').html('手机号码没有输入');
		$('#telephone').focus();
		return false;
	}else if($.trim($('#password').val()).length == 0) {
		$('#passwordError').html('密码没有输入');
		$('#password').focus();
		return false;
	}else{
		exist();
		if (e == 0)
			return false;
		else
			check();
	}
}

function exist() {
	$.ajax({
		type: "post",
		async: false,
		data: $("#subform").serialize(),
		url: "http://localhost:8081/boat_exist.php",
		success: function(result) {
			if (0 == result) {
				alert("用户不存在");
				e = 0;
			}
		}
	});
}

function check() {
	$.ajax({
		type: "post",
		async: false,
		data: $("#subform").serialize(),
		url: "http://localhost:8081/boat_login.php",
		success: function(result) {
			if (0 == result) {
				alert("密码错误");
			} else {
				share(1);
				jump();
				window.close();
			}
		}
	});

}

function jump() {
	$.ajax({
		type: "post",
		async: false,
		data: $("#subform").serialize(),
		url: "http://localhost:8081/boat_jump.php",
		success: function(result) {
					if(1 == result){
						window.open('jingli_main.html');
					}
					else if(2 == result){
						window.open('zhuguan_main.html');
					}
					else if(3 == result){
						window.open('buzhang_main.html');
					}
					else if(4 == result){
						window.open('zuzhang_main.html');
					}
					else if(5 == result){
						window.open('yuangong_main.html');
					}
				}
	});

}
