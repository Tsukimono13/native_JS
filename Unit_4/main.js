const toDoListId_1 = "fi13-j9us0"
const toDoListId_2 = "di103-j9us0"

const toDoList = [
    {
        id: toDoListId_1,
        title: "What to learn",
},
    {
        id: toDoListId_2,
        title: "What to buy",
    }
]

const tasks = {
    [toDoListId_1]:[
    {name: "HTML", isDone: true},
    {name: "JS", isDone: false}
    ],
    [toDoListId_2]: [
    {name: "Milk", isDone: false},
    {name: "Butter", isDone: true}
]}

console.log([toDoListId_1])
console.log([toDoListId_1][0])
console.log([toDoListId_1][0].name)
console.log([toDoListId_1].filter((t)=>t.name !== "HTML"))
console.log(...tasks[toDoListId_1], {name:"React", isDone:false})

//reduce
const sum = [1,2,3,4]
console.log(sum.reduce((acc, el) => acc + el, 0))
// max-min => max
console.log(sum.reduce((acc, el) => acc > el ? acc : el))


let student = [
    {
        name: "Bob",
        age: 23,
        isMarried: true,
        scores: 120
    },
    {
        name: "Nick",
        age: 32,
        isMarried: true,
        scores: 85
    },
    {
        name: "Alic",
        age: 18,
        isMarried: true,
        scores: 23
    },
    {
        name: "Max",
        age: 28,
        isMarried: true,
        scores: 154
    }
]
console.log(student.reduce((acc, el)=> acc + el.scores, 0))
console.log(student.reduce((acc, el) => acc.scores > el.scores ? acc : el))
// создание обьектов из массива
console.log(student.reduce((acc,el)=> {
    acc[el.id] = {...el}
    delete acc [el.id].id
    return acc
}, {}))