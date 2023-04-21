// 7 types: null, number, undefined, object, NaN, symbol, boolean
//все примитивы кроме object

console.log(typeof 0) //number
console.log(typeof null) //null
console.log(typeof 'types') //string
console.log(typeof undefined) //undefined
console.log(typeof Math) //object
console.log(typeof NaN) //not a number
console.log(typeof Symbol('JS')) //symbol
console.log(typeof true) //boolean
console.log(typeof function (){})

//undefined когда переменной не присвоенно значение; когда функция ничего не возвращает
//null когда обнулили значение и не записали

//Приведение типов

//приведение к true строку
let anime = "Bleach"
if (anime) {
    console.log(anime + ' is the best one')
}
//Приведение к false: '', null, undefined, NaN, false, 0

console.log(Boolean('')) //false
console.log(Boolean(' ')) //true
console.log(Boolean('JS')) //true
console.log(Boolean(0)) //false

console.log(Boolean([])) //true
console.log(Boolean({})) //true
console.log(Boolean(function (){})) //true

//к сроке и числу
console.log(5 + '3') //53 - string
console.log("" + 6 + 1) //61 - string
console.log("" - 1 + 3) //2 - number because minus -
console.log("78" * "33") // 2574 - number в строке есть только оператор +
console.log(1 + 1 + "sm") // 2sm - string
console.log("hp" + 3 + 55) //hp355 - string
console.log("100" - 5) //95 - number
console.log("100hv" - 5) //NaN
console.log(null + 55) // 55 - number
console.log(undefined + 1) // NaN

// == vs ===

// == сравнивает значения, но с приведением типов
// === по значение без приведения типов

console.log(2 == "2") //true
console.log(2 === "2") //false
console.log(undefined == null) //true
console.log(undefined === null) //false

console.log('0' == false) //true
console.log('0' == 0) //true
console.log(0 == 0) //true

//--------------------------------------------------------------------------------
console.log(false == '') //true
console.log(false == []) //true
console.log(false == {}) //false
console.log('' == 0) //true
console.log('' == []) //true
console.log('' == {}) //false
console.log(0 == []) //true
console.log(0 == {}) //false
console.log(0 == null) //false
