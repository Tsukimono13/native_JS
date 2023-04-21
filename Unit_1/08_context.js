//context - как функция была вызванна
//scope - указывает на видимость определённых переменных

const person = {
    name: 'Nana',
    like: function (favorite, symbol) {
        console.log(`${this.name} likes ${favorite}${symbol}`)
    }
}

const newName = {name: 'Vika'}
person.like('cats', '.')
person.like.call(newName, 'drawing', '!') //call принимает новый контекст(объект)
person.like.apply(newName, ['drawing', '!']) //apply только два параметра, второй - массив
person.like.call(newName, ...['drawing', '!'])
const bound = person.like.bind(newName, ...['drawing', '!']) //bind не вызывает функцию, а возвращает новую
bound()

//-------------------------
function Person(name, age) {
    this.name = name
    this.age = age

    console.log(this)
}
const personName = new Person('Helen', 39)

//------------------------------- явный
function logThis() {
    console.log(this)
}

const obj = {name: 'Kate'}
logThis.apply(obj)
logThis.call(obj)
logThis.bind(obj)()

//---------------------- неявный
const animal = {
    legs: 4,
    head: 1,
    logThis: function () {
        console.log(this)
    }
}
animal.logThis()

//------------
function Cat(color) {
    this.color = color
    console.log('this', this);
    (()=> console.log('arrow this', this))()
}
new Cat('red')