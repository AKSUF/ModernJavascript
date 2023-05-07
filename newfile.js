//array.find()
var numbers = [1, 2, 3, 4, 5, 6, 7, 8];
var result = numbers.find(function(currentValue, currentIndex, arr) {
    return currentValue > 4;
})
document.getElementById('remo').innerHTML = result;
class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    test() {
        console.log('hello');
    }
    exampleFunction() {
        letarray = [1, 2, 3, 4];
        Array.find(() => {
            this.test();
        })
    }
}
let student = new Student('sumit', 1);
student.exampleFunction();
document.getElementById('demo').innerHTML = student.exampleFunction();