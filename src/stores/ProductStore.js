import { writable } from "svelte/store";

const products = [
  {
    id: 1,
    name: "Hp Elite 8300 - Ordenador de sobremesa",
    imageURL: "https://m.media-amazon.com/images/I/41EOKfrzKmL._AC_UY218_.jpg",
    price: 142,
  },
  {
    id: 2,
    name: "Tablet 10 Pulgadas YOTOPT",
    imageURL: "https://m.media-amazon.com/images/I/71a+XdU6hBL._AC_UY218_.jpg",
    price: 99.98,
  },
  {
    id: 3,
    name: "HUAWEI MediaPad T5",
    imageURL: "https://m.media-amazon.com/images/I/615xo6u9tzL._AC_UY218_.jpg",
    price: 156,
  },
  {
    id: 4,
    name: "TP-Link N300 Tl-WA850RE",
    imageURL: "https://m.media-amazon.com/images/I/61b4zv4IR9L._AC_UY218_.jpg",
    price: 16.99,
  },
  {
    id: 5,
    name: "Logitech Z120 Sistema de Altavoces Compacto para PC",
    imageURL: "https://m.media-amazon.com/images/I/61NXhRCtIcL._AC_UY218_.jpg",
    price: 14.99,
  },
  {
    id: 6,
    name: "Samsung 860 EVO SSD 500GB",
    imageURL: "https://m.media-amazon.com/images/I/91JA5-hAnoL._AC_UY218_.jpg",
    price: 82.77,
  },
  {
    id: 7,
    name: "Sabrent Concentrador USB 3.0 con 4 Puertos",
    imageURL: "https://m.media-amazon.com/images/I/71BKoNxuAuL._AC_UY218_.jpg",
    price: 11.99,
  },
  {
    id: 8,
    name: "JETech Alfombrilla de Ratón",
    imageURL: "https://m.media-amazon.com/images/I/71IAKHKiXmL._AC_UY218_.jpg",
    price: 6.98,
  },
  {
    id: 9,
    name: "Brother HLL2350DWZX1, Impresora Láser",
    imageURL: "https://m.media-amazon.com/images/I/71hoiUjt5bL._AC_UY218_.jpg",
    price: 117.1,
  },
  {
    id: 10,
    name: "VicTsing Ratón Inalámbrico Mini",
    imageURL: "https://m.media-amazon.com/images/I/61Fjxn89+4L._AC_UY218_.jpg",
    price: 9.59,
  },
];
const ProductStore = writable(products);

export default ProductStore;
