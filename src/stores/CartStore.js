import { writable } from "svelte/store";

export const CartStore = writable([]);

export const addProductToCart = (product, quantity) => {
  let cart;
  const subscribeCart = CartStore.subscribe((value) => {
    cart = value;
  });

  const productCartIndex = cart.findIndex((item) => item.id === product.id);

  if (productCartIndex !== -1) {
    const itemCartToUpdate = cart[productCartIndex];
    itemCartToUpdate.quantity += quantity;
    cart[productCartIndex] = itemCartToUpdate;

    CartStore.update(() => [...cart]);
  } else {
    CartStore.update((items) => {
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
