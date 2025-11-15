// For operation display

let operator = "";
const add = "+";
const sub = "-";
const mul = "*";
const div = "/";
const dot = ".";

let assign = function (ram) {
  operator = operator + ram;
  document.getElementById("operation").innerHTML = operator;
};

// End of operation display

// For Answer

let answer = 0;
var value1 = "";
var value2 = "";
var tr = 1;
var modeOfCal = 0;

function valueassign1(value) {
  this.value1 = this.value1 + value;
}
function valueassign2(value) {
  this.value2 = this.value2 + value;
}
// For functions
let adding = function (a, b) {
  answer = a + b;
};
let subtracting = function (a, b) {
  answer = a - b;
};
let multiply = function (a, b) {
  answer = a * b;
};
let divide = function (a, b) {
  answer = a / b;
};

// End of Functions

let calculate = function (value, logic) {
  logic(value);
};

function number(num) {
  if (tr === 1) {
    assign(num);
    valueassign1(num);
  } else {
    assign(num);
    valueassign2(num);
  }
}

function equal() {
  modeOfCal(+value1, +value2);

  document.getElementById("ans").innerHTML = answer;
  value1 = answer;
  value2 = "";
  operator = answer;
}
function cal(a, b) {
  assign(a);
  modeOfCal = b;
  tr = 2;
}

// End of Answer
