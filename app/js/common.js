var ul = document.querySelector('ul');
var li = document.querySelectorAll('li');
var btn = document.querySelector('button');
btn.addEventListener('click',resetGame);
var colorArr = ['black','pink','red','orange','blue','aqua','green','yellow','black','pink','red','orange','blue','aqua','green','yellow'];
var shuffleArr = shuffle(colorArr);
var arr = [];
var arrWin = [];

var countColor = 0;
for(let i = 0;i < li.length;i++) {
	li[i].addEventListener('click',func);
	li[i].setAttribute('data-type',i);
}

	function func(e) {
		for(let i = 0;i < li.length;i++) {
		var attr = this.getAttribute('data-type');
		e.target.style.backgroundColor = shuffleArr[attr];
		this.removeEventListener('click',func)
		}
		countColor++;
		arr.push(this);
		if(arr[0].style.backgroundColor == arr[1].style.backgroundColor) {
		arrWin.push(arr[0]);
		arrWin.push(arr[1]);
		arr = [];
		} else if (arr[0] != arr[1]) {
			setTimeout((function(){
				arr[0].style.backgroundColor = 'grey';
				arr[1].style.backgroundColor = 'grey';
				arr[1].addEventListener('click',func);
				arr[0].addEventListener('click',func);
				arr = [];
				countColor = 0;
			} ),300)
		}
		if(arrWin.length == 16) {
				setTimeout((function() {
					alert('Вы Выиграли!')
					arrWin = []
				}),700 )
		}
	}

function shuffle(arr) {
	let arr2 = [];
	let firstArr = arr.length;
	for(let i = 0;i < firstArr;i++) {
	var rand = Math.floor(Math.random() * (arr.length -1 + 1));
	arr2.push(arr[rand]);
	arr.splice(rand,1);
	}
	return arr2;
}

function resetGame() {
	var colorArr = ['black','pink','red','orange','blue','aqua','green','yellow','black','pink','red','orange','blue','aqua','green','yellow'];
	shuffleArr = shuffle(colorArr);
	for(let i = 0;i < li.length;i++) {
		li[i].addEventListener('click',func);
		li[i].style.backgroundColor = 'grey';
	}
}



