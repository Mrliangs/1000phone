<?php
	////配置参数
	$servername = 'localhost';
	$username = 'root';
	$passname = '';
	$dbname = 'h5-1812';
	
	//建立链接
	$conn = new mysqli($servername,$username,$passname,$dbname);
	//判断是否链接成功
	if($conn->connect_error){
		die('出错原因是:'.$conn->connect_error);
	}
	
	echo '成功';
	
?>