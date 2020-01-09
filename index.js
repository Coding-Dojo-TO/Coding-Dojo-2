function sum(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function verifyInput(number1, number2) {
  if (typeof number1 !== 'number' || typeof number2 !== 'number') {
    return false;
  }
}

function isDivideByTwo(num) {
  return num % 2 === 0;
}

function divideByTwo(num) {
  return isDivideByTwo(num) ? num / 2 : num;
}

function isDivisible(numo, denom) {
  return numo % denom === 0;
}

function findlcd(num1, num2) {
  // edge case
  if (num1 === 1 && num2 === 1) {
    return 1;
  }

  for (let i = 2; i <= Math.max(num1, num2); i++) {
    if (num1 % i === 0 && num2 % i === 0) {
      return i;
    }
    if (num1 === i || num2 === i) {
      return 1;
    }
  }
}

function getLcm(num1, num2) {
  let lcd;
  let lcm = 1;
  while (lcd !== 1) {
    lcd = findlcd(num1, num2);
    num1 = num1 / lcd;
    num2 = num2 / lcd;
    lcm = lcm * lcd;
  }
  return lcm * num1 * num2;
}

module.exports = {
  sum,
  subtract,
  verifyInput,
  isDivideByTwo,
  divideByTwo,
  getLcm,
  isDivisible,
  findlcd,
};
