const newYear = "01-jan-2024";



function countdown(){
       const newYearDate =new Date(newYear);
       const currentDate = new Date();

       const totalSecond = (newYearDate-currentDate) /1000;
       
       const days = Math.floor(totalSecond/3600/24);
       const hours = Math.floor(totalSecond/3600)%24;
       const minutes = Math.floor(totalSecond/60)%60;
       const seconds= Math.floor(totalSecond)%60;

       document.getElementById("days").innerHTML= days;
       document.getElementById("hours").innerHTML= timeFormat(hours);
       document.getElementById("minutes").innerHTML= timeFormat(minutes);
       document.getElementById("seconds").innerHTML= timeFormat(seconds);
     

}

function timeFormat(time){

    return time < 10 ? `0${time}`: time;
}

setInterval(countdown,1000);