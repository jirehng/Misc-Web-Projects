let valid = null;
const first_name = document.getElementsByClassName("first-name")[0];
const last_name = document.getElementsByClassName("last-name")[0];
const email = document.getElementsByClassName("email")[0];
const password = document.getElementsByClassName("password")[0];

const warning_F = document.getElementsByClassName("warning-F")[0];
const warning_L = document.getElementsByClassName("warning-L")[0];
const warning_E = document.getElementsByClassName("warning-E")[0];
const warning_P = document.getElementsByClassName("warning-P")[0];

function error(value) {
  value.style.border = "2px solid hsl(0, 100%, 74%)";
  value.style.backgroundImage = "url('/images/icon-error.svg')";
  value.style.backgroundRepeat = "no-repeat";
  value.style.backgroundPosition = "8.2cm";
  value.placeholder = "";
}

function revert(value) {
  value.style.border = "1px solid hsl(0, 0%, 89%)";
  value.style.backgroundImage = "none";
  value.placeholder = "";
}

function validate() {
  if (first_name.value == "") {
    warning_F.style.display = "block";
    error(first_name);
  } else {
    warning_F.style.display = "none";
    revert(first_name);
  }
  if (last_name.value == "") {
    warning_L.style.display = "block";
    error(last_name);
  } else {
    warning_L.style.display = "none";
    revert(last_name);
  }
  if (email.value == "" || email.value.includes("@gmail.com") == false) {
    warning_E.style.display = "block";
    error(email);
  } else {
    warning_E.style.display = "none";
    revert(email);
  }
  if (password.value == "") {
    warning_P.style.display = "block";
    error(password);
  } else {
    warning_P.style.display = "none";
    revert(password);
  }
}
