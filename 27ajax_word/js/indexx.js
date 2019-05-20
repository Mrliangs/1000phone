$(function() {
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
	$('#username1').on('blur', function() {
		$.ajax({
			type: "get",
			url: "api/guestbook/index.php",
			async: true,
			data: {
				m: 'index',
				a: 'verifyUserName',
				username: $('#username1').val()
			},
			success: function(str) {
				//				console.log(str);
				var arr = JSON.parse(str);
				if(arr.code) {
					$('#verifyUserNameMsg').css('color', 'red');
				} else {
					$('#verifyUserNameMsg').css('color', '#58bc58');
				}
				$('#verifyUserNameMsg').html(arr.message);
			}
		});
	});
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

	$('#btnReg').click(function() {
		$.ajax({
			type: "post",
			url: "api/guestbook/index.php",
			async: true,
			data: {
				m: 'index',
				a: 'reg',
				username: $('#username1').val(),
				password: $('#password1').val()
			},
			success: function(str) {
				//				console.log(str);
				var arr = JSON.parse(str);
				alert(arr.message);
				$('#username1').val('');
				$('#password1').val('');

			}
			//			console.log($('#username1'),$('#password1'));
		});
	});

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
	$('#btnLogin').on('click', function() {
		$.ajax({
			type: "post",
			url: "api/guestbook/index.php",
			async: true,
			data: {
				m: 'index',
				a: 'login',
				username: $('#username2').val(),
				password: $('#password2').val()
			},
			success: function(str) {
				console.log(str);
				var arr = JSON.parse(str);
				if(arr.code) {
					//登录失败
				} else {
					//登录成功
					update();
				}
				alert(arr.message);
			}
		});
	});

	//刷新面板状态：根据登陆的状态进行刷新，从cookie读取登陆的状态

	//如果在cookie能拿到用户名证明：该用户已登录(隐藏注册和登陆面板，显示退出面板)
	update();

	function update() { //根据cookie显示面板状态
		var uid = getCookie('uid');
		var name = getCookie('username');

		if(uid) { //0是假，非0数字是真
			//已登录
			$('#reg').css('display', 'none');
			$('#login').css('display', 'none');
			$('#user').css('display', 'block');
			$('#userinfo').html(name);
		} else {
			//未登录
			$('#reg').css('display', 'block');
			$('#login').css('display', 'block');
			$('#user').css('display', 'none');
			$('#userinfo').html();
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

	$('#logout').on('click', function() {
		$.ajax({
			type: "post",
			url: "api/guestbook/index.php",
			async: true,
			data: {
				m: 'index',
				a: 'logout'
			},
			success: function(str) {
				//				console.log(str);
				var arr = JSON.parse(str);
				alert(arr.message);
				update();
			}
		});
	});

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

	$('#btnPost').on('click', function() {
		$.ajax({
			type: "post",
			url: "api/guestbook/index.php",
			async: true,
			data: {
				m: 'index',
				a: 'send',
				content: $('#content').val()
			},
			success: function(str) {
				//				console.log(str);
				var data = JSON.parse(str).data;
				creat(data);
				$('#content').val('');
				$('#content').focus();
			}
		});
	});

	function creat(data) {
		//将秒数转换为   xx年xx月xx日xx时xx分xx秒
		var time = setTimes(data.dateline * 1000);
		//		console.log(time);
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
		$('#list').html(html + $('#list').html());
		//		$('#list').append(html);

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

	function showList() {
		//初始化列表
		$.ajax({
			type: "get",
			url: "api/guestbook/index.php",
			async: true,
			data: {
				m: 'index',
				a: 'getList',
				page: ipage,
				n: 5
			},
			success: function(str) {
				var arr = JSON.parse(str);
				var list = arr.data.list;
				for(var i = 0; i < list.length; i++) {
					creat(list[i]);
				}
				//判断是否应该显示:更多按钮
				if(arr.data.pages > 1) {
					//					showMore.style.display= 'block';
					$('#showMore').css('display', 'block');
				}
				//判断更多按钮什么时候隐藏，当点击加载到最后一页的时候隐藏
				if(arr.data.page == arr.data.pages) {
					//					showMore.style.display = 'none';
					$('#showMore').css('display', 'none');
				}
			}
		});

	}
	showList(); //显示更多；一开始是隐藏
	$('#showMore').css('display', 'none');

	$('#showMore').on('click', function() {
		//点击加载更多:点击一次加载多一页
		ipage++;
		showList();

	});
	
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
	//顶
	$('#container').on('click','.support',function(){
		var id = $(this).parent().parent().attr("data-id");
		var num=$(this).find('span').html();
				num++;
				$(this).find('span').html(num);
		$.ajax({
			type:"post",
			url:"api/guestbook/index.php",
			async:true,
			data:{
				m : 'index',
				a : 'doSupport',
				cid: id
			},
			success:function(str){
				var arr=JSON.parse(str);
				alert(arr.message);	
			}
		});
	});
	
	//踩
	
	$('#container').on('click','.oppose',function(){
		var id = $(this).parent().parent().attr("data-id");
		var num=$(this).find('span').html();
				num++;
				$(this).find('span').html(num);
		$.ajax({
			type:"post",
			url:"api/guestbook/index.php",
			async:true,
			data:{
				m : 'index',
				a : 'doOppose',
				cid: id
			},
			success:function(str){
				var arr=JSON.parse(str);
				alert(arr.message);	
			}
		});
	});
	
	
});