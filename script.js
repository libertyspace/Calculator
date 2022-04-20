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

function storeNewValue(e) {
  let clickedValue;
  if (e.target.id === "comma") {
    clickedValue = ".";
    var1 = parseFloat(var1 + clickedValue);
  } else if (e.target.id !== "comma") {
    clickedValue = e.target.textContent;
    var1 = parseFloat(var1 + clickedValue);
    newValue = var1;
  }
}

function clearValues() {
  var1 = 0;
  newValue = 0;
  storedValue = 0;
  result = 0;
  operator = 0;
  oldOperator = 0;
  screenInput.textContent = "0";
  screenResult.textContent = "0";
  screenConcat = "";
}

function writeDisplayInput(e) {
  screenConcat = screenConcat + e.target.textContent;
  screenInput.textContent = screenConcat;
}

function writeDisplayResult() {
  screenResult.textContent = storedValue;
}

function operate(operator, a, b) {
  a = parseFloat(a);
  b = parseFloat(b);
  switch (operator) {
    case "plus":
      return add(a, b);

    case "minus":
      return subtract(a, b);

    case "multiply":
      return multiply(a, b);

    case "divide":
      return divide(a, b);
  }
}

let screenInput = document.querySelector("#screen-input");
let screenResult = document.querySelector("#screen-result");
const calButton = document.querySelectorAll(".cal-button");

let var1 = "";
let newValue;
let storedValue;
let screenConcat = "";
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
      writeDisplayInput(e);
      operator = e.target.id;
      if (storedValue) {
        if (newValue) {
          storedValue = operate(oldOperator, storedValue, newValue);
          newValue = "";
          var1 = "";
          oldOperator = operator;
          writeDisplayResult();
          console.log(storedValue);
        }
        // show storedValue
      } else if (storedValue !== true) {
        oldOperator = operator;
        storedValue = newValue;
        newValue = "";
        var1 = "";

        console.log(`storedValue is ${storedValue}`);
      }
    } else if (e.target.id === "equals") {
      if (newValue) {
        storedValue = operate(operator, storedValue, newValue);
        newValue = "";
        var1 = "";
        writeDisplayResult();
      }
    } else if (Number.isFinite(parseInt(e.target.textContent))) {
      storeNewValue(e);
      writeDisplayInput(e);

      console.log(newValue);
    } else if (e.target.id === "clear") {
      clearValues();
    }
  });
}
