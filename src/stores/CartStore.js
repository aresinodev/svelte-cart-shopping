import { writable, derived } from "svelte/store";

const cartStore = writable([]);
const totalPrice = writable(0);

const addProductToCart = (product, quantity) => {
  let cart;
  const subscribeCart = cartStore.subscribe((value) => {
    cart = value;
  });

  const copiedCart = [...cart];
  let itemCart = copiedCart.find((item) => item.product.id === product.id);

  if (itemCart) {
    itemCart.quantity++;

    cartStore.update(() => copiedCart);
  } else {
    cartStore.update((items) => {
      const copiedItems = [...items];
      const itemToCart = {
        id: cart.length + 1,
        product,
        quantity,
      };

      return [itemToCart, ...copiedItems];
    });
  }

  updateTotalPrice(quantity * product.price, "+"); // totalPrice updated.

  // Nos desubscribimos.
  subscribeCart;
};

const updateQuantityItemCart = (id, quantity, type) => {
  cartStore.update((items) => {
    const copiedItems = [...items];
    const itemCart = copiedItems.find((item) => item.id === id);
    productCart.quantity = quantity;

    updateTotalPrice(itemCart.product.price, type);

    return copiedItems;
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
    return type === "+" ? value + price : value - price;
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
