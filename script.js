const form = document.getElementById("form");
const emailOne = document.getElementById("InputEmail1");
const emailTwo = document.getElementById("InputEmail2");

form.addEventListener("submit", (event) => {
  event.preventDefault();
});

// html input will handle the emailOne input validation

emailTwo.addEventListener("input", (event) => {
  if (emailTwo.validity.typeMismatch) {
    emailTwo.setCustomValidity("Not a valid email address!");
  } else if (emailTwo.value !== emailOne.value) {
    emailTwo.setCustomValidity("Emails do not match!");
  } else {
    emailTwo.setCustomValidity("");
  }
});
