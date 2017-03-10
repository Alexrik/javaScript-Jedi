(function () {

	// var testFunc = function () {
	// 	alert ('click all document!');
	// };

	var changeColor = function (e) {
		eventsObj.preventDefault(e);

		var elem = eventsObj.getTarget(e),
			colorData = elem.getAttribute('data-color');

		//console.log (colorData);

		//с помощью этой фишки делаем код красивее
		if (colorData) {
			
			if (e.type === 'click') {
				document.body.className = "";

			} else if (e.type ==='mouseover') {
				document.body.className = colorData;
	
			}

			//document.body.className = colorData;
		}
		// if (elem.id === 'day') {
		// 	document.body.className = 'day';
		// } else if (elem.id === 'night') {
		// 	document.body.className = 'night';
		// }
	};


	eventsObj.addEvent(document, 'click', changeColor); //повесим событие на весь документ
	eventsObj.addEvent(document, 'mouseover', changeColor);


}) ();