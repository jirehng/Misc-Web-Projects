const basic = document.getElementById("basic");
const professional = document.getElementById("professional");
const master = document.getElementById("master");

function validate() {
  if (document.getElementById("check").checked) {
    basic.innerHTML = "199.99";
    professional.innerHTML = "249.99";
    master.innerHTML = "399.99";
  } else {
    basic.innerHTML = "19.99";
    professional.innerHTML = "24.99";
    master.innerHTML = "39.99";
  }
}
