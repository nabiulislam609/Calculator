function add(){
    let value = Number(document.getElementById("num1").value);
    let value1 = Number(document.getElementById("num2").value);
    let totalValue = document.getElementById("addResult");
    totalValue.innerHTML = value + value1;
    console.log(totalValue);
}
function sub(){
    let value = Number(document.getElementById("num1").value);
    let value1 = Number(document.getElementById("num2").value);
    let totalValue = document.getElementById("addResult");
    totalValue.innerHTML = value - value1;
    console.log(totalValue);
}
function div(){
    let value = Number(document.getElementById("num1").value);
    let value1 = Number(document.getElementById("num2").value);
    let totalValue = document.getElementById("addResult");
    totalValue.innerHTML = value * value1;
    console.log(totalValue);
}
function mal(){
    let value = Number(document.getElementById("num1").value);
    let value1 = Number(document.getElementById("num2").value);
    let totalValue = document.getElementById("addResult");
    totalValue.innerHTML = value / value1;
    console.log(totalValue);
}
function mod(){
    let value = Number(document.getElementById("num1").value);
    let value1 = Number(document.getElementById("num2").value);
    let totalValue = document.getElementById("addResult");
    totalValue.innerHTML = value % value1;
    console.log(totalValue);
}