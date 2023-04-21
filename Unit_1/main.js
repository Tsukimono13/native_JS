var isPalindrome = (str) => {
    return str.split('').reverse().join('');
}

//console.log(isPalindrome('I see my face'))
function maskify(cc) {
    return cc.slice(cc.length-3)
}
console.log(maskify(['1','2','3','4','5']))

