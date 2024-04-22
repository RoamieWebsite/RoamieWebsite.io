document.getElementById("checkoutButton").addEventListener("click", function() {
  document.getElementById("checkoutForm").style.display = "block";
});

let form = document.getElementById("paymentForm");
form.addEventListener("submit", function(event) {
  event.preventDefault();

  let cardNumber = document.getElementById("cardNumber").value;
  let expiryDate = document.getElementById("expiryDate").value;
  let cvv = document.getElementById("cvv").value;
  let name = document.getElementById("name").value;

  if (name === "") {
      alert("Please enter your name");
      return;
  }

  if (cardNumber === "") {
      alert("Please enter your card number");
      return;
  }

  if (expiryDate === "") {
      alert("Please enter expiry date of your card");
      return;
  }

  if (cvv === "") {
      alert("Please enter your three-digit CVV");
      return;
  }

  // Payment successful
  alert("Payment Successful! Redirecting to Home Page...");
  window.location.href = "index.html";
});