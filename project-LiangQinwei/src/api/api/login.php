<?php
		include 'conn.php';
	
	$user = isset($_POST['user']) ? $_POST['user'] : '';
	$psw = isset($_POST['psw']) ? $_POST['psw'] : '';
//	
//	echo $user,$psw;
//	$user=$_POST['user'];
//	$psw=$_POST['psw'];
	$sql = "SELECT * FROM reg WHERE user='$user' and psw='$psw'";

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