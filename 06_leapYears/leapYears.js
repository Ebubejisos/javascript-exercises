const leapYears = function(year) {
    let isLeapYear = true;
    const four = year % 4 == 0 ? true : false;
    const fourHundred = year % 400 == 0 ? true : false;
    const hundred = year % 100 == 0 ? true : false;
    if(four == true && hundred !== true){
        isLeapYear;
    }
    else if(fourHundred == true){
        isLeapYear;
    }
    else{isLeapYear = false};
    return isLeapYear;
};
console.log(leapYears(1800))

// Do not edit below this line
module.exports = leapYears;
