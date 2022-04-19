function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function storeValue(e) {
  let clickedValue;
  if (e.target.id === "comma") {
    clickedValue = ".";
    var1 = parseFloat(var1 + clickedValue);
  } else if (e.target.id !== "comma") {
    clickedValue = e.target.textContent;
    var1 = parseFloat(var1 + clickedValue);
    console.log(var1);
  }
}

function clearValues() {
  var1 = 0;
  var2 = 0;
  var3 = 0;
  result = 0;
}

function operate(operator, a, b) {
  switch (operator) {
    case "+":
      return add(a, b);

    case "-":
      return subtract(a, b);

    case "X":
      return multiply(a, b);

    case "/":
      return divide(a, b);
  }
}

const screen = document.querySelector("#screen");
const calButton = document.querySelectorAll(".cal-button");

let var1 = "";
let var2;
let var3;
let result;

console.log(calButton);
screen.textContent = " 12 + 12 = 24";

for (const buttons of calButton) {
  buttons.addEventListener("click", (e) => {
    if (
      e.target.id === "plus" ||
      e.target.id === "minus" ||
      e.target.id === "multiply" ||
      e.target.id === "divide"
    ) {
      var2 = var1;
      var1 = "";
      if (var3 === true) {
        var3 = operate(e.target.textContent, var2, var3);
        console.log(var3);
        // show var3
      } else if (var3 !== true) {
        var3 = var2;
        console.log(`var3 is ${var3}`);
      }
    } else if (e.target.textContent === "=") {
      result = operate(e.target.textContent, var2, var3);
      var3 = result;
      console.log(var3);
    } else if (Number.isFinite(parseInt(e.target.textContent))) {
      storeValue(e);

      console.log(var2);
    } else if (e.target.textContent === "C") {
      clearValues();
    }
  });
}
