arr = [2,1,5,9,4];

// sort array in ascending order
arr.sort();

result = arr.sort(function(a,b){
  return a < b ? -1 : 1 
});

// sort array in desc order
result = arr.sort(function(a,b){
  return a > b ? -1 : 1 
})

// sort array with arrow function
result = arr.sort((a,b) =>  a > b ? -1 : 1);