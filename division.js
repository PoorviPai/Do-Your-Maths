answer = "";
function back(){
    window.location = "index.html";
}

function check(){
    if(answer = num1 / num2){
        document.getElementById("result").innerHTML="Your answer is correct";
        document.getElementById("num1").innerHTML =Math.floor(Math.random() * 101);
        document.getElementById("num2").innerHTML =Math.floor(Math.random() * 101);
    }
    else{
        document.getElementById("result").innerHTML="Your answer is wrong.Please try again."
        document.getElementById("text").innerHTML="";
    }
}

function preload(){
    document.getElementById("num1").innerHTML =Math.random() * 101;
document.getElementById("num2").innerHTML =Math.random() * 101;
}