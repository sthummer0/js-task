

/*Задание 7.
Дан массив.  Нужно вывести в консоль количество чётных и нечётных элементов в массиве. 
Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно. 
При выполнении задания необходимо учесть, что массив может содержать не только числа, но и, например, знаки, null и так далее.*/

let arr = [1, 3, 5, 7, 1, null, 2];
let countEven = 0;
let countOdd = 0;
let nullElement = 0;
let notNumber = 0;
let countZero = 0;

for (let i = 0; i < arr.length; i++) {
  if (typeof arr[i] == 'number') {
    if (arr[i] % 2 === 0 & arr[i] !== 0) {
      countEven += 1
    } else {
        if (arr[i] % 2 !== 0) {
          countOdd += 1
        } else {
            if (arr[i] === 0) {
              countZero +=1;
              nullElement = `Массив содержит ${countZero} нулевых элементов`;
            }
          }
        }
  } else {
      if (typeof arr[i] !== 'number') {
        notNumber = 'Массив содержит элементы не являющиеся числами'
      }
    }
 }
   
console.log(`Массив содержит ${countEven} чётных и ${countOdd} нечётных числа`)

if (nullElement !== 0) {
  console.log(nullElement)
}
if (notNumber !== 0) {
  console.log(notNumber)
}