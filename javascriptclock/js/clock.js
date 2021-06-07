let username= prompt("Adınızı giriniz.");
let namehtml= document.querySelector('#myName');
namehtml.innerHTML=username;


function showTime(){
    
    var days= ["Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi","Pazar"];
    var start=new Date();
    var currentDay =days[start.getDay()-1];
    var currentMinute = start.getMinutes() <10 ?  `0${start.getMinutes()}` :  start.getMinutes();
    var currentHour = start.getHours() <10 ?  `0${start.getHours()}` :  start.getHours();
    var currentSecond = start.getSeconds() <10 ?  `0${start.getSeconds()}` :  start.getSeconds();
    var str= `${currentHour}:${currentMinute}:${currentSecond} ${currentDay}`;
    let dayhtml= document.querySelector("#myClock");
    dayhtml.innerHTML=str; 


}
showTime()
setInterval(showTime, 1000);
