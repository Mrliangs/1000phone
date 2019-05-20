<?php
 include 'conn.php';
	$id=isset($_GET['id']) ? $_GET['id'] : '';
    $sql="DELETE FROM shopping WHERE id='$id' LIMIT 1";
	$res=$conn->query($sql);
	$arr = $res->fetch_all(MYSQLI_ASSOC);	
	echo json_encode($arr,JSON_UNESCAPED_UNICODE);
?>