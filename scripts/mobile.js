import { navbar } from "./navbar.js";
document.getElementById("navbar").innerHTML = navbar();
let inp = document.getElementById("Brand");
inp.addEventListener("change", () => {
  //   let y = document.getElementById("Brand").value;
  // console.log(inp.value);
  if (inp.value == "Apple") {
    appleFun();
  }
  if (inp.value == "OnePlus") {
    onplusFun();
  }
  if (inp.value == "Xiaomi") {
    xiomiFun();
  }
  if (inp.value == "Samsung") {
    samsunFun();
  }
  if (inp.value == "Vivo") {
    vivoFun();
  }
  if (inp.value == "Oppo") {
    oppoFun();
  }
});

const appleFun = () => {
  let z = apple();
  document.getElementById("model").innerHTML = z;
};
const apple = () => {
  return `<option value="">Select Model</option><option class="device--options" value="iPhone 12 Pro">iPhone 12 Pro</option><option class="device--options" value="iPhone 12 Mini">iPhone 12 Mini</option><option class="device--options" value="iPhone 12 Pro Max">iPhone 12 Pro Max</option><option class="device--options" value="iPhone 12">iPhone 12</option><option class="device--options" value="iPhone SE 2020">iPhone SE 2020</option><option class="device--options" value="iPhone 11 Pro Max">iPhone 11 Pro Max</option><option class="device--options" value="iPhone 11 Pro">iPhone 11 Pro</option><option class="device--options" value="iPhone XS">iPhone XS</option><option class="device--options" value="iPhone 11">iPhone 11</option><option class="device--options" value="iPhone 7">iPhone 7</option><option class="device--options" value="iPhone XR">iPhone XR</option><option class="device--options" value="iPhone 6">iPhone 6</option><option class="device--options" value="iPhone 6s">iPhone 6s</option><option class="device--options" value="iPhone 7 Plus">iPhone 7 Plus</option><option class="device--options" value="iPhone 8">iPhone 8</option><option class="device--options" value="iPhone X">iPhone X</option><option class="device--options" value="iPhone XS Max">iPhone XS Max</option><option class="device--options" value="iPhone 8 Plus">iPhone 8 Plus</option><option class="device--options" value="iPhone 6 Plus">iPhone 6 Plus</option><option class="device--options" value="iPhone 13">iPhone 13</option><option class="device--options" value="iPhone 13 mini">iPhone 13 mini</option><option class="device--options" value="iPhone 13 Pro">iPhone 13 Pro</option><option class="device--options" value="iPhone 13 Pro Max">iPhone 13 Pro Max</option><option class="device--options" value="iPhone SE 2022">iPhone SE 2022</option><option class="device--options" value="Apple iPhone 14">Apple iPhone 14</option><option class="device--options" value="Apple iPhone 14 Plus">Apple iPhone 14 Plus</option><option class="device--options" value="Apple iPhone 14 Pro">Apple iPhone 14 Pro</option><option class="device--options" value="Apple iPhone 14 Pro Max">Apple iPhone 14 Pro Max</option>`;
};
const onplusFun = () => {
  let z = oneplus();
  document.getElementById("model").innerHTML = z;
};
const oneplus = () => {
  return `<option value="">Select Model</option><option class="device--options" value="9">9</option><option class="device--options" value="OnePlus Nord 2">OnePlus Nord 2</option><option class="device--options" value="OnePlus Nord CE">OnePlus Nord CE</option><option class="device--options" value="OnePlus 9R">OnePlus 9R</option><option class="device--options" value="OnePlus 9 Pro">OnePlus 9 Pro</option><option class="device--options" value="OnePlus 9">OnePlus 9</option><option class="device--options" value="OnePlus 8 Pro">OnePlus 8 Pro</option><option class="device--options" value="OnePlus 8T">OnePlus 8T</option><option class="device--options" value="OnePlus Nord">OnePlus Nord</option><option class="device--options" value="OnePlus 8">OnePlus 8</option><option class="device--options" value="OnePlus 7T Pro">OnePlus 7T Pro</option><option class="device--options" value="OnePlus 7T">OnePlus 7T</option><option class="device--options" value="OnePlus 6">OnePlus 6</option><option class="device--options" value="OnePlus 7 Pro">OnePlus 7 Pro</option><option class="device--options" value="OnePlus 6T">OnePlus 6T</option><option class="device--options" value="OnePlus 7">OnePlus 7</option><option class="device--options" value="7 Pro">7 Pro</option><option class="device--options" value="OnePlus Nord CE 5G">OnePlus Nord CE 5G</option><option class="device--options" value="OnePlus 9RT">OnePlus 9RT</option><option class="device--options" value="OnePlus Nord CE 2 5G">OnePlus Nord CE 2 5G</option><option class="device--options" value="OnePlus 10 Pro">OnePlus 10 Pro</option><option class="device--options" value="OnePlus Nord CE 2">OnePlus Nord CE 2</option><option class="device--options" value="OnePlus 10 Pro 5G">OnePlus 10 Pro 5G</option><option class="device--options" value="OnePlus Nord 2 5G">OnePlus Nord 2 5G</option><option class="device--options" value="OnePlus 10 R">OnePlus 10 R</option><option class="device--options" value="OnePlus Nord N20">OnePlus Nord N20</option><option class="device--options" value="OnePlus X">OnePlus X</option><option class="device--options" value="OnePlus Nord 2T 5G">OnePlus Nord 2T 5G</option>`;
};
const xiomiFun = () => {
  let z = xiomi();
  document.getElementById("model").innerHTML = z;
};
const xiomi = () => {
  return `<option value="">Select Model</option><option class="device--options" value="Xiaomi Redmi Note 10 Pro Max">Xiaomi Redmi Note 10 Pro Max</option><option class="device--options" value="Xiaomi Redmi Note 9">Xiaomi Redmi Note 9</option><option class="device--options" value="Xiaomi Redmi 9 Prime">Xiaomi Redmi 9 Prime</option><option class="device--options" value="Xiaomi Mi 10">Xiaomi Mi 10</option><option class="device--options" value="Xiaomi Redmi Note 9 Pro Max">Xiaomi Redmi Note 9 Pro Max</option><option class="device--options" value="Xiaomi Redmi Poco X2">Xiaomi Redmi Poco X2</option><option class="device--options" value="Xiaomi Redmi K30">Xiaomi Redmi K30</option><option class="device--options" value="Xiaomi Redmi Note 8">Xiaomi Redmi Note 8</option><option class="device--options" value="Xiaomi Redmi Note 8 Pro">Xiaomi Redmi Note 8 Pro</option><option class="device--options" value="Xiaomi Mi A3">Xiaomi Mi A3</option><option class="device--options" value="Xiaomi Redmi K20 Pro">Xiaomi Redmi K20 Pro</option><option class="device--options" value="Xiaomi Redmi K20">Xiaomi Redmi K20</option><option class="device--options" value="Xiaomi Redmi Note 7s">Xiaomi Redmi Note 7s</option><option class="device--options" value="Xiaomi Redmi Note 7 Pro">Xiaomi Redmi Note 7 Pro</option><option class="device--options" value="Xiaomi Redmi Note 7">Xiaomi Redmi Note 7</option><option class="device--options" value="Xiaomi Poco C3">Xiaomi Poco C3</option><option class="device--options" value="Xiaomi Redmi 9">Xiaomi Redmi 9</option><option class="device--options" value="Xiaomi Mi Note 10 Pro">Xiaomi Mi Note 10 Pro</option><option class="device--options" value="Xiaomi Redmi Note 10">Xiaomi Redmi Note 10</option><option class="device--options" value="Xiaomi Mi 10T">Xiaomi Mi 10T</option><option class="device--options" value="Xiaomi Poco M3">Xiaomi Poco M3</option><option class="device--options" value="Xiaomi Redmi 9 Power">Xiaomi Redmi 9 Power</option><option class="device--options" value="Xiaomi Poco x3">Xiaomi Poco x3</option><option class="device--options" value="Xiaomi Redmi 8A Dual">Xiaomi Redmi 8A Dual</option><option class="device--options" value="Xiaomi Poco M2 pro">Xiaomi Poco M2 pro</option><option class="device--options" value="Xiaomi Redmi Note 9 Pro">Xiaomi Redmi Note 9 Pro</option><option class="device--options" value="Xiaomi Poco X2">Xiaomi Poco X2</option><option class="device--options" value="Xiaomi Redmi 9A">Xiaomi Redmi 9A</option><option class="device--options" value="Xiaomi Redmi Note 6 Pro">Xiaomi Redmi Note 6 Pro</option><option class="device--options" value="Xiaomi POCO F1">Xiaomi POCO F1</option><option class="device--options" value="Xiaomi Redmi 6 Pro">Xiaomi Redmi 6 Pro</option><option class="device--options" value="Xiaomi Mi A1">Xiaomi Mi A1</option><option class="device--options" value="Xiaomi Redmi Note 5 Pro">Xiaomi Redmi Note 5 Pro</option><option class="device--options" value="Xiaomi Redmi Note 7S">Xiaomi Redmi Note 7S</option><option class="device--options" value="Xiaomi Mi 10i 5G">Xiaomi Mi 10i 5G</option><option class="device--options" value="Xiaomi Redmi Note 10 Pro">Xiaomi Redmi Note 10 Pro</option><option class="device--options" value="Xiaomi Poco X3 Pro">Xiaomi Poco X3 Pro</option><option class="device--options" value="Redmi Note 7S">Redmi Note 7S</option><option class="device--options" value="Redmi K20">Redmi K20</option><option class="device--options" value="Redmi K20 Pro">Redmi K20 Pro</option><option class="device--options" value="Redmi Note 8">Redmi Note 8</option><option class="device--options" value="POCO M2">POCO M2</option><option class="device--options" value="Poco M3">Poco M3</option><option class="device--options" value="Xiaomi Mi 10T Pro">Xiaomi Mi 10T Pro</option><option class="device--options" value="Mi 11X">Mi 11X</option><option class="device--options" value="Mi 11X Pro">Mi 11X Pro</option><option class="device--options" value="Mi 11 Ultra">Mi 11 Ultra</option><option class="device--options" value="Redmi Note 10S">Redmi Note 10S</option><option class="device--options" value="Poco M3 Pro">Poco M3 Pro</option><option class="device--options" value="Redmi Note 10T 5G">Redmi Note 10T 5G</option><option class="device--options" value="Mi 11 Lite">Mi 11 Lite</option><option class="device--options" value="Xiaomi Poco M3 Pro 5G">Xiaomi Poco M3 Pro 5G</option><option class="device--options" value="Xiaomi Mi 10i">Xiaomi Mi 10i</option><option class="device--options" value="Xiaomi Redmi 10 Prime">Xiaomi Redmi 10 Prime</option><option class="device--options" value="Xiaomi POCO M2">Xiaomi POCO M2</option><option class="device--options" value="Xiaomi Poco M2 Reloaded">Xiaomi Poco M2 Reloaded</option><option class="device--options" value="Redmi 9">Redmi 9</option><option class="device--options" value="Poco M4 Pro 5G">Poco M4 Pro 5G</option><option class="device--options" value="Redmi Note 11S">Redmi Note 11S</option><option class="device--options" value="Mi 11i">Mi 11i</option><option class="device--options" value="Mi 11T Pro 5G">Mi 11T Pro 5G</option><option class="device--options" value="Redmi Note 11">Redmi Note 11</option><option class="device--options" value="Redmi Note 11T 5G">Redmi Note 11T 5G</option><option class="device--options" value="Mi 11 Lite NE 5G">Mi 11 Lite NE 5G</option><option class="device--options" value="Mi 11i HyperCharge">Mi 11i HyperCharge</option><option class="device--options" value="Redmi Note 11 Pro 5G">Redmi Note 11 Pro 5G</option><option class="device--options" value="Redmi 10A">Redmi 10A</option><option class="device--options" value="Mi 12 Pro 5G">Mi 12 Pro 5G</option><option class="device--options" value="Xiaomi Redmi Note 10 T">Xiaomi Redmi Note 10 T</option><option class="device--options" value="Poco X4 Pro 5G">Poco X4 Pro 5G</option>`;
};
const samsunFun = () => {
  let z = samsung();
  document.getElementById("model").innerHTML = z;
};
const samsung = () => {
  return `<option value="">Select Model</option><option class="device--options" value="Samsung Galaxy M51">Samsung Galaxy M51</option><option class="device--options" value="Samsung Galaxy F12">Samsung Galaxy F12</option><option class="device--options" value="Samsung Galaxy A52">Samsung Galaxy A52</option><option class="device--options" value="Samsung Galaxy A12">Samsung Galaxy A12</option><option class="device--options" value="Samsung Galaxy F41">Samsung Galaxy F41</option><option class="device--options" value="Samsung Galaxy Note 20">Samsung Galaxy Note 20</option><option class="device--options" value="Samsung Galaxy Note 10 Lite">Samsung Galaxy Note 10 Lite</option><option class="device--options" value="Samsung Galaxy A21s">Samsung Galaxy A21s</option><option class="device--options" value="Samsung Galaxy M31">Samsung Galaxy M31</option><option class="device--options" value="Samsung Galaxy A51">Samsung Galaxy A51</option><option class="device--options" value="Samsung Galaxy M30s">Samsung Galaxy M30s</option><option class="device--options" value="Samsung Galaxy M31s">Samsung Galaxy M31s</option><option class="device--options" value="Samsung Galaxy A30">Samsung Galaxy A30</option><option class="device--options" value="Samsung Galaxy A10">Samsung Galaxy A10</option><option class="device--options" value="Samsung Galaxy A50">Samsung Galaxy A50</option><option class="device--options" value="Samsung Galaxy A7">Samsung Galaxy A7</option><option class="device--options" value="Samsung Galaxy M21">Samsung Galaxy M21</option><option class="device--options" value="Samsung Galaxy A70">Samsung Galaxy A70</option><option class="device--options" value="Samsung Galaxy A71">Samsung Galaxy A71</option><option class="device--options" value="Samsung Galaxy M11">Samsung Galaxy M11</option><option class="device--options" value="Samsung Galaxy A31">Samsung Galaxy A31</option><option class="device--options" value="Samsung Galaxy S20 Plus">Samsung Galaxy S20 Plus</option><option class="device--options" value="Samsung Galaxy Note 20 Ultra">Samsung Galaxy Note 20 Ultra</option><option class="device--options" value="Samsung Galaxy S20 FE">Samsung Galaxy S20 FE</option><option class="device--options" value="Samsung Galaxy F62">Samsung Galaxy F62</option><option class="device--options" value="Samsung Galaxy M42">Samsung Galaxy M42</option><option class="device--options" value="Samsung Galaxy S21">Samsung Galaxy S21</option><option class="device--options" value="Samsung Galaxy A32">Samsung Galaxy A32</option><option class="device--options" value="Samsung Galaxy M12">Samsung Galaxy M12</option><option class="device--options" value="Samsung Galaxy M40">Samsung Galaxy M40</option><option class="device--options" value="Samsung Galaxy Note 10">Samsung Galaxy Note 10</option><option class="device--options" value="Samsung Galaxy Note 10 Plus">Samsung Galaxy Note 10 Plus</option><option class="device--options" value="Samsung Galaxy A30s">Samsung Galaxy A30s</option><option class="device--options" value="Samsung Galaxy A50s">Samsung Galaxy A50s</option><option class="device--options" value="Samsung Galaxy A70s">Samsung Galaxy A70s</option><option class="device--options" value="Samsung Galaxy S20">Samsung Galaxy S20</option><option class="device--options" value="Samsung Galaxy S20 Ultra">Samsung Galaxy S20 Ultra</option><option class="device--options" value="Samsung Galaxy M31 Prime">Samsung Galaxy M31 Prime</option><option class="device--options" value="Samsung Galaxy S21 Ultra">Samsung Galaxy S21 Ultra</option><option class="device--options" value="Samsung Galaxy S21 Plus">Samsung Galaxy S21 Plus</option><option class="device--options" value="Samsung Galaxy A72">Samsung Galaxy A72</option><option class="device--options" value="Samsung Galaxy F22">Samsung Galaxy F22</option><option class="device--options" value="Samsung A30">Samsung A30</option><option class="device--options" value="Samsung A50">Samsung A50</option><option class="device--options" value="Samsung A60">Samsung A60</option><option class="device--options" value="Samsung M30">Samsung M30</option><option class="device--options" value="Samsung M40">Samsung M40</option><option class="device--options" value="Samsung M30s">Samsung M30s</option><option class="device--options" value="Samsung S20 Plus">Samsung S20 Plus</option><option class="device--options" value="Samsung A50s">Samsung A50s</option><option class="device--options" value="Samsung M31">Samsung M31</option><option class="device--options" value="Samsung A30s">Samsung A30s</option><option class="device--options" value="Samsung S10">Samsung S10</option><option class="device--options" value="Samsung S10 Plus">Samsung S10 Plus</option><option class="device--options" value="Samsung Note10">Samsung Note10</option><option class="device--options" value="Samsung S10E">Samsung S10E</option><option class="device--options" value="Samsung S20">Samsung S20</option><option class="device--options" value="Samsung S10 Lite">Samsung S10 Lite</option><option class="device--options" value="Samsung Galaxy Note 9">Samsung Galaxy Note 9</option><option class="device--options" value="Samsung Galaxy M32">Samsung Galaxy M32</option><option class="device--options" value="Samsung Galaxy A22">Samsung Galaxy A22</option><option class="device--options" value="Samsung Galaxy A22 5G">Samsung Galaxy A22 5G</option><option class="device--options" value="Samsung Galaxy A52s">Samsung Galaxy A52s</option><option class="device--options" value="Samsung Galaxy F42 5G">Samsung Galaxy F42 5G</option><option class="device--options" value="Samsung Galaxy M32 5G">Samsung Galaxy M32 5G</option><option class="device--options" value="Samsung Galaxy S22 Plus 5G">Samsung Galaxy S22 Plus 5G</option><option class="device--options" value="Samsung Galaxy S22 Ultra 5G">Samsung Galaxy S22 Ultra 5G</option><option class="device--options" value="Samsung Galaxy M52 5G">Samsung Galaxy M52 5G</option><option class="device--options" value="Samsung Galaxy S21 FE 5G">Samsung Galaxy S21 FE 5G</option><option class="device--options" value="Samsung Galaxy S22 5G">Samsung Galaxy S22 5G</option><option class="device--options" value="Samsung Galaxy A53 5G">Samsung Galaxy A53 5G</option><option class="device--options" value="Samsung Galaxy M33 5G">Samsung Galaxy M33 5G</option><option class="device--options" value="Samsung Galaxy A73 5G">Samsung Galaxy A73 5G</option><option class="device--options" value="Samsung Galaxy A23">Samsung Galaxy A23</option><option class="device--options" value="Samsung Galaxy A13">Samsung Galaxy A13</option><option class="device--options" value="Samsung Galaxy A33 5G">Samsung Galaxy A33 5G</option><option class="device--options" value="Samsung Galaxy M53 5G">Samsung Galaxy M53 5G</option><option class="device--options" value="Samsung Galaxy F23 5G">Samsung Galaxy F23 5G</option><option class="device--options" value="Samsung Galaxy F13">Samsung Galaxy F13</option><option class="device--options" value="Samsung Galaxy M13">Samsung Galaxy M13</option>`;
};
const vivoFun = () => {
  let z = vivo();
  document.getElementById("model").innerHTML = z;
};
const vivo = () => {
  return `<option value="">Select Model</option><option class="device--options" value="Vivo Y20">Vivo Y20</option><option class="device--options" value="Vivo X60">Vivo X60</option><option class="device--options" value="Vivo V20">Vivo V20</option><option class="device--options" value="Vivo V19">Vivo V19</option><option class="device--options" value="Vivo S1 Pro">Vivo S1 Pro</option><option class="device--options" value="Vivo V17">Vivo V17</option><option class="device--options" value="Vivo S1">Vivo S1</option><option class="device--options" value="Vivo Z1 Pro">Vivo Z1 Pro</option><option class="device--options" value="Vivo Y91">Vivo Y91</option><option class="device--options" value="Vivo V5s">Vivo V5s</option><option class="device--options" value="Vivo V5">Vivo V5</option><option class="device--options" value="Vivo V11 Pro">Vivo V11 Pro</option><option class="device--options" value="Vivo V15 Pro">Vivo V15 Pro</option><option class="device--options" value="Vivo V15">Vivo V15</option><option class="device--options" value="Vivo V21">Vivo V21</option><option class="device--options" value="Vivo Y12s">Vivo Y12s</option><option class="device--options" value="Vivo Y73">Vivo Y73</option><option class="device--options" value="Vivo V20 SE">Vivo V20 SE</option><option class="device--options" value="Vivo Y21">Vivo Y21</option><option class="device--options" value="Vivo U10">Vivo U10</option><option class="device--options" value="Vivo V17 Pro">Vivo V17 Pro</option><option class="device--options" value="Vivo V20 Pro">Vivo V20 Pro</option><option class="device--options" value="Vivo V23 Pro 5G">Vivo V23 Pro 5G</option><option class="device--options" value="Vivo V21e">Vivo V21e</option><option class="device--options" value="Vivo V23 5G">Vivo V23 5G</option><option class="device--options" value="Vivo X50 Pro">Vivo X50 Pro</option><option class="device--options" value="Vivo X50">Vivo X50</option><option class="device--options" value="Vivo X60 Pro">Vivo X60 Pro</option><option class="device--options" value="Vivo X70 Pro">Vivo X70 Pro</option><option class="device--options" value="Vivo X70 Pro Plus">Vivo X70 Pro Plus</option><option class="device--options" value="Vivo Y51 2020">Vivo Y51 2020</option><option class="device--options" value="Vivo V23e 5G">Vivo V23e 5G</option><option class="device--options" value="Vivo Y15s">Vivo Y15s</option><option class="device--options" value="Vivo Y75 5G">Vivo Y75 5G</option><option class="device--options" value="IQOO9 5G">IQOO9 5G</option>`;
};
const oppoFun = () => {
  let z = oppo();
  document.getElementById("model").innerHTML = z;
};
const oppo = () => {
  return `<option value="">Select Model</option><option class="device--options" value="Oppo F19">Oppo F19</option><option class="device--options" value="Oppo A54">Oppo A54</option><option class="device--options" value="Oppo Reno 5 Pro">Oppo Reno 5 Pro</option><option class="device--options" value="Oppo F17 Pro">Oppo F17 Pro</option><option class="device--options" value="Oppo F17">Oppo F17</option><option class="device--options" value="Oppo A53">Oppo A53</option><option class="device--options" value="Oppo A31">Oppo A31</option><option class="device--options" value="Oppo F15">Oppo F15</option><option class="device--options" value="Oppo A5 2020">Oppo A5 2020</option><option class="device--options" value="Oppo Reno 2">Oppo Reno 2</option><option class="device--options" value="Oppo A5s">Oppo A5s</option><option class="device--options" value="Oppo A7">Oppo A7</option><option class="device--options" value="Oppo F11 Pro">Oppo F11 Pro</option><option class="device--options" value="Oppo F9 Pro">Oppo F9 Pro</option><option class="device--options" value="Oppo A3S">Oppo A3S</option><option class="device--options" value="Oppo F11">Oppo F11</option><option class="device--options" value="Oppo A9 2020">Oppo A9 2020</option><option class="device--options" value="Oppo A74">Oppo A74</option><option class="device--options" value="Oppo Reno 3 Pro">Oppo Reno 3 Pro</option><option class="device--options" value="Oppo Reno 6 Pro">Oppo Reno 6 Pro</option><option class="device--options" value="Oppo A15">Oppo A15</option><option class="device--options" value="Oppo Reno 6 5G">Oppo Reno 6 5G</option><option class="device--options" value="Oppo Reno 7 5G">Oppo Reno 7 5G</option><option class="device--options" value="Oppo Reno 7 Pro 5G">Oppo Reno 7 Pro 5G</option><option class="device--options" value="Oppo F19 Pro">Oppo F19 Pro</option><option class="device--options" value="Oppo F19 Pro Plus">Oppo F19 Pro Plus</option><option class="device--options" value="Oppo Find X2">Oppo Find X2</option><option class="device--options" value="Oppo A55">Oppo A55</option><option class="device--options" value="Oppo Reno 3">Oppo Reno 3</option><option class="device--options" value="Oppo Reno 4 Pro">Oppo Reno 4 Pro</option><option class="device--options" value="Oppo A16K">Oppo A16K</option><option class="device--options" value="OPPO F21 Pro">OPPO F21 Pro</option><option class="device--options" value="OPPO F21 Pro 5G">OPPO F21 Pro 5G</option><option class="device--options" value="Oppo K10 5G">Oppo K10 5G</option><option class="device--options" value="Oppo A57 4G">Oppo A57 4G</option><option class="device--options" value="Oppo Reno8 5G">Oppo Reno8 5G</option><option class="device--options" value="Oppo Reno8 Pro 5G">Oppo Reno8 Pro 5G</option><option class="device--options" value="Oppo A36">Oppo A36</option>`;
};

let imdv = document.getElementById("imgdiv");
let x = document.getElementById("sub");
x.addEventListener("click", (event) => {
  event.preventDefault();
  // console.log(inp.value);
  apicallFun(inp.value);
  let hid = document.getElementById("indata");
  hid.style.display = "none";
});
let floww = document.getElementById("floww");
floww.addEventListener("click", () => {
  floww.innerText = `Home/Mobile-cover`;
  let hid = document.getElementById("indata");
  hid.style.display = "flex";
});
let pd = document.getElementById("pdname");
const apicallFun = async (x) => {
  imdv.style.display = "grid";
  pd.innerText = `${x} Back Covers & Cases`;
  floww.innerText = `Home/Mobile-cover/${x}`;
  let res = await fetch(`http://localhost:3000/${x}`);
  let data = await res.json();
  // console.log(data);
  mobileappend(data, x);
};

let imgdiv = document.getElementById("imgdiv");
const mobileappend = (x, bd) => {
  console.log(x);
  imgdiv.innerHTML = null;
  x.forEach((el) => {
    let div = document.createElement("div");
    div.addEventListener("click", () => {
      // console.log(el.name);
      localStorage.setItem("cover", JSON.stringify(el));
      localStorage.setItem("brand", bd);
      window.location.href = "detail.html";
    });
    let cpname = document.createElement("h3");
    cpname.innerText = "LYNC CLUB";
    let img = document.createElement("img");
    img.src = el.image;
    let price = document.createElement("p");
    price.innerText = "₹" + 499;
    let name = document.createElement("p");
    name.innerText = el.name;

    div.append(img, cpname, price, name);

    imgdiv.append(div);
  });
};
let popu = document.querySelectorAll(".mee>td");
// console.log(popu);
popu.forEach((el) => {
  // console.log(el);
  el.addEventListener("click", () => {
    apicallFun(el.innerText);
    imgdiv.style.display = "grid";
    let hid = document.getElementById("indata");
    hid.style.display = "none";
  });
});
