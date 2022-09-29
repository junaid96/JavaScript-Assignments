var living = ["Grand mother","Aunt","Neighbour","Grand Father"];

living.splice(3,3); //Grand father has been deceased who can't be invited

console.log("Assalamu Alaikum Dear!",living[0],"we have arrange a dinner tonight, make sure to attend our family meetup after a long time." );
console.log("Assalamu Alaikum Dear!",living[1],",mom is seeking to meet you from couple of weeks, why not you come tonight at dinner at our home.");
console.log("Assalamu Alaikum Dear!",living[2],"there is a dinner tonight at out home, hope you're coming to have some good food.");

console.log(living[0],"can't make it to dinner.");

living.splice(0,1,"Uncle"); //because Grand Mother can't make it

console.log("Assalamu Alaikum Dear!",living[0],"we have arrange a dinner tonight, make sure to attend our family meetup after a long time." );
console.log("Assalamu Alaikum Dear!",living[1],",mom is seeking to meet you from couple of weeks, why not you come tonight at dinner at our home.");
console.log("Assalamu Alaikum Dear!",living[2],"there is a dinner tonight at out home, hope you're coming to have some good food.");