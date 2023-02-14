document.getElementById("deposit-total").addEventListener("click", function () {
  const inputFiled = document.getElementById("input-desposit");

  const newInputFieldString = inputFiled.value;
  const inputTotal = parseFloat(newInputFieldString);

  inputFiled.value = "";
  // totoal deposit adding
  const depositTextField = document.getElementById("deposit-amout");
  const newDepositTexFieldString = depositTextField.innerText;
  const depositTotal = parseFloat(newDepositTexFieldString);
  const totalValue = depositTotal + inputTotal;
  depositTextField.innerText = totalValue;
  // Balance niye kaj choltase..

  const balanceElement = document.getElementById("balance-total");
  const newBalanceString = balanceElement.innerText;
  const totalBalance = parseFloat(newBalanceString);
  const newBalance = totalBalance + totalValue;
  balanceElement.innerText = newBalance;
});
// Adding withdraw
document
  .getElementById("withdraw-total")
  .addEventListener("click", function () {
    const withdrawInput = document.getElementById("withdraw-inpout");
    const totalWithdrawInputString = withdrawInput.value;
    const totalWithdrawInput = parseFloat(totalWithdrawInputString);

    withdrawInput.value = "";

    // withdraw text area
    const weText = document.getElementById("withdraw-text");
    const weTecttotaString = weText.innerText;
    const weTexNumber = parseFloat(weTecttotaString);
    const weTextTotal = weTexNumber + totalWithdrawInput;

    weText.innerText = weTextTotal;

    // Balenche minize

    const balanceElement = document.getElementById("balance-total");
    const newBalanceString = balanceElement.innerText;
    const totalBalance = parseFloat(newBalanceString);
    const newBalance = totalBalance - totalWithdrawInput;
    balanceElement.innerText = newBalance;
  });

document.getElementById("back").addEventListener("click", function () {
  window.location.href = "index.html";
});
