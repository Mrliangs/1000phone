window.onload = function() {
	//1.创建节点
	var username = getid('use');
	var psw = getid('psw');
	var btn = getid('btn');
	var btd = getid('btd');
	var name = '';

	//点击登录
	btn.onclick = function() {
		var usernames = username.value.trim();
		var psws = psw.value.trim();

		if(usernames && psws) {
			//判断非空
			var url = '../api/login.php';
			var data = 'username=' + usernames + '&psw=' + psws;
			ajax('post', url, data, function(str) {
				if(str == 'no') {
					alert('登录成功');
					window.open('../html/首页.html?');
				} else {
					alert('登录失败，请重新注册');
				}

			});
		}else {
			alert('请输入登录信息');
		}
	}
	btd.onclick = function() {
		window.open('../zhuce.html?');
	}
}