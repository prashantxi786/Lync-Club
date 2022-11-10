let cdata = JSON.parse(localStorage.getItem("cart"));
console.log(cdata);
const seleopt = () => {
  return `<Option
    id="testChangeQty"
    class="col-xs-12 sizeOption  "
    style="color: rgb(81, 204, 204);"
  >
    1
  </Option>
  <Option id="testChangeQty" class="col-xs-12 sizeOption  ">
    2
  </Option>
  <Option id="testChangeQty" class="col-xs-12 sizeOption  ">
    3
  </Option>
  <Option id="testChangeQty" class="col-xs-12 sizeOption  ">
    4
  </Option>
  <Option id="testChangeQty" class="col-xs-12 sizeOption  ">
    5
  </Option>
  <Option id="testChangeQty" class="col-xs-12 sizeOption  ">
    6
  </Option>
  <Option id="testChangeQty" class="col-xs-12 sizeOption  ">
    7
  </Option>
  <Option id="testChangeQty" class="col-xs-12 sizeOption  ">
    8
  </Option>
  <Option id="testChangeQty" class="col-xs-12 sizeOption  ">
    9
  </Option>
  <Option id="testChangeQty" class="col-xs-12 sizeOption  ">
    10
  </Option>`;
};

const append = (data) => {
  data.forEach((el) => {
    let div = document.createElement("div");
      div.style.display = "flex";
      
    let ldiv = document.createElement("div");
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

    let img = document.createElement("img");

    img.src = el.image;

    rdiv.append(img);

    let rem = document.createElement("button");
    rem.innerText = "Remove";
    let wis = document.createElement("button");
    wis.innerText = "Move to Wishlist";
    div.append(ldiv, rdiv);
    document.getElementById("lft").append(div, rem, wis);
  });
};
append(cdata);
