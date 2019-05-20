<?php
		include 'conn.php';
		
		$name = isset($_POST['username']) ? $_POST['username'] : '';
		$psw = isset($_POST['psw']) ? $_POST['psw'] : '';
		echo $name,$psw;
		$sql = "INSERT INTO reg(user,psw) VALUES('$name','$psw')";
		
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