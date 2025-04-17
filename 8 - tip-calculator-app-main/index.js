let bill = document.getElementsByClassName("bill")[0];
let people = document.getElementsByClassName("people")[0];
let warning_bill = document.getElementsByClassName("warning_bill")[0];
let warning_people = document.getElementsByClassName("warning_people")[0];
let tip_amount = document.getElementById("tip_amount");
let total = document.getElementById("total");

if (people.value != 0 && bill.value != 0) {
  document.getElementsByClassName("reset")[0].style.background =
    "hsl(172, 67%, 45%)";
} else {
  document.getElementsByClassName("reset")[0].style.background = "";
}

// TODO: Calculate total and tip amount

function validate_people() {
  if (people.value == "0") {
    people.style.border = "2px solid red";
    warning_people.style.display = "block";
  } else {
    people.style.border = "";
    warning_people.style.display = "none";
  }
}

function validate_bill() {
  if (bill.value == "0") {
    bill.style.border = "2px solid red";
    warning_bill.style.display = "block";
  } else {
    bill.style.border = "";
    warning_bill.style.display = "none";
  }
}
let current;
let custom = false

function toggle(id) {
  if (current != undefined && !custom) {
    document.getElementById(current).style.background = "";
    document.getElementById(current).style.color = "";
  }
  if (id != "custom-input") {
    custom = false
    document.getElementById("custom-input").value = "";
    document.getElementById(id).style.background = "hsl(172, 67%, 45%)";
    document.getElementById(id).style.color = "hsl(183, 100%, 15%)";
    current = id;
  } else if (id == "custom-input") {
      current = document.getElementsByClassName('custom')[0].value
      custom = true;
  }
}

let tip_value;
let total_value;

function calculate_tip() {
  tip_value = 0;
  tip_value = (bill.value * (Number(current) / 100)) / people.value;
  tip_amount.innerHTML = tip_value.toFixed(2);
}

function calculate_total() {
  total_value = 0;
  total_value =
    (bill.value * (Number(current) / 100) + Number(bill.value)) / people.value;
  total.innerHTML = total_value.toFixed(2);
}

function reset() {
  document.getElementById("tip_amount").innerHTML = "0.00";
  document.getElementById("total").innerHTML = "0.00";
  document.getElementsByClassName("reset")[0].style.backgroundColor = "";
}

function change() {
  if (bill.value != 0 && people.value != 0 && current != undefined) {
    calculate_total();
    calculate_tip();
    document.getElementsByClassName("reset")[0].style.backgroundColor =
      "hsl(172, 67%, 45%)";
  }
}
