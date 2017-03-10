
//primary types
var myNum = 23 + 34,
	myString = "string",
	myBool = true,
	myNull = null,
	myUndef = undefined;

/*console.log (typeof myNum);
console.log (typeof myString);
console.log (typeof myBool);
console.log (typeof myNull);
console.log (typeof myUndef);*/

//object types
var obj = {name: "snorki"},
	array = [1, 2, 3],
	regexp = /w+/g,
	func = function(){};

/*console.log (typeof array);
console.log (typeof regexp);
console.log (typeof func);*/

//Обертки
//console.log (typeof String ('1234') );
//console.log ( new String ('1234') );

var num = Number(124);
num.prop = 'строка в числе';
var numObj = new Number(124);
numObj.prop = 'строка в числе';

//console.log ( typeof num.toString() );
//console.log ( num );

//console.log ( typeof numObj.toString () );
//console.log ( numObj );


