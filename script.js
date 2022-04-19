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
    var2 = var1;
  }
}

function clearValues() {
  var1 = 0;
  var2 = 0;
  var3 = 0;
  result = 0;
  operator = 0;
  oldOperator = 0;
}

function operate(operator, a, b) {
  a = parseFloat(a);
  b = parseFloat(b);
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

const screenInput = document.querySelector("#screen-input");
const screenResult = document.querySelector("#screen-result");
const calButton = document.querySelectorAll(".cal-button");

let var1 = "";
let var2;
let var3;
let operator;
let oldOperator;

console.log(calButton);
screenInput.textContent = "0";
screenResult.textContent = "0";

for (const buttons of calButton) {
  buttons.addEventListener("click", (e) => {
    if (
      e.target.id === "plus" ||
      e.target.id === "minus" ||
      e.target.id === "multiply" ||
      e.target.id === "divide"
    ) {
      operator = e.target.textContent;
      if (var3) {
        if (var2) {
          var3 = operate(oldOperator, var3, var2);
          var2 = "";
          var1 = "";
          oldOperator = operator;
          console.log(var3);
        }
        // show var3
      } else if (var3 !== true) {
        oldOperator = operator;
        var3 = var2;
        var2 = "";
        var1 = "";

        console.log(`var3 is ${var3}`);
      }
    } else if (e.target.id === "equals") {
      if (var2) {
        var3 = operate(operator, var3, var2);
        var2 = "";
        var1 = "";
      }

      console.log(var3);
    } else if (Number.isFinite(parseInt(e.target.textContent))) {
      storeValue(e);

      console.log(var2);
    } else if (e.target.textContent === "C") {
      clearValues();
    }
  });
}
