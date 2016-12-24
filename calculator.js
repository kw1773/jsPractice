function calc() {
    var num1 = document.getElementById("nr1").value;
    var num2 = document.getElementById("nr2").value;
    var op = document.getElementById("operator").value;
    var sum = eval(num1 + op + num2);
    document.getElementById("summe").value = sum;
}