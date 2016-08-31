// brute force approach
// numbers < 10 are all reversible even sums
let count = 0

for(let i = 11; i < 1000000000; i++) {
  if(reversibleSumEven(i) && (i % 10 !== 0)) {
    count++
  }
}
 
console.log(count)

// FUNCTIONS

function reversibleSumEven(int) {
  let rev = reverse(int)
  if(allOdd(int + rev)) {
    // console.log(int, int + reverse, allOdd(int + reverse))
    return true
  }
  return false
}

function allOdd(int) {
  let digits = int:toString().split('')
  let numbers = digits.map((digit) => parseInt(digit))
  for(let i = 0; i < numbers.length; i++) {
    if(isEven(numbers[i])) {
      return false
    }
  }
  return true
}

function isEven(int) {
  return int % 2 === 0 ? true : false
}

function reverse(n) {
  for(var r = 0; n; n = Math.floor(n / 10)) {
    r *= 10;
    r += n % 10;
  }
  return r;
}

