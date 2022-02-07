const fldUserName = document.getElementById("fldUserName");
const fldPassword = document.getElementById("fldPassword");
const loginForm = document.getElementById("loginForm");
const btnLogin = document.getElementById("btnLogin");

let alert = document.createElement("h3");
alert.classList.add("alert");
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
    })
      .then(function (response) {
        if (!response.ok) {
          if (loginForm.children.length <= 6) {
            alert.innerHTML = `*Invalid username or password.`;
            loginForm.append(alert);
          } else {
            loginForm.children[6].remove();
            alert.innerHTML = `*Invalid username or password.`;
            loginForm.append(alert);
          }
        }
        console.log(response);
        return response.json();
      })
      .then(function (data) {
        // check to see if the response comes back and send to url before rerouting page
        if (data.message.length > 0) {
          console.log(data.message);
          console.log("success");
          document.location.replace(`/chat?username=${data.message}`);
        }
      })
      .catch(function (error) {
        console.error(error);
      });
  }
};

// check to see that inputs are filled out correctly and notify if not
let checkInputs = function () {
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
btnLogin.addEventListener("click", checkInputs);
