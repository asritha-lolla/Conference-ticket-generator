const button = document.getElementById("button");
const fullName = document.getElementById("fullname");
const email = document.getElementById("email");

button.addEventListener("click", (e) => {
  e.preventDefault();
  localStorage.setItem("fullname", fullName.value);
  localStorage.setItem("email", email.value);
  window.location.href = "http://127.0.0.1:5500/ticket.html";
});
