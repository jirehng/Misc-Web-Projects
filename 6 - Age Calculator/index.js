const year = document.getElementById("years");
const month = document.getElementById("months");
const day = document.getElementById("days");

const year_value = document.getElementsByClassName("year-input")[0];
const month_value = document.getElementsByClassName("months-input")[0];
const day_value = document.getElementsByClassName("days-input")[0];

const currentTime = new Date();

function error(value) {
  document.getElementsByClassName(value)[0].style.display = "block";
}

function revert(value) {
  document.getElementsByClassName(value)[0].style.display = "none";
}

let DOB = [];

function year_validator() {
  if (year_value.value == "") {
    error("errorY1");
    revert("errorY2");
  } else if (year_value.value > currentTime.getFullYear()) {
    error("errorY2");
    revert("errorY1");
  } else {
    revert("errorY1");
    revert("errorY2");
    DOB.push(year_value.value);
  }
}

function month_validator() {
  if (month_value.value == "") {
    error("errorM1");
    revert("errorM2");
  } else if (month_value.value > 12 || month_value.value < 1) {
    error("errorM2");
    revert("errorM1");
  } else {
    revert("errorM1");
    revert("errorM2");
    DOB.push(month_value.value);
  }
}

function day_validator() {
  if (day_value.value == "") {
    error("errorD1");
    revert("errorD2");
  } else if (day_value.value < 0 || day_value.value > 31) {
    error("errorD2");
    revert("errorD1");
  } else {
    revert("errorD1");
    revert("errorD2");
    DOB.push(day_value.value);
  }
}
function submit() {
  day_validator();
  month_validator();
  year_validator();
}
