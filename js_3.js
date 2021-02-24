/* Дана строка. Необходимо вывести в консоль перевёрнутый вариант. 
Например, "Hello" -> "olleH" */


let str = prompt ('Введите слово или фразу');

let reverse = str.split('').reverse().join('');

console.log('Оригинальная строка ' + str)

console.log('Перевернутая строка ' + reverse)