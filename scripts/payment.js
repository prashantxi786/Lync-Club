let data = JSON.parse(localStorage.getItem("cart"));
let discodata = data.length * 100;
console.log(data);
let total = 0;
const appenddata = (data) => {
  data.forEach((el) => {
    let mdiv = document.createElement("div");
    mdiv.style.display = "flex";
    mdiv.style.gap = "10px";
    let imgdiv = document.createElement("div");
    imgdiv.setAttribute("class", "divimg");

    let img = document.createElement("img");
    img.src = el.image;
    imgdiv.append(img);
    let detdiv = document.createElement("div");
    total += el.pric + 100;

    let name = document.createElement("p");
    name.innerText = el.name;
    detdiv.append(name);
    let hr = document.createElement("hr");
    mdiv.append(imgdiv, detdiv);
    let appdiv = document.getElementById("items");
    appdiv.append(mdiv, hr);
  });
};
appenddata(data);

let totalmrp = document.getElementById("totalmrp");
totalmrp.innerText = total;
let subtotal = document.getElementById("subtotal");
subtotal.innerText = total - discodata;
let subtol = document.getElementById("subtol");
subtol.innerText = total - discodata;

let bagdisc = document.getElementById("bagdisc");
bagdisc.innerText = discodata;

let payybtn = document.getElementById("payy");
// payybtn.disabled = "true";
payybtn.style.backgroundColor = "green";
payybtn.addEventListener("click", () => {
  let a = document.getElementById("cdnum").value;
  let b = document.getElementById("mmyy").value;
  let c = document.getElementById("cvv").value;
  let d = document.getElementById("pname").value;
  if (a == "" || b == "" || c == "" || d == "") {
    alert("Please Fill Detail");
  } else {
    let x = prompt("Enter OTP");
    if (x == 1234) {
      //   alert("Payment Suceesfull!! Order  Confirmed");

      let mssg = document.getElementById("mssg");
      mssg.innerText = "Payment Suceesfull!! Order  Confirmed";
      mssg.style.color = "green";
      setTimeout(() => {
        window.location.href = "mobile.html";
      }, 2000);
      localStorage.clear();
    }
  }
});
