//Immediate Invoker Function Expression
let result = []

/*
for (var i = 0; i < 5; i++) {
    result.push(function () {
        console.log(i)
    })
}

result[1]()
result[3]()*/

for (var i = 0; i < 5; i++) {
    (function () {
        var j = i
        result.push(function () {
            console.log(j)
        })
    })()
}
result[0]()
result[3]()
