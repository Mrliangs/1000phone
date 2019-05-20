<?php
	
	//登陆功能：接收前端的数据做查询
	
	include 'conn.php';
	
	//接收数据
	$name = isset($_POST['username']) ? $_POST['username'] : '';
	$psw = isset($_POST['psw']) ? $_POST['psw'] : '';
	
	//查询该用户的账号和密码是否和数据库一致
	$sql = "SELECT * FROM userinf WHERE NAME='$name' and psw='$psw'";
	
	//执行语句
	$res = $conn->query($sql);
	
	if($res->num_rows > 0) {
		//存在：登陆成功
		echo 'yes';
	}else{
		//不存在：登陆失败
		echo 'no';
	}
	
?>