window.onload = function() {

	/*
		需求：
用户名验证；
注册
登陆
退出
发帖
顶贴
踩贴
点击加载更多
	  
	 */

	//获取节点
	var username1 = getid('username1');
	var verifyUserNameMsg = getid('verifyUserNameMsg');
	var btnReg = getid('btnReg');
	var password1 = getid('password1');
	var reg = getid('reg'); //注册面板
	var login = getid('login'); //登陆面板
	var user = getid('user'); //退出面板
	var userinfo = getid('userinfo'); //用户名存放
	var logout = getid('logout'); //退出按钮
	var btnPost = getid('btnPost'); //提交留言按钮
	var showMore = getid('showMore'); //显示更多
	/*
	验证用户名
	get
		guestbook/index.php
			m : index
			a : verifyUserName
			username : 要验证的用户名
		返回
			{
				code : 返回的信息代码 0 = 没有错误，1 = 有错误
				message : 返回的信息具体返回信息
			}
	*/

	username1.onblur = function() {
		//先做非空再做正则，最后才是ajax
		var url = 'api/guestbook/index.php';
		var data = 'm=index&a=verifyUserName&username=' + username1.value;
		ajax('get', url, data, function(str) {
			console.log(str);
			var arr = JSON.parse(str); //转成对象
			if(arr.code) {
				//1代表已存在，不能注册
				verifyUserNameMsg.style.color = 'red';
			} else {
				//0代表不存在，可以注册
				verifyUserNameMsg.style.color = '#58bc58';
			}

			verifyUserNameMsg.innerHTML = arr.message;
		});
	}

	//2.注册
	/*
	用户注册
	get/post
		guestbook/index.php
			m : index
			a : reg
			username : 要注册的用户名
			password : 注册的密码
		返回
			{
				code : 返回的信息代码 0 = 没有错误，1 = 有错误
				message : 返回的信息 具体返回信息
			}
	*/

	btnReg.onclick = function() {
		var url = 'api/guestbook/index.php';
		var data = 'm=index&a=reg&username=' + username1.value + '&password=' + password1.value;
		ajax('post', url, data, function(str) {
			console.log(str);
			var arr = JSON.parse(str); //转成对象
			//			if(arr.code) {
			//				//1 注册不成功
			//				
			//			}else{
			//				//0:注册成功
			//				
			//			}
			alert(arr.message);
			username1.value = '';
			password1.value = '';
		});
	}

	/*
	用户登陆
	get/post
		guestbook/index.php
			m : index
			a : login
			username : 要登陆的用户名
			password : 登陆的密码
		返回
			{
				code : 返回的信息代码 0 = 没有错误，1 = 有错误
				message : 返回的信息 具体返回信息
			}
	*/
	var btnLogin = getid('btnLogin');

	btnLogin.onclick = function() {
		var url = 'api/guestbook/index.php';
		var data = 'm=index&a=login&username=' + username2.value + '&password=' + password2.value;
		ajax('post', url, data, function(str) {
			//			console.log(str);
			var arr = JSON.parse(str);
			if(arr.code) {
				//错误：登陆失败
			} else {
				//登陆成功
				update();
			}
			alert(arr.message);
		});
	}

	//刷新面板状态：根据登陆的状态进行刷新，从cookie读取登陆的状态

	//如果在cookie能拿到用户名证明：该用户已登录(隐藏注册和登陆面板，显示退出面板)
	update();

	function update() { //根据cookie显示面板状态

		var uid = getCookie('uid');
		var name = getCookie('username');
//		var psw = getCookie('password1');
		if(uid) { //0是假，非0数字是真
			//已登录
			reg.style.display = 'none';
			login.style.display = 'none';
			user.style.display = 'block';
			userinfo.innerHTML = name;
		} else {
			//未登录
			reg.style.display = 'block';
			login.style.display = 'block';
			user.style.display = 'none';
			userinfo.innerHTML = '';
		}
	}

	/*
	用户退出
	get/post
		guestbook/index.php
			m : index
			a : logout
		返回
			{
				code : 返回的信息代码 0 = 没有错误，1 = 有错误
				message : 返回的信息 具体返回信息
			}
	*/

	logout.onclick = function() {
		var url = 'api/guestbook/index.php';
		var data = 'm=index&a=logout';
		ajax('post', url, data, function(str) {
			var arr = JSON.parse(str);
			alert(arr.message);
			update();
		});
	}

	//提交内容：btnPost
	/*
	留言
	post
		guestbook/index.php
			m : index
			a : send
			content : 留言内容
		返回
			{
				code : 返回的信息代码 0 = 没有错误，1 = 有错误
				data : 返回成功的留言的详细信息
					{
						cid : 留言id	
						content : 留言内容 
						uid : 留言人的id
						username : 留言人的名称
						dateline : 留言的时间戳(秒)
						support : 当前这条留言的顶的数量
						oppose : 当前这条留言的踩的数量
					}
				message : 返回的信息 具体返回信息
			}
	*/

	var list = getid('list');
	var content = getid('content');
	btnPost.onclick = function() {
		var url = 'api/guestbook/index.php';
		var data = 'm=index&a=send&content=' + content.value;

		ajax('post', url, data, function(str) {
			var data = JSON.parse(str).data;
//			console.log(data);
			creat(data);
			content.value = '';
			content.focus();
		});
	}

	function creat(data) {
		
		//将秒数转换为   xx年xx月xx日xx时xx分xx秒
		var time = setTimes(data.dateline * 1000);
		console.log(time);
		var html = `<dl data-id="${data.cid}">
						<dt>
							<strong>${data.username}</strong> 说 :
						</dt>
						<dd>${data.content}    发布时间：${time.years}年${time.mons}月${time.days}日${time.hours}时${time.mins}分${time.secs}秒</dd>
						<dd class="t">
							<a href="javascript:;" class="support">顶(<span>${data.support}</span>)</a>
							 | 
							<a href="javascript:;" class="oppose">踩(<span>${data.oppose}</span>)</a>
						</dd>
					</dl>`;

		list.innerHTML = html + list.innerHTML;
	}
	
	/*
		初始化留言列表
		get
			guestbook/index.php
				m : index
				a : getList
				page : 获取的留言的页码，默认为1
				n : 每页显示的条数，默认为10
			返回
				{
					code : 返回的信息代码 0 = 没有错误，1 = 有错误
					data : 返回成功的留言的详细信息
						{
							count : 总条数	
							pages : 页数 
							page : 当前页
							n : 每页显示条数
							list : [
									{
										cid : 留言id	
										content : 留言内容 
										uid : 留言人的id
										username : 留言人的名称
										dateline : 留言的时间戳(秒)
										support : 当前这条留言的顶的数量
										oppose : 当前这条留言的踩的数量
									},
									{
										cid : 留言id	
										content : 留言内容 
										uid : 留言人的id
										username : 留言人的名称
										dateline : 留言的时间戳(秒)
										support : 当前这条留言的顶的数量
										oppose : 当前这条留言的踩的数量
									}
							]
							
						}
					message : 返回的信息 具体返回信息
				}
		*/
		
		var ipage = 1;
		function showList(){
			//初始化列表
			var url = 'api/guestbook/index.php';
			var data = 'm=index&a=getList&page=' + ipage +'&n=5';
			ajax('get', url, data, function(str){
				var arr = JSON.parse(str);
				console.log(arr);
				var list = arr.data.list;
				for(var i = 0; i < list.length; i++){
					creat(list[i]);
				}
				//判断是否应该显示:更多按钮
				if(arr.data.pages > 1){
					showMore.style.display= 'block';
				}
				//判断更多按钮什么时候隐藏，当点击加载到最后一页的时候隐藏
				if(arr.data.page == arr.data.pages){
					showMore.style.display = 'none';
				}
				
			});
			
		}
		showList();//显示更多；一开始是隐藏
		showMore.style.display = 'none';
		
		showMore.onclick = function(){
			//点击加载更多:点击一次加载多一页
			ipage++;
			showList();
		}
		//顶贴和踩贴

	/*
		顶帖
		post
			guestbook/index.php
				m : index
				a : doSupport
				cid : 对应帖子的id
			返回
				{
					code : 返回的信息代码 0 = 没有错误，1 = 有错误
					message : 返回的信息 具体返回信息
				}
		*/
	
	//利用事件委托给顶和踩绑定事件
	list.onclick = function(ev){
		//顶
		
		if(ev.target.className == 'support'){
			var id = ev.target.parentNode.parentNode.dataset.id;
			var url = 'api/guestbook/index.php';
			var data = 'm=index&a=doSupport&cid=' + id;
			ajax('post', url, data, function(str){
				var arr = JSON.parse(str);
			//	console.log(arr);
				alert(arr.message);
				var num = ev.target.children[0].innerHTML;
				num++;
				ev.target.children[0].innerHTML=num;
			});
		}
		
		//踩
		if(ev.target.className == 'oppose'){
			var id1 = ev.target.parentNode.parentNode.dataset.id;
			var url1 = 'api/guestbook/index.php';
			var data1 = 'm=index&a=doOppose&cid=' + id1;
			ajax('post', url1, data1, function(str){
				var arr = JSON.parse(str);
				alert(arr.message);
				var num = ev.target.children[0].innerHTML;
				console.log(num);
				num++;
				ev.target.children[0].innerHTML=num;
			});
		}
		
	}
}