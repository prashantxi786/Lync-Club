import { navbar } from "./navbar.js";
document.getElementById("navbar").innerHTML = navbar();
let data = JSON.parse(localStorage.getItem("cover"));
let b = localStorage.getItem("brand");
let x = b.toUpperCase();
// console.log(data.image);
const append = (data, b) => {
  let imgdiv = document.getElementById("imgg");
  let ig = document.createElement("img");
  ig.src = data.image;
  imgdiv.append(ig);
  let pdname = document.getElementById("pdname");
  pdname.innerText = data.name;
  let floww = document.getElementById("floww");
  floww.innerText = `Home / Covers / ${b} / ${data.name}`;
  let bdname = document.getElementById("bdname");
  bdname.innerText = b;
};
append(data, x);

let floww = document.getElementById("floww");
floww.addEventListener("click", () => {
  window.location.href = "mobile.html";
});

let lastp = document.getElementById("1");
lastp.addEventListener("click", () => {
  window.location.href = "cart.html";
  cartFun();
});

let qty = document.getElementById("qty");
const cartFun = () => {
  data.brand = b;
  data.qty = qty.value;
  data.pric = 399;
  let arr = JSON.parse(localStorage.getItem("cart")) || [];
  arr.push(data);
  // arr.push(b);
  localStorage.setItem("cart", JSON.stringify(arr));
};
