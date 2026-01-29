import CheckoutProcess from "./CheckoutProcess.mjs";

const checkout = new CheckoutProcess();

checkout.calculateSubtotal();

document.querySelector("[name='zip']").addEventListener("blur", () => {
  checkout.calculateOrderTotal();
});

document.querySelector("#checkoutForm").addEventListener("submit", (e) => {
  e.preventDefault(); 
  checkout.checkout(e.target);
});
