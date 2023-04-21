function Cat(color, name){
    this.color = color
    this.name = name
}

const cat1 = new Cat('black-white', 'Tom')
console.log(cat1)

function myProt(constructor, ...args){
    const obj = {}
    Object.setPrototypeOf(obj, constructor.prototype)
    return constructor.apply(obj, args) || obj
}
const cat2 = myProt(Cat, 'black-white', 'Tom')
console.log(cat2)

const cat3 = new Cat()
console.log(cat3)