var eventsObj = {
	addEvent: function (el, type, fn) {
		if (typeof addEventListener !== 'undefind') {
			el.addEventListener(type, fn, false);
		} else if (typeof attachEvent !== 'undefind') {
			el.attachEvent(type,fn);
		} else {
			el['on' + type] = fn;
		}
	},

	removeEvent : function (el, type, fn) {
		if (typeof removeEventListener !== 'undefind') {
			el.removeEventListener(type, fn, false);
		} else if (typeof detachEvent !== 'undefind') {
			el.detachEvent(type,fn);
		} else {
			el['on' + type] = null;
		}		
	},

	getTarget: function (event) {
		if (typeof event.target !== 'undefind') {
			return event.target;
		} else {
			return event.srcElement;
		}
	},

	preventDefault: function (event) {
		if (typeof event.preventDefault !== "undefind"){
			event.preventDefault();
		} else {
			event.returnValue = false;
		}
	}
};