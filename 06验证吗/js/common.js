
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