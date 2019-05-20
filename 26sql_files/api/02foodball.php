<?php
	/*
	 	需求：接收前端的page和num。根据需求切割json数据传给前端
	 	
	 		* 接收前端的page和num
	 		* 硬盘文件的读取
	 		* 切割数据，做成字符串传给前端
	 	
	 	知识点：array_slice(数组，起始下标，条数) 从数组中取出一段
	 		* 参数一：数组名
	 		* 参数二：起始下标
	 		* 参数三：条数
	 		* array_slice($arr,0,5):获取数组$arr下标从0开始后五条数据，下标0-4
	 		* array_slice($arr,5,5):获取数组$arr下标从5开始后五条数据，下标5-9
	 		
	 	算法：
	 		* 两个数据  page=1  num=5
	 		 page   num   index(起始下标，要求的量)   内容content
	 		  1      5     0                          0-4
	 		  2      5     5                          5-9
	 		  3      5     10                         10-14
	 		  4      5     15
	 		公式：  (page - 1) * num = index
	*/
	
	//1.接收前端的page和num
	$page = isset($_POST['page']) ? $_POST['page'] : '';
	$num = isset($_POST['num']) ? $_POST['num'] : '';
	
//	echo $page,$num;
	
	//2.硬盘文件的读取
	
	//文件路径
	$path = 'football.json';
	
	//打开文件
	$file = fopen($path,'r');
	
	//读取内容:字符串
	$content = fread($file, filesize($path));//读取json的全部数据存到php接口
	
	//把字符串转成对象
	$arr = json_decode($content,true);//[{},{},{}]
	
//	var_dump($arr);
	
	//3.切割数据，做成字符串传给前端（重点）
	//经过array_slice()方法，得到的还是数组
	$newarr = array_slice($arr,($page - 1) * $num,$num);
	
//	var_dump($newarr);

	//把数据做成字符串传给前端
//	echo json_encode($newarr,JSON_UNESCAPED_UNICODE);
	
	//把要传给前端的数据，做成关联数组，就可以传多点内容
	$list = array(
		'total' => count($arr),//总条数
		'data' => $newarr,//子数组：根据前端需求切割得到的子数组
		'page' => $page,
		'num' => $num
	);
	//把数据做成字符串传给前端
	echo json_encode($list,JSON_UNESCAPED_UNICODE);
?>