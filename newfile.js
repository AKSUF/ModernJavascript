//array.prototype
var numbers = [1, 2, 3, 4, 5, 6, 10];
var result = numbers.find(function(currentVallue) {
    return currentVallue > 4;
});
console.log(numbers);
console.log(result);