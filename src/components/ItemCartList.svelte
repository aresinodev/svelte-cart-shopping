<script>
  import Button from "../shared/Button.svelte";
  import { deleteProductCart } from "../stores/CartStore";

  export let id, product, quantity;

  const deleteItem = () => {
    deleteProductCart(id);
  };
</script>

<style>
  .ItemCartList {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  img {
    width: 80px;
    border-radius: 10px;
    border: 1px solid #ccc;
    padding: 0.5em;
  }

  .content-product {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    margin-left: 2em;
  }

  .content-product .product-price {
    color: #b12704;
    font-size: 17px;
    font-weight: 800;
  }

  .product-quantity {
    color: #565959;
  }

  .product-quantity strong {
    color: #000000;
  }
</style>

<div class="ItemCartList">
  <img src={product.imageURL} alt={product.name} />

  <div class="content-product">
    <span class="product-name"><strong>{product.name}</strong></span>
    <span class="product-price">{product.price}€</span>
    <span class="product-quantity" style="margin-bottom: 1em;">
      Cantidad: <strong>{quantity}</strong>
    </span>
    <Button inverse={true} on:click={deleteItem}>Delete</Button>
  </div>
</div>
