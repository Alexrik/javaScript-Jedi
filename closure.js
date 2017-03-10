//-----------------у каждой функции есть свой объект переменных, который умирает вместе с функцией
var firstFunc = function () {
	var index = 5;
	var a = 10;
	var b = 20;

	return function () {
		return index;
	}
};

var secondFunc = function () {
	
	//var oldIndex = firstFunc ()();
	//console.log (firstFunc()());

	// if (index > oldIndex) {
	// 	alert ('bigger')
	// }
};

secondFunc ();



