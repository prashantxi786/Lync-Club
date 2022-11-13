import { navbar,footer } from "./navbar.js";
document.getElementById("navbar").innerHTML = navbar();
document.getElementById("footer").innerHTML = footer();
let category = document.getElementById("categ");
let size = document.getElementById("size");
let brand = document.getElementById("brand");
let sleeve = document.getElementById("sleeve");
let fit = document.getElementById("fit");
let sort = document.getElementById("sort");




const append = (data) => {
      container.innerHTML = null;
      data.forEach(function(ele){
            let div = document.createElement("div");
            div.onclick = () => {
                  localStorage.setItem("cover",JSON.stringify(ele));
                  localStorage.setItem("brand",JSON.stringify("LYNC CLUB"))
                  window.location.href = ("detail.html");
            }
            let image = document.createElement("img");
            image.src = ele.image;
            let bewkoof = document.createElement("p");
            bewkoof.innerText = "Bewakoof";
            bewkoof.style.fontSize = "15px"
            bewkoof.style.color = "RGB(66 68 71)";
            bewkoof.style.fontFamily = "sans-serif";
            bewkoof.style.marginTop = "0px";

            let name = document.createElement("h6");
            name.innerText = ele.name;
            name.style.color = "RGB(140 142 144)";
            name.style.fontFamily = "sans-serif";
            name.style.marginTop = "-10px";
            
            let price = document.createElement("p");
            price.innerText = `₹${ele.price}`;
            price.style.color = "black";
            price.style.fontFamily = "sans-serif";
            price.style.fontSize = "20px"
            price.style.fontWeight = "bolder";
            price.style.marginTop = "-0px";

            let act_price = document.createElement("s");
            act_price.innerText = ele.act_price;
            act_price.style.color = "RGB(140 142 144)";
            act_price.style.fontFamily = "sans-serif";
            

            let pricebox = document.createElement("div");
            pricebox.style.display="flex";
            // pricebox.style.border = "1px solid green";
            pricebox.style.gap = '15px';
            // pricebox.style.justifyContent = "centre";
            pricebox.style.marginTop = "-20px";
            pricebox.append(price,act_price)
            div.append(image,bewkoof ,name,pricebox);
            container.append(div);
      })
} 



const getdata = async() => {
      
      

      let x = "Women_t-shirt";
            
      let res;
       category.onchange = async() => {
            x = category.value;
            console.log('x:', x)

            
            res = await fetch(`http://localhost:3000/${x}?_page=1&_limit=20`);
            let data = await res.json();
            console.log('data:', data)
            append(data);
      }
      
       res = await fetch(`http://localhost:3000/${x}?_page=1&_limit=20`);
       sort.onchange = async () => {
            sort.value;
            if(sort.value == "Low To High"){
                  res = await fetch(`http://localhost:3000/${x}?_page=1&_limit=20&_sort=price&_order=asc`);
                  let data = await res.json();
                  console.log('data:', data)
                  append(data);
            }else{
                  res = await fetch(`http://localhost:3000/${x}?_page=1&_limit=20&_sort=price&_order=desc`);
                  let data = await res.json();
                  console.log('data:', data)
                  append(data);
            }
      } 

      let data = await res.json();
      console.log('data:', data)
      append(data);
}
getdata();

// sort.onchange = (data) => {

//       if(sort.value == "asc"){
//             let asc_data = data.sort(function(ele1,ele2){
//                   return ele1.price - ele2.price;
//             }) 
//             append(asc_data);
//       }else if(sort.value == "dsc"){
//             let asc_data = data.sort(function(ele1,ele2){
//                   return ele2.price - ele1.price;
//             }) 
//             append(asc_data);
//       }
      
// }

