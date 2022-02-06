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
    postUser()
  //   const response = await post(`/api/signup/signupProfile`, {
  //     method: "POST",
  //     body: JSON.stringify({
  //       name_user,
  //       pass_user,
  //       name_display,
  //       age_user,
  //       time_start,
  //       time_end,
  //     }),
  //     headers: {
  //       name_user: nameUser.value,
  //       pass_user: password.value,
  //       name_display: nameDisplay.value,
  //       age_user: "1",
  //       time_start: "06:00AM",
  //       time_end: "12:00PM",
  //     },
  //   });

  //   if (response.ok) {
  //     console.log("success");
  //     // document.location.replace("/profile");
  //   } else {
  //     alert("Failed to create project");
  //   }
  // }
}

let postUser = async() => {

  const user = document.querySelector('#project-name').value.trim();
  const display = document.querySelector('#project-funding').value.trim();
  const pass = document.querySelector('#project-desc').value.trim();

  if(user && display && pass)
    const response = await post(`/api/signup/signupProfile`, {
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
        name_user: user,
        pass_user: pass,
        name_display: display,
        age_user: "1",
        time_start: "06:00AM",
        time_end: "12:00PM",
      },
    });

    if (response.ok) {
      console.log("success");
      // document.location.replace("/profile");
    } else {
      alert("Failed to create project");
    };
  }
}
