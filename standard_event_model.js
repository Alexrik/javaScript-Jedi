(function () {

	// var el = document.getElementById('box');

	// el.onclick = function () {
	// 	this.style.backgroundColor = "yellow";
	// }; // СТАРЫЙ обработчик событий

	var buttons = document.getElementsByTagName ('button');

	var changeColor = function (e) {
		// console.log (e.type);
		// console.log (e.target);
		// console.log (e.currentTarget);
		// console.log (this);

		e.preventDefault(); //отключает ссылки (полезен для Ajax запросов)



		if (this.id === 'day') {
			document.body.className = 'day';
		} else if (this.id === 'night') {
			document.body.className = 'night';
		}
	};

	var sayHi = function () {
		alert ('Hello! Master Jedi');
	};

	//событие сменяющее день и ночь (минус в том, что невозможно написать второй раз bottons.onclick)

	// for (var i = 0, len = buttons.length; i < len; i++) {
	// 	buttons[i].onclick = function () {
	// 		if (this.id === 'day') {
	// 			document.body.className = 'day';
	// 		} else if (this.id === 'night') {
	// 			document.body.className = 'night';
	// 		}
	// 	};
	// };
	for (var i = 0, len = buttons.length; i < len; i++) {

		var html = document.getElementsByTagName ('html') [0],
			google = document.getElementById('google');
			//console.log (google);

		html.addEventListener('click', changeColor, false);
		google.addEventListener('click', changeColor, false);

		buttons[i].addEventListener('click', sayHi, false);
		buttons[i].removeEventListener('click', sayHi, false); 


	};


}) ();