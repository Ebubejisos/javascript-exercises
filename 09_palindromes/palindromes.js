const palindromes = function (string) {
    let isPalindrome = false;

    let lowercaseString = string.toLowerCase();
    let punctionlessString = lowercaseString.replace(/[\.,-\/#!$%\^&\*;:{}=\-_`~()@\+\?><\[\]\+]/g, ''); 
    let spacelessString = punctionlessString.replace(/\s{1,}/g, '');
    //above regex replaces whitespace(\s) greater than 1({1,}) with no space('')
    let stringArray = spacelessString.split('');
    let reversedArray = stringArray.reverse().join('');
    
    if(reversedArray == spacelessString){
        isPalindrome = true;
    }
    
    return isPalindrome;
};
// Do not edit below this line
module.exports = palindromes;
