const add = function(a,b) {
	return a + b;
};

const subtract = function(a,b) {
	return a - b;
};

const sum = function() {
	let array = arguments[0];
  let sum = 0;
  for (let nums of array){
    sum += nums;
  }
  return sum;
};

const multiply = function() {
  let array = arguments[0];
  let multiple = 1;
  for (let nums of array){
    multiple *= nums;
  }
  return multiple;
};

const power = function(a,b) {
	return Math.pow(a,b);
};

const factorial = function(num) {
  let product = 1
  if(num < 2){
    return product;
  }
  else{
    for(i = num; i >= 1; i--){
      product *= i;
    }
  }
  product = Math.round((product + Number.EPSILON) * 100) / 100;//rounds up to 2decimal places if necessary
  return product;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
