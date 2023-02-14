document.getElementById("btn-submit").addEventListener("click", function () {
  const emailField = document.getElementById("user-email");
  const email = emailField.value;

  const passwordField = document.getElementById("get-password");
  const password = passwordField.value;

  // This is not a proper way just learning perpose
  if (email === "helloworld@gmail.com" && password === "1234") {
    window.location.href = "deposit.html";
  } else {
    console.log("invalid user");
  }
});
