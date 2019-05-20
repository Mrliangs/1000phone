<?php
 	include 'conn.php';
	
	$name = isset($_POST['username']) ? $_POST['username'] : '';
	$psw = isset($_POST['psw']) ? $_POST['psw'] : '';
	
	$sql = "SELECT * FROM lqwei WHERE NAME='$name' and PSW='$psw'";
	
	$res = $conn -> query($sql) ;
	
	if($res->num_rows) {
		//存在
		echo 'no';
	}else{
		echo 'yes';
	}
	
//	$res->close();
//	$conn->close();
?>