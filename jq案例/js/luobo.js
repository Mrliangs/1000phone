$(function() {

	//把所有图片放在右侧。
	var ew = $('.imglist li').outerWidth();
	$('.imglist li').css('left', ew);
	$('.imglist li').eq(0).css('left', 0);

	//2.开启定时器，让图片动起来
	var num = 0;
	var isok = true; //1) 加个开关解决动画队列  
	var timer = null;
	var zindex = 1;
	timer = setInterval(next, 400); //隔两秒换一张图

	function next() {
		//旧图移走，0 -ew
		$('.imglist li').eq(num).animate({
			'left': -ew
		}, 1000, 'linear', function() {
			isok = true; //2)
			console.log(1);
		});

		//临界值判断
		num = ++num > $('.imglist li').size() - 1 ? 0 : num;

		//新图进入
		$('.imglist li').eq(num).css('left', ew);
		$('.imglist li').eq(num).animate({
			'left': 0
		}, 1000, 'linear');

		light();
	}

	function prev() {
		//新图进入 0 ew
		$('.imglist li').eq(num).animate({
			'left': ew
		}, 1000, 'linear', function() {
			isok = true; //3)
		});
		//判断
		num = --num < 0 ? $('.imglist li').size() - 1 : num;

		$('.imglist li').eq(num).css('left', -ew);
		$('.imglist li').eq(num).animate({
			'left': 0
		}, 1000, 'linear');

		light();
	}

	//焦点跟随

	//创建焦点
	$('.imglist li').each(function(i, item) {
		$span = $('<span>' + (i + 1) + '</span>');
		$('.light').append($span);
	});

	//焦点高亮
	$('.light').find('span').eq(-1).addClass('active');

	//跟随
	function light() {
		$('.light')
			.find('span')
			.eq(num)
			.addClass('active')
			.siblings()
			.removeClass('active');
	}

	//鼠标进入就停止运动，出来就继续运动
	$('#box').hover(() => {
		clearInterval(timer);
	}, function() {
		timer = setInterval(next, 2000);
	});

	//左右点击切换图片
	$('.prev').on('click', function() {
		if(isok) {
			isok = false; //4)
			prev();
		}

	});

	$('.next').on('click', function() {
		if(isok) {
			isok = false; //4)
			next();
		}

	});

	//点击焦点切换图片
	$('span').on('click', function() {
//		isok=true;
		var index = $(this).index();
//		if(isok) {
			if(num < index) {
				$('.imglist li').eq(num).animate({
					'left': -ew
				}, 1000, 'linear');

				//新图进入
				$('.imglist li').eq(index).css('left', ew);
				$('.imglist li').eq(index).animate({
					'left': 0
				}, 1000, 'linear');
				
			}
//			isok = false;
//		}
//		if(isok) {
			if(num > index) {
				$('.imglist li').eq(num).animate({
					'left': ew
				}, 1000, 'linear');

				//新图进入
				$('.imglist li').eq(index).css('left', -ew);
				$('.imglist li').eq(index).animate({
					'left': 0
				}, 1000, 'linear');
				
			}
//			isok = false;
//		}

		num = index;
		light();
	});

});