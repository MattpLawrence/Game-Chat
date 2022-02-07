const fldUserName = document.getElementById("fldUserName");
const fldPassword = document.getElementById("fldPassword");
const loginForm = document.getElementById("loginForm");
const btnLogin = document.getElementById("btnLogin");

// function cap() {
//   string = fldUserName.value;
//   finalString = string[0].toUpperCase() + string.slice(1);
//   console.log(finalString);
// }

// make api call to see if username and password are in database
let checkCredentials = async () => {
  // capitalize first letter
  string = fldUserName.value.trim();
  let name_user = string[0].toUpperCase() + string.slice(1);
  const pass_user = fldPassword.value.trim();

  if (name_user && pass_user) {
    const response = await fetch(`/api/login`, {
      method: "POST",
      body: JSON.stringify({
        name_user,
        pass_user,
      }),
      headers: {
        "content-type": "application/json",
      },
    });

    if (response.ok) {
      console.log("success");
      document.location.replace(`/chat?username=${name_user}`);
    } else {
      console.log(err);
      alert("Failed to login");
    }
  }
};

// check to see that inputs are filled out correctly and notify if not
let checkInputs = function () {
  let alert = document.createElement("h3");
  alert.classList.add("alert");

  if (!(fldUserName.value.length >= 6)) {
    if (loginForm.children.length <= 6) {
      console.log(loginForm.children.length);
      alert.innerHTML = `*Please enter a valid username.`;
      loginForm.append(alert);
      console.log(loginForm.children.length);
    } else {
      console.log(loginForm.children.length);
      loginForm.children[6].remove();
      alert.innerHTML = `*Please enter a valid username.`;
      loginForm.append(alert);
    }
  } else if (!(fldPassword.value.length >= 4)) {
    if (loginForm.children.length <= 6) {
      console.log(loginForm.children.length);
      alert.innerHTML = `*Please enter a valid password.`;
      loginForm.append(alert);
    } else {
      console.log("else");
      loginForm.children[6].remove();
      alert.innerHTML = `*Please enter a valid password.`;
      loginForm.append(alert);
    }
  } else {
    console.log("correct login");
    checkCredentials();
  }
};

//listen for submit click
btnLogin.addEventListener("click", checkCredentials);
