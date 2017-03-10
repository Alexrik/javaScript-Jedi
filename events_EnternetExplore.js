//-----------------работа с InternetExplore или кросс-браузерные события в деле
(function () {

	var buttons = document.getElementsByTagName ('button');

	var changeColor = function (e) {

		eventsObj.preventDefault(e);

		var elem = eventsObj.getTarget(e);

		if (elem.id === 'day') {
			document.body.className = 'day';
		} else if (elem.id === 'night') {
			document.body.className = 'night';
		}
	};

	for (var i = 0, len = buttons.length; i < len; i++) {
		//buttons[i].attachEvent('onclick', changeColor);

		eventsObj.addEvent(buttons[i], 'click', changeColor);
		//eventsObj.removeEvent(buttons[i], 'click', changeColor);
		//buttons[i].detachEvent('onclick', changeColor);
	};


}) ();