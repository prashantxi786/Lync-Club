




document.getElementById('signup').onclick=async()=>{


    let name=document.getElementById('name').value
    let mail=document.getElementById('mail').value
    let username=document.getElementById('username').value
    let pass=document.getElementById('pass').value
    let mob=document.getElementById('mob').value

    let obj={
        name,
        mail,
        username,
        pass,
        mob,
    }

    let api=await fetch(`http://localhost:3000/singup`,{
        method:"POST",
        body:JSON.stringify(obj),
        headers:{
            "Content-Type":"application/json"
        }
    })
    let data =await api.json()
   
    setTimeout(()=>{
        window.location.href="login_admin.html"
        console.log(data)
    },1000)



}