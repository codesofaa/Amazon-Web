export let cart = JSON.parse(localStorage.getItem('cart'));

if (!cart) {
  cart = [{
  productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
  quantity: 2
},{
  productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
  quantity: 1
}];
}


// function to save a cart to local storage
function saveToStorage() {
  localStorage.setItem('cart', JSON.stringify(cart));
};

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
    // save to storage after adding to cart
    saveToStorage();
  };

  export function removeFromCart(productId) {
    // create a new array
    const newCart = [];
    // loop through the cart
    cart.forEach((cartItem) => {
      // add each product to the new array, except for this product
      if (cartItem.productId !== productId) {
        newCart.push(cartItem);
      }
    });
    
    cart = newCart;

    // save to storage after removing to cart
    saveToStorage();
  }