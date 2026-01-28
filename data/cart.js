export const cart = [];

export function addToCart(productId) {
    let matchingItem;

    // for quantity selector
    let quantity = 0;

    let quantitySelect = document.querySelector(
      `.js-quantity-selector-${productId}`,
    );

    quantity = Number(quantitySelect.value);

    cart.forEach((cartItem) => {
      if (productId === cartItem.productId) {
        matchingItem = cartItem;
      }
    });

    if (matchingItem) {
      matchingItem.quantity += quantity;
    } else {
      cart.push({
        productId,
        quantity
      });
    }
  };