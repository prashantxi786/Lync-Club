



document.getElementById('admin_login').onclick=async()=>{


let username=document.getElementById('user').value
let pass=document.getElementById('pass').value

let api=await fetch('http://localhost:3000/singup')
let data=await api.json()
if(data[0].username==username && data[0].pass==pass){
    alert("Admin Logged in succesfully")
    setTimeout(()=>{
        window.location.href="admin.html"
        console.log("divert")
    },2000)
}
else{
    alert('Username/Password not match')
}


}