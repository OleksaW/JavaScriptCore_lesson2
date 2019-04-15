/*2). Створити об’єкт EmployeeSalaries із зарплатами працівників. Напишіть код, який виведе суму всіх зарплат працівників . Якщо об'єкт порожній, то результат/вивід повинен бути 0. */

var EmployeeSalaries = {Petrenko: 5000, Shevchenko: 6000, Daniluk: 5500};
var sum = 0;
for(var i in EmployeeSalaries){
    sum += EmployeeSalaries[i];
}
alert('The sum of employees\' salaries is ' + sum);