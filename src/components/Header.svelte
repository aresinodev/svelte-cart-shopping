<script>
  import { getContext } from "svelte";

  import { itemsNumber } from "../stores/CartStore";
  import Cart from "./Cart.svelte";

  let zoom = false;
  const { open } = getContext("simple-modal");

  const showCart = () => {
    open(Cart);
  };

  $: if ($itemsNumber) {
    zoom = true;
    setTimeout(() => (zoom = false), 500);
  }
</script>

<style>
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: sticky;
    top: 0;
    background: #f7f7f7;
    padding: 1em;
    border-bottom: 1px solid #565959;
  }

  header h1 {
    margin: 0;
  }

  .cart {
    position: relative;
    cursor: pointer;
  }

  .cart img {
    width: 2em;
  }

  .total-quantity {
    width: 1em;
    height: 1em;
    position: absolute;
    right: -0.5em;
    top: -0.2em;
    background: #45c496;
    color: #ffffff;
    font-weight: 800;
    padding: 0.2em;
    border-radius: 10px;
    font-size: 14px;
    text-align: center;
  }

  .zoom {
    animation: zoom 0.5s;
  }
</style>

<header>
  <h1>Carro de la compra</h1>

  <div class="cart" on:click={showCart}>
    <div class="total-quantity" class:zoom>
      <span class="total-quantity-number">{$itemsNumber}</span>
    </div>
    <img src="/images/shopping-cart.svg" alt="Shopping cart" />
  </div>
</header>
