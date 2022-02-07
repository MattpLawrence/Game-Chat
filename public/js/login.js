const fldUserName = document.getElementById("fldUserName");
const fldPassword = document.getElementById("fldPassword");
const loginForm = document.getElementById("loginForm");
const btnLogin = document.getElementById("btnLogin");

let checkInputs = function checkInputs() {
  let alert = document.createElement("h3");
  alert.classList.add("alert");

  if (!(fldUserName.value.length >= 6)) {
    if (loginForm.children.length < 6) {
      console.log(loginForm.children.length);
      alert.innerHTML = `*Please enter a valid username.`;
      loginForm.append(alert);
    } else {
      console.log(loginForm.children.length);
      loginForm.children[5].remove();
      alert.innerHTML = `*Please enter a valid username.`;
      loginForm.append(alert);
    }
  } else if (!(fldPassword.value.length >= 6)) {
    if (loginForm.children.length < 6) {
      console.log(loginForm.children.length);
      alert.innerHTML = `*Please enter a valid password.`;
      loginForm.append(alert);
    } else {
      console.log("else");
      loginForm.children[5].remove();
      alert.innerHTML = `*Please enter a valid password.`;
      loginForm.append(alert);
    }
  }
};

btnLogin.addEventListener("click", checkInputs);
