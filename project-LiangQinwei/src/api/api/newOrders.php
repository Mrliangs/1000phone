<?php
/*
    点击加入购物车，先查询订单表，然后更新订单表
        get:
            gid:商品id
            num：商品数量
        返回：
            订单表的所有数量
 */

    //加入购物车，把数据写入订单表
    include 'connect.php';

    $num=isset($_GET['num']) ? $_GET['num'] : '1';
    $gid=isset($_GET['gid']) ? $_GET['gid'] : '1';

    //查询订单表是否有该gid商品
    $sql="SELECT num FROM orders WHERE gid='$gid';";
    $res=$conn->query($sql);
    $res2 = null;

    if($res->num_rows>0){
        $data = $res->fetch_all(MYSQLI_ASSOC);
        $gnum = $data[0]['num'];
        $num = $num + $gnum;
        $sql2="UPDATE orders SET num=$num WHERE gid=$gid;";
        $res2=$conn->query($sql2);
    }else{
        $sql3="SELECT * FROM  goodlist WHERE gid=$gid";
        $res3=$conn->query($sql3);
        if($res3->num_rows>0){
            $data3=$res3->fetch_all(MYSQLI_ASSOC);
            $gname = $data3[0]['name'];
            $gprice = $data3[0]['price'];
            $gimg1 = $data3[0]['img1'];
            $sql4="INSERT INTO orders(gid,name,price,img1,num) VALUES ('$gid','$gname','$gprice','$gimg1','$num');";
            $res2=$conn->query($sql4);
        }
    }
    if($res2){
        echo 1;
    }else{
        echo 0;
    }
    

?>