var person = "muhammad junaid" ;
var x = person.toLowerCase();
console.log (x);
var y = person.toUpperCase();
console.log (y);

var newStr = person.split(' ')
   .map(w => w[0].toUpperCase() + w.substring(1).toLowerCase())
   .join(' ');
console.log(newStr);