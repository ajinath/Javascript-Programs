arr = [1,4,3,6,9,7,6,1,4,3,3,3];
result = {};

for(i=0; i< arr.length; i++) {
    if (!result[i])
      result[i] = 1;
    else
     result[i] = result[i] + 1;
}

console.log(result);
