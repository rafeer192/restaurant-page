// contact.js 

export default function() {
  const content = document.querySelector("#content"); 
  const h2 = document.createElement("h2"); 
  h2.textContent = "We want to hear from you!"; 
  const form = document.createElement("form"); 
  form.id = "contact"; 
  const firstNameLabel = document.createElement("label"); 
  const lastNameLabel = document.createElement("label");
  const emailLabel = document.createElement("label");
  const messageLabel = document.createElement("label");

  firstNameLabel.textContent = "First name:"; 
  const firstNameInput = document.createElement("input"); 
  firstNameInput.type = "text"; 
  firstNameInput.name = "first_name";
  firstNameInput.required = true;
  firstNameLabel.appendChild(firstNameInput);

  lastNameLabel.textContent = "Last name:"; 
  const lastNameInput = document.createElement("input"); 
  lastNameInput.type = "text"; 
  lastNameInput.name = "last_name";
  lastNameInput.required = true;
  lastNameLabel.appendChild(lastNameInput);

  emailLabel.textContent = "Email:"; 
  const emailInput = document.createElement("input"); 
  emailInput.type = "email"; 
  emailInput.name = "email";
  emailInput.required = true;
  emailLabel.appendChild(emailInput);

  messageLabel.textContent = "Message:"; 
  const messageInput = document.createElement("textarea"); 
  messageInput.name = "message";
  messageInput.required = true;
  messageLabel.appendChild(messageInput);

  const submitBtn = document.createElement("button"); 
  submitBtn.type = "submit"; 
  submitBtn.textContent = "Submit"; 

  form.appendChild(firstNameLabel);
  form.appendChild(lastNameLabel);
  form.appendChild(emailLabel);
  form.appendChild(messageLabel);
  form.appendChild(submitBtn);

  content.appendChild(h2);
  content.appendChild(form);
}