(function () {

	var doc = document;
	var div = doc.getElementById('test');
	var	style = div.style;

		// style.color = "red";
		// style.backgroundColor = "black";
		// style.border = "1px solid blue";
		// style.padding = "3px"; 
		//никогда так не делать, трудозатратно!
	//console.log (div);

	// div.className = " css-class css-class-new "; // таким образом можно добавлять сколь угодно классов
	// //div.className = ""; чтобы все убрать, нужно задать пустую строку
	// div.className = div.className.replace(" css-class-new", ""); // убирает определенный класс


	//-------------------------------------новый способ добавления класса (говорят не работает на IE XD)
	// div.classList.add('css-class');
	// div.classList.add('css-class-new');

	// //div.classList.remove('css-class');
	// div.classList.toggle('css-class');




	

}) ();