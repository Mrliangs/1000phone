<?php
 include 'conn.php';
    $sql="DELETE FROM shopping";
	$res=$conn->query($sql);
	$arr = $res->fetch_all(MYSQLI_ASSOC);	
	echo json_encode($arr,JSON_UNESCAPED_UNICODE);
?>