arr = [ 
  { Phase: "Phase 1", Step: "Step 1", Task: "Task 1", Value: "5" },
  { Phase: "Phase 1", Step: "Step 1", Task: "Task 2", Value: "10" },
  { Phase: "Phase 2", Step: "Step 2", Task: "Task 1", Value: "15" },
  { Phase: "Phase 1", Step: "Step 2", Task: "Task 2", Value: "20" },
  { Phase: "Phase 2", Step: "Step 1", Task: "Task 1", Value: "25" },
  { Phase: "Phase 2", Step: "Step 1", Task: "Task 2", Value: "30" },
  { Phase: "Phase 2", Step: "Step 2", Task: "Task 1", Value: "35" },
  { Phase: "Phase 2", Step: "Step 2", Task: "Task 2", Value: "40" }
]

// group by 
result = {}
arr.forEach(element => {
  result[element.Phase] = result[element.Phase] || [];
  result[element.Phase].push(element);
});
console.log("Result =", result);


// group by with sum
result = {}
arr.forEach(element => {
  result[element.Phase] = (result[element.Phase] || 0) + parseInt(element.Value)
});
console.log("Result =", result);


// Iterate Object 
for(let key in result){
  console.log("-->",result[key])
}

