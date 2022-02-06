const nameUser = document.getElementById("nameUser");
const nameDisplay = document.getElementById("nameDisplay");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const btnRegister = document.getElementById("btnRegister");
const frmRegister = document.getElementById("frmRegister");

console.log("yup");

btnRegister.addEventListener("click", checkInputs);

function checkInputs() {
  console.log(
    nameUser.value + nameDisplay.value + password.value + confirmPassword.value
  );
  let alert = document.createElement("h3");
  alert.classList.add("alert");

  if (nameUser.value.length >= 6) {
    console.log(nameUser.value.length);
  } else {
    alert.innerHTML = `*Please enter a username with at least 6 characters.`;
    // alert.text("Please enter").css("color", "red").addClass("error-txt");
    frmRegister.append(alert);
    console.log("else");
  }
}

// function trim(str) {
//   return str.trim;
// }

// function checkInputs() {
//   console.log(
//     nameUser.value + nameDisplay.value + password.value + confirmPassword.value
//   );

//   if (nameUser.value.length >= 6) {
//     console.log(nameUser.value.length);
//   } else {
//     console.log("else");
//     nameUser.value = "please";
//   }
// }
