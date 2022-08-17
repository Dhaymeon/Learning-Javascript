var x = (4 > 2) && (6 < 73);
console.log(x); //the &&(AND) operator returns "true" if both  boolean 
               //expressions are true and false if one or both are false.

var y = (6 > 73) || ( 7 < 12);
console.log(y) //the ||(OR) operator returns "true" if one or both of the
              //boolean expressions are true and false if both are false.

// Conditional or Ternary Operators assign a value to a variable based on a condition.
// code syntax:   variable = (condition) ? value1 : value2
let age = 19
var isAdult = (age <= 18 ) ? 'too young' : 'old enough'
console.log(isAdult)