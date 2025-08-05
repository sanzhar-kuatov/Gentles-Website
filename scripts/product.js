let cart = [];

if (localStorage.getItem('cart')) {
  cart = JSON.parse(localStorage.getItem('cart'));
}

document.querySelectorAll('.product').forEach(product => {
  product.addEventListener('click', () => {
    const loggedInEmail = localStorage.getItem("loggedInUserEmail");

    if (!loggedInEmail) {
      alert("You need to log in before adding items to the cart.");
      window.location.href = "login.html";
      return;
    }

    const name = product.querySelector('.name').textContent;
    const price = product.querySelector('.price').textContent;

    cart.push({ name, price });

    localStorage.setItem('cart', JSON.stringify(cart));

    alert(`${name} added to cart!`);
  });
});

const cartBtn = document.getElementById('cart-btn');
const cartPopup = document.getElementById('cart-popup');
const cartItemsDiv = document.getElementById('cart-items');
const closeCartBtn = document.getElementById('close-cart');

cartBtn.addEventListener('click', () => {
  renderCart();
  cartPopup.style.display = 'block';
});

closeCartBtn.addEventListener('click', () => {
  cartPopup.style.display = 'none';
});

function renderCart() {
  cartItemsDiv.innerHTML = '';
  if (cart.length === 0) {
    cartItemsDiv.innerHTML = '<p>Your cart is empty.</p>';
    return;
  }
  cart.forEach((item, index) => {
    const itemDiv = document.createElement('div');
    itemDiv.className = 'cart-item';
    itemDiv.textContent = `${item.name} - ${item.price}`;

    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.style.marginLeft = '10px';
    removeBtn.style.background = '#c62828';
    removeBtn.style.color = '#fff';
    removeBtn.style.border = 'none';
    removeBtn.style.padding = '4px 8px';
    removeBtn.style.cursor = 'pointer';
    removeBtn.style.borderRadius = '4px';

    removeBtn.addEventListener('click', () => {
      cart.splice(index, 1);
      localStorage.setItem('cart', JSON.stringify(cart));
      renderCart();
    });

    itemDiv.appendChild(removeBtn);
    cartItemsDiv.appendChild(itemDiv);
  });
}
