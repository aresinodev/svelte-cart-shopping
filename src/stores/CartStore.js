import { writable, derived } from "svelte/store";

const cartStore = writable([]);

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

  // Nos desubscribimos.
  subscribeCart;
};

const updateQuantityItemCart = (id, quantity) => {
  cartStore.update((items) => {
    const productCartIndex = items.findIndex((item) => item.id === id);
    const itemCart = items[productCartIndex];
    itemCart.quantity = quantity;

    items[productCartIndex] = itemCart;

    return [...items];
  });
};

const deleteProductCart = (id) => {
  cartStore.update((cart) => {
    return cart.filter((item) => item.id !== id);
  });
};

const itemsNumber = derived(cartStore, ($cartStore) => $cartStore.length, 0);

const totalPrice = derived(
  cartStore,
  ($cartStore) =>
    $cartStore
      .map((item) => {
        return item.quantity * item.product.price;
      })
      .reduce((a, b) => a + b),

  0
);

export {
  cartStore,
  addProductToCart,
  updateQuantityItemCart,
  deleteProductCart,
  itemsNumber,
  totalPrice,
};
