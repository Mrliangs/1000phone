<?php
		include 'conn.php';
		
		$sql = 'SELECT * FROM userinf';
		
		$sao = $conn -> query($sql);
//		var_dump($sao);
		$arr = $sao -> fetch_all(MYSQLI_ASSOC);
		var_dump($arr);
//		echo json_encode($arr, JSON_UNESCAPED_UNICODE);
		
		$sao -> close();
		$conn -> close();
?>