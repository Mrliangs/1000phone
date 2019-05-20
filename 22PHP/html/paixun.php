<?php
header('content-type:text/html;charset=utf-8');

echo "<pre>";
//-无限级排序,自己优化改良的,清除上次调用此函数后留下的静态变量的值

$arr = array( array('id' => 2, 'cname' => '分类2', 'parent_id' => 1), 
		array('id' => 9, 'cname' => '分类9', 'parent_id' => 8), 
		array('id' => 1, 'cname' => '分类1', 'parent_id' => 0), 
		array('id' => 7, 'cname' => '分类7', 'parent_id' => 0), 
		array('id' => 3, 'cname' => '分类3', 'parent_id' => 2), 
		array('id' => 4, 'cname' => '分类4', 'parent_id' => 0), 
		array('id' => 6, 'cname' => '分类6', 'parent_id' => 5), 
		array('id' => 8, 'cname' => '分类8', 'parent_id' => 7), 
		array('id' => 5, 'cname' => '分类5', 'parent_id' => 4));

// 根据子类id 找所有父类
function _getParent($data, $son_id, $level = 0, $isClear = true) {
	//声明一个静态数组存储结果
	static $res = array();
	//刚进入函数要清除上次调用此函数后留下的静态变量的值，进入深一层循环时则不要清除
	if ($isClear == true)
		$res = array();
	foreach ($data as $v) {
		if ($v['id'] == $son_id) {
			$v['level'] = $level;
			$res[] = $v;
			_getParent($data, $v['parent_id'], $level - 1, $isClear = false);
		}
	}
	return $res;
}

print_r(_getParent($arr, 6));
echo "<hr color='red'>";
// 根据父类id找所有子类
function _getSon($data, $p_id = 0, $level = 0, $isClear = true) {
	//声明一个静态数组存储结果
	static $res = array();
	//刚进入函数要清除上次调用此函数后留下的静态变量的值，进入深一层循环时则不要清除
	if ($isClear == true)
		$res = array();
	foreach ($data as $v) {
		if ($v['parent_id'] == $p_id) {
			$v['level'] = $level;
			$res[] = $v;
			_getSon($data, $v['id'], $level + 1, $isClear = false);
		}
	}
	return $res;
}

print_r(_getSon($arr, 0));
echo "<hr color='red'>";
