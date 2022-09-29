//Muhammad Junaid - 09/29/2022 - 08:26 am
//In the following program we're manipulate our text into Upper Case, Lower Case and Title Case.
var person = "muhammad junaid" ;
var x = person.toLowerCase();
console.log (x);
var y = person.toUpperCase();
console.log (y);

var newStr = person.split(' ')
   .map(w => w[0].toUpperCase() + w.substring(1).toLowerCase())
   .join(' ');
console.log(newStr);

//Muhammad Junaid - 09/29/2022 - 08:26 am
//In the following Program we're using arithmetic operations and print their outputs
console.log(5 + 3)
console.log(10 - 2)
console.log(2 * 4)
console.log(16 / 2)