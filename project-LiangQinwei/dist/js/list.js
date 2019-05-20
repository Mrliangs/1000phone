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

	//点击更多显示商品关键字
	$('.btn_fliter_multi').eq(0).click(function() {
		$('.btn_fliter_multi').eq(0).css('display', 'none');
		$('.filter_attrs_top ').eq(0).toggle();
		$('.multi_buttons').eq(0).toggle();
		$('.placeholder_line').eq(0).toggle();
		$('.bottom_multi_selecteds').eq(0).toggle();
		$('.filter_con').eq(0).addClass('multi');
	});
	$('.btn_fliter_multi').eq(1).click(function() {
		$('.btn_fliter_multi').eq(1).css('display', 'none');
		$('.filter_attrs_top ').eq(1).toggle();
		$('.multi_buttons').eq(1).toggle();
		$('.placeholder_line').eq(1).toggle();
		$('.bottom_multi_selecteds').eq(1).toggle();
		$('.filter_con').eq(1).addClass('multi');
	});
	$('.btn_fliter_multi').eq(2).click(function() {
		$('.btn_fliter_multi').eq(2).css('display', 'none');
		$('.filter_attrs_top ').eq(2).toggle();
		$('.multi_buttons').eq(2).toggle();
		$('.placeholder_line').eq(2).toggle();
		$('.bottom_multi_selecteds').eq(2).toggle();
		$('.filter_con').eq(2).addClass('multi');
	});
	$('.btn_fliter_multi').eq(3).click(function() {
		$('.btn_fliter_multi').eq(3).css('display', 'none');
		$('.filter_attrs_top ').eq(3).toggle();
		$('.multi_buttons').eq(3).toggle();
		$('.placeholder_line').eq(3).toggle();
		$('.bottom_multi_selecteds').eq(3).toggle();
		$('.filter_con').eq(3).addClass('multi');
	});
	//点击关闭更多显示商品关键字
	$('.btn_multi_reset').eq(0).on('click', function() {
		$('.btn_fliter_multi').eq(0).css('display', 'block');
		$('.filter_attrs_top ').eq(0).toggle();
		$('.multi_buttons').eq(0).toggle();
		$('.placeholder_line').eq(0).toggle();
		$('.bottom_multi_selecteds').eq(0).toggle();
		$('.filter_con').eq(0).removeClass('multi');
	});
	$('.btn_multi_reset').eq(1).on('click', function() {
		$('.btn_fliter_multi').eq(1).css('display', 'block');
		$('.filter_attrs_top ').eq(1).toggle();
		$('.multi_buttons').eq(1).toggle();
		$('.placeholder_line').eq(1).toggle();
		$('.bottom_multi_selecteds').eq(1).toggle();
		$('.filter_con').eq(1).removeClass('multi');
	});
	$('.btn_multi_reset').eq(2).on('click', function() {
		$('.btn_fliter_multi').eq(2).css('display', 'block');
		$('.filter_attrs_top ').eq(2).toggle();
		$('.multi_buttons').eq(2).toggle();
		$('.placeholder_line').eq(2).toggle();
		$('.bottom_multi_selecteds').eq(2).toggle();
		$('.filter_con').eq(2).removeClass('multi');
	});
	$('.btn_multi_reset').eq(3).on('click', function() {
		$('.btn_fliter_multi').eq(3).css('display', 'block');
		$('.filter_attrs_top ').eq(3).toggle();
		$('.multi_buttons').eq(3).toggle();
		$('.placeholder_line').eq(3).toggle();
		$('.bottom_multi_selecteds').eq(3).toggle();
		$('.filter_con').eq(3).removeClass('multi');
	});
	//点击打钩
	$('.filter_attrs').find('a').click(function() {
		$(this).toggleClass('selected');

	});

	//排序的极顶菜单
	var a = $('.search_list_head_fiex').offset().top;
	$(window).on('scroll', function() {
		var b = $(this).scrollTop();
		if(a <= b) {
			$('.search_list_head_fiex')
				.css('position', 'fixed')
				.css('top', 0)
				.css('width', 1090);
			//			.css('box-shadow',0 2 3 #ccc);
		} else {
			$('.search_list_head_fiex')
				.css('position', 'static')
				.css('top', 'auto');

		}
	});

	//渲染部分的封装 
	function xuanran(arr) {
		var res = arr.map(function(item) {
			return `<li class="formall item" pid="1497099" bid="8130" cid="89" search_product_type="mall" h_p_m_id="1497099" product_type="mall_product" id="${item.id}">
							<div id="gid" style="display:none">${item.id}</div>
							<div class="item_wrap clearfix" style="left: -16px;">
										<div class="item_wrap_right deal_item_wrap">
											<div class="s_l_pic">
												<div class="icon_wrap clearfix">
													<strong style="color: #ec2b8c">${item.icon}</strong>
												</div>
												<a href="javascript:;" target="_blank" class="slimg">
													<img alt="${item.name}" original="${item.img}" width="255" height="255" src="${item.img}" style="display: inline;">
												</a>
											</div>

											<div class="s_l_name">
												<a href="javascript:;" target="_blank">

													${item.name}
												</a>
											</div>
											<div class="s_l_view_bg">
												<div class="icon_wrap_bot clearfix">
												</div>
												<div class="search_list_price">
													<label>¥</label>
													<span>${item.price}</span>
													<del>${item.del}</del>
													<div class="saleinfos">
													</div>
												</div>
											</div>
											<div class="search_deal_buttom_bg clearfix">
												<div class="search_pl">${item.search_pl}</div>
												<div class="${item.xx}">
													<div style="width:100%" class="value"></div>
												</div>
											</div>
											<div class="search_list_button">
												<a target="_blank" class="track_click ${item.kk}" track_click="b2c/product_1497099/buy_list" data-sku="" data-from="sr_%E4%B8%AD%E6%80%A7%E9%A6%99%E6%B0%B4_1_34_ac" title="加入购物车">
												</a>
												<a href="javascript:;" class="${item.shouc}" pid="1497099" title="收藏商品"></a>
											</div>
											<p class="search_list_tags">
												<span>${item.ted1}</span>
												<span>${item.ted2}</span>
											</p>
										</div>
									</div>
							</li>`

		});
		$('#lists').html(res);

	};

	var slimg = $('.slimg');

	//xuanran(arr);
	//商品列表项的渲染

	var ipage = 1; //第一页
	var inum = 28; //每页5条
	//	var data = 'page=' + ipage + '&num=' + inum;
	$.ajax({
		type: "post",
		url: "../api/api/fenye.php",
		async: true,
		data: {
			'page': ipage,
			'num': inum
		},
		success: function(str) {
			console.log(str);
			var datalist = JSON.parse(str);
			var arr = datalist.data;

			xuanran(arr);

			var pages = Math.ceil(datalist.total / datalist.num); //存总页码
			//			console.log(pages); //28 5 =6页
			var html = '';
			for(var i = 0; i < pages; i++) {
				html += `<li><span>${i+1}</span></li>`;
			};

			$('.page-nav').html(html); //页码的生成
			$('.page-nav li span').eq(0).addClass('current');

			//飞入购物车
			var offset = $("#shopCart").offset();
			var shu = 0;
			$(".track_click").click(function(event) {
				shu++;
				var img = $('.slimg').children('img').attr('src'); //获取当前点击图片链接
				var flyer = $('<img class="flyer-img" style="width: 50px;height: 50px;z-index:2000000; border:1px solid red;" src="' + img + '">'); //抛物体对象
				flyer.fly({
					start: {
						left: event.clientX, //抛物体起点横坐标
						top: event.clientY ////抛物体起点纵坐标
					},
					end: {
						left: offset.left + 500, //抛物体终点横坐标
						top: offset.top + 150, //抛物体终点纵坐标
					},

				});

			});
			//列表项的鼠标经过特效
			$('.products_wrap li').hover(function(i) {
				$(this).addClass('hover_sm');
				$('.search_list_tags ').css('display', 'block');
			}, function() {
				$(this).removeClass('hover_sm');
				$('.search_list_tags ').css('display', 'none');
			});

		}
	});
	//	点击fen页面
	$('.page-nav').on('click', 'li span', function() {
		var aa = $(this).html();
		console.log(aa);
		$.ajax({
			type: 'post',
			url: '../api/api/lists.php',
			async: true,
			data: {
				'page': aa
			},
			success: function(str) {
				show(str);
				console.log(str);
			}
		});
	});

	function show(str) {
		//				console.log(str);
		//				
		var arr = JSON.parse(str);
		xuanran(arr);
		$('.page-nav').find('span').click(function() {
			$('.page-nav').find('span').removeClass('current');
			$(this).addClass('current');

		});
		
	}

	

	//三.排序部分
	var zonghe = document.querySelector('.downa'); //sort_mul 综合排序
	var jiage = document.querySelector('.price_sort'); //sort_price   价格排序
	var xiaoliang = document.querySelector('.downc'); //sort_sale  销量优先
	var xinpin = document.querySelector('.downc'); // 新品
	// sort_con01.

	zonghe.onclick = function() {
		var url = '../api/api/fenye.php';
		var data = `page=1&num=28&paixu=1`;
		ajax('post', url, data, function(str) {
			var arr = JSON.parse(str);
			xuanran(arr);
		})
	};

	jiage.onclick = function() {
		var url = '../api/api/fenye.php';
		var data = `page=1&num=28&paixu=1`;
		ajax('post', url, data, function(str) {
			var arr = JSON.parse(str);
			xuanran(arr);
		})
	};

	xiaoliang.onclick = function() {
		var url = '../api/api/fenye.php';
		var data = `page=1&num=28&paixu=1`;
		ajax('post', url, data, function(str) {
			var arr = JSON.parse(str);
			xuanran(arr);
		})
	};
	xinpin.onclick = function() {
		var url = '../api/api/fenye.php';
		var data = `page=1&num=28&paixu=1`;
		ajax('post', url, data, function(str) {
			var arr = JSON.parse(str);
			xuanran(arr);
		})
	};
	//点击跳转到详情页
	$('#lists').on('click', '.item', function(ev) {
		var slimg = $(this).find('#gid').html() * 1;
		console.log(slimg);
		location.href = 'detail.html?' + slimg;
	});

	//拿出cookies
	var isok = false;

	function getcook() {
		var name1 = getCookie('name');
		console.log(name1);
		if(name1) {
			$('.denglu').html(name1);
			$('.zhuce').html('退出');
			isok = false;
		} else {
			$('.denglu').html('请登录');
			$('.zhuce').html('快速注册');
			isok = true;
		}
	};
	getcook();

	$('.denglu').on('click', function() {
		if(isok) {
			location.href = 'html/login.html';
		}
	});

	$('.zhuce').on('click', function() {
		if(isok) {
			location.href = 'html/register.html';
		} else {
			removeCookie('name');
			getcook();
		}
	});

})