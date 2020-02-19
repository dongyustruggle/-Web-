function share(i) {
	if (i == 1) {
		$.cookie('user', $("#telephone").val(), {
			expires: 1,
			path: '/'
		});
		$.ajax({
			type: "post",
			async: false,
			data: 'name=' + $.cookie('user'),
			url: "http://localhost:8081/getname.php",
			success: function(result) {
				alert("你好, " + result + " 欢迎登录");
			},
			error: function(resut){
				alert("error");
			}
		})
	}
	if (i == 2) {
		$("#number").val($.cookie('user'));
	}
}
