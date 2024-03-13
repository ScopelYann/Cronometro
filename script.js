let NumberM = 0
let NumberS = 0
let NumberMi = 0
let Numberhour = 0
let cron;

function timer() {
    if ((NumberM += 10) > 1000) {
        NumberM = 0
        NumberS++
    }
    if (NumberS == 60) {
        NumberS = 0
        NumberMi++
    }
    if (NumberMi == 60) {
        NumberMi = 0
        Numberhour++
    }
    let millisecond = document.querySelector('#millisecond').innerText = returnData(NumberM)
    let second = document.querySelector('#second').innerText = returnData(NumberS)
    let hour = document.querySelector('#hour').innerText = returnData(Numberhour)
    let minute = document.querySelector('#minute').innerText = returnData(NumberMi)
}
function returnData(input) {
    return input > 10 ? input : `0${input}`
}
function reset(){
    NumberM = 0
    NumberMi = 0
    NumberS = 0
    Numberhour = 0
    let hour = document.querySelector('#hour').innerText = '00'
    let minute = document.querySelector('#minute').innerText = '00'
    let second = document.querySelector('#second').innerText = '00'
    let millisecond = document.querySelector('#millisecond').innerText = '000'
}
function pause(){
    clearInterval(cron)
}

function start(){
    pause()
    cron = setInterval(()=> {timer()},10)
}