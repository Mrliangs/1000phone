<?php
	$name=isset($_POST['username'])? $_POST['username']:'';
	
	$arr=array('sss','aaa','www');
	
	if(in_array($name, $arr)){
		echo '0';
	}else{
		echo '1';
	
	}
?>