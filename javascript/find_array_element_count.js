/** 
Problem:
You have a javascript array that likely has some duplicate values and you would like a count of those values.
var arr = new Array("dog", "dog", "cat", "buffalo", "wolf", "cat", "tiger", "cat");
Output:
{dog: 2, cat: 3, buffalo: 1, wolf: 1, tiger: 1}
*/

arr = [1,4,3,6,9,7,6,1,4,3,3,3];
result = {};

for(i=0; i< arr.length; i++) {
  result[arr[i]] = (result[arr[i]] || 0) + 1;
}
console.log(result);
