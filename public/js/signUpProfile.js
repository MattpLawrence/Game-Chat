const nameUser = document.getElementById("nameUser");
const nameDisplay = document.getElementById("nameDisplay");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const btnRegister = document.getElementById("btnRegister");
const frmRegister = document.getElementById("frmRegister");

console.log("yup");

btnRegister.addEventListener("click", checkInputs);

function checkInputs() {
  let alert = document.createElement("h3");
  alert.classList.add("alert");

  if (!(nameUser.value.length >= 6)) {
    if (frmRegister.children.length < 6) {
      console.log(frmRegister.children.length);
      alert.innerHTML = `*Please enter a username with at least 6 characters.`;
      frmRegister.append(alert);
    } else {
      frmRegister.firstElementChild.remove;
    }
  }
  if (!(nameDisplay.value.length >= 4)) {
    if (frmRegister.children.length < 6) {
      console.log(frmRegister.children.length);
      alert.innerHTML = `*Please enter a screen name with at least 4 characters.`;
      frmRegister.append(alert);
    } else {
      frmRegister.firstElementChild.remove;
    }
  }
}
