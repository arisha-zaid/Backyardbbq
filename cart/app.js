// Function to increase the quantity of an item
function increaseQuantity(button) {
    const input = button.parentElement.querySelector('input');
    let currentValue = parseInt(input.value);
    input.value = currentValue + 1;
    updateTotal();
  }
  
  // Function to decrease the quantity of an item
  function decreaseQuantity(button) {
    const input = button.parentElement.querySelector('input');
    let currentValue = parseInt(input.value);
    if (currentValue > 1) {
      input.value = currentValue - 1;
      updateTotal();
    }
  }
  
  // Function to remove an item from the cart
  function removeItem(button) {
    const cartItem = button.closest('.cart-item');
    cartItem.remove();
    updateTotal();
  }
  
  // Function to update the total price
  function updateTotal() {
    const cartItems = document.querySelectorAll('.cart-item');
    let totalPrice = 0;
    
    cartItems.forEach(item => {
      const priceElement = item.querySelector('.cart-item-details p');
      const price = parseInt(priceElement.textContent.replace('Price: ₹', '').trim());
      const quantity = item.querySelector('input').value;
      totalPrice += price * quantity;
    });
  
    document.getElementById('total-price').textContent = '₹' + totalPrice;
  }
  