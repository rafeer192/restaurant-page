// homepage.js
export default function() {
  const content = document.querySelector("#content");
  const h1 = document.createElement("h1"); 
  h1.textContent = "Kickin' Chicken"; 
  content.appendChild(h1);
  
}