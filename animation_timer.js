(function () {

	var delay = 40,
		i = 0;
	var startTimer = function (pixels) {
		// console.log ('startTimer ' + (i + 1) + ' work');

		var elem = document.getElementById ('circle'),
			bottom = elem.offsetTop;

			//console.log (bottom);

		if ((pixels > 0 && bottom > 250) || (pixels < 0 && bottom < 50)) {
			clearInterval(timer);

			timer = setInterval (function () {
				startTimer(pixels * -1);
			}, delay);
		}


		elem.style.top = bottom + pixels +'px';
		i++;
		//if (i < 10) {
		 	//console.log ('startTimer ' + (i + 1) + ' work');
		 	//setTimeout (startTimer, delay);		

		 	
		//} else {
			//clearInterval(timer);
		//}

		
	};

	var timer = setInterval (function () {
				startTimer(20);
			}, delay);

	//var timer = setTimeout (startTimer, delay); //задает таймер принимающий 2 значения - элемент и время (мс)

	//alert ('Alert!');

	//clearTimeout (timer); отменяет таймер

}) ();