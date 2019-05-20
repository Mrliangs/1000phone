<?php
	echo 'hello world!<br>';
	
	//全局变量
	$name ='小伟<br>';
	$age ='19';
	$num = 19.8;
	
	define('PI', '3.14');
	echo $name, $age;
	
	//php 字符串拼接
	echo '<br>姓名：'.$name.' '.'年龄：'.$age;
	
	echo '<br>';
	//作用域
	function show(){
		$price = 99;
		global $name, $age, $num;
		echo $name, $age, $num;
		
		//闭包的思想 ，实参
		sum($price);
	}
	echo '<br>';
	show();
	
	echo '<br>';
	 function sum($price){
	 	echo '<br>';
		echo $price;
	 }
	
	//php的循环
	echo '<br>';
	for($i = 0; $i < 6; $i++){
		echo $i;
	}
?>