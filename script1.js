
let days;
let hours;
let minutes;
let seconds;
let months;
let year;
let daysLeft;
let daysPerYear;
let daysInFeb;


let interval = window.setInterval(function(){

    if(year % 4 == 0){
        daysPerYear=366;
        daysInFeb=29;
    }else{
        daysPerYear=365;
        daysInFeb=28;
    }

    switch(months){
        case 1:
            daysLeft = daysPerYear;
            break;

        case 2:
            daysLeft = daysPerYear-31;
            break;   

        case 3:
            daysLeft = daysPerYear-(31+daysInFeb);
            break;


        case 4:
            daysLeft = daysPerYear-(31+daysInFeb+31);
            break;   
            
        case 5:
            daysLeft = daysPerYear-(31+daysInFeb+31+30);
            break;
    
        case 6:
            daysLeft = daysPerYear-(31+daysInFeb+31+30+31);
            break;   
    
        case 7:
            daysLeft = daysPerYear-(31+daysInFeb+31+30+31+30);
             break;
    
    
        case 8:
            daysLeft = daysPerYear-(31+daysInFeb+31+30+31+30+31);
            break;   
            
         
        case 9:
            daysLeft = daysPerYear-(31+daysInFeb+31+30+31+30+31+30);
            break;
        
        case 10:
            daysLeft = daysPerYear-(31+daysInFeb+31+30+31+30+31+30+31);
            break;   
        
        case 11:
            daysLeft = daysPerYear-(31+daysInFeb+31+30+31+30+31+30+31+30);
             break;
        
        
        case 12:
            daysLeft = daysPerYear-(31+daysInFeb+31+30+31+30+31+30+31+30+31);
             break;      
          

    }

    let cDate = new Date();
    
    days = cDate.getDate();
    hours = cDate.getHours();
    minutes = cDate.getMinutes();
    seconds = cDate.getSeconds();
    months = cDate.getMonth()+1;
    year = cDate.getFullYear();
    

    document.getElementById("days").innerHTML= daysLeft - days;
    document.getElementById("hours").innerHTML= 24-hours;
    document.getElementById("minutes").innerHTML= 60-minutes;
    document.getElementById("seconds").innerHTML= 60-seconds;



}, 1000);
