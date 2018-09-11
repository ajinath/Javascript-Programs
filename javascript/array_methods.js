/* Array Methods 
1. concat()	 - Joins two or more arrays, and returns a copy of the joined arrays
2. copyWithin - The copyWithin() method copies array elements within the array, to 
and from specified positions. */

  var fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi", "Papaya"];
  console.log("Result =", fruits.copyWithin(2,0,2));
// Result =  Banana,Orange,Banana,Orange,Kiwi,Papaya
/*
3. entries() - Create an Array Iterator object, with key/value pairs for each item in the array 
*/
  var fruits = ["Banana", "Orange", "Apple", "Mango"];
  result = fruits.entries();
/*
  methods
    result.next().value - [0, "Banana"]
    result.next().done - false/true

4. every() - check every array element pass a test */
  var ages = [32, 33, 16, 40];
  ages.every((age) => age > 18) // false
  ages.every((age) => age < 15) // true
/*
5. fill() - Fill the array with static value 
  array.fill(value, start, end) */
  var fruits = ["Banana", "Orange", "Apple", "Mango"];
  fruits.fill("Kiwi");
  fruits.fill("Kiwi", 0, 1); // Replace only the first element
  // RESULT - Kiwi,Kiwi,Kiwi,Kiwi
/*  
6. filter() - The filter() method creates an array filled with all array elements 
  that pass a test (provided as a function).
*/ 
  var ages = [3, 10, 28, 20];
  ages.filter((age) => age > 18 ) // return [28, 20]
/* find()	- Returns the value of the first element in an array that pass a test */
  ages.find((age) => age > 18 ) // return 28