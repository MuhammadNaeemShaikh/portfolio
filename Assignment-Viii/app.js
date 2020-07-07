
var min=0;
var sec=0;
var msec=0;

var minhead = document.getElementById("min");
var sechead = document.getElementById("sec");
var msechead = document.getElementById("msec");

var interval;

function timer(){
    msec++;
    msechead.innerHTML=msec;
    if(msec>=100){
        sec++;
        sechead.innerHTML=sec;
        msec=0
    }
    else if(sec>=60){
        min++;
        minhead.innerHTML=min;
        sec=0;
    }
}

function start(){
interval=setInterval(timer,10)
document.querySelector('button').disabled=true;


}

function stop(){
    clearInterval(interval);
}

function reset(){

    min = 00;
    sec = 00;
    msec = 00;
    minhead.innerHTML=min+"0:";
    sechead.innerHTML=sec+"0:";
    msechead.innerHTML=msec+"0";
    clearInterval(interval);
    document.querySelector('button').disabled=false;

   
}

