//Find the sum of all the multiples of 3 or 5 below 1000.
function findDivBy3And5() {
  let sum = 0;
  for (let i = 0; i < 1000; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      sum += i;
    } else if (i % 3 === 0) {
      sum += i;
    } else if (i % 5 === 0) {
      sum += i;
    } else {
      continue;
    }
  }
  return sum;
}

//1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
//By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.
function sumEvenOfFibNums() {
  let fibNums = [1, 2];
  for (let i = 2; i < 32; i++) {
    fibNums.push(fibNums[i - 2] + fibNums[i - 1]);
  }
  let sum = 0;
  for (let i = 0; i < fibNums.length; i++) {
    if (fibNums[i] % 2 === 0) {
      sum += fibNums[i];
    }
  }
  return sum;
}

//prime nums until 100
function primeNums() {
  let arr = [];

  for (let i = 2; i < 100; i++) {
    arr.push(i);
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        arr.pop();
        break;
      }
    }
  }
  return arr;
}
