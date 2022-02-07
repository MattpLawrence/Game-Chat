const nameUser = document.getElementById("nameUser");
const nameDisplay = document.getElementById("nameDisplay");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const btnRegister = document.getElementById("btnRegister");
const frmRegister = document.getElementById("frmRegister");

let alert = document.createElement("h3");
alert.classList.add("alert");

let postUser = async () => {
  string = nameUser.value.trim();
  let name_user = string[0].toUpperCase() + string.slice(1);
  const name_display = nameDisplay.value.trim();
  const pass_user = password.value.trim();
  const age_user = 1;
  const time_start = "1";
  const time_end = "2";

  if (
    name_user &&
    name_display &&
    pass_user &&
    age_user &&
    time_start &&
    time_end
  ) {
    const response = await fetch(`/api/signup/signUpProfile`, {
      method: "POST",
      body: JSON.stringify({
        name_user,
        pass_user,
        name_display,
        age_user,
        time_start,
        time_end,
      }),
      headers: {
        "content-type": "application/json",
      },
    });

    if (response.ok) {
      console.log("success");
      document.location.replace(`/chat?username=${name_display}`);
    } else {
      //if duplicate entry alert the user to try different names
      if (frmRegister.children.length < 6) {
        console.log(frmRegister.children.length);
        alert.innerHTML = `*Username and Display name have already been taken.`;
        frmRegister.append(alert);
      } else {
        console.log("else");
        frmRegister.children[5].remove();
        alert.innerHTML = `*Username and Display name have already been taken.`;
        frmRegister.append(alert);
      }
    }
  }
};

let checkInputs = () => {
  // let alert = document.createElement("h3");
  // alert.classList.add("alert");

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
    postUser();
  }
};

btnRegister.addEventListener("click", checkInputs);
