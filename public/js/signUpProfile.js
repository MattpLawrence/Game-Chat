const nameUser = document.getElementById("nameUser");
const nameDisplay = document.getElementById("nameUser");
const password = document.getElementById("nameUser");
const confirmPassword = document.getElementById("nameUser");
const btnRegister = document.getElementById("btnRegister");

function register() {
  btnRegister.addEventListener("click", checkInputs);
}
function checkInputs() {
  console.log(nameUser);
}
