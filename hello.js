let plus = document.getElementById("increment")
let neg = document.getElementById("decrement")
let reset=document.getElementById("reset")
let number = document.getElementById("display")
let getRandom = document.getElementById("getrandom")

let count = 0;

plus.addEventListener('click',function (){
    count+=1
    number.innerHTML = count
})

neg.addEventListener('click',function (){
    count-=1
    number.innerHTML = count
})

reset.addEventListener('click',function(){
    count = 0
    number.innerHTML= count
})

getRandom.addEventListener('click',function(){
    let x = Math.floor(Math.random()*100)
    number.innerHTML = x
})

