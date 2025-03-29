const fullName = document.getElementById("fullname");
const email = document.getElementById("email");

fullName.innerText = localStorage.getItem("fullname") || "Guest";

email.innerText = localStorage.getItem("email") || "your email";
