process.stdin.resume();
process.stdin.setEncoding('ascii');
var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
	//Write code here
    var length = input_stdin_array.length;
    for(var i=1; i < length; i++) {
        var tickets = input_stdin_array[++i];
        if(tickets) {
            tickets = tickets.split(" ").map(ele => parseInt(ele))
            var output = findResult(tickets);
            process.stdout.write(""+output+"\n");
        }
    }
});


function possibleNum(currentIndex, tickets=[], result = [] ){
  if(currentIndex >= 0 )  {
  	var num = tickets[currentIndex];
  	if(num > 0) {
  		result.push(num);
  		possibleNum(currentIndex - 2, tickets, result);
  	} else {
  		possibleNum(currentIndex - 1, tickets, result);
  	}
  }
  return result;
}

function sumOfDigits(selectedTickets){
  return selectedTickets.reduce((a,b) => { return a + b }, 0);
}

function findResult(tickets) {
    var hightestSum = 0;
    var previousSumOf = 0
    var firstNum = 0;
    for(var i = tickets.length - 1; i >= 0; i--) {
        var firstCycle = possibleNum(i, tickets);
        var sumOf = sumOfDigits(firstCycle);
        var currentSum =  parseInt(firstCycle.join(""));
        if(sumOf > previousSumOf) {
            previousSumOf = sumOf;
            hightestSum = currentSum;
            firstNum = firstCycle[0];
        } else if( sumOf === previousSumOf) {
            if(firstCycle[0] > firstNum) {
                firstNum = firstCycle[0];
                previousSumOf = sumOf;
                hightestSum = currentSum;
            }
        }
    }
    return hightestSum;
}
