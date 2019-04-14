/*2. Написати браузерну програму, що буде виводити на екран найближче до 10 з двох чисел, записаних в змінні(prompt) m і n. Наприклад, серед чисел 8,5 і 11,45 найближче до десяти є 11,45. */
var a = prompt('Please, enter first number',8.5);
var b = prompt('Please, enter second number',11.45);
alert(Math.abs(10-a) < Math.abs(10-b)? a +' is closer to 10' :Math.abs(10-a) > Math.abs(10-b)? b +' is closer to 10': 'Both are equally close to 10' );
