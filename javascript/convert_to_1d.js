/* Convert multidiamensinal array to 1D array */

/* Solution 1 */
arr = [1, 8, 3, 9, [5, [6, 7]]];
function convert_to_1d(arr, temp = []) {
  for (let i = 0; i < arr.length; i++)
    if (arr[i] instanceof Array)
      convert_to_1d(arr[i], temp);
    else
      temp.push(arr[i]);
  return temp;
}
console.log("Result = ", convert_to_1d(arr));

/* Solution 2 */
var convert_to_1d = (arr, temp=[]) => { 
  arr.forEach(function(ele){
    ele instanceof Array ? convert_to_1d(ele, temp) : temp.push(ele);
  });
  return temp;
}
console.log("Result = ", convert_to_1d(arr));