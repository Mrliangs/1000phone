$(function() {
	//验证图形
	var bb=0;
	var isok = false;
	$('#con').on('mousedown', function(e) {
		var disX = e.offsetX;

		$(document).on('mousemove', function(e) {
			var left = e.clientX - disX - $('#box').offset().left;

			var aa = $('#box')[0].offsetWidth - $('#con')[0].offsetWidth;
						console.log(aa);
//			bb=aa;
			if(left <= 5) {
				left = 0
			} else if(left >= aa) {
				left = aa;
			}
			$('#con').css('left', left + 'px');
			$('.flex_box').css('width', left + 'px');

			if(left == aa) {
				$('.iconfont').text('');
				$('#zyam').css('display', 'none');
//				$('.iconfont').attr('class', 'icon1')
				$('#acc').attr('class', 'pass');
				$('#con').html('✔').css('color','green');
				$('.flex_box').html('验证成功');
				bb=aa;
				console.log(bb);
				isok = true;
				$(this).unbind("mousemove");
				$('#con').unbind('mousedown');
			} else {
				$('.flex_box').html('');
			};
			e.preventDefault();
		});
		$(document).on('mouseup', function() {
			if(isok) {
				return;
			} else {
				$('#con').css('left', 0);
				$('.flex_box').css('width', 0);
			}
			$(this).unbind("mousemove");
			isok = true;
		});
	});

	$('#gengd').on('click', function() {
		if($('i').hasClass('')) {
			$('i').addClass('jiant');
			$('.icon-p').slideDown(400);
		} else {
			$('i').removeClass('jiant');
			$('.icon-p').slideUp(400);
		};

	});
	//用户账号验证
//	var mobile=$('#mobile');
//	var passwords=$('#password');
	
	//用户点击登录
	$('#mobileCommit').on('click', function() {
		var usernames = $('#mobile').val().trim();
		var psws = $('#password').val().trim();
		if(usernames && psws) {
			$.ajax({
				type: "post",
				url: "../api/api/login.php",
				data: {
					'user': usernames,
					'psw': psws
				},
				success: function(str) {
					console.log(str);
					if(str == 'no') {
						setCookie('name', usernames);						
						if(bb==262){
							window.open('../index.html');
						}else{
							alert('请完成拖拽');
						};
						
					} else {
						alert('登录失败，请重新注册');
					}

				}
			});
		} else {
			alert('请输入登录信息');
		};

	});

});