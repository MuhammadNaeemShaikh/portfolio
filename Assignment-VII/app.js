

function clearResult(){
    document.getElementById("result");
    result.value="";
}

function getNumber(num){
    document.getElementById("result");
    result.value += num;
}

function getResult(){
    var result=document.getElementById("result");
    result.value = eval(result.value);
}

function getsquare_Root(){
    var result=document.getElementById("result");
    result.value=Math.sqrt(result.value)
}

function into_2(){
    var result=document.getElementById("result");
    result.value=result.value*2
}

