<?php
	include 'conn.php';
		
		$sql = 'SELECT * FROM shouye';
		
		$res = $conn -> query($sql);
//		var_dump($sao);
		$arr = $res -> fetch_all(MYSQLI_ASSOC);
//		var_dump($arr);
		echo json_encode($arr, JSON_UNESCAPED_UNICODE);
		
		$res -> close();
		$conn -> close();
?>