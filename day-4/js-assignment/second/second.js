const multiplyButton = document.getElementById("multiply-btn");
const divideButton = document.getElementById("divide-btn");

const multiply = (number1, number2) => number1 * number2;
const divide = (number1, number2) => number1 / number2;

const solve = (number1, number2, operation) => operation(number1, number2);

multiplyButton.addEventListener("click", () => {
  const inputNum1 = document.getElementById("number-1").value;
  const inputNum2 = document.getElementById("number-2").value;

  const output = document.getElementById("output");
  output.innerHTML = `<h5>The result is</h5><br> ${solve(
    inputNum1,
    inputNum2,
    multiply
  )}`;
});

divideButton.addEventListener("click", () => {
  const inputNum1 = document.getElementById("number-1").value;
  const inputNum2 = document.getElementById("number-2").value;

  const output = document.getElementById("output");
  output.innerHTML = `<h5>The result is</h5><br> ${solve(
    inputNum1,
    inputNum2,
    divide
  )}`;
});
