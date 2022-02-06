const nameUser = document.getElementById("nameUser");
const nameDisplay = document.getElementById("nameDisplay");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const btnRegister = document.getElementById("btnRegister");
const frmRegister = document.getElementById("frmRegister");

console.log("yup");

btnRegister.addEventListener("click", checkInputs);

let postUser = async () => {
  const user_name = nameUser.value.trim();
  const display = nameDisplay.value.trim();
  const pass = password.value.trim();
  const age = 1;
  const start = "1";
  const end = "2";

  if (user && display && pass) {
    const response = await fetch(`/api/signup/signupProfile`, {
      method: "POST",
      body: JSON.stringify({
        name_user,
        pass_user,
        name_display,
        age,
        start,
        end,
      }),
      headers: {
        "content-type": "application / json",
      },
    });

    if (response.ok) {
      console.log("success");
      // document.location.replace("/profile");
    } else {
      alert("Failed to create project");
    }
  }
};

function checkInputs() {
  let alert = document.createElement("h3");
  alert.classList.add("alert");

  if (!(nameUser.value.length >= 6)) {
    if (frmRegister.children.length < 6) {
      console.log(frmRegister.children.length);
      alert.innerHTML = `*Please enter a username with at least 6 characters.`;
      frmRegister.append(alert);
    } else {
      console.log("else");
      frmRegister.children[5].remove();
      alert.innerHTML = `*Please enter a username with at least 6 characters.`;
      frmRegister.append(alert);
    }
  } else if (!(nameDisplay.value.length >= 4)) {
    if (frmRegister.children.length < 6) {
      console.log(frmRegister.children.length);
      alert.innerHTML = `*Please enter a screen name with at least 4 characters.`;
      frmRegister.append(alert);
    } else {
      frmRegister.children[5].remove();
      alert.innerHTML = `*Please enter a screen name with at least 4 characters.`;
      frmRegister.append(alert);
    }
  } else if (!(password.value.length >= 4)) {
    if (frmRegister.children.length < 6) {
      console.log(frmRegister.children.length);
      alert.innerHTML = `*Please enter a password with at least 4 characters.`;
      frmRegister.append(alert);
    } else {
      frmRegister.children[5].remove();
      alert.innerHTML = `*Please enter a password with at least 4 characters.`;
      frmRegister.append(alert);
    }
  } else if (!(password.value === confirmPassword.value)) {
    if (frmRegister.children.length < 6) {
      console.log(frmRegister.children.length);
      alert.innerHTML = `*Your passwords do not match`;
      frmRegister.append(alert);
    } else {
      frmRegister.children[5].remove();
      alert.innerHTML = `*Your passwords do not match`;
      frmRegister.append(alert);
    }
  } else {
    console.log("complete");
    postUser();
  }
}
