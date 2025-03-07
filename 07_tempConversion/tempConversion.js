const ftoc = function(F) {
  let celsuis = (5 * (F - 32)) / 9;
  celsuis = Math.round((celsuis + Number.EPSILON) * 10) / 10;
  return celsuis;
};

const ctof = function(C) {
  let fahrenheit = ((C * 9) / 5) + 32;
  fahrenheit = Math.round((fahrenheit + Number.EPSILON) * 10) / 10;
  return fahrenheit;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
