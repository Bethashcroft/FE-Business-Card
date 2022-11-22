const businessForm = document.getElementById("form");

let globalErrorMessage = document.getElementById("errorMessage");

function handleSubmit(event) {
  globalErrorMessage.innerHTML = "";
  const emailAddress = document.getElementById("Email").value;
  const phoneNumber = document.getElementById("Phonenumber").value;

  if (!/^\d+$/.test(phoneNumber)) {
    addErrorMessage("Invalid phone number");
    event.preventDefault();
  }

  if (/\w+@\w+.\w+/.test(emailAddress) === false) {
    addErrorMessage("Invalid email address");
    event.preventDefault();
  }
}

function addErrorMessage(message) {
  const newError = document.createElement("li");

  newError.innerText = message;

  globalErrorMessage.appendChild(newError);
}

businessForm.addEventListener("submit", handleSubmit);
