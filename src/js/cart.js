function addToCart(item) {
  let cart = JSON.parse(localStorage.getItem('cart')) || {};
  cart[item] = (cart[item] || 0) + 1;
  localStorage.setItem('cart', JSON.stringify(cart));
  renderCart();
}

function removeFromCart(item) {
  let cart = JSON.parse(localStorage.getItem('cart')) || {};
  if (cart[item]) {
    cart[item] -= 1;
    if (cart[item] <= 0) {
      delete cart[item];
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    renderCart();
  }
}

function renderCart() {
  let cart = JSON.parse(localStorage.getItem('cart')) || {};
  const container = document.getElementById('cart');
  if (!container) return;

  container.innerHTML = Object.entries(cart)
    .map(
      ([item, qty]) =>
        `<p>${item} x ${qty} 
          <button onclick="removeFromCart('${item}')">Remove</button>
        </p>`
    )
    .join('');
}

renderCart();