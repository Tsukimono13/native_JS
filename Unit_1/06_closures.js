//closures - функция замыкает в себе определённые значения из выше стоящего скопа;
// функция в функции

function sayHello(name) {
    const message = name + ', how are you?'

    return function (){
        console.log(message)
    }
}
const sayHiSam = sayHello('Sam')
const sayHiRay = sayHello('Ray')
sayHiSam()
sayHiRay()

function showFram() {
    const frame = ['React', 'Vue']

    return {
        add: function (framework){
            frame.push(framework)
        },
        join: function () {
            console.log(frame.join('-'))
        }
    }
}

const manager = showFram()
manager.join()
manager.add('Angular')
manager.join()


const numbers = [1, 2, 3, 4, 5, 6]
for (var i = 0; i < numbers.length; i++){
    (function (j){
        setTimeout(function (){
            console.log(`numbers[${j}] = ${numbers[j]}`)
        }, 1500)
    }) (i)
}
