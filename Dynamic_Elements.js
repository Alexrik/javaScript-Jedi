(function () {

var doc = document; //в javaScript существует понятие кэширования переменных

var elem = doc.createElement("p"), //создаем узел элемента
	// content = document.createTextNode("<strong>Dynamic element</strong>"), //создаем тестовый узел
	wrappedP = doc.getElementById ("wrapper");

elem.innerHTML = '<strong>Dynamic element</strong>'; //добавляет динамично свойство элемента

//wrappedP.parentNode.removeChild(elem); //удаляет выбранный элемент
wrappedP.parentNode.removeChild(wrappedP); //так же можно удалить эелемент созданный не динамично

// elem.appendChild(content);
// elem.setAttribute('id', 'mrDynamic');
elem.id = 'mrDynamic'; // простой способ добавить id к элементу

// wrappedP.parentNode.appendChild(elem); создает новый элемент
// wrappedP.parentNode.insertBefore(elem, wrappedP); создает элемент между выбранными
// wrappedP.parentNode.replaceChild(elem, wrappedP);// заменяет элемент вместо выбранного

// console.log (elem);
// console.log (wrappedP);
// console.log (content);


}) ();