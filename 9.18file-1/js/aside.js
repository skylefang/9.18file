// 第一种方法通过操作lis使其对应的item出来
/*window.onload=function(){
	let aside = document.getElementsByClassName('ban4')[0];
	let lis = aside.getElementsByTagName('li');
	let items = document.getElementsByClassName('item');
	for(let i=0;i<lis.length;i++){
		lis[i].onmouseover=function(){
			items[i].style.display='block';
		}
		lis[i].onmouseout=function(){
			items[i].style.display='none';
		}
	}
}*/
// 第二种方法 通过类名操作
/*window.onload=function(){
	let aside = document.getElementsByClassName('ban4')[0];
	let lis = aside.getElementsByTagName('li');
	let items = document.getElementsByClassName('item');
	for(let i=0;i<lis.length;i++){
		lis[i].onmouseover=function(){
			items[i].className = 'item block';
		}
		lis[i].onmouseout=function(){
			items[i].className = 'item';
		}
	}
}*/
// 第三种方法 通过this，放到哪个lis上就让哪个item出来
window.onload=function(){
	let aside = document.getElementsByClassName('ban4')[0];
	let lis = aside.getElementsByTagName('li');
	for(let i=0;i<lis.length;i++){
		lis[i].onmouseover=function(){
			let items=this.getElementsByClassName('item')[0];
			items.className='item block';
		}
		lis[i].onmouseout=function(){
			let items=this.getElementsByClassName('item')[0];
			items.className='item';
		}
	}
}
