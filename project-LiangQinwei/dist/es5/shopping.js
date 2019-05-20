'use strict';

$(function () {
	//拿出cookies
	var isok = false;

	function getcook() {
		var name1 = getCookie('name');
		//		console.log(name1);
		if (name1) {
			$('.denglu').html(name1);
			$('.zhuce').html('退出');
			$('#go_to_order').click(function () {
				alert('确定再不剁手就破产啦');
			});
			isok = false;
		} else {
			$('.denglu').html('请登录');
			$('.zhuce').html('快速注册');
			$('#go_to_order').click(function () {
				alert('请登录一下再结算哦！');
			});
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
			alert('确定退出');
			removeCookie('name');
			getcook();
		};
	});

	//鼠标经过问好显示内容
	$('.float_box').each(function (index) {
		$(this).mouseover(function () {
			$('.pop_box').eq(index).show();
		});
		$(this).mouseleave(function () {
			$('.pop_box').eq(index).hide();
		});
	});

	//渲染购物车
	$.ajax({
		type: "get",
		url: "../api/api/shoppings.php",
		async: true,
		success: function success(str) {
			//			console.log(str);
			var arr = JSON.parse(str);
			show(arr);
		}
	});

	function show(arr) {
		var res = arr.map(function (item) {
			return '\n\t\t\t\t\t\t<tr class="cart_item " hashid="" id="' + item.id + '" product_id="1054222" item_price="399.00" category_v3_3="89" brand_id="509" product_type="mall" vcb="false">\n\t\t\t\t\t\t\t\t\t<td valign="top">\n\t\t\t\t\t\t\t\t\t\t<div class="cart_item_desc clearfix"> <input type="checkbox" class="js_item_selector cart_item_selector" data-item-key="1060695_" data-app="all" checked="\'checked\'/">\n\t\t\t\t\t\t\t\t\t\t\t<div class="cart_item_desc_wrapper">\n\t\t\t\t\t\t\t\t\t\t\t\t<a class="cart_item_pic" href="#" target="_blank"> <img src="' + item.img + '" alt="' + item.name + '"> <span class="sold_out_pic png"></span> </a>\n\t\t\t\t\t\t\t\t\t\t\t\t<a class="cart_item_link" title="\u7F8E\u56FD\u2022\u5361\u5C14\u6587\u514B\u96F7\u6069(CALVIN KLEIN)\u5361\u83B1\u4F18\u6DE1\u9999\u6C34/\u5361\u96F7\u4F18\u9999\u6C34/\u5361\u6587\u514B\u83B1\u5361\u83B1\u4F18\u6DE1\u9999\u6C34 200ml" href="#" target="_blank">' + item.name + '</a>\n\t\t\t\t\t\t\t\t\t\t\t\t<p class="sku_info"> \u5BB9\u91CF\uFF1A<span class="cart_item_capacity">200ml</span> </p>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="sale_info clearfix">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="tips_pop_full float_box JS_tips_pop_full">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a class="sale_tag gift JS_sale_tag" data-promo-type="gift"> \u6EE1\u8D60 <i class="icon_small png"></i> </a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="pop_box JS_pop_box">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div><span class="arrow_t_1"><span class="arrow_t_2"></span></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a class="clearfix promo_sale_item " href="javascript:void(0)"> <span class="title">\u4E70\u5373\u8D60 \u738B\u8587\u62C9VERA WANG\u591C\u516C\u4E3B\u62CE\u5305</span> </a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t<div class="cart_item_price">\n\t\t\t\t\t\t\t\t\t\t\t<p class="jumei_price">\uFFE5' + item.price + '</p>\n\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t<div class="cart_item_num item_num_tip ">\n\t\t\t\t\t\t\t\t\t\t\t<div class="item_quantity_editer clearfix" data-item-key="1060695_"> <span class="decrease_one disabled ">-</span> <input class="item_quantity" type="text" value="' + item.num + '"> <span class="increase_one ">+</span> </div>\n\t\t\t\t\t\t\t\t\t\t\t<div class="item_shortage_tip">\n\t\t\t\t\t\t\t\t\t\t\t\t<p>\u5E93\u5B58\u7D27\u5F20</p>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t<div class="cart_item_total">\n\t\t\t\t\t\t\t\t\t\t\t<p class="item_total_price">\uFFE5' + item.price + '</p>\n\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t<div class="cart_item_option">\n\t\t\t\t\t\t\t\t\t\t\t<a class="icon_small delete_item png" data-item-key="1060695_" href="javascript:void(0)" title="\u5220\u9664"></a>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\n\t\t\t';
		}).join('');
		$('tbody').append(res);
		//全局的checkbox选中和未选中的样式
		var $allCheckbox = $('input[type="checkbox"]'),
		    //全局的全部checkbox
		$wholeChexbox = $('.all_selector'),
		    $cartBox = $('.cart_group_item'),
		    //每个商铺盒子
		$shopCheckbox = $('.cart_group_selector'),
		    //每个商铺的checkbox
		$sonCheckBox = $('.cart_item_selector'); //每个商铺下的商品的checkbox
		$allCheckbox.click(function () {
			if ($(this).is(':checked')) {
				$(this).next('label').addClass('mark');
			} else {
				$(this).next('label').removeClass('mark');
			};
		});

		//===============================================全局全选与单个商品的关系================================
		$wholeChexbox.click(function () {
			var $checkboxs = $cartBox.find('input[type="checkbox"]');
			if ($(this).is(':checked')) {
				$checkboxs.prop("checked", true);
				$checkboxs.next('label').addClass('mark');
			} else {
				$checkboxs.prop("checked", false);
				$checkboxs.next('label').removeClass('mark');
			};
			totalMoney();
		});

		$sonCheckBox.each(function () {
			$(this).click(function () {
				if ($(this).is(':checked')) {
					//判断：所有单个商品是否勾选
					var len = $sonCheckBox.length;
					var num = 0;
					$sonCheckBox.each(function () {
						if ($(this).is(':checked')) {
							num++;
						};
					});
					if (num == len) {
						$wholeChexbox.prop("checked", true);
						$wholeChexbox.next('label').addClass('mark');
					};
				} else {
					//单个商品取消勾选，全局全选取消勾选
					$wholeChexbox.prop("checked", false);
					$wholeChexbox.next('label').removeClass('mark');
				};
			});
		});

		//=======================================每个店铺checkbox与全选checkbox的关系/每个店铺与其下商品样式的变化===================================================

		//店铺有一个未选中，全局全选按钮取消对勾，若店铺全选中，则全局全选按钮打对勾。
		$shopCheckbox.each(function () {
			$(this).click(function () {
				if ($(this).is(':checked')) {
					//判断：店铺全选中，则全局全选按钮打对勾。
					var len = $shopCheckbox.length;
					var num = 0;
					$shopCheckbox.each(function () {
						if ($(this).is(':checked')) {
							num++;
						};
					});
					if (num == len) {
						$wholeChexbox.prop("checked", true);
						$wholeChexbox.next('label').addClass('mark');
					};

					//店铺下的checkbox选中状态
					$(this).parents('.cart_group_item').find('.cart_item_selector').prop("checked", true);
					$(this).parents('.cart_group_item').find('.cart_item_selector').next('label').addClass('mark');
				} else {
					//否则，全局全选按钮取消对勾
					$wholeChexbox.prop("checked", false);
					$wholeChexbox.next('label').removeClass('mark');

					//店铺下的checkbox选中状态
					$(this).parents('.cart_group_item').find('.cart_item_selector').prop("checked", false);
					$(this).parents('.cart_group_item').find('.cart_item_selector').next('label').removeClass('mark');
				};
				totalMoney();
			});
		});

		//========================================每个店铺checkbox与其下商品的checkbox的关系======================================================

		//店铺$sonChecks有一个未选中，店铺全选按钮取消选中，若全都选中，则全选打对勾
		$cartBox.each(function () {
			var $this = $(this);
			var $sonChecks = $this.find('.cart_item_selector');
			$sonChecks.each(function () {
				$(this).click(function () {
					if ($(this).is(':checked')) {
						//判断：如果所有的$sonChecks都选中则店铺全选打对勾！
						var len = $sonChecks.length;
						var num = 0;
						$sonChecks.each(function () {
							if ($(this).is(':checked')) {
								num++;
							};
						});
						if (num == len) {
							$(this).parents('.cart_group_item').find('.cart_group_selector').prop("checked", true);
							$(this).parents('.cart_group_item').find('.cart_group_selector').next('label').addClass('mark');
						};
					} else {
						//否则，店铺全选取消
						$(this).parents('.cart_group_item_product').find('.cart_group_selector').prop("checked", false);
						$(this).parents('.cart_group_item_product').find('.cart_group_selector').next('label').removeClass('mark');
					};
					totalMoney();
				});
			});
		});

		//=================================================商品数量==============================================
		var $plus = $('.increase_one'),
		    $reduce = $('.decrease_one'),
		    $all_sum = $('.item_quantity');
		$plus.click(function () {
			var $inputVal = $(this).prev('input'),
			    $count = parseInt($inputVal.val()) + 1,
			    $obj = $(this).parents('.item_quantity_editer').find('.increase_one'),
			    $priceTotalObj = $(this).parents('.cart_item ').find('.item_total_price'),
			    $price = $(this).parents('.cart_item ').find('.jumei_price').html(),
			    //单价
			$priceTotal = $count * parseInt($price.substring(1));
			$inputVal.val($count);
			$priceTotalObj.html('￥' + $priceTotal);
			if ($inputVal.val() > 1 && $obj.hasClass('reSty')) {
				$obj.removeClass('reSty');
			};
			totalMoney();
		});

		$reduce.click(function () {
			var $inputVal = $(this).next('input'),
			    $count = parseInt($inputVal.val()) - 1,
			    $obj = $(this).parents('.item_quantity_editer').find('.decrease_one'),
			    $priceTotalObj = $(this).parents('.cart_item ').find('.item_total_price'),
			    $price = $(this).parents('.cart_item').find('.jumei_price').html(),
			    //单价
			$priceTotal = $count * parseInt($price.substring(1));
			if ($inputVal.val() > 1) {
				$inputVal.val($count);
				$priceTotalObj.html('￥' + $priceTotal);
			};
			if ($inputVal.val() == 1 && !$(this).hasClass('reSty')) {
				$(this).addClass('reSty');
			};
			totalMoney();
		});

		$all_sum.keyup(function () {
			var $count = 0,
			    $priceTotalObj = $(this).parents('.cart_item').find('.item_total_price'),
			    $price = $(this).parents('.cart_item').find('.jumei_price').html(),
			    //单价
			$priceTotal = 0;
			if ($(this).val() == '') {
				$(this).val('1');
			}
			$(this).val($(this).val().replace(/\D|^0/g, ''));
			$count = $(this).val();
			$priceTotal = $count * parseInt($price.substring(1));
			$(this).attr('value', $count);
			$priceTotalObj.html('￥' + $priceTotal);
			totalMoney();
		});

		//======================================移除商品========================================

		var $order_lists = null;
		var $order_content = '';
		$('.delete_item').click(function () {
			$order_lists = $(this).parents('.cart_item');
			$order_content = $order_lists.parents('.cart_group_item');
			$('.model_bg').fadeIn(300);
			$('.my_model').fadeIn(300);
		});

		//关闭模态框
		$('.closeModel').click(function () {
			closeM();
		});
		$('.dialog-close').click(function () {
			closeM();
		});

		function closeM() {
			$('.model_bg').fadeOut(300);
			$('.my_model').fadeOut(300);
		};
		//确定按钮，移除商品
		$('.dialog-sure').click(function () {

			var id = $(this).parent().parent().parent().attr('id');
			$.ajax({
				type: "get",
				url: "../api/api/shop.php",
				async: true,
				data: {
					'id': id
				},
				success: function success(str) {

					$order_lists.remove();
					if ($order_content.html().trim() == null || $order_content.html().trim().length == 0) {
						$order_content.parents('.cart_group_item').remove();
					}
					closeM();
					$sonCheckBox = $('.cart_item_selector');
					totalMoney();
				}
			});
			$order_lists.remove();
			if ($order_content.html().trim() == null || $order_content.html().trim().length == 0) {
				$order_content.parents('.cart_group_item').remove();
			}
			closeM();
			$sonCheckBox = $('.cart_item_selector');
			totalMoney();
		});

		//======================================总计==========================================

		function totalMoney() {
			var total_money = 0;
			var total_count = 0;
			var calBtn = $('.right_handler a');
			$sonCheckBox.each(function () {
				if ($(this).is(':checked')) {
					var goods = parseInt($(this).parents('.cart_item').find('.item_total_price').html().substring(1));
					var num = parseInt($(this).parents('.cart_item').find('.item_quantity').val());
					total_money += goods;
					total_count += num;
				};
			});
			$('.total_price').html('￥' + total_money);
			$('.total_amount').html(total_count);

			// console.log(total_money,total_count);

			if (total_money != 0 && total_count != 0) {
				if (!calBtn.hasClass('btn_sty')) {
					calBtn.addClass('btn_sty');
				};
			} else {
				if (calBtn.hasClass('btn_sty')) {
					calBtn.removeClass('btn_sty');
				};
			};
		}
		$('.delete_item').click(function () {
			var id = $(this).parent().parent().parent().attr('id');
			$.ajax({
				type: "get",
				url: "../api/api/shop.php",
				async: true,
				data: {
					'id': id
				},
				success: function success(str) {
					console.log(str);
				}
			});
		});

		//鼠标经过问好显示内容
		//		$('.float_box').mousemove(function(){
		//			$('.pop_box').show();
		//		}.function(){
		//			$('.pop_box').hide();
		//		})
		//		
	};
});