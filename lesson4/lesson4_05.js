/*5. У три змінні a, b і c записані три дійсних числа. Створити програму, яка буде знаходити і виводити на екран речові корені квадратного рівняння ax2 + bx + c = 0, або повідомляти, що кореня немає. 
*/
var a = prompt('Please enter first number',1);
var b = prompt('Please enter second number',-2);
var c = prompt('Please enter third number',-3);
var D = b*b - 4*a*c;
var sD = Math.sqrt(D);
if(D < 0){
    alert('No roots');
} else if(D == 0){
    alert('The root is '+(-b + sD)/2*a);
} else{
    alert('First root is '+(-b + sD)/2*a+'. Second root is '+(-b - sD)/2*a);
}

