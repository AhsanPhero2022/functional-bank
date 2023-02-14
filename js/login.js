document.getElementById("btn-submit").addEventListener("click", function () {
  const emailField = document.getElementById("user-email");
  const email = emailField.value;

  const passwordField = document.getElementById("get-password");
  const password = passwordField.value;

  // This is not a proper way just learning perpose
  if (email === "sontan@gmail.com" && password === "secret") {
    window.location.href = "deposit.html";
  } else {
    console.log("invalid user");
  }
});
