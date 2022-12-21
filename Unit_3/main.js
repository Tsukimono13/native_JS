// есть ли обработчик? (function) => handler, listener, subscriber
//при вызове формируется объект ({})=> event, ev, e
//если есть хэндлек => function(e) => callback

const sm = document.getElementById("small")
const md = document.getElementById("medium")

function handler1  (e) {
   e.stopPropagation()
   alert(e.currentTarget.id)
}

const handler2 = (e)=> {
   alert("yo!")
}

/*sm.onclick = handler
sm.onclick = null*/

sm.addEventListener("click", handler1) //capture-bubbling
sm.addEventListener("click", handler2)
/*sm.removeEventListener("click", handler1)*/
sm.removeEventListener("click", handler2)
md.addEventListener("click", handler2)

// e.currentTarget лучше всегда использовать

const a = document.getElementById("a")
a.addEventListener("click", (e)=>{
   e.preventDefault()
   alert("href doesn't work")
})