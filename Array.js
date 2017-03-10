var arr = [1, 2, 155, 66, 65,'str',{}];

//var arr1 = new Array (1,2,'str'); долгий способ

// console.log (arr);
// console.log (arr1);

// console.log (arr [2]);

//arr[6] = 'six';

// console.log (arr[5]);

// console.log (arr.length);

// delete arr[1];

// console.log (arr);

// arr.splice(1, 1); // качественные метод удаления элементов массива

// arr.length = 100;
// arr.length = 2;
//console.log (arr);
arr[arr.length] = 'new'; // так же добавляет элемент в конец массива
// console.log (arr);
// console.log (arr.length);
//console.log (arr);

var matrix = [
	[1,2,3],
	[4,5,6],
	[7,8,9]
];

// console.log (matrix[2][2]);

var newArr = arr.concat (matrix); // конкатинирует массивы

// console.log (newArr);

//console.log (arr.join (', ')); быстрый способ превратить массив в строку

arr.push ('new2'); // добавляет новый элемент в конец массива

 // console.log (arr);
 // console.log (arr.length);

arr.pop (); // удаляет элемент в конце массива



arr.shift ('up_new'); // удаляет первый элемент массива

// console.log (arr);

arr.unshift ('up_new'); // добавляет элемент в начало массива

var reverseArr = arr.reverse(); //меняет элементы массива местами

//console.log (reverseArr);

//console.log (arr);

var sliced = arr.slice(1, 3); //вырезает кусок массива

//console.log (sliced);

// console.log (arr.sort()); //сортирует очень дерьмово

// console.log (arr.sort()); 


