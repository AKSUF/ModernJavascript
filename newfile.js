//ruthy or falsy value
//if explicitly false,explicitly zero,blan or empty string,undifiend,not null
//false,0,"",null,undefiend,Nan if not then truthy
// var myVar = "test"
var myVar = [];
// var myVar = ""
if (myVar) {
    document.getElementById('demo').innerHTML = "This is true";
} else {
    document.getElementById('demo').innerHTML = "This is false";

}