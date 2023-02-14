document.getElementById("btn-submit").addEventListener("click", function () {
  const emailField = document.getElementById("user-email");
  const email = emailField.value;

  const passwordField = document.getElementById("get-password");
  const password = passwordField.value;

  // This is not a proper way just learning perpose
  if (email === "babarBank@gmail.com" && password === "asia444") {
    window.location.href = "deposit.html";
  } else {
    alert(
      "Babar Bank er Taka churi korte ayso! Email--Password vul niayso ken?"
    );
  }
});
