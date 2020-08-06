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

//A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
//Find the largest palindrome made from the product of two 3-digit numbers.
function findLargestPalindrome() {
  for (let i = 999; i > 900; i--) {
    const num1 = i;
    for (let j = 999; j > 900; j--) {
      const num2 = j;
      const largest = num1 * num2;
      const reversedLargest = largest.toString().split('').reverse().join('');
      if (largest == reversedLargest) {
        return largest;
      } else {
        continue;
      }
    }
  }
}

//2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
//What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
function div() {
  let count = 0;
  for (let i = 1; i < 100000000000000; i++) {
    for (let j = 1; j <= 20; j++) {
      if (i % j !== 0) {
        break;
      } else if (i % j === 0) {
        count++;
        if (count === 20) {
          return i;
        }
      }
    }
    count = 0;
  }
}

console.log(div());

//Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.
function sumSqofNums() {
  let sum = 0;
  for (let i = 0; i <= 100; i++) {
    sum += i * i;
  }
  return sum;
}

function sqOfSumOfNums() {
  let sum = 0;
  for (let i = 0; i <= 100; i++) {
    sum += i;
  }
  const sqSum = sum * sum;
  return sqSum;
}

function findDiff() {
  return sqOfSumOfNums() - sumSqofNums();
}
