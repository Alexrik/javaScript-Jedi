function funcDec (a, b) {

	return a + b;
}

// console.log (funcDec ('str', 'str2'));

var funcExp = function(a, b) {
	return a + b;
};

// console.log (funcExp (4, 5));


function func1() {
	function funcExample() {
		return 'one';
	}

	var variable = funcExample();

	function funcExample() {
		return 'two';
	}

	return variable;
};

 function func2() {
 	var funcExample = function () {
 		return 'one';
 	}

 	var variable = funcExample();

 	var funcExample = function () {
 		return 'two';
 	}

 	return variable;
 };

// console.log (func1());
// console.log (func2());

//----------------------------------Функции обратного вызова

var func = function (callback) {
	var name = 'Nick';
	return callback(name);
}

// console.log (func (function (n)  {
// 	return 'Hello ' + n;
// }) );

//-----------------------------------возвращение функции

// var func1 = function() {
// 	return function () {
// 		console.log ('hello');
// 	};
// };

// func1 () ();


 var prop = 1;
// (function () {
// 	var prop2 = 2;
// 	console.log ('привет от анонимной самовызывающейся функции')
// }) ();

//console.log (prop2); внутри анонимной функции интерпритатор не видит код

// --------------пример как внедрить внешнюю переменную в анонимную функцию
// var module = (function (pro) {
// 	console.log (pro);
// 	var prop2 = 2;
// 	console.log ('привет от анонимной самовызывающейся функции')
// }) (prop);


var funcArgs = function() {
	var i,
		sum = 0;

	for (i = 0; i < arguments.length; i++) {
		sum += arguments[i];
	};

	return sum;
};

//console.log (funcArgs(1,2,3,4,5,6,7));
