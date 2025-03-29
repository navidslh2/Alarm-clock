const time=document.querySelector(".time")
const hour=document.querySelectorAll(".controler>select")[0]
const minutes=document.querySelectorAll(".controler>select")[1]
const button=document.querySelector("button")
const ringTone=new Audio("./audio/ringtone.mp3")
let alarm=null
setInterval(()=>{
    let date=new Date()
    time.innerHTML=`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
    if(alarm==`${date.getHours()}:${date.getMinutes()}`){
        ringTone.play()
    }
},100)

for(let i=1;i<25;i++){
    hour.innerHTML+=`<option value="${i}">${i}</option>`
}

for(let i=1;i<61;i++){
    minutes.innerHTML+=`<option value="${i}">${i}</option>`
}

button.addEventListener("click",()=>{
    alarm=`${hour.value}:${minutes.value}`
    if(alarm.includes("hour") || alarm.includes("hour") ){
        return alert("select valid time")
    }
})