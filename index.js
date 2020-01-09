function sum(a,b){
  return a+b
}

function subtract(a,b){
  return a-b
}

function verifyInput(number1,number2){
  if((typeof number1 !== 'number')||(typeof number2 !== 'number')){
    return false
  }
}

function isDivideByTwo(num){
  return (num%2===0)
}

function divideByTwo(num) {
  return isDivideByTwo(num) ? num / 2 : num
}


function isDivisible(numo, denom) {
  return numo % denom === 0;
}

function getLcm(num1, num2) {
  if(isDivisible(num1, 2) && isDivisible(num2)) {
    return 2 * getLcm(divideByTwo(num1), divideByTwo(num2));
  } else if (!isDivisible(num1, 2))  {
    return 2 * getLcm(num1, divideByTwo(num2));
  }
}

function findlcd(num1, num2) {
  let i = 2;
  let found = false
  while (!found){
    if (num1%i==0 && num2%i==0) {
      found = true
      return i
    }
    if (num1 === i || num2 === i) {
      return 1
    }
    i++
  }
}


module.exports = {sum,subtract,verifyInput, isDivideByTwo, divideByTwo, getLcm, isDivisible, findlcd};