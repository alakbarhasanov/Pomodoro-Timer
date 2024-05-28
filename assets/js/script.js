const timer = document.getElementById("timer")
const startButton = document.getElementById("start")
const stopButton = document.getElementById("stop")
const resetButton = document.getElementById("reset")


let timerInterval;
let time = 25;
let second = 0;
let work = false;

startButton.addEventListener("click",function(){
    if (!work) {
        work = true;
        timerInterval = setInterval(updateTimer, 1000);
    }
})


stopButton.addEventListener("click",function(){
    clearInterval(timerInterval);
    work = false;
})


resetButton.addEventListener("click",function(){
    clearInterval(timerInterval);
    work = false;
    time = 25;
    second = 0;
    document.getElementById('timer').innerText = `${time.toString().padStart(2, '0')}:${second.toString().padStart(2, '0')}`;
})


function updateTimer() {
    if (second === 0 && time === 0) {
        clearInterval(timerInterval);
        work = false;
        return;
    }

    if (second === 0) {
        time--;
        second = 59;
    } else {
        second--;
    }

    document.getElementById('timer').innerText = `${time.toString().padStart(2, '0')}:${second.toString().padStart(2, '0')}`;
}