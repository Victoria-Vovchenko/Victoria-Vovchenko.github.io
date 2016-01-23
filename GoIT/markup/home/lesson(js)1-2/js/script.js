// ЗАДАНИЕ №1  (функция возврщает в консоль число a в степени b)

var a = prompt ('Введите число');
var b = prompt ('Введите степень');

function pow (a, b) {
	var result = Math.pow(a, b);
	return result;
}

console.log (pow(a, b));
alert(pow(a, b));


// ЗАДАНИЕ №2   (ввод массива, ввод имени и сравнение имени с массивом)

var i = 0;
var nameArr = [];
while (i<5) {
var nameElement = prompt('Введите элемент массива (имя)');
nameArr.push(nameElement);
i++;
} 

ifUserName = false;


var userName = prompt('Введите Имя Пользователя');
 
for(var i = 0; i < 5; i++){
	if(userName === nameArr[i]){
     	ifUserName = true;
	}
}

 if(ifUserName == true){
	alert(userName + ', вы успешно вошли!');
 } else {
 	alert('Ошибка! Данного пользователя нет в системе.');
 }