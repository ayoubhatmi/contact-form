const email = document.getElementById("email");
const phone = document.getElementById("phone");
const form = document.getElementById("form");
const successElement = document.getElementById("success");
const errorElement = document.getElementById("error");

form.addEventListener("submit", (e) => {
  var mailformat =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  let messages = [];

  if (phone.value.length <= 8) {
    messages.push("Phone number must be longer than 8 characters");
    phone.focus();
  }
  if (!email.value.match(mailformat)) {
    messages.push("Please enter a valid email address");
    email.focus();
  }

  if (messages.length > 0) {
    e.preventDefault();
    errorElement.innerText = messages.join(", ");
  } else {
    messages = [];
    errorElement.innerText = messages.join(", ");
    successElement.innerText = "Your message was sent successfully!";
  }
});
