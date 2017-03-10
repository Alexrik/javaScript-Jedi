// ------------в javascript существует глобальный объект window
// ------------всегда обозначать var!!!!!

var oneOne = 1;

globalll = 2444;

var outer = function () {

	var arr1 = [1,2,3];

	for (var i = 0; i < arr1.length; i++) {
		//console.log (i);
		inner();

		//console.log ('first cicle');
	}
};

var inner = function () {
	var arr2 = [4,5,6];
	
	for (var i = 0; i < arr2.length; i++) {
		// console.log (i);
		// console.log ('second cicle');
	}
};

outer();

//------------------суть цепочки областей видимости
var k = 4;
console.log (k);
var outerScope = function () {
	//console.log (k);
	var k = 8;
	console.log (k);

	var innerScope = function () {
		
		var k = 12;
		console.log (k);

	};

	innerScope();
	console.log (k);
};

outerScope();

//--------------------каждая новая функция - новая область видимости