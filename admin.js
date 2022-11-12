import {navbar,footer} from "./scripts/navbar.js"

let navbar_div=document.getElementById("navbar");
navbar_div.innerHTML=navbar();
let footer_div=document.getElementById("footer");
footer_div.innerHTML=footer();



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
description_url:"",
tribe:'',
tribe_url:"",
id:''}
console.log(obj)

let api=await fetch(`http://localhost:3000/men`,{
    method:"POST",
    body:JSON.stringify(obj),
    headers:{
        'Content-Type':'application/json'
    }
})
let data=await api.json()
console.log(data)


}



//women
document.getElementById('women_btn').onclick=async()=>{
    console.log('car')


let brand=document.getElementById('women_brand').value
let image=document.getElementById('women_image_url').value
let price=document.getElementById('women_price').value
let description=document.getElementById('women_des').value

let obj={
   image,
url:"",
brand,
brand_url:'',
price,
price_url:'',
description,
description_url:'',
tribe:'',
tribe_url:"",
id:""}
console.log(obj)

let api=await fetch(`http://localhost:3000/women/`,{
    method:"POST",
    body:JSON.stringify(obj),
    headers:{
        'Content-Type':'application/json'
    }
})
let data=await api.json()
console.log(data)


}

//mobile
document.getElementById('mobile_btn').onclick=async()=>{
    console.log('car')


let brand=document.getElementById('mobile_brand').value
let image=document.getElementById('mobile_image_url').value
let price=document.getElementById('mobile_price').value
let description=document.getElementById('mobile_des').value

let obj={
   image,
   name:description,
  

}
console.log(obj)
if(brand=='apple'){
    let api=await fetch(`http://localhost:3000/apple`,{
    method:"POST",
    body:JSON.stringify(obj),
    headers:{
        'Content-Type':'application/json'
    }
})
let data=await api.json()
console.log(data)

}
//xioami
else if(brand=='xiaomi'){
    let api=await fetch(`http://localhost:3000/xiaomi`,{
    method:"POST",
    body:JSON.stringify(obj),
    headers:{
        'Content-Type':'application/json'
    }
})
let data=await api.json()
console.log(data)

}
//oppo
else if(brand=='oppo'){
    let api=await fetch(`http://localhost:3000/oppo`,{
    method:"POST",
    body:JSON.stringify(obj),
    headers:{
        'Content-Type':'application/json'
    }
})
let data=await api.json()
console.log(data)

}
//vivo
else if(brand=='vivo'){
    let api=await fetch(`http://localhost:3000/vivo`,{
    method:"POST",
    body:JSON.stringify(obj),
    headers:{
        'Content-Type':'application/json'
    }
})
let data=await api.json()
console.log(data)

}
//oneplus
else if(brand=='oneplus'){
    let api=await fetch(`http://localhost:3000/oneplus`,{
    method:"POST",
    body:JSON.stringify(obj),
    headers:{
        'Content-Type':'application/json'
    }
})
let data=await api.json()
console.log(data)

}
//samsung
else if(brand=='samsung'){
    let api=await fetch(`http://localhost:3000/samsung`,{
    method:"POST",
    body:JSON.stringify(obj),
    headers:{
        'Content-Type':'application/json'
    }
})
let data=await api.json()
console.log(data)

}




}