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
