var statement; //инструкция 
statement = 5+2; //выражение
var str = 'dfgsdfg'; //литерал

//----------------------------------------------------------------------ОПЕРАТОРЫ

//---------------------------------арифметические (основн)

/*2+3 сложение
5-4 вычитание
2*2 умножение
6/2 деление
5%2 остаток от деления

2+3*5
= присваивание*/

var i = 1;

//console.log ( ++i ); //инкримент
//console.log ( --i );

//---------------------------------сравнение
var a = 4, b = 5;

/*a < b;
a > b;
a >= b;
a <= b;
a == b;
a != b;*/


//---------------------------------условные
var age = 11;

/*if (a < b) {
	console.log ('Nice');
} else {
	console.log ('bad');
}*/

/*(age === 18) ? alert ('adult') : 
		      (age === 21) ? alert ('beer?') :
			  (age === 24) ? alert ('whiskey?') :
			  (age > 24) ? alert ('old') :
			  			   alert ('kid');*/
			  
//---------------------------------логические

var transport = 'legs';

// ||-или
// && - и
// ! - не

/*(age >= 18 && age <= 50) ? alert ('adult') : 
						   (age > 50) ? alert ('old') : 
						   				alert ('kid');*/

//(transport === 'avto' || transport === 'bus') ? alert ('im home!!') : alert ('bad');

//---------------------------------побитовые
