var containerEle = document.body.querySelector(".container");

var num1 = (prompt("What is your bill?"));
var num2 = (prompt("What is your tax?"))

var sum = (num1 + num2)* 0.07;

sum = Math.ceil(sum);

containerEle.innerHTML = sum;