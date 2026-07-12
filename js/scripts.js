/* ===========================
   PAGE SWITCHING
=========================== */
const pages = document.querySelectorAll(".page");

function showPage(pageId) {
  pages.forEach(page => page.classList.add("hidden"));
  document.getElementById(pageId).classList.remove("hidden");

  if (pageId === "cart") {
    displayCart();
  }

  // Close mobile nav when switching pages
  navMenu.classList.remove("active");
}

/* ===========================
   MOBILE NAVIGATION
=========================== */
const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });
}

/* ===========================
   CART SYSTEM
=========================== */
let cart = [];

function addToCart(name, price) {
  cart.push({ name, price });
  alert(`${name} added to cart!`);
}

function displayCart() {
  const cartItems = document.getElementById("cart-items");

  if (!cartItems) return;

  if (cart.length === 0) {
    cartItems.innerHTML = "<p>Your cart is empty.</p>";
    return;
  }

  cartItems.innerHTML = cart
    .map(item => `<p>${item.name} - $${item.price}</p>`)
    .join("");
}
