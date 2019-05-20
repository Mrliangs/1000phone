$(document).ready(function() {
	//1.弹窗 点击隐藏。
	$('#tanc2').on('click', function() {
		$('#tanc').css('display', 'none');
		$('#lll').css('display', 'none');
	});

	//=======================================图形验证码
	var nums = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R',
		'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x',
		'y', 'z'
	];

	drawCode();
	// 绘制验证码
	function drawCode() {
		var canvas = document.getElementById("verifyCanvas"); //获取HTML端画布
		console.log(canvas);
		var context = canvas.getContext("2d"); //获取画布2D上下文
		context.fillStyle = "cornflowerblue"; //画布填充色
		context.fillRect(0, 0, canvas.width, canvas.height); //清空画布
		context.fillStyle = "white"; //设置字体颜色
		context.font = "25px Arial"; //设置字体
		var rand = new Array();
		var x = new Array();
		var y = new Array();
		aaa = "";
		for(var i = 0; i < 5; i++) {
			rand[i] = nums[Math.floor(Math.random() * nums.length)];
			x[i] = i * 16 + 10;
			y[i] = Math.random() * 20 + 20;
			context.fillText(rand[i], x[i], y[i]);
			aaa += rand[i];
		};

		// return aaa;
		// console.log($("#verifyCanvas").text());
		//画3条随机线
		for(var i = 0; i < 3; i++) {
			drawline(canvas, context);
		};

		// 画30个随机点
		for(var i = 0; i < 30; i++) {
			drawDot(canvas, context);
		};
		convertCanvasToImage(canvas);
	};

	// 随机线
	function drawline(canvas, context) {
		context.moveTo(Math.floor(Math.random() * canvas.width), Math.floor(Math.random() * canvas.height)); //随机线的起点x坐标是画布x坐标0位置，y坐标是画布高度的随机数
		context.lineTo(Math.floor(Math.random() * canvas.width), Math.floor(Math.random() * canvas.height)); //随机线的终点x坐标是画布宽度，y坐标是画布高度的随机数
		context.lineWidth = 0.5; //随机线宽
		context.strokeStyle = 'rgba(50,50,50,0.3)'; //随机线描边属性
		context.stroke(); //描边，即起点描到终点
	};
	// 随机点(所谓画点其实就是画1px像素的线，方法不再赘述)
	function drawDot(canvas, context) {
		var px = Math.floor(Math.random() * canvas.width);
		var py = Math.floor(Math.random() * canvas.height);
		context.moveTo(px, py);
		context.lineTo(px + 1, py + 1);
		context.lineWidth = 0.2;
		context.stroke();

	};
	// 绘制图片
	function convertCanvasToImage(canvas) {
		document.getElementById("verifyCanvas").style.display = "none";
		var image = document.getElementById("code_img");
		image.src = canvas.toDataURL("image/png");
		return image;
	};

	// 点击图片刷新
	$('#code_img').click(function() {
		// 1
		$('#verifyCanvas').remove();
		// 2
		$('#verify').after('<canvas width="100" height="40" id="verifyCanvas"></canvas>');
		drawCode();
		console.log(aaa);

	});

	//=====================================================================================  
	
	var focus_text = $('.focus_text');
	var mobiles = ''
	var isok = false;
	//用户注册
	var mobile = $('#mobile');
	mobile.blur(function() {
		mobiles = $.trim(mobile.val());
		if(mobiles) {
			if(checkReg.tel(mobiles)) {
				$.ajax({
					type: "post",
					url: "../api/api/checkuser.php",
					async: true,
					data: {
						'tel': mobiles
					},
					success: function(str) {
						//						console.log(str);
						if(str == 'yes') {
							focus_text.eq(0).html('该用户名可以注册');
							focus_text.eq(0).css('color', '#58bc58');
							focus_text.eq(0).css('display', 'block');
							isok = true;
						} else {
							focus_text.eq(0).html('该用户名太受欢迎啦');
							focus_text.eq(0).css('color', 'red');
							focus_text.eq(0).css('display', 'block');
							isok = false;
						};
					}
				});
			} else {
				focus_text.eq(0).html('格式不对，请重新输入');
				focus_text.eq(0).css('color', 'red');
				focus_text.eq(0).css('display', 'block')
			}
		} else {
			focus_text.eq(0).css('display', 'block');
		};

	});
	//图型验证码
	var $verify=$('#verify');
	$verify.blur(function() {
		 $val = $.trim($verify.val());
		if($val) {
			// var newa=
			if($val == aaa) {
				focus_text.eq(1).html("验证通过");
				focus_text.eq(1).css('color', '#58BC58');
				focus_text.eq(1).css('display', 'block');
				isok = true;
			} else {
				focus_text.eq(1).html('验证不通过，请重新输入');
				focus_text.eq(1).css('color', 'red');
				focus_text.eq(1).css('display', 'block');
				isok = false;
			};
		} else {
			focus_text.eq(1).css('display', 'block');
		};

	});
	//密码验证
	var passwords = $('#password');
	passwords.blur(function() {
		passwordss = $.trim(passwords.val());
		if(passwordss) {
			if(checkReg.psweasy(passwordss)) {
				focus_text.eq(2).html('格式正确');
				focus_text.eq(2).css('color', '#58BC58');
				focus_text.eq(2).css('display', 'block');
			} else {
				focus_text.eq(2).html('格式不对，请重新输入');
				focus_text.eq(2).css('color', 'red');
				focus_text.eq(2).css('display', 'block');
			};
		} else {
			focus_text.eq(2).css('display', 'block');
		};

	});
	//再次输入密码
	var password2 = $('#password2');
	password2.blur(function() {
		passwords2 = $.trim(password2.val());
		if(passwords2) {
			if(checkReg.pwwagain(passwordss, passwords2)) {
				focus_text.eq(3).html('输入正确');
				focus_text.eq(3).css('color', 'greenyellow');
				focus_text.eq(3).css('display', 'block');
			} else {
				focus_text.eq(3).html('请再输入密码');
				focus_text.eq(3).css('color', 'red');
				focus_text.eq(3).css('display', 'block');
			};
		} else {
			focus_text.eq(3).css('display', 'block');
		};

	});
	//注册
	var mobileCommit = $('#mobileCommit');
	mobileCommit.click(function() {
		var mobiles = $.trim(mobile.val());
		var passwords2 = $.trim(password2.val());
		var verify = $.trim($verify.val());
		if(mobiles && passwords2 && $val) {
			if(isok) {
				$.ajax({
					type: "post",
					url: "../api/api/reg.php",
					async: true,
					data: {
						'tel': mobiles,
						'psw': passwords2
					},
					success: function(str) {
						console.log(str);
					}
				});
				alert('你已经注册成功！！！！');
				window.open('login.html?');
			} else {
				console.log('该用户已存在');
			};
		} else {
			alert('请完善内容！！');
		};
	});
});