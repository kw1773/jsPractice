function validate(num1,num2) {
    var val = "0123456789";
    var input = num1 + num2;
    if (input = val){
        calc();
    } else {
        console.log("input error");   
    }
}

function calc() {
    var num1 = document.getElementById("nr1").value;
    var num2 = document.getElementById("nr2").value;
    var op = document.getElementById("operator").value;
    var sum = eval(num1 + op + num2); // i read eval is evil. i am searching for another option
    document.getElementById("summe").value = sum;
}