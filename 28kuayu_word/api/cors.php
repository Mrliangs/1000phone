<?php
	$origin = $_SERVER['HTTP_ORIGIN'];//不需要你传
	//数据在1809服务器里面
	//运行1811服务器访问该文件
    $allow_origin = array(  //只要是这里的设置过的路径，这个域名下面所有文件都可以访问这个接口
        'http://openapi.tuling123.com/openapi/api/v2'
    );  

    if(in_array($origin, $allow_origin)){  
        header('Access-Control-Allow-Origin:'.$origin);  
    }  
    
    echo 'hello1812';
?>