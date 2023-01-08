const strings = ["Donald", "Alex", "Bob"]
console.log(strings.sort())
// 1.сортирует строки по алфавиту

const strings2 = ["Donald", "Alex", "Bob", "alex", "john", "юрий", "999"]
// 2.сортирует по unicode

console.log(strings2.sort())
// 3. работает мутабельно

console.log(strings2 === strings2.sort())
// 4. возвращает ссылку на исходный массив

const numbers = [1000, 25, 777, 6666, 0, -20]
console.log(numbers.sort())
//5.для остальных необходимо передавать функцию сравнения

const compareFunc = (a, b) => { // по возрастанию
    if (a > b) {
        return 100
    } else {
        return -1
    }
}
console.log(numbers.sort(compareFunc))

const compareFuncPro = (a, b) => a - b
console.log(numbers.sort(compareFuncPro))
// 6. Функция стравнения должна возвращать число больше или меньше 0

console.log(numbers.reverse())
// изменить порядок сортировки
// 7. всесте с sort переворачивает

const students = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 95
    },
    {
        name: "Alex",
        age: 24,
        isMarried: true,
        scores: 89
    },
    {
        name: "Helge",
        age: 24,
        isMarried: true,
        scores: 90
    },
    {
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120
    },
    {
        name: "John",
        age: 19,
        isMarried: false,
        scores: 121
    },
    {
        name: "alex",
        age: 22,
        isMarried: true,
        scores: 89
    },
];

const compareFuncForObject = (a, b) => {
    if (a.name > b.name) {
        return 1
    } else {
        return -1
    }
}
console.log(students.sort(compareFuncForObject))
console.log(students.sort((a, b) => a.name.localeCompare(b.name)))
//7. сортировка массива объктов по значениям

console.log(students.sort((a, b) => a.scores - b.scores))
//8.Сортировка массива объектов по числовым значениям

//bubble sort
const nums = [12, 10, 45, 23, 66, 78, 91, 32]

for (let j = 0; j < nums.length - 1; j++) {
    let isSorted = true
    for (let i = 0; i < nums.length - 1 - j; i++) {
        if (nums[i] > nums[i + 1]) {
            isSorted = false;
                /*let temp = nums[i]
                nums[i] = nums [i + 1]
                nums [i + 1] = temp*/
                [nums[i + 1], nums[i]] = [nums[i], nums[i + 1]];

        }
    }
    if (isSorted) break
}
// O((n-1)*((n-1)/2)*k), k < 1 => O (n2)