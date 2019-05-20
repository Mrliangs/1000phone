function lunbo(id, cln) {
	/*
	 	需求：实现一个经典轮播图效果
	 	
	 		* 图片自动轮播(定时器)
	 		* 焦点跟随
	 		* 点击焦点可以切换对应的图片
	 		* 点击左右按钮可以切换上下张
	 
	 */

	//找节点
	var box = getid(id);
	var lis = box.querySelectorAll('.imglist ul li');
	var light = box.querySelector('.light');
	var prevbtn = box.querySelector('.posibtn .prev');
	var nextbtn = box.querySelector('.posibtn .next');
	var iW = lis[0].offsetWidth;
	var now = 0; //在可视区的那张，当前播放的轮播图下标

	//1.图片自动轮播

	//所有的图片放在右侧	并且动态创建焦点
	var html = '';
	for(var i = 0; i < lis.length; i++) {
		css(lis[i], 'left', iW + 'px');
		html += `<span>${i + 1}</span>`;
	}
	light.innerHTML = html;
	light.children[0].className = cln;

	//第一张放在可视区
	css(lis[0], 'left', 0);

	var timer = setInterval(next, 2000); //每隔两秒切换一张

	function next() {
		/*
	     1.旧图(可视区)挪走
		 2.新图放在右侧(预备工作)
		 3.新图挪到可视区
	*/
		startMove(lis[now], {
			'left': -iW
		}); //旧图(可视区)挪走,挪到可视区的左侧
		//		now ++;
		now = ++now > lis.length - 1 ? 0 : now;
		//新图准备进场,新图快速放在右侧(预备工作)
		css(lis[now], 'left', iW + 'px');
		//新图挪到可视区
		startMove(lis[now], {
			'left': 0
		});
		lightMove();
	}

	function prev() {
		//点击一次,切换回上一张,从左侧切入可视区
		//旧图挪到右侧
		startMove(lis[now], {
			'left': iW
		});
		now = --now < 0 ? lis.length - 1 : now;
		//新图准备进场,新图快速放在左侧(预备工作)
		css(lis[now], 'left', -iW + 'px');
		//新图挪到可视区
		startMove(lis[now], {
			'left': 0
		});
		lightMove();
	}

	//2.焦点跟随

	function lightMove() {
		//排他
		for(var i = 0; i < light.children.length; i++) {
			light.children[i].className = '';
		}
		light.children[now].className = cln;
	}

	//3.点击焦点可以切换对应的图片,利用事件委托
	//鼠标经过停止定时器,离开继续开启定时器

	box.onmouseover = function() {
		clearInterval(timer);
	}

	box.onmouseout = function() {
		clearInterval(timer);
		timer = setInterval(next, 2000); //每隔两秒切换一张
	}

	light.onclick = function(ev) {
		//		console.log(ev.target);
		var index = ev.target.innerHTML * 1 - 1;
		//		console.log(index);
		if(index > now) {
			//从右侧切入新图
			//旧图挪走,左侧
			startMove(lis[now], {
				'left': -iW
			});
			css(lis[index], 'left', iW + 'px');
			startMove(lis[index], {
				'left': 0
			});
			now = index; //新图变旧图
		}

		if(index < now) {
			//从左侧切入新图
			//旧图挪走,右侧
			startMove(lis[now], {
				'left': iW
			});
			css(lis[index], 'left', -iW + 'px');
			startMove(lis[index], {
				'left': 0
			});
			now = index; //新图变旧图
		}
		lightMove();
	}

	//4.点击左右按钮可以切换上下张
	//5.选做:防止多次点击的无聊行为,两次点击的时间小于500毫秒,就第二次点击无效
	var oldtime = new Date();
	prevbtn.onclick = function() {
		//切换到上一张
		if(new Date() - oldtime > 500) {
			prev();
		}
		oldtime = new Date();
	}

	nextbtn.onclick = function() {
		//切换下一张
		next();
	}
}