const first = () => console.log("first")
const second = () => console.log("second")
const third = () => console.log("third")

/*first()
second()
third()*/

first()
setTimeout(second, 0)
third()