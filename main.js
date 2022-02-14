const workBtn = document.getElementById('btn-work')
const shortBreakBtn = document.getElementById('btn-short-break')
const longBreakBtn = document.getElementById('btn-long-break')
let timeDisplay = document.getElementById('time-display')

let time
 workBtn.addEventListener('click', time = () => {time = 1500; setTime();});
 shortBreakBtn.addEventListener('click', time = () => {time = 300; setTime();});
 longBreakBtn.addEventListener('click', time = () => {time = 900; setTime();});
    

function setTime() {
    if ((time % 60) < 10){
    timeDisplay.innerText = `${Math.floor(time / 60)}:0${time%60}`;
    } else {
    timeDisplay.innerText = `${Math.floor(time / 60)}:${time%60}`;
}
}
