/* Convert multidiamensinal array to 1D array */

arr = [1, 8, 3, 9, [5, [6, 7]]];
temp = []

function convert_to_1d(arr) {
  for (let i = 0; i < arr.length; i++)
    if (arr[i] instanceof Array)
      convert_to_1d(arr[i]);
    else
      temp.push(arr[i]);
  return temp;
}
console.log("Result = ", convert_to_1d(arr));
