


document.getElementById('mens_btn').onclick=async()=>{
    console.log('car')


let brand=document.getElementById('men_brand').value
let image=document.getElementById('men_image_url').value
let price=document.getElementById('men_price').value
let description=document.getElementById('men_des').value

let obj={
   image,
url:"",
brand,
brand_url:'',
price,
price_url:'',
description,
tribe:'',
tribe_url:""}
console.log(obj)

let api=await fetch(`http://localhost:3000/mens/`,{
    method:"POST",
    body:JSON.stringify(obj),
    headers:{
        'Content-Type':'application/json'
    }
})
let data=await api.json()
console.log(data)


}