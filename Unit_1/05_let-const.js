//Let
let name = 'Ira'
let surname = 'Litvinova'
{
    name = 'Irina'
    let age = 28
    console.log('name scope', name) //Irina
    console.log('age scope', age) //28
    console.log('surname scope', surname) //Litvinova
}

console.log('name', name) //Irina
console.log('surname', surname) //Litvinova
//console.log('age', age) - error

//Const
const dog = 'Sam'
//dog = 'Vasya' - error
const names = ['Irina', 'Vasya', 'Lena']
names.push('Nastya')
console.log(names)
names[1] = 'Vitalya'
console.log(names)

const goods = {}
//goods = '' error
goods.bananas = "2kg"
goods.apples = "1.5kg"
goods.candies = "0.2kg"
console.log(goods)

goods.candies = "0.5kg"
console.log(goods)