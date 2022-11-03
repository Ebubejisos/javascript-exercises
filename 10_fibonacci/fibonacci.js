const fibonacci = function(index) {
    if(index < 0){
        return 'OOPS';
    }
    let fib = [1,1];
    for(let i = 1;i <= 25;i++){
        let nextNum = fib[i] + fib[i-1];
        fib.push(nextNum);
    }
    return fib[index - 1];
};

// Do not edit below this line
module.exports = fibonacci;
