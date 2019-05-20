<?php
	
	//获取前端传来的id。读取硬盘文件数据，做修改
	
	//获取前端传来的id
	$id = isset($_POST['cid']) ? $_POST['cid'] : '';
	
//	echo $id;//检测前端数据
	
	//1.文件路径
	$path = 'weibo.json';
	
	//2.打开文件
	$file = fopen($path,'r');//只读模式
	
	//3.读取内容:读出来的内容是字符串，把硬盘文件的数据读取到接口这里了(拷贝内容到php文件这里)，可以点击加一
	$content = fread($file,filesize($path));//参数一：文件  参数二：长度，字节为单位
	
	//4.将字符串转成对象：方便遍历数组做比较
	$arr = json_decode($content,true);//默认是true：[{},{},{}] false:{{},{},{}}
	
//	echo $content;
//	var_dump($arr);

	//5.循环数组，判断点击哪条数据，哪条数据的点赞值加一
	for($i = 0; $i < count($arr); $i++) {
		if($arr[$i]['id'] == $id) {
			//如果传过来的id值，和第i条数据的id值一样，证明第i条数据，就是想要修改的数据
			$arr[$i]['good']++;
			echo json_encode($arr[$i],JSON_UNESCAPED_UNICODE);
		}
	}
	
	//6.将在php改好的数据，覆盖json文件，保证json是最新的数据(文件的写入)
	$file = fopen($path,'w');//将文件的只读模式，改成可写入的模式(覆盖)
	
	//文件的写入：将字符串写入文件
	fwrite($file,json_encode($arr,JSON_UNESCAPED_UNICODE));
	
	fclose($file);
	
?>