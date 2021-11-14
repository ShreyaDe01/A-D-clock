//Digital Clock function
setInterval(showTime, 1000);
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

    document.getElementById("digital_clock").innerHTML = currentTime;
    document.getElementById("digital_clock").style.textShadow = "2px 2px 4px rgb(1,252,1)";
}
showTime;
setInterval(showDate, 1000);
function showDate(){
    var date = new Date();
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let day = days[date.getDay()];

    let day_num = date.getDate();
    day_num = day_num<10 ? "0" + day_num : day_num;
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let month = months[d.getMonth()];
    let yr = date.getFullYear();

    let dAY = day;
    document.getElementById("day").innerHTML = dAY;
    //document.getElementById("day").style.textShadow = "2px 2px 4px rgb(1,252,1)";
    let dATE = day_num + " " + month + ", " + yr;
    document.getElementById("date").innerHTML = dATE;
    //document.getElementById("date").style.textShadow = "2px 2px 4px rgb(1,252,1)";
}
showDate;