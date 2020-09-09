import { writable, derived } from "svelte/store";

const cartStore = writable([
  {
    id: 10,
    product: {
      id: 10,
      name: "VicTsing Ratón Inalámbrico Mini",
      imageURL:
        "https://m.media-amazon.com/images/I/61Fjxn89+4L._AC_UY218_.jpg",
      price: 9.59,
    },
    quantity: 2,
  },
  {
    id: 9,
    product: {
      id: 9,
      name: "Brother HLL2350DWZX1, Impresora Láser",
      imageURL:
        "https://m.media-amazon.com/images/I/71hoiUjt5bL._AC_UY218_.jpg",
      price: 117.1,
    },
    quantity: 2,
  },
  {
    id: 8,
    product: {
      id: 8,
      name: "JETech Alfombrilla de Ratón",
      imageURL:
        "https://m.media-amazon.com/images/I/71IAKHKiXmL._AC_UY218_.jpg",
      price: 6.98,
    },
    quantity: 2,
  },
  {
    id: 7,
    product: {
      id: 7,
      name: "Sabrent Concentrador USB 3.0 con 4 Puertos",
      imageURL:
        "https://m.media-amazon.com/images/I/71BKoNxuAuL._AC_UY218_.jpg",
      price: 11.99,
    },
    quantity: 2,
  },
  {
    id: 6,
    product: {
      id: 6,
      name: "Samsung 860 EVO SSD 500GB",
      imageURL:
        "https://m.media-amazon.com/images/I/91JA5-hAnoL._AC_UY218_.jpg",
      price: 82.77,
    },
    quantity: 2,
  },
  {
    id: 5,
    product: {
      id: 5,
      name: "Logitech Z120 Sistema de Altavoces Compacto para PC",
      imageURL:
        "https://m.media-amazon.com/images/I/61NXhRCtIcL._AC_UY218_.jpg",
      price: 14.99,
    },
    quantity: 2,
  },
  {
    id: 4,
    product: {
      id: 4,
      name: "TP-Link N300 Tl-WA850RE",
      imageURL:
        "https://m.media-amazon.com/images/I/61b4zv4IR9L._AC_UY218_.jpg",
      price: 16.99,
    },
    quantity: 2,
  },
  {
    id: 3,
    product: {
      id: 3,
      name: "HUAWEI MediaPad T5",
      imageURL:
        "https://m.media-amazon.com/images/I/615xo6u9tzL._AC_UY218_.jpg",
      price: 156,
    },
    quantity: 2,
  },
  {
    id: 2,
    product: {
      id: 2,
      name: "Tablet 10 Pulgadas YOTOPT",
      imageURL:
        "https://m.media-amazon.com/images/I/71a+XdU6hBL._AC_UY218_.jpg",
      price: 99.98,
    },
    quantity: 2,
  },
  {
    id: 1,
    product: {
      id: 1,
      name: "Hp Elite 8300 - Ordenador de sobremesa",
      imageURL:
        "https://m.media-amazon.com/images/I/41EOKfrzKmL._AC_UY218_.jpg",
      price: 142,
    },
    quantity: 2,
  },
]);

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
