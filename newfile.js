 

var javascript = {
     name: 'Javascript',
     libraries: ['React', 'Angular', 'Vue'],
     printLibraries: function() {
         var self = this;
         var output = "";
         this.libraries.forEach(function(a) {
             output += `${self.name} loves ${a} <br>`;
         })
        return output;
    }}

 document.getElementById('demo').innerHTML = javascript.printLibraries();

//now we do this task with arrow function

var javascript = {
    name: 'Javascript',
    libraries: ['React', 'Angular', 'Vue'],
    printLibraries: function() {
        var output = "";
        this.libraries.forEach((a) => { output += `${this.name} loves ${a}\n` });
        return output;
    }
}
console.log(javascript.printLibraries());
document.getElementById('demo').innerHTML = javascript.printLibraries();
