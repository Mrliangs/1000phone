/*
 百度面试题：

1.求总分
2.求最高分
3.求每一科的平均分
4.点击删除当行(做过)
5.点击可以复制当行(做过)
6.根据总分进行排序
7.根据内容创建新行(做过)
8.查询功能：多关键字、忽略大小写、模糊查询

 */
window.onload = function() {

	var table = getid('table');
	var tbodys = table.tBodies[0];
	//	var rows = tbodys.rows;//tbody所有的tr就被找到了
	//	var cels = rows[0].cells;//第一行所有的列
	var rows = tbodys.getElementsByTagName('tr'); //tbody所有的tr就被找到了：通过查找节点的方法得到的数组，叫做伪数组，具有数组的长度，但是不能使用数组的方法。
	var lg = getid('lg'); //语文
	var mt = getid('mt'); //数学
	var eg = getid('eg'); //英语
	var zf = getid('zf'); //总分
	var tex1 = getid('tex1');
	var tex2 = getid('tex2');
	var tex3 = getid('tex3');
	var tex4 = getid('tex4');
	var btn=getid('btn');
	console.log(tex1, tex2, tex3, tex4);
	var smscore = getid('smscore');
	var oRrs = tbodys.getElementsByTagName('tr');
	var cells = tbodys.getElementsByTagName('td');
//	var dels = document.getElementsByClassName('del');
	var dels=getclass('del');
	var clones = document.getElementsByClassName('clone');
	//点击事件
	smscore.onclick = function() {
		var te1 = tex1.value.trim();
		var te2 = tex2.value.trim();
		var te3 = tex3.value.trim();
		var te4 = tex4.value.trim();

		//判断
		if(te1 && te2 && te3 && te4) {
			var html = `<td></td>
					<td>${te1}</td>
					<td>${te2}</td>
					<td>${te3}</td>
					<td>${te4}</td>
					<td></td>
					<td class="del"><a href="javascript:;">删除</a></td>
					<td class="clone"><a href="javascript:;">复制</a></td>`;

			tbodys.innerHTML += html;

			//清空数据
			tex1.value = '';
			tex2.value = '';
			tex3.value = '';
			tex4.value = '';
			tex1.focus();
			del();
			total();
			clone();
			showIndex();
			update();
			

		} else {
			alert('请输入完整的内容');
		}

	}
	//	total() ;
	//	console.log(rows[0]);
	//1.求总分
	function total() {
		for(var i = 0; i < rows.length; i++) {
			//第五列 = 前三列相加
			var cel1 = rows[i].getElementsByTagName('td')[2].innerHTML * 1;
			var cel2 = rows[i].getElementsByTagName('td')[3].innerHTML * 1;
			var cel3 = rows[i].getElementsByTagName('td')[4].innerHTML * 1;

			rows[i].getElementsByTagName('td')[5].innerHTML = cel1 + cel2 + cel3;
		}
	}

	total();

	//2.求最高分:先排序再求最高分,要排序想到sort方法，但是伪数组无法使用，借助真数组去调用该方法

	//	var arr = [7, 9, 2, 6];
	//	arr.sort(function(a,b) {
	//		return a - b;//升序
	//	});

	

	function paixu(cels) {

		//创建真数组：因为伪数组不能调用数组的方法
		var arr = [];
		for(var i = 0; i < rows.length; i++) {
			arr.push(rows[i]); //循环将整个节点逐个存到数组arr中
		}

		//借助数组的sort进行排序
		arr.sort(function(a, b) { //a和b都是tr，想比较的是第五列
			var n1 = a.getElementsByTagName('td')[cels].innerHTML * 1;
			var n2 = b.getElementsByTagName('td')[cels].innerHTML * 1;
			return n2 - n1; //降序
		});

		//tbodys.appendChild()  父节点.appendChild(新节点) 从末尾添加新节点
		//父节点.appendChild(arr[i])  覆盖功能

		for(var i = 0; i < arr.length; i++) {
			tbodys.appendChild(arr[i]); //将排序好的内容重新渲染覆盖旧的内容，视觉效果就是排序
		}

		showIndex();
	}

	paixu(5); //默认：按总分进行排序

	//点击语文，就对语文成绩进行排序
	lg.onclick = function() {
		paixu(2); //单科排序
		var res = avg(2); //求平均分
		lg.innerHTML = lg.innerHTML + ' ' + res;
	}
	//点击数学，就对语文成绩进行排序
	mt.onclick = function() {
		paixu(3);
		var res = avg(3);
		mt.innerHTML = mt.innerHTML + ' ' + res;
	}
	//点击英语，就对语文成绩进行排序
	eg.onclick = function() {
		paixu(4);
		var res = avg(4);
		eg.innerHTML = eg.innerHTML + ' ' + res;
	}
	//点击总分，就对语文成绩进行排序
	zf.onclick = function() {
		paixu(5);
		var res = avg(5);
		zf.innerHTML = zf.innerHTML + ' ' + res;
	}

	//2.序号添加
	function showIndex() {
		for(var i = 0; i < rows.length; i++) {
			rows[i].getElementsByTagName('td')[0].innerHTML = i + 1;
		}
	}

	//4.求每一科的平均分:总分/个数
	function avg(cels) {
		var sum = 0;
		for(var i = 0; i < rows.length; i++) {
			sum += rows[i].getElementsByTagName('td')[cels].innerHTML * 1;
		}

		return(sum / rows.length).toFixed(2); //保留两位小数
	}
	
	console.log(paixu(2));
	//获取最高分
//	btn.onclick=function(){
//		max(paixu(2));
//	}

	//查询：多关键字 + 忽略大小写+模糊查询
	var search = getid('search');
	var tex = getid('tex');

	search.onclick = function() {
		//点击的时候查询
		find(tex.value);
		tex.value = '';
		tex.focus();
	}

	function find(str) {
		//str是表单输入的内容
		if(str.trim()) {
			//非空
			for(var i = 0; i < rows.length; i++) {
				//外循环：循环行 tr
				for(var j = 0; j < rows[0].cells.length; j++) {
					//内循环：循环列  td
					var cons = rows[i].cells[j].innerHTML.toLowerCase(); //任意单元格的内容
					var vals = str.toLowerCase(); //外部输入的关键字
					var arr = vals.split(' '); //以空格为切割点，把多个关键字切割变成数组  例如：陈 键 a  切割变成  ['陈','健'，'a']
					for(var k = 0; k < arr.length; k++) { //为了循环多关键字
						if(cons.indexOf(arr[k]) >= 0) { //忽略大小写+模糊查询+多关键字
							//任意一个单元格的内容如果等于表单的值，对应的行就是你要查找的
							css(rows[i], 'background', '#58bc58');
						}
					}

				}
			}
		} else {
			alert('请输入要查询的数据');
		}
	}

	//删除
	del();

	function del() {
		for(var i = 0; i < dels.length; i++) {
			dels[i].onclick = function() {
				var res = confirm('略');
				if(res) {
					tbodys.removeChild(this.parentNode);
					clone();
					update();
				}

			}
		}

	}

	//复制
	clone();

	function clone() {
		for(var i = 0; i < clones.length; i++) {
			clones[i].onclick = function() {
				//点击按钮，复制当行，插入末尾

				var newele = (this.parentNode).cloneNode(true);
				tbodys.appendChild(newele);
				update();
				clone();
				del();
				showIndex()

			}
		}
	}

	//隔行变色
	update();

	function update() {
		for(var i = 0; i < oRrs.length; i++) {
			//						var p=oRrs.getElementsByTagName('td');
			if(i % 2 == 0) {
				oRrs[i].style.background = 'blanchedalmond';
			} else {
				oRrs[i].style.background = 'brown';
			}
			//						color();
		}

	}
	
	//获取最高分
	

}