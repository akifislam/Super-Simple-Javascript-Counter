let plus = document.getElementById("increment")
let neg = document.getElementById("decrement")
let number = document.getElementById("display")

let count = 0;

plus.addEventListener('click',function (){
    count+=1
    number.innerHTML = count;
})

neg.addEventListener('click',function (){
    count-=1
    number.innerHTML = count;
})