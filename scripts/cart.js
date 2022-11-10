let cdata = JSON.parse(localStorage.getItem("cart"));
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
    price.innerText = el.pric;

    let line = document.createElement("p");
    line.innerText = "You saved 250rs!";

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

const remFun = (i) => {
  cdata.splice(i, 1);
  localStorage.setItem("cart", JSON.stringify(cdata));
  append(cdata);
};
