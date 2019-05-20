$(function() {
	//鼠标经过显示我的聚美的二级菜单
	$('.item-ijumei').hover(function() {
		//		$('.item-ijumei').css({'background':'#ffff'});
		$('.j-nav').stop().slideToggle(30);
	});

	//鼠标经过显示更多的二级菜单
	$('.item-more').hover(function() {
		//		$('.item-ijumei').css({'background':'#ffff'});
		$('.jj-nav').stop().slideToggle(30);
	});

	//h-right的购物车按钮
	$('.jh-cart').hover(function() {
		$('.cart-icons').css('display', 'block');
		$('.cart-contents').css('display', 'block');
	}, function() {
		$('.cart-icons').css('display', 'none');
		$('.cart-contents').css('display', 'none');
	});

	//美妆商城的下拉菜单
	$('.meizhuang').hover(function() {
		$('.header-pop').stop().slideToggle(400);
		//		$('.header-pop').css('display','block');
	});

	//轮播图插件
	var swiper = new Swiper('.swiper-container', {

		effect: 'fade',
		loop: true, //循环模式
		speed: 1000, //切换速度
		//分页器
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},

		// 如果需要前进后退按钮
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		autoplay: true, //可选选项，自动滑动 
	});

	//home-top的选项卡切换
	$('.tab-menu li').click(function() {
		$(this).attr('class', 'active')
			.siblings()
			.attr('class', '');
		$('.tab-box').eq($(this).index())
			.css('display', 'block')
			.siblings()
			.css('display', 'none');
	});
	$('#as').click(function() {
		$('.tab-menu #aa').css('display', 'none');

	});

	//列表项的特效
	$('.newdeal-box').each(function(index) {
		$(this).mouseover(function() {
			$('.commit-new').css('display', 'block');
			$('.add-cart').css('display', 'block');
		}, function() {
			$('.commit-new').css('display', 'none');
			$('.add-cart').css('display', 'none');
		});

	});

	//每日必看的列表项
	$('.today-tab-content').each(function(index) {
		$(this).mouseover(function() {
			$('.today-tips').eq(index).show();
		});
		$(this).mouseleave(function() {
			$('.today-tips').eq(index).hide();
		});
	});

	//左边弹窗楼层跳跃
	//显示、隐藏
	//可视窗口高度
	var winH = $(window).height();
	//鼠标滚动的距离
	var iTop = $(window).scrollTop();
	var oNav = $('.home-nav');
	var aNav = oNav.find('li').children();
	var jumei = $('.jm-main');
	var layout = $('.layout');

	$(this).scroll(function() {

		if($(window).scrollTop() >= $('.jm-main').eq(-1).position().top) {

			$('.nav-bar01').css('opacity', 1).css('visibility', 'visible');

		} else {
			$('.nav-bar01').css('opacity', 0).css('visibility', 'hidden');
		};
	});
	$(this).scroll(function() {

		if($(window).scrollTop() >= $('.jm-main').eq(0).position().top) {

			$('.nav-bar01').css('opacity', 1).css('visibility', 'visible');

		} else {
			$('.nav-bar01').css('opacity', 0).css('visibility', 'hidden');
		};
	});
	aNav.eq(0).click(function() {
		var t = jumei.eq(0).offset().top;
		$('body,html').animate({
			'scrollTop': t
		}, 500);
		$(this).eq(0).toggleClass('act');
	});
	aNav.eq(-1).click(function() {
		var t = jumei.eq(-1).offset().top;
		$('body,html').animate({
			'scrollTop': t
		}, 500);
		$(this).eq(-1).toggleClass('act');
	});

	//首页列表商品的渲染和倒计时
	//	timeset(19090909090909);
	$.ajax({
		type: "post",
		url: "api/api/shouye.php",
		async: true,
		success: function(str) {
			var arr = JSON.parse(str);
			var res = arr.map(function(item) {
				return `<li class="newdeal-box" id=${item.id}>
							<div class="img-box">
							<a class="img-boxs">
								<img src="img/index-img/${item.scr}" />
								<div class="commit-new" style="display: none;">
									<div class="commit-newbox">新品上线，赶快来试试吧！</div>
								</div>
							</a>
							<div class="deals-tags"></div>
							<div class="add-cart" style="display: none;">
								<a  href="javascript:;" class="addcarts btnCart">加入购物车</a>
							</div>
						</div>
						<a href="#">
							<div class="newdetail">
								<p class="title">${item.name}</p>
								<div class="infobox">
									<div class="pricebox">
										<em>￥</em>
										<span class="pnum">${item.price}</span>
										<span class="mnum">${item.del}</span>
									</div>
									<div class="timeboxs">
										<div class="timebox">
											
										</div>
									</div>
								</div>
							</div>
						</a>
					</li>
					 <div id="flyItem" class="fly_item"><img src="img/index-img/${item.scr}"  width="40" height="40"></div>`

			});
			$('.new-list').html(res);
			//飞入购物车
			var offset = $("#shopCart").offset();
			var shu = 0;
			$(".btnCart").click(function(event) {
				shu++;
				var img = $('.img-boxs').children('img').attr('src'); //获取当前点击图片链接
				var flyer = $('<img class="flyer-img" style="width: 50px;height: 50px;" src="' + img + '">'); //抛物体对象
				flyer.fly({
					start: {
						left: event.clientX, //抛物体起点横坐标
						top: event.clientY ////抛物体起点纵坐标
					},
					end: {
						left: offset.left + 1800, //抛物体终点横坐标
						top: offset.top + 900, //抛物体终点纵坐标
					},
					onEnd: function() {
						$("#msg").show().animate({
							width: '200px'
						}, 300).fadeOut(500); //成功加入购物车动画效果
						this.destory(); //销毁抛物体
						$('.side-cart em').html(shu);
					}
				});

			});

			$(".quick_links_panel li").mouseenter(function() {
				$(this).children(".mp_tooltip").animate({
					left: -92,
					queue: true
				});
				$(this).children(".mp_tooltip").css("visibility", "visible");
				$(this).children(".ibar_login_box").css("display", "block");
			});
			$(".quick_links_panel li").mouseleave(function() {
				$(this).children(".mp_tooltip").css("visibility", "hidden");
				$(this).children(".mp_tooltip").animate({
					left: -121,
					queue: true
				});
				$(this).children(".ibar_login_box").css("display", "none");
			});
			$(".quick_toggle li").mouseover(function() {
				$(this).children(".mp_qrcode").show();
			});
			$(".quick_toggle li").mouseleave(function() {
				$(this).children(".mp_qrcode").hide();
			});

			//鼠标经过的效果
			$('.newdeal-box').each(function(index) {
				$(this).mouseover(function() {
					$('.commit-new').hide();
					$('.add-cart').hide();
					$('.commit-new').eq(index).show();
					$('.add-cart').eq(index).show();
				});
			});
			//倒计时
			var starttime = new Date("2019/3/30");
			setInterval(function() {
				var nowtime = new Date();
				var time = starttime - nowtime;
				var day = parseInt(time / 1000 / 60 / 60 / 24);
				var hour = parseInt(time / 1000 / 60 / 60 % 24);
				var minute = parseInt(time / 1000 / 60 % 60);
				var seconds = parseInt(time / 1000 % 60);
				//前面补零
				if(day < 10) {
					day = "0" + day;
				}
				if(hour < 10) {
					hour = "0" + hour;
				}
				if(minute < 10) {
					minute = "0" + minute;
				}
				if(seconds < 10) {
					seconds = "0" + seconds;
				}
				if(starttime == 0) {
					$('.timebox').html('活动已结束！');
				}
				$('.timebox').html(day + " 天 " + hour + " 小时 " + minute + " 分 " + seconds + " 秒 ");
				$('.t-time').html(day + ' : ' + hour + ' : ' + minute + ' : ' + seconds);
			}, 1000);

		}
	});

	//拿出cookies
	var isok = false;

	function getcook() {
		var name1 = getCookie('name');
		//		console.log(name1);
		if(name1) {
			$('.denglu').html(name1);
			$('.zhuce').html('退出');
			$('.user_info li').eq(0).html(name1);
			$('.user_info li').eq(1).html('密码：******');
			isok = false;
		} else {
			$('.denglu').html('请登录');
			$('.zhuce').html('快速注册');
			$('.user_info li').eq(0).html('你好，客官');
			$('.user_info li').eq(1).html('您还没有登录账号');
			isok = true;
		}
	};
	getcook();

	$('.denglu').on('click', function() {
		if(isok) {
			location.href = 'html/login.html';
		};
	});

	$('.zhuce').on('click', function() {
		if(isok) {
			location.href = 'html/register.html';
		} else {
			removeCookie('name');
			getcook();
		};
	});

	//点击右侧栏的购物车按钮进入购物车页面
	$('.cart_go_btn').click(function() {
		location.href = 'html/shopping.html';

	});
	$('.guowu').click(function() {
		location.href = 'html/shopping.html';
	});

});