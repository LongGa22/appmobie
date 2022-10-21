let apiUser = "http://localhost:3000/user";

function login() {
  getUser(hanldeLogin);
}

function getUser(callback) {
  fetch(apiUser).then(function (res) {
    return res.json().then(callback);
  });
}
function hanldeLogin(data) {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  data.forEach((data) => {
    if (data.email == email && data.password == password) {
      alert("dang nhap thanh cong");
      window.location.href = "./todolist.html";
    }
  });
}

function signup() {
  handleCreateForm();
}

function createUser(data) {
  fetch(apiUser, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then(function (res) {
    return res.json();
  });
  if (data) {
    alert("dang ky thanh cong");
  }
}
function handleCreateForm() {
  let email = document.getElementById("email");
  let password = document.getElementById("password");
  let user = {
    email: email.value,
    password: password.value,
  };
  createUser(user);
}
