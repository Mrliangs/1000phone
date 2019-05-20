<?php

//	$name = $_GET['username'];
	$name=isset($_GET['username'])? $_GET['username']:'';
	//	$psw=$_GET['password'];
	$arr = array('malin', 'qinwei', 'xiaowei');
	if(in_array($name, $arr)) {
		echo 0;
	} else {
		echo 1;
	}
?>