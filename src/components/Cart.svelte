<script>
  import { cartStore, totalPrice } from "../stores/CartStore";
  import CartList from "./CartList.svelte";
</script>

<style>
  .Cart {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    height: 100%;
  }

  h3 {
    margin-top: 0.2em;
    margin-bottom: 2em;
  }

  .cart-footer {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  .cart-total-text {
    font-size: 20px;
    color: #565959;
    padding-right: 2em;
  }

  .cart-total {
    color: #b12704;
    font-size: 20px;
  }
</style>

<div class="Cart">
  <h3>CESTA</h3>
  <CartList cart={$cartStore} />
  <div class="cart-footer">
    <strong class="cart-total-text">
      TOTAL: <span class="cart-total">{$totalPrice.toFixed(2)}€</span>
    </strong>
  </div>
</div>
