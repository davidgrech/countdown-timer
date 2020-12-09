const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('mins');
const secondsEl = document.getElementById('seconds');


const newYears = '1 Jan 2021';

function countdown() {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const totalSeconds = (newYearsDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    daysEl.innerHTML = days ;
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(minutes);
    secondsEl.innerHTML = formatTime(seconds);

   console.log("days : ", days);
   console.log("hours : ", hours);
   console.log("mins : ", minutes);
   console.log("seconds : ", seconds);

    if(days == 0 && hours == 0 && minutes == 0 && seconds == 0){

        document.getElementById('background').style.backgroundImage="url(snow-two.jpg)";

        document.body.innerHTML = document.body.innerHTML.replace('New Years Eve', 'Happy New Year!');

        document.getElementById("year-text").style.color = 'red';
        
    }

}

function formatTime(time) {
    return time < 10 ? (`0${time}`) : time;
}

//First call
countdown();

setInterval(countdown, 1000);