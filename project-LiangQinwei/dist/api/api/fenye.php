<?php

include 'conn.php';


$page = isset($_POST['page']) ? $_POST['page'] : '';
//$num = isset($_POST['num']) ? $_POST['num'] : '';
//$paixuname=isset($_GET['paixu']) ? $_GET['paixu'] : '7';
$num=28;
$index = ($page - 1) * $num;

$sql = "SELECT * FROM list LIMIT $index,$num";

//if($paixuname==1){
//	$sql="SELECT * FROM list ORDER BY id  LIMIT $index,$num";
//}
//if($paixuname==2){
//	$sql="SELECT * FROM list ORDER BY sales DESC LIMIT $index,$num";
//}
//if($paixuname==3){
//	$sql="SELECT * FROM list ORDER BY sales DESC LIMIT $index,$num";
//}
//if($paixuname==4){
//	$sql="SELECT * FROM list ORDER BY sPrice DESC LIMIT $index,$qty";
//}

$res = $conn -> query($sql);
	

$arr = $res -> fetch_all(MYSQLI_ASSOC);
//
$sql2 = "SELECT * FROM list";

$res2 = $conn -> query($sql2);

$list = array(
	'data' => $arr, 
	'total' => $res2 -> num_rows,
	'page' => $page, 
	'num' => $num
);

echo json_encode($list, JSON_UNESCAPED_UNICODE);
?>