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

const getStName = (arr) => {
    const result = []
    const getStName = (st) => st.name
    for (let i = 0; i < arr.length; i++) {
        result[i] = getStName(arr[i])
    }
    return result
}

const getScores = (arr) => {
    const result = []
    const getScores = (st) => st.scores
    for (let i = 0; i < arr.length; i++) {
        result[i] = getScores(arr[i])
    }
    return result
}

const getResult = (arr, fn) => {
    const result = []
    for (let i = 0; i < arr.length; i++) {
        result[i] = fn(arr[i])
    }
    return result
}

console.log(getResult(student, getStName))
console.log(student.map(getStName))
console.log(getResult(student, getScores))

const selfMadeFilter = (arr, filterFn) => {
    const result = []
    for (let i = 1; i < arr.length; i++) {
        if (filterFn(arr[i])===true){
            result.push(arr[i])
        }
    }
  return result
}

const func = (st) => st.scores >= 100
console.log(student.filter(func))
console.log(selfMadeFilter(student,func))

const findBob = (st) => st.name === "Bob"
const selfMadeFind =(arr, func) => {
    if (func(arr[i])===true){
        return arr[i]
}
}

console.log(student.find(findBob))
console.log(selfMadeFind(student,findBob))

//CRUD
//C - [...arr, newEl]
//R - {} => <></> //map, filter, sort
//U - map
//D - filter


const selfMadePop = (arr) => {
    const result = []
    const lastElement = arr[arr.length - 1]
    arr.length = arr.length - 1

    return lastElement
}

console.log(selfMadePop(student))
console.log([...student].pop)