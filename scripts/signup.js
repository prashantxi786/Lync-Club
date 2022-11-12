import { navbar } from "./navbar.js";

let nav_div = document.getElementById("navbar");
nav_div.innerHTML = navbar();

let signup = document.getElementById("signup");
signup.addEventListener("click", sign);
async function sign() {
  let name = document.getElementById("name").value;
  let mail = document.getElementById("mail").value;
  let username = document.getElementById("username").value;
  let pass = document.getElementById("pass").value;
  let mob = document.getElementById("mob").value;

  let obj = {
    name: name,
    email: mail,
    username: username,
    password: pass,
    mobile: mob,
    description: "hello",
  };

  let api = `https://masai-api-mocker.herokuapp.com/auth/register`;
  let data = await fetch(api, {
    method: "POST",
    body: JSON.stringify(obj),
    headers: {
      "Content-Type": "application/json",
    },
  });
  let res = await data.json();
  console.log(res);
  console.log("hi");
  // if (name == "" || mail == "" || username == "" || pass == "" || mob == "") {
  //   alert("Please fill all the details");
  // }
  if (res.error == false) {
    // alert("Signed Up Successfully");
    let signuptext=document.getElementById("signuptext");
    signuptext.innerText="Signed Up Successfully";
    signuptext.style.color="green";
    
    window.location.href = "./login.html";

  } else {
    // alert("registration failed");
    let signuptext=document.getElementById("signuptext");
    signuptext.innerText="Signup failed";
    signuptext.style.color="red";
  }
}
