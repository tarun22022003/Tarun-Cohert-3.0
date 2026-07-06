const form = document.querySelector("form");
const setting = document.querySelector(".homeSetting");
const dashboard = document.querySelector(".active");
const mainBody = document.querySelector(".main");
const settingPage = document.querySelector(".settings");
const newName = document.querySelector(".UserNameDisplay");
const symbol = document.querySelectorAll(".symbol");
const logut = document.querySelector(".logoutBtn");

let User_accountDetails = JSON.parse(localStorage.getItem("Users")) || [];

let userData = (event) => {
  let fullName = event.target[0].value;
  let Email = event.target[1].value;
  let Password = event.target[2].value;

  if (fullName.trim() === "" || Email.trim() === "" || Password.trim() === "") {
    return;
  }

  let obj = {
    fullName,
    Email,
    Password,
  };
  return obj;
};

let loginDetails = (event) => {
  let userEmail = event.target[0].value;
  let userPassword = event.target[1].value;
  if (userEmail.trim() === "" || userPassword.trim() === "") {
    return;
  }
  let userobj = {
    userEmail,
    userPassword,
  };
  return userobj;
};

let changeUserDetails = (event) => {
  let changedName = event.target[0].value;
  let changedCurr = event.target[1].value;

  let newDetails = {
    changedName,
    changedCurr,
  };
  return newDetails;
};

const currentUser = JSON.parse(localStorage.getItem("currentUser"));

if (currentUser) {
  newName.textContent = currentUser.fullName;
  symbol.forEach((item) => {
    item.textContent = currentUser.currencySymbol;
  });
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (form.id === "login") {
    let loginObject = loginDetails(event);
    let loggedInUser = User_accountDetails.find((elem) => {
      return (
        elem.Email === loginObject.userEmail &&
        elem.Password === loginObject.userPassword
      );
    });

    if (loggedInUser) {
      localStorage.setItem("currentUser", JSON.stringify(loggedInUser));

      window.location.replace("home.html");
    } else {
      alert("No such Username Found!");
    }
  }

  if (form.id === "register") {
    let userObject = userData(event);
    User_accountDetails.push(userObject);
    localStorage.setItem("Users", JSON.stringify(User_accountDetails));
    console.log(User_accountDetails);
  }
  if (form.id === "changes") {
    let newChanges = changeUserDetails(event);
    let currentUser = JSON.parse(localStorage.getItem("currentUser"));
    currentUser.fullName = newChanges.changedName;
    localStorage.setItem("currentUser", JSON.stringify(currentUser));
    let users = JSON.parse(localStorage.getItem("Users")) || [];
    let newSymbol = newChanges.changedCurr[5];

    currentUser.fullName = newChanges.changedName;
    currentUser.currencySymbol = newSymbol;

    localStorage.setItem("currentUser", JSON.stringify(currentUser));

    users.forEach((user) => {
      if (user.Email === currentUser.Email) {
        user.fullName = currentUser.fullName;
        user.currencySymbol = newSymbol;
      }
    });

    localStorage.setItem("Users", JSON.stringify(users));

    symbol.forEach((item) => {
      item.textContent = newSymbol;
    });
  }
  form.reset();
});

setting.addEventListener("click", () => {
  mainBody.style.display = "none";
  settingPage.style.display = "flex";
});
dashboard.addEventListener("click", () => {
  mainBody.style.display = "";
  settingPage.style.display = "none";
});
logut.addEventListener("click", () => {
  localStorage.removeItem("currentUser");
  window.location.replace("index.html");
});
