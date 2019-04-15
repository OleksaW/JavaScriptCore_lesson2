/*1. Переписати функцію checkAge, щоб вона робила те ж саме, але без if, в один рядок. Зробіть два ЇЇ варіанти: 
b) Використовуючи оператор || */

function checkAge(age){
    return age > 18 || confirm('Do you have permission?');
}

console.log(checkAge(22));