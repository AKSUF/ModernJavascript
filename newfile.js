// //implicit bindingv
// var sakib = {
//     name: 'Sakib',
//     age: 35,
//     printPalyName: function() {
//         console.log(this.name);
//     }
// }
// sakib.printPalyName();

// document.getElementById('demo').innerHTML = sakib.name + sakib.age;
// var printPlayerNameFunction = function(obj) {
//     obj.printPlayerName = function() {
//         console.log(this.name);
//     }
// }
// var sakib = {
//     name: 'Sakib',
//     age: 35
// };
// var tamim = {
//     name: 'tamim',
//     age: 35
// };

// let a = printPlayerNameFunction(sakib);
// let b = printPlayerNameFunction(tamim);
// document.getElementById('demo').innerHTML = sakib.name + sakib.age + tamim.name + tamim.age;


//------------------------------------------------------------

//implicity function
// var Person = function(name, age) {

//     return {
//         name: name,
//         age: age,
//         printName: function() {
//             console.log(this.name);
//         }
//     }
// }

// var sakib = Person('Sakib', 35);


// document.getElementById('demo').innerHTML = sakib.name;

//-----------------------------------------------var Person = function(name, age) {
// var Person = function(name, age) {
//     return {
//         name: name,
//         age: age,
//         printName: function() {
//             console.log(this.name);
//         },
//         father: {
//             name: 'Mr.X',
//             printName: function() {
//                 console.log(Person.name);
//             }
//         }
//     }
// }
// var sakib = Person('Sakib', 35);
// sakib.father.printName();


//.......................................................

// var printName = function(v1, v2, v3) {
//     console.log(`${this.name} is ${v1},${v2},${v3}`)
// }

// var sakib = {
//     name: 'Sakib',
//     age: 35,
// }

// var v1 = 'a programmer';
// var v2 = 'a musician';
// var v3 = 'an athlete';

// var v = [v1, v2, v3]

// console.log(v)
// printName.call(sakib, v);

// document.getElementById('demo').innerHTML = sakib.name + v;
//..............................................................
// var printName = function(v1, v2, v3) {
//     console.log(`${this.name} is ${v1},${v2},${v3}`)
// }

// var sakib = {
//     name: 'Sakib',
//     age: 35,
// }

// var v1 = 'a programmer';
// var v2 = 'a musician';
// var v3 = 'an athlete';




// var newFunc = printName.bind(sakib, v1, v2, v3);
// newFunc();
// document.getElementById('demo').innerHTML = sakib.name + v1 + v2 + v3;

//..........................................
// function Persion(name, age) {
//     this.name = name;
//     this.age = age;

// }
// var sakib = new Persion('Sakib', 35);
// document.getElementById('demo').innerHTML = sakib.name;

//.....................................

var printName = function() {
    console.log(this.name);
};

var sakib = {
    name: 'Sakib',
};
printName.call(sakib);