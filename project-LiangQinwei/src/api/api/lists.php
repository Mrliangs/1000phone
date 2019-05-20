<?php
include 'conn.php';

$page = isset($_POST['page']) ? $_POST['page'] : '';
//$num = isset($_POST['num']) ? $_POST['num'] : '';
//$paixuname=isset($_GET['paixu']) ? $_GET['paixu'] : '7';
$num = 28;
$index = ($page - 1) * $num;

$sql = "SELECT * FROM list LIMIT $index,$num";


$res = $conn -> query($sql);

$arr = $res -> fetch_all(MYSQLI_ASSOC);


echo json_encode($arr, JSON_UNESCAPED_UNICODE);
?>