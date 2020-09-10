import { writable, derived, get } from "svelte/store";

const cartStore = writable([]);
const totalPrice = writable(0);

const addProduct = (product, quantity) => {
  let cart;
  const unsubscribeCart = cartStore.subscribe((value) => {
    cart = [...value];
  });

  let itemFound = cart.find((item) => item.product.id === product.id);

  if (itemFound) {
    itemFound.quantity++;

    cartStore.set(cart);
  } else {
    cartStore.update((items) => {
      const itemToAdd = {
        id: product.id,
        product,
        quantity,
      };

      return [itemToAdd, ...items];
    });
  }

  updateTotalPrice(quantity * product.price, "+"); // totalPrice updated.

  // Nos desubscribimos.
  unsubscribeCart;
};

const updateItemQuantity = (id, quantity, type) => {
  let items = get(cartStore);

  const itemFound = items.find((item) => item.id === id);
  itemFound.quantity = quantity;

  updateTotalPrice(itemFound.product.price, type);
};

const deleteProduct = (id, total) => {
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
  addProduct,
  updateItemQuantity,
  deleteProduct,
  itemsNumber,
  totalPrice,
  updateTotalPrice,
};
