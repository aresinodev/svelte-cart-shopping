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

  console.log("CART > ", cart);

  // Nos desubscribimos.
  subscribeCart;
};

const itemsNumber = derived(cartStore, ($cartStore) => $cartStore.length, 0);

export { cartStore, addProductToCart, itemsNumber };
