//var obj = new Object(); -- useless

var obj = {
	sd : 'str',
	func : function() {
		console.log (this);
	}
};

//var prop = 'func'; 
// переменная используется для того, чтобы достать с объекта то или иное свойство...
//console.log (obj[prop]);

//console.log (typeof obj.sd);//в другом случае используем точечную нотацию

//console.log (obj.fff || 'name');//при несущ свойстве, задать его можно через ||

//obj.ddd = 'gag 9';//добавление свойства
//obj.sd = 'banan'; //изменение сущ свойства


var a = {prop : 1}, b = {prop : 2}, c = {prop : 3};
a = b = c = {prop : 'allTheSame'};
//console.log (a, b, c);

var y = obj;

//console.log (y.sd); // объекты всегда передаются по ссылкам

// delete obj.sd

// console.log (y);

//obj.func();

var MYAPP = { 

};