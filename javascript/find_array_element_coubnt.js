arr = [1,4,3,6,9,7,6,1,4,3,3,3];
arr = arr.sort();

 [1, 1, 3, 3, 3, 3, 4, 4, 6, 6, 7, 9]


result = {}

for(i=0; i< arr.length; i++) {
    debugger
    if (!result[i])
      result[i] = 1;
    else
     result[i] = result[i] + 1;
}

console.log(result);