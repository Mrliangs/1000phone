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