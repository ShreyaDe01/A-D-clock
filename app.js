/*Analog Clock*/
const hrHand = document.getElementById('hrHand')
const minHand = document.getElementById('minHand')
const secHand = document.getElementById('secHand')

setInterval(() => {
	d = new Date(); //object of date()
	hr = d.getHours();
	min = d.getMinutes();
	sec = d.getSeconds();
	hr_rotation = 30 * hr + min / 2; //converting current time
	min_rotation = 6 * min;
	sec_rotation = 6 * sec;

	hrHand.style.transform = `rotate(${hr_rotation}deg)`;
	minHand.style.transform = `rotate(${min_rotation}deg)`;
	secHand.style.transform = `rotate(${sec_rotation}deg)`;
}, 1000);

/*Digital Clock*/
function showTime(){
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();

    //add zero in front of numbers < 10
    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;

    let currentTime = hour + ":" + min + ":" + sec;

    document.getElementById('time').innerHTML = currentTime;
}
setInterval(showTime, 500);
showTime;
function showDate(){
    var date = new Date();
    var date = new Date();
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let day = days[date.getDay()];

    let day_num = date.getDate();
    day_num = day_num<10 ? "0" + day_num : day_num;
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let month = months[date.getMonth()];
    let yr = date.getFullYear();

    let dAY = day;
    document.getElementById("day").innerHTML = dAY;
    //document.getElementById("day").style.textShadow = "2px 2px 4px rgb(1,252,1)";
    let dATE = day_num + " " + month + ", " + yr;
    document.getElementById("date").innerHTML = dATE;
    //document.getElementById("date").style.textShadow = "2px 2px 4px rgb(1,252,1)";
}
showDate;
setInterval(showDate, 500);