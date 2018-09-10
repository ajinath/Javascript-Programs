// Given an array to find the occurence of element in an array.
arr = [1,4,3,6,9,7,6,1,4,3,3,3];
// OUTPUT - {1: 2, 3: 4, 4: 2, 6: 2, 7: 1, 9: 1}
result = {};

for(i=0; i< arr.length; i++) {
    if (!result[i])
      result[i] = 1;
    else
     result[i] = result[i] + 1;
}

console.log(result);
