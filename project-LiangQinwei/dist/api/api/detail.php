<?php
  include 'conn.php';
  $cjshu=$_POST['opt'];
  $sql="select * from xinxi where id= '$cjshu'";
  $res=$conn->query($sql);
  $arr=$res->fetch_all(MYSQL_ASSOC);
  echo json_encode($arr,JSON_UNESCAPED_UNICODE);
?>