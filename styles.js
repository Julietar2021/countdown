

const nextYear = new Date('January 1, 2023 00:00:00').getTime();

function newYear() {

  const toDay = new Date().getTime();
space = nextYear - toDay; 


const sec = 1000;
const min = sec * 60;
const hour = min * 60;
const day = hour * 24;


const d= Math.floor(space / (day));
const h = Math.floor((space % (day)) / (hour));
const m = Math.floor(( space % (hour)) / (min));
const s = Math.floor ((space % (min)) / (sec));



 document.getElementById("seconds").innerText = s;
document.getElementById("minutes").innerText = m;
 document.getElementById("hours").innerText = h;
document.getElementById("days").innerText = d;


}

setInterval(function()
{

newYear();
}
)
