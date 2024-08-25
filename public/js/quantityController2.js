// quantityController.js

function changeQuantity(amount) {
    const quantityInput = document.getElementById('quantity');
    let currentQuantity = parseInt(quantityInput.value, 10);
    currentQuantity = Math.max(currentQuantity + amount, 1); // Ensure minimum quantity is 1
    quantityInput.value = currentQuantity;
}
