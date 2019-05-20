//js库：某些函数使用率很高，封装放在这里，反复可以调用   vuejs  jquery  react

/*
 	ranNum():生成四位数的随机数
 	返回值：返回一个随机四位数(包含数字和大小字母组合)
*/

function ranNum() {
	var str = '0123456789zxcvbnmasdfghjklpoiuytrewqZXCVBNMLKJHGFDSAQWERTYUIOP';
	var num1 = parseInt(Math.random() * str.length);
	var num2 = parseInt(Math.random() * str.length);
	var num3 = parseInt(Math.random() * str.length);
	var num4 = parseInt(Math.random() * str.length);
	var res = str[num1] + str[num2] + str[num3] + str[num4];
	//要返回值
	return res;
}

/*
 	返回某个范围内的随机数
 	randomNum(min,max)  randomNum(5,10) :返回5-10之间的随机数，包括边界
 	参数：
 		min ： 最小值
 		max ： 最大值
 
 */

function randomNum(min, max) {
	//Math.random()    0.1 - 0.999
	//Math.random()*101   0.1- 100.999
	//parsInt(Math.random()*101)  0-100
	return parseInt(Math.random() * (max - min + 1)) + min;
}

/*
 	通过id获取元素
 	参数：id
 	返回值：节点
*/

function getid(id) {
	return document.getElementById(id);
}

/*
 	补零 toDb(num)
 	小于 10 补零
 */

function toDb(num) {
	if(num < 10) {
		return "0" + num;
	} else {
		return "" + num;
	}
}

/**
 norepeat() 去重
 */

function norepeat(arr) {
	var newarr = [];
	arr.forEach(function(item) {
		//在数组里面是否存在某个数，存在：true,不存在：false
		if(!newarr.includes(item)) {
			//不存在
			newarr.push(item); //1 2 3 4 5 6
		}
	});
	return newarr; //去重的数组
}

/*
 	将秒转成：xx天xx时xx分xx秒
 	timeset()
 	参数：秒数
 	返回值：返回相关数据，做成json
*/
function timeset(num) {
	//num：秒数
	var sec = toDb(num % 60); //秒
	var min = toDb(Math.floor(num / 60) % 60); //分
	var hour = toDb(Math.floor(num / 60 / 60) % 24); //时
	var day = Math.floor(num / 60 / 60 / 24); //天

	return {
		'secs': sec,
		'mins': min,
		'hours': hour,
		'days': day
	}
}

/*
 	strToObj(str):把字符串变成对象
 	输入参数：key0=0&key1=1&key2=2
 	输出数据：
 	var json = {
				key0 : 0,
				key1 : 1,
				key2 : 2
			}
 */

function strToObj(str) {
	var json = {};
	//第一次把&去掉
	var arr1 = str.split('&'); //['key0=0','key1=1','key2=2'];
	//第二次把=去掉
	for(var i = 0; i < arr1.length; i++) {
		var arr2 = arr1[i].split('='); //['key2','2']
		json[arr2[0]] = arr2[1]; //切割一组存一组
	}

	return json;
}

/*
 objToStr(obj):把对象变成字符串
 	输出参数：key0=0&key1=1&key2=2
 	输入数据：
 	var json = {
				key0 : 0,
				key1 : 1,
				key2 : 2
			}
*/

function objToStr(obj) {
	var html = '';
	for(var key in obj) {
		html += key + '=' + obj[key] + '&';
	}
	return html.slice(0, -1); //减去最后一个&号
}

/*
 	查找首节点：
 	参数： 父节点
 	返回值： 第一个子节点
 
 */

function firstChild(parent) {
	if(parent.firstElementChild) {
		//高级浏览器 IE9 +(不包括ie9)
		return parent.firstElementChild;
	} else {
		//低版本浏览器：IE 9 -
		return parent.firstChild;
	}
}
/*
 	查找首节点：
 	参数： 父节点
 	返回值： 第一个子节点
 
 */

function lastChild(parent) {
	if(parent.lastElementChild) {
		//高级浏览器
		return parent.lastElementChild;
	} else {
		return parent.lastChild;
	}
}


//获取样式
function css(){
					var obj = arguments[0];
					var attr = arguments[1];
					var value = arguments[2];
					if(arguments.length == 2) {
						if(getComputedStyle(obj, false)) {
							//高级浏览起
							return getComputedStyle(obj, false)[attr];
						} else {
							//低版本IE6-9
							return obj.currentStyle[attr];
						}
					}else if(arguments.length==3){
						obj.style[attr]=value;
						
					}
				}