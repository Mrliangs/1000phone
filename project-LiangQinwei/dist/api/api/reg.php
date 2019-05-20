<?php
		include 'conn.php';
		
		$user = isset($_POST['tel']) ? $_POST['tel'] : '';
		$psw = isset($_POST['psw']) ? $_POST['psw'] : '';
//		echo $name,$psw;
		$sql = "INSERT INTO reg(user,psw) VALUES('$user','$psw')";
		
		$res = $conn -> query($sql);	//结果集


//		 var_dump($res);
		if($res) {
//			存在
			echo 'yes';
		} else {
			echo 'no';
		}
	
//		$res->close();
//		$conn->close();
?>