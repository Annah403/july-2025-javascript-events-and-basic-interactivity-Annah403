

// Counter 
let count = 0;
const countBtn = document.getElementById("countBtn");
const countDisplay = document.getElementById("countDisplay");

countBtn.addEventListener("click", () => {
  count++;
  countDisplay.textContent = `Count: ${count}`;
});

//  Show/Hide Information 
const toggleBtn = document.getElementById("toggleBtn");
const extraInfo = document.getElementById("extraInfo");

toggleBtn.addEventListener("click", () => {
  if (extraInfo.style.display === "none") {
    extraInfo.style.display = "block";
    toggleBtn.textContent = "Hide Info";
  } else {
    extraInfo.style.display = "none";
    toggleBtn.textContent = "Show Info";
  }
});

//  Custom Form Validation 
const signupForm = document.getElementById("signupForm");
const formMessage = document.getElementById("formMessage");

signupForm.addEventListener("submit", (event) => {
  event.preventDefault(); // Stop normal form submission

  // Grab input values
  const username = document.getElementById("username").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  // Validation rules
  if (username.length < 3) {
    formMessage.textContent = "Username must be at least 3 characters long.";
    formMessage.style.color = "red";
    return;
  }

  // Simple email regex validation
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    formMessage.textContent = "Please enter a valid email address.";
    formMessage.style.color = "red";
    return;
  }

  if (password.length < 6) {
    formMessage.textContent = "Password must be at least 6 characters long.";
    formMessage.style.color = "red";
    return;
  }

  // If all validations pass
  formMessage.textContent = "Form submitted successfully!";
  formMessage.style.color = "green";

  // Reset form fields
  signupForm.reset();
});
