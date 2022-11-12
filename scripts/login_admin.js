import { navbar} from "./navbar.js";
let nav_div=document.getElementById('navbar');
nav_div.innerHTML = navbar();


document.getElementById('admin_login').onclick=async()=>{


let username=document.getElementById('user').value
let pass=document.getElementById('pass').value

let api=await fetch('http://localhost:3000/singup')
let data=await api.json()
if(data[0].username==username && data[0].pass==pass){
    // alert("Admin Logged in succesfully")
    let admintext=document.getElementById('admintext');
    admintext.innerText="Admin Logged in succesfully";
    admintext.style.color="green";
    setTimeout(()=>{
        window.location.href="admin.html"
        console.log("divert")
    },2000)
}
else if(username==""||pass==""){
    alert("Please fill Credentials first !")
}
else{
    alert('Username/Password not match')
}


}