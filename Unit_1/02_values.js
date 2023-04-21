let a = 11
let b = a
b++
console.log('a', a) //11
console.log('b', b) //12

let c = [1, 2, 3]
let d = c
d.push(4)

let e = [ 1, 2, 3, 4 ]

console.log('c', c) //[ 1, 2, 3, 4 ]
console.log('d', d) //[ 1, 2, 3, 4 ]

console.log(c === d) //true
console.log(c === e) //false

/*
let c = [1, 2, 3]
let d = c.concat()
d.push(4)

console.log('c', c) //[ 1, 2, 3 ]
console.log('d', d) //[ 1, 2, 3, 4 ]*/
