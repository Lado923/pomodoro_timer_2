const workBtn = document.getElementById('btn-work')
const shortBreakBtn = document.getElementById('btn-short-break')
const longBreakBtn = document.getElementById('btn-long-break')
let startBtn = document.querySelector('.btn-start')
let timeDisplay = document.getElementById('time-display')

let time, intervalID, stopBtn

let timer = () => {
    if(time > 0) {
        time = time - 1;
        setTime();
    } else{
    setTime();
    clearInterval(intervalID);
    }
    }

let timerStart = () => {
   intervalID = setInterval(timer, 1000)
}

let buttonChange = () => {
    if (startBtn.classList.contains('btn-start')){
        timerStart()
        startBtn.classList.add('stop');
        startBtn.classList.remove('btn-start')
        startBtn.innerText = 'Stop!';
        startBtn = document.querySelector('.stop');
    } else
    if(startBtn.classList.contains('stop')) {
        clearInterval(intervalID);
        startBtn.classList.add('btn-start');
        startBtn.classList.remove('stop')
        startBtn.innerText = 'Start!';
        startBtn = document.querySelector('.btn-start');
    } else {
        startBtn.innerText = "Error!"
    }
}



 workBtn.addEventListener('click', time = () => {time = 1500; setTime(); clearInterval(intervalID);});
 shortBreakBtn.addEventListener('click', time = () => {time = 300; setTime(); clearInterval(intervalID);});
 longBreakBtn.addEventListener('click', time = () => {time = 900; setTime(); clearInterval(intervalID);});
 startBtn.addEventListener('click', buttonChange);
time = 0;

function setTime() {
    if ((time % 60) < 10){
    timeDisplay.innerText = `${Math.floor(time / 60)}:0${time%60}`;
    } else {
    timeDisplay.innerText = `${Math.floor(time / 60)}:${time%60}`;
}
}




