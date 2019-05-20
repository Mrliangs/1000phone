<?php
	//数值数组
	$arr = array(1,2,3,4);
	
	echo $arr[0];
	
	echo '<br>';
	 print_r($arr);
	 echo '<br>';
	 var_dump($arr); 
	 
	 
	 //循环
	 for($i=0;$i<count($arr);$i++){
	 	echo '<br>';
		 echo $arr[$i];
	 }
	 
	 //2.关联数组
	 $arr2=array(
	 	'name'=>'网二',
		'age'=>'18',
		'tel'=>121212
	 );
	
	var_dump($arr2);
	
	//
	echo $arr2['name'];
	
	//关联数组的循环
	foreach($arr2 as $key => $value){
		echo '<br>';
		echo $key.'='.$value;
	}
	

?>