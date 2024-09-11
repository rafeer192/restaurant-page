// index.js
import "./style.css"
import showHomePage from "./homepage.js";
import showMenu from "./menu.js";
import showContact from "./contact.js"

window.addEventListener("load", () => showHomePage());

const navBtns = document.querySelectorAll("nav button"); 
navBtns.forEach(btn => btn.addEventListener("click", (event) => {
  if(event.target.classList.contains("selected")) {
    console.log("pressed same button. do nothing"); 
    return;
  }
  const currentBtn = document.querySelector("button.selected"); 
  currentBtn.classList.remove("selected");
  event.target.classList.add("selected");
  const content = document.querySelector("#content"); 
  content.textContent = "";
  if(event.target.textContent === "Home" || event.target.textContent === "Kickin' Chicken") {
    showHomePage();
  } else if(event.target.textContent === "Menu") {
    showMenu(); 
  } else {
    showContact();
  }
})); 