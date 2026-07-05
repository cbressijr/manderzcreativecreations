scripts.js

let cart = [];

// Switch between pages
function showPage(page) {
  document.querySelectorAll(".page").forEach(p => p.classList.add("hidden"));
  document.getElementById(page).classList.remove("hidden");

  if (page === "cart") {
    displayCart();
  }
}

// Add item to cart
function addToCart(name, price) {
  cart.push({ name, price });
  alert(name + " added to cart!");
}

// Display cart items
function displayCart() {
  const cartItems = document.getElementById("cart-items");

  if (cart.length === 0) {
    cartItems.innerHTML = "<p>Your cart is empty.</p>";
    return;
  }

  cartItems.innerHTML = cart
    .map(item => `<p>${item.name} - $${item.price}</p>`)
    .join("");
}
