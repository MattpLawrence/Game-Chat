const nameUser = document.getElementById("nameUser");
const nameDisplay = document.getElementById("nameDisplay");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const btnRegister = document.getElementById("btnRegister");
const frmRegister = document.getElementById("frmRegister");
console.log("yup");

frmRegister.addEventListener("submit", checkInputs);

function checkInputs() {
  console.log(
    nameUser.value + nameDisplay.value + password.value + confirmPassword.value
  );
}

function checkSubmit(e) {
  if (e && e.keyCode == 13) {
    nameUser.value + nameDisplay.value + password.value + confirmPassword.value;
  }
}
