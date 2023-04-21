console.log(sum(11,12))//23

function sum(a, b){
    return a + b
}

console.log(i) //undefined
var i = 3
console.log(i) //3


//let and const не поддвержены хостингу
//console.log(number) - error
let number = 99
console.log(number) //99

//Function Declaration and Function Expression
console.log(dev(9,3)) //3
function dev(a, b) {
    return a/b
}

//console.log(minus(10, 2)) - error
const minus = function(a, b) {
    return a - b
}
console.log(minus(10, 2)) //8