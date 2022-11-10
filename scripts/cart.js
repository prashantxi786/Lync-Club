let cdata = JSON.parse(localStorage.getItem("cart"));
let discodata = cdata.length * 100;
console.log(cdata);
const seleopt = () => {
  return `
  <Option>
    1
  </Option>
  <Option>
    2
  </Option>
  <Option>
    3
  </Option>
  <Option>
    4
  </Option>
  <Option>
    5
  </Option>
  <Option>
    6
  </Option>
  <Option>
    7
  </Option>
  <Option>
    8
  </Option>
  <Option>
    9
  </Option>
  <Option>
    10
  </Option>`;
};
let total = 0;
let appe = document.getElementById("lft");
const append = (data) => {
  appe.innerHTML = null;
  data.forEach((el, i) => {
    let div = document.createElement("div");
    div.style.display = "flex";
    div.setAttribute("class", "items");

    let ldiv = document.createElement("div");
    ldiv.setAttribute("class", "detail");
    // ldiv.style.width="60%"

    let name = document.createElement("h4");
    name.innerText = el.name;

    let price = document.createElement("h2");
    price.innerText = el.pric + 100;
    total += el.pric + 100;

    let line = document.createElement("p");
    line.innerText = "You saved 100rs!";

    let Select = document.createElement("select");
    Select.innerHTML = seleopt();
    ldiv.append(name, price, line, Select);
    let rdiv = document.createElement("div");
    rdiv.setAttribute("class", "image");
    let img = document.createElement("img");
    img.src = el.image;
    rdiv.append(img);
    let btndiv = document.createElement("div");
    btndiv.setAttribute("class", "bttn");
    let rem = document.createElement("button");
    rem.innerText = "Remove";
    rem.addEventListener("click", () => {
      remFun(i);
    });
    let wis = document.createElement("button");
    wis.innerText = "Move to Wishlist";
    div.append(ldiv, rdiv);
    btndiv.append(rem, wis);
    let maindiv = document.createElement("div");
    maindiv.setAttribute("class", "main");
    maindiv.style.padding = "10px";
    maindiv.append(div, btndiv);
    appe.append(maindiv);
  });
};
append(cdata);
let x = 0;
const remFun = (i) => {
  cdata.splice(i, 1);
  localStorage.setItem("cart", JSON.stringify(cdata));
  append(cdata);
  location.reload();
};

let totalmrp = document.getElementById("totalmrp");
totalmrp.innerText = total;
let subtotal = document.getElementById("subtotal");
subtotal.innerText = total - discodata;
let totalprice = document.getElementById("totalprice");
totalprice.innerText = total - discodata;

let disco = document.getElementById("disco");
disco.innerText = discodata;

let bagdisc = document.getElementById("bagdisc");
bagdisc.innerText = discodata;

let cuppn = document.getElementById("cuppn");
cuppn.addEventListener("click", () => {
  let val = prompt("Enter coupancode");
  // console.log(val);
  if (val == "MASAI200") {
    totalprice.innerText = total - discodata - 200;
    subtotal.innerText = total - discodata - 200;
    bagdisc.innerText = discodata + 200;
    disco.innerText = discodata + 200;
    let cupsus = document.getElementById("cupsus");
    cupsus.innerText = "CONGRATULATION you got 200 off !!!";
  } else {
    alert("Enter Valid Coupan code");
  }
});
