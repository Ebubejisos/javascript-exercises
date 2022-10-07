const sumAll = function(min, max) {
    let sumEl = 0
    if(min > max && max > 0 && typeof min === "number" && typeof max === "number"){
        for(let i = max; i <= min; i++){
            sumEl += i;
        }
    }
    else if(min < max && min > 0 && typeof min === "number" && typeof max === "number"){
        for(let i = min; i <= max; i++){
        sumEl += i;
        }
    }
    else{ return "ERROR"}
    return sumEl
};

// Do not edit below this line
module.exports = sumAll;
