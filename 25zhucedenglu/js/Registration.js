window.onload = function() {
	//1.节点
	var username = getid('use');
	var psw = getid('psw');
	var inf = getid('inf');
	var ind = getid('ind');
	var btn = getid('btn');
	var pwwagain = getid('pwwagain');
	var ins = getid('ins');
	var btnn=getid('btnn');
	var name='';
	var wasOk = false;
	//2.user失去焦点
	username.onblur = function() {
		 name = username.value.trim();
		if(name) { //非空
			if(checkReg.name(name)) {
				//正则判断
				var url = 'api/checkname.php';
				var data = 'username=' + name;
				ajax('post', url, data, function(str) {
					console.log(str)
					if(str == 'yes') {
						inf.innerHTML = '该用户名可以注册';
						inf.style.color = '#58BC58';
						wasOk = true;
					} else {
						inf.innerHTML = '该用户名太受欢迎啦';
						inf.style.color = "red";
						wasOk = false;
					}
				});

			} else {
				inf.innerHTML = '正则不通过';
				inf.style.color = 'red';
			}
		} else {
			alert('请输入用户名！！')
		}
	}
	psw.onblur = function() {
		 psws = psw.value.trim();
		if(psws) {
			//非空
			if(checkReg.psweasy(psws)) {
				//正则判断
				ind.innerHTML = '格式正确';
				ind.style.color = 'green';
			} else {
				ind.innerHTML = '请重新输入密码！'
				ind.style.color = 'red';
			}
		} else {
			alert('请输入密码！！')
		}
	}
	pwwagain.onblur = function() {
		 pwwagains = pwwagain.value.trim();
		if(pwwagains) {
			//不为空，做正则判断
			if(checkReg.pwwagain(psws,pwwagains)) {
				//验证通过
				var url = 'api/checkname.php';
				var data = 'psw=' + pwwagains;
				ajax('post', url, data, function(str) {
					console.log(str);
				});
				ins.innerHTML = '输入正确';
				ins.style.color = 'greenyellow';
			} else {
				//验证不通过
				ins.innerHTML = '请再输入密码';
				ins.style.color = 'red';
			}

		} else {
			alert('确认密码不能为空') ;
		}
	}
	btn.onclick = function() {
		var name = username.value.trim();
		var passwords = pwwagain.value.trim();
		//
		if(name && passwords) {
			if(wasOk) {
				var url = 'api/indexs.php';
				var data = 'username=' + name + '&psw=' + passwords;
				ajax('post', url, data, function(str) {
					console.log(str);
					//wasOk=false;
				});
				//
				alert('你已经注册成功！！！！');
				window.open('html/login.html?')
			} else {
				
				console.log('该用户已存在');
			}
		} else {
			alert('请完善内容！！');
		}

	}
	btnn.onclick=function(){
		window.open('html/login.html')
	}
}