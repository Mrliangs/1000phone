<?php
//多维数组
$goods = array();
$name = array('梨子', '苹果', '橙子', '菠萝', '葡萄', '橘子', '水蜜瓜', '西红柿', '杨桃', '香蕉');
$price = array(10, 2, 12, 34, 3, 412, 34, 12, 312, 11);
$color = array('红红', '黑色', '白色', '黄色', 'lanse', 'hahaha', '金色', 'lvse', 'blue', 'yuse');

for ($i = 0; $i < 50; $i++) {
	$good = array(
	'name' => $name[array_rand($name)], 
	'price' => $price[array_rand($price)],
	 'color' => $color[array_rand($color)]
	 );
	$goods[] = $good;
}

echo '<br>';
echo json_encode($goods,JSON_UNESCAPED_UNICODE);
echo var_dump($goods);
?>