function validateEmail() {
  const emailInput = document.getElementById("emailField").value;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const outputElement = document.getElementById("emailOutput");

  if (emailPattern.test(emailInput)) {
    outputElement.textContent = "The email address is valid.";
  } else {
    outputElement.textContent = "Please enter a valid email address.";
  }
}