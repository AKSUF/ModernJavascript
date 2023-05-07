//ternary operator
var age = 20;
let adult = "Above 18"
let teege = "This is before 18"
let boy = "this is boy age"
let child = "This is child age"


var type = (age >= 18) ? adult : (age < 10) ? boy : child;

var a = 6;
var access = a > 5;
document.getElementById('remo').innerHTML = access;



document.getElementById('demo').innerHTML = type;