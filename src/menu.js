// menu.js
import menu1 from "./images/menu-1.jpg"; 
import menu2 from "./images/menu-2.jpg";

export default function() {
  const content = document.querySelector("#content");
  const h2 = document.createElement("h2");
  const menuImg1 = document.createElement("img");
  const menuImg2 = document.createElement("img"); 
  h2.textContent = "Our menu";
  menuImg1.src = menu1;
  menuImg1.alt = "The first page of our brochure style menu.";
  menuImg1.height = 500;
  menuImg2.src = menu2; 
  menuImg2.alt = "The second page of our brochure style menu.";
  menuImg2.height = 500;
  content.appendChild(h2);
  content.appendChild(menuImg1); 
  content.appendChild(menuImg2);
}