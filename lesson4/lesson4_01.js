/*1. Написати браузерну програму, що перевіряє і повідомляє на екран, чи є ціле число записане(prompt) в змінну n , парним або непарним.*/
var n = prompt('Please, enter integer', 5);
alert(n%2 == 0? 'It\'s even number': 'It\'s odd number');