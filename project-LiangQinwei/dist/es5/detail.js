'use strict';

$(function () {
	//鼠标经过显示我的聚美的二级菜单
	$('.item-ijumei').hover(function () {
		//		$('.item-ijumei').css({'background':'#ffff'});
		$('.j-nav').stop().slideToggle(30);
	});

	//鼠标经过显示更多的二级菜单
	$('.item-more').hover(function () {
		//		$('.item-ijumei').css({'background':'#ffff'});
		$('.jj-nav').stop().slideToggle(30);
	});

	//h-right的购物车按钮
	$('.jh-cart').hover(function () {
		$('.cart-icons').css('display', 'block');
		$('.cart-contents').css('display', 'block');
	}, function () {
		$('.cart-icons').css('display', 'none');
		$('.cart-contents').css('display', 'none');
	});

	//美妆商城的下拉菜单
	$('.meizhuang').hover(function () {
		$('.header-pop').stop().slideToggle(400);
		//		$('.header-pop').css('display','block');
	});

	//数据库拿数据

	function na() {
		var cjshu = decodeURI(location.search).slice(1);
		console.log(cjshu);
		$.ajax({
			'type': "post",
			'url': "../api/api/detail.php",
			'data': {
				'opt': cjshu
			},
			'success': function success(str) {
				console.log(str);
				show(str);
			}
		});
		//打印数据
		function show(str) {
			var arr = JSON.parse(str);
			$('.mall_detail_wrap').attr('id', arr[0].id);
			$('.mall_main_title').html(arr[0].name);
			$('#ai').html('<img src="' + arr[0].img + '" alt="" width="350" height="350"/>');
			$('.price_num').html(arr[0].price);
			$('.zoomdiv').html('<img src="' + arr[0].img2 + '" style="left: -492.511px; top: -360.636px;">');
			$('.mall_detail_des').eq(1).html('<img src="' + arr[0].img2 + '" alt="" width="660" height="768">');
		}
	};
	na();
	//商品的放大镜
	$(".jqzoom").mouseover(function () {
		$(".jqZoomPup").show();
		$(".zoomdiv").show();
	});
	$(".jqzoom").mouseout(function () {
		$(".jqZoomPup").hide();
		$(".zoomdiv").hide();
	});

	$(".jqzoom").mousemove(function (e) {
		var l = e.pageX - $(".jqzoom").offset().left - $(".jqZoomPup").width() / 2;
		var t = e.pageY - $(".jqzoom").offset().top - $(".jqZoomPup").height() / 2;
		if (l < 0) {
			l = 0;
		}
		if (l > $(this).width() - $(".jqZoomPup").width()) {
			l = $(this).width() - $(".jqZoomPup").width();
		}
		if (t < 0) {
			t = 0;
		}
		if (t > $(this).height() - $(".jqZoomPup").height()) {
			t = $(this).height() - $(".jqZoomPup").height();
		}

		$(".jqZoomPup").css({
			"left": l,
			"top": t
		});
		var pX = l / ($(".jqzoom").width() - $(".jqZoomPup").width());
		var pY = t / ($(".jqzoom").height() - $(".jqZoomPup").height());
		$(".zoomdiv img").css({
			"left": -pX * ($(".zoomdiv img").width() - $(".jqzoom").width()),
			"top": -pY * ($(".zoomdiv img").height() - $(".jqzoom").height())
		});
	});

	//极顶菜单
	var a = $('.slidebar_r_nav').offset().top;
	$(window).on('scroll', function () {
		var b = $(this).scrollTop();
		if (a <= b) {
			$('.slidebar_r_nav').addClass('mm');
			$('.tab_current').css('margin-left', '220px');
			$('.slidebar_r_ul').css('width', '1090px');
		} else {
			$('.slidebar_r_nav').removeClass('mm');
			$('.tab_current').css('margin-left', 0);
			$('.slidebar_r_ul').css('width', '100%');
		};
	});

	//详情页的选项卡
	$('.tab_menu_a').on('click', function () {
		$('.tab_menu_a').removeClass('current');
		$(this).addClass('current');
	});

	//聚美优势的选项卡
	$('.tab_menu li').mouseover(function () {
		$(this).attr('class', 'aa').siblings().attr('class', '');
		$('.tab_box').eq($(this).index()).css('display', 'block').siblings().css('display', 'none');
	});

	//飞入购物车
	var offset = $("#shopCart").offset();
	var shu = 0;
	$(".mall_addcart_up").click(function (event) {
		shu++;
		var img = $('#ai').children('img').attr('src'); //获取当前点击图片链接
		var flyer = $('<img class="flyer-img" style="width: 50px;height: 50px;" src="' + img + '">'); //抛物体对象
		flyer.fly({
			start: {
				left: event.clientX, //抛物体起点横坐标
				top: event.clientY ////抛物体起点纵坐标
			},
			end: {
				left: offset.left + 280, //抛物体终点横坐标
				top: offset.top + 50 //抛物体终点纵坐标
			},
			onEnd: function onEnd() {
				$("#msg").show().animate({
					width: '200px'
				}, 200).fadeOut(500); //成功加入购物车动画效果
				this.destory(); //销毁抛物体
				$('.side-cart em').html(shu);
			}
		});
	});
	//拿出cookies
	var isok = false;

	function getcook() {
		var name1 = getCookie('name');
		//		console.log(name1);
		if (name1) {
			$('.denglu').html(name1);
			$('.zhuce').html('退出');
			isok = false;
		} else {
			$('.denglu').html('请登录');
			$('.zhuce').html('快速注册');
			isok = true;
		};
	};
	getcook();

	$('.denglu').on('click', function () {
		if (isok) {
			location.href = 'login.html';
		};
	});

	$('.zhuce').on('click', function () {
		if (isok) {
			location.href = 'register.html';
		} else {
			removeCookie('name');
			getcook();
		};
	});

	//点击事件委托
	$('.mall_addcart_up').click(function () {
		var a = $('#buy_number').val();
		var b = $('.mall_detail_wrap').attr('id');
		var c = $('.mall_main_title').text();
		var d = $('.price_num').text();
		var e = $('#ai').children().attr('src');
		//		console.log(c);
		shopping(a, b, c, d, e);
	});
	function shopping(num, id, name, price, img) {
		$.ajax({
			type: "get",
			url: "../api/api/shopping.php",
			async: true,
			data: {
				'num': num,
				'gid': id,
				'name': name,
				'price': price,
				'img1': img
			},
			success: function success(str) {
				console.log(str);
			}
		});
	};
	shopping();
	//=================================================商品数量加减==============================================
	var t = $(".buy_number");
	$(".number_add").click(function () {
		t.val(parseInt(t.val()) + 1);
		$(".number_reduce").removeAttr("disabled"); //当按加1时，解除$("#min")不可读状态    
		setTotal();
	});
	$(".number_reduce").click(function () {
		if (parseInt(t.val()) > 1) {
			//判断数量值大于1时才可以减少    
			t.val(parseInt(t.val()) - 1);
		} else {
			$(".number_reduce").attr("disabled", "disabled"); //当$("#min")为1时，$("#min")不可读状态    
		}
		setTotal();
	});

	$('#ilike_text').click(function () {

		location.href = 'shopping.html?';
	});
});