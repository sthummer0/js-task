/* Напишите программу, которая работала бы следующим образом: в prompt вводится значение. 
С помощью унарного плюса необходимо преобразовать его  в число, 
затем проверить с помощью typeof, принадлежит ли оно к множеству Number.
Если это число, то вывести в консоль чётное оно или нечётное.
Если передано не число, выведите: «Упс, кажется, вы ошиблись».

*NaN, хоть и относится к типу Number, числом не является. 
Добавьте отдельную проверку для этого значения. */

let value = +prompt('Введите значение');
  
  if (isNaN(value) || typeof value !== "number" || value === 0 ) {
        console.log('Упс, кажется Вы ошиблись') 
    } else if(value % 2 === 0) {
        console.log('Введено четное число')
    } else {
        console.log('Введено нечетное число')
    } 
