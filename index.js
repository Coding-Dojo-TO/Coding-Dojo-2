function sum(a,b){
  return a+b
}

function subtract(a,b){
  return a-b
}

function verifyInput(num1,num2){
  if ((Number.isInteger ( num1 )) && (Number.isInteger ( num2 ))){
    if (num1 > 0 && num2 > 0){
      return true
    } else {
      return false
    }
  } else {
    return false
  }
}

function getLcd(num1, num2){
  let mini_num = Math.min(num1, num2);

  if (mini_num === 1){
    return 1
  }

  for (let i = 2; i <= mini_num; i++){
    if (num1 % i === 0 && num2 % i === 0){
      return i
    }
  }

  return 1
}

function getLcm(num1, num2){

  if (!verifyInput(num1,num2)){
    return false
  }

  let lcd;
  let lcm = 1;

  while (lcd !== 1){
    lcd = getLcd(num1, num2);
    num1 = num1 / lcd;
    num2 = num2 / lcd;
    lcm = lcm * lcd;
  }

  return lcm * num1 * num2
}


module.exports = {
  sum,
  subtract,
  verifyInput,
  getLcd,
  getLcm
};
