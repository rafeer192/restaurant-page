// homepage.js
import chickenSandwich from "./images/chicken-sandwich.jpg";
import interior from "./images/interior.jpg";
import shrimp from "./images/shrimp.jpg"; 
import wholeWings from "./images/whole-wings.jpg";

export default function() {
  const content = document.querySelector("#content");
  const h1 = document.createElement("h1"); 
  h1.textContent = "Kickin' Chicken"; 
  content.appendChild(h1);
  const infoCard = document.createElement("div"); 
  const h2 = document.createElement("h2"); 
  h2.textContent = "Feeling hungry?";
  const desc = document.createElement("p"); 
  desc.textContent = `Well then come try our Kickin Chicken Sandwich, it's the best sandwich in town hands down.
  How about our popular whole wings with our signature kickin seasoning? One bite and you’ll be hooked.
  In the mood for some seafood, well our Large and Jumbo Shrimp are sure to hit the spot. Don’t forget to try our Cod and Catfish options.
  We even have our Cajun inspired whole chicken rotisserie, make sure you ask for the house made garlic sauce!! If you love garlic, then 
  this sauce is a must have, it even has a bit of a kick to it and goes with almost everything on our menu.`;
  infoCard.appendChild(h2);
  infoCard.appendChild(desc);
  content.appendChild(infoCard);

  const whyUs = document.createElement("div");
  const whyUsH2 = document.createElement("h2"); 
  whyUsH2.textContent = "Why Choose Kickin' Chicken?";
  const whyDesc = document.createElement("p"); 
  whyDesc.textContent = `At Kickin’ Fish & Chicken our goal is to provide our customers with the best chicken and 
  seafood products at a reasonable price. Our chicken is certified halal, humanely slaughtered 
  with no GMO or antibiotics, and we strive to source our chicken and seafood from sustainable farms. 
  Our staff is always friendly and accommodating. We aim to provide exceptional service and of course great tasting 
  mouthwatering meals, that will have you coming back for more.`;
  whyUs.appendChild(whyUsH2); 
  whyUs.appendChild(whyDesc);
  content.appendChild(whyUs);
  const chickenSandwichImg = document.createElement("img"); 
  const interiorImg = document.createElement("img"); 
  const shrimpImg = document.createElement("img"); 
  const wholeWingsImg = document.createElement("img"); 
  const imagesWrapper = document.createElement("div"); 
  chickenSandwichImg.src = chickenSandwich;
  chickenSandwichImg.alt = "Our fried chicken sandwich over a red background."; 
  interiorImg.src = interior; 
  interiorImg.alt = "The interior of Kickin' Chicken's dining area."; 
  shrimpImg.src = shrimp; 
  shrimpImg.alt = "A plate of our fried shrimp."; 
  wholeWingsImg.src = wholeWings; 
  wholeWingsImg.alt = "A plate of our famous fried whole wings.";
  imagesWrapper.appendChild(chickenSandwichImg); 
  imagesWrapper.appendChild(interiorImg); 
  imagesWrapper.appendChild(shrimpImg); 
  imagesWrapper.appendChild(wholeWingsImg);
  content.appendChild(imagesWrapper); 

}

// Well then come try our Kickin Chicken Sandwich, it's the best sandwich in town hands down.


// How about our popular whole wings with our signature kickin seasoning? One bite and you’ll be hooked.



// In the mood for some seafood, well our Large and Jumbo Shrimp are sure to hit the spot. Don’t forget to try our Cod and Catfish options.



// We even have our Cajun inspired whole chicken rotisserie, make sure you ask for the house made garlic sauce!! If you love garlic, then this sauce is a must have, it even has a bit of a kick to it and goes with almost everything on our menu.