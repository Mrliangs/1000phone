<?php
include 'conn.php';
$num = $_GET['num'];
$gid = $_GET['gid'];
//$name = $_GET['name'];
//$price = $_GET['price'];
//$img1 = $_GET['img1'];
//	echo $gid, $num, $pin, $price, $img1;
//查询订单表是否有该gid商品
$sql = "UPDATE shopping SET num=$num WHERE id=$gid";
$res = $conn -> query($sql);
	$arr = $res->fetch_all(MYSQLI_ASSOC);
echo json_encode($arr,JSON_UNESCAPED_UNICODE);
//if ($res -> num_rows > 0) {
//	//有就更新
//	$sql2 = "UPDATE shopping SET num=$num WHERE id=$gid";
//	$res2 = $conn -> query($sql2);
//	echo 1;
//
//} else {
//	$sql3 = "INSERT INTO shopping(id,name,price,img,num) VALUES ('$gid','$name','$price','$img1','$num')";
//	$res3 = $conn -> query($sql3);
//	echo 2;
//}
?>