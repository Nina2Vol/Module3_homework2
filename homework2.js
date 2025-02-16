document.addEventListener('DOMContentLoaded', function () {
// задача 1 //
const age = prompt("Введите ваш возраст:");
if (age < 65) {
    console.log("Вам ещё рано на пенсию");
} 
else {
    console.log("Поздравляем с пенсионным возрастом!");
}

// задача 2 //
const num1 = prompt("Введите первое число:");
const num2 = prompt("Введите второе число:");

if (num1 > num2) {
    console.log("Первое число больше");
} 
else if (num1 < num2) {
    console.log("Второе число больше");
} 
else {
    console.log("Числа равны");
}

    
// задача 3 //
const number = prompt("Введите число:");
if (number % 2 === 0) {
    console.log("Это чётное число");
} 
else {
    console.log("Это нечётное число");
}


})