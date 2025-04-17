let input = document.querySelector("input");
let warning = document.querySelector(".warning");

function validateEmail() {
  if (!input.value.includes('@')) {
    warning.style.display = 'block'
  }
  else {
    warning.style = ""
  }
}

