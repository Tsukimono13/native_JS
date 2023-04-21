//__proto__
//Object.getPrototypeOf()  - ES5

function Cat (name, color) {
    this.name = name
    this.color = color
}

Cat.prototype.legs = function () {
    console.log(`${this.color} ${this.name} has 4 legs`)
}
const cat = new Cat('Tom', 'black and white')

cat.legs()
console.log(Cat.prototype)
console.log(cat)
console.log(cat.__proto__ === Cat.prototype)
console.log(cat.constructor)

//--------------------------
function Person(legs, head){
    Person.prototype.legs = 2
    Person.prototype.head = 1
}
const person = new Person()
person.name = 'Irina'

console.log('legs' in person)
console.log(person.head)
console.log(person.name)

console.log(person.hasOwnProperty('name')) //true
console.log(person.hasOwnProperty('legs'))  //false

// Object.create()
const proto = {age: 28}
const myAge = Object.create(proto)
proto.age = 16
console.log(myAge.age)
console.log(myAge.hasOwnProperty('age'))
console.log(myAge.__proto__ === proto)