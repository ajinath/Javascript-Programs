// JavaScript Array reduce() Method
var numbers = [1,2,3,4,5,6,7,8,9,10];

// Using ES6
console.log("Sum = ", numbers.reduce((total, num) => total + num, 0));

// Using Javascript
console.log("Sum = ", numbers.reduce(function(total, num){
  return total + num
}, 0));

