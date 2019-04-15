/*2. Переписати функцію min() яка повертає найменше з чисел які будуть переданій їй як вхідні параметри. Число вхідних параметрів ми не знаємо.*/


function min(){
    var min = Number.POSITIVE_INFINITY;
    for(var i = 0; i < arguments.length; i++)
        if(arguments[i] < min) min = arguments[i];
    return min;
}
var largest = min(1,3,10,55,135,89,14,-8,78,56,-34,45);
console.log(largest);