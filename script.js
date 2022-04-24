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
  newValue = 0;
  storedValue = 0;
  result = 0;
  operator = 0;
  oldOperator = 0;
  screenInput.textContent = "0";
  screenResult.textContent = "0";
  screenConcat = "";
}

function deleteValue() {
  newValue = parseFloat(newValue.toString().slice(0, -1));
  let lastNumber = screenInput.textContent.slice(0, -1);
  if (lastNumber === "") {
    screenInput.textContent = "0";
    screenConcat = "";
    newValue = 0;
  } else {
    screenInput.textContent = lastNumber;
  }

  console.log(lastNumber);
}

function writeDisplayInput(e) {
  let lastChar = e.target.textContent.slice(0, -1);
  if (
    e.target.id === "plus" ||
    e.target.id === "minus" ||
    e.target.id === "multiply" ||
    e.target.id === "divide"
  ) {
    if (
      lastChar === "+" ||
      lastChar === "-" ||
      lastChar === "×" ||
      lastChar === "÷"
    ) {
    } else {
      if (newValue === undefined) {
        screenInput.textContent = "0";
        screenResult.textContent = "0";
        screenConcat = "";
      } else if (newValue !== undefined) {
        screenConcat = storedValue.toString() + e.target.textContent;
        screenResult.textContent = screenConcat;
        screenInput.textContent = "0";
        screenConcat = "";
      }
    }
  } else if (Number.isFinite(parseFloat(e.target.textContent))) {
    screenConcat = screenConcat + e.target.textContent;
    screenInput.textContent = screenConcat;
  }
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
let storedValue = 0;
let screenConcat = "";
let operator;
let oldOperator;

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
      operator = e.target.id;
      if (storedValue) {
        if (newValue) {
          storedValue = operate(oldOperator, storedValue, newValue);
          newValue = "";
          var1 = "";
          oldOperator = operator;
        }
      } else if (storedValue !== true) {
        oldOperator = operator;
        storedValue = newValue;
        newValue = "";
        var1 = "";
      }
      writeDisplayInput(e);
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
    } else if (e.target.id === "delete") {
      deleteValue();
    }
    console.log(operator);
    console.log(newValue);
  });
}
