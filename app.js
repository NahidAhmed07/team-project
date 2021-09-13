// raihan top-time
setInterval(setTime,1000)
function setTime(){
    const date = new Date();
    document.getElementById('time-show').innerHTML=date.toLocaleTimeString();
}

