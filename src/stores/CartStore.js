import { writable, derived } from "svelte/store";

const cartStore = writable([]);
const totalPrice = writable(0);

const addProductToCart = (product, quantity) => {
  let cart;
  const subscribeCart = cartStore.subscribe((value) => {
    cart = value;
  });

  const productCartIndex = cart.findIndex((item) => item.id === product.id);

  if (productCartIndex !== -1) {
    const itemCartToUpdate = cart[productCartIndex];
    itemCartToUpdate.quantity += quantity;
    cart[productCartIndex] = itemCartToUpdate;

    cartStore.update(() => [...cart]);
  } else {
    cartStore.update((items) => {
      const itemToCart = {
        id: cart.length + 1,
        product,
        quantity,
      };

      return [itemToCart, ...items];
    });
  }

  updateTotalPrice(quantity * product.price, "+"); // totalPrice updated.

  // Nos desubscribimos.
  subscribeCart;
};

const updateQuantityItemCart = (id, quantity, type) => {
  cartStore.update((items) => {
    const productCartIndex = items.findIndex((item) => item.id === id);
    const itemCart = items[productCartIndex];
    itemCart.quantity = quantity;

    items[productCartIndex] = itemCart;

    updateTotalPrice(itemCart.product.price, type);

    return [...items];
  });
};

const deleteProductCart = (id, total) => {
  updateTotalPrice(total, "-");

  cartStore.update((cart) => {
    return cart.filter((item) => item.id !== id);
  });
};

const updateTotalPrice = (price, type) => {
  totalPrice.update((value) => {
    const newValue = type === "+" ? (value += price) : (value -= price);
    return newValue;
  });
};

const itemsNumber = derived(cartStore, ($cartStore) => $cartStore.length, 0);

export {
  cartStore,
  addProductToCart,
  updateQuantityItemCart,
  deleteProductCart,
  itemsNumber,
  totalPrice,
  updateTotalPrice,
};
