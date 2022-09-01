function signup() {
  var firstname = document.getElementById("firstname")?.value;
  let lastname = document.getElementById("lastname")?.value;
  let email = document.getElementById("email")?.value;
  let psw = document.getElementById("pwd")?.value;
  let conpsw = document.getElementById("conpsw")?.value;

  axios
    .post("http://localhost:4000/auth/signup", {
      firstname,
      lastname,
      email,
      password: psw,
    })
    .then((response) => {
      console.log(response.data);
      const userId = response.data.id;
      console.log("sucessfully...");
      localStorage.setItem("userId", userId);
      window.location.pathname =
        "home/srinivas/Desktop/guvi-project/update.html";
    })
    .catch((error) => console.error(error));

  if (psw !== conpsw) {
    alert("password doesn't match");
    return;
  }
}

function signin() {
  let email = document.getElementById("email");
  let psw = document.getElementById("psw");

  console.log("signup");

  await axios
    .post("http://localhost:4000/user/signin", { email, password: psw })
    .then((response) => {
      const userId = response.data.id;
      localStorage.setItem("userId", userId);
      window.location.pathname = "home/srinivas/Desktop/guvi-project/home.html";
    })
    .catch((error) => console.error(error));
}
