import { navbar, footer } from "./after_login/navbar.js";

let navbar_div = document.getElementById("navbar");
navbar_div.innerHTML = navbar();
let footer_div = document.getElementById("footer");
footer_div.innerHTML = footer();
