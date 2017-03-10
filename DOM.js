(function () {

var elems = document.getElementsByTagName("p"), //NodeList работает как массив
	classElems = document.getElementsByClassName("paragraph"),
	idElem = document.getElementById("for"),
	elemSelector = document.querySelector("p"),	//вытаскивает самый первый элемент
	elemSelectorAll = document.querySelectorAll ("p"),	// getElementsByTagName работает быстрее
	elemsInDiv = document.querySelectorAll("div p"),
	idElemSelector = document.querySelector("#for"); //getElementById так же работает быстрее
//-------------это примеры всех способов выбрать элементы в DOM.

// console.log (classElems);
// console.log (idElem);
// console.log (elemSelector);
// console.log (elemSelectorAll);
// console.log (elemsInDiv);
// console.log (idElemSelector);


// console.log (elems);

 for (var i = 0, len = elems.length; i < len; i++) {
 	// console.log (elems[i].tagName);
 	// console.log (elems[i].parentNode);
 	// console.log (elems[i].previousSibling.previousSibling);
 	// console.log (elems[i].nextSibling);
 	// console.log (elems[i].previousSibling.nodeName);
 	// console.log (elems[i].nodeType);
 	// console.log (elems[i].previousSibling.nodeType);

 	// if (elems[i].nodeType === 1) {
 	// 	console.log ('Узел элемента');
 	// }

 	// if (elems[i].previousSibling.nodeType === 3) {
 	// 	console.log ('Узел текста');
 	// }

 };

// console.log (document.querySelector("div").childNodes);
// console.log (document.querySelector("div").children);
// console.log (document.querySelector("div").lastChild);
// console.log (document.querySelector("div").firstChild);
// console.log (document.querySelector("div").innerHTML); // выводит все содержимое элемента в виде строки




}) ();