<script>
  import Button from "../shared/Button.svelte";

  import { addProductToCart } from "../stores/CartStore.js";

  export let product;
  let quantity = 0;

  const removeQuantity = () => {
    if (quantity > 0) {
      quantity -= 1;
    }
  };
</script>

<style>
  .Product {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    border-radius: 6px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  }

  .Product .image {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 0.5em;
    padding-bottom: 0.5em;
  }

  .Product .content {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }

  .Product .content .name {
    font-weight: 800;
    color: #000000;
    text-align: center;
  }

  .price {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 0.2em;
  }

  .price-text {
    color: #565959;
    font-size: 0.8em;
    margin-right: 0.5em;
  }

  .price-value {
    color: #b12704;
    font-size: 17px;
  }

  .quantity {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .add-cart {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-right: 1em;
    padding-bottom: 1em;
  }

  input {
    width: 3em;
    font-size: 1.5em;
    font-weight: 800;
    border-radius: 5px;
    text-align: center;
    margin-left: 0.5em;
    margin-right: 0.5em;
  }
</style>

<div class="Product">
  <div class="image">
    <img src={product.imageURL} alt={product.name} class="img-fluid" />
  </div>
  <div class="content">
    <span class="name mt-1">{product.name}</span>
    <div class="price">
      <span class="price-text">Precio:</span>
      <span class="price-value">{product.price}€</span>
    </div>
    <div class="quantity mt-1">
      <Button on:click={removeQuantity} type="secondary">-</Button>
      <input type="number" bind:value={quantity} />
      <Button on:click={() => (quantity += 1)} type="secondary">+</Button>
    </div>
    <div class="add-cart mt-1">
      <Button
        on:click={() => {
          addProductToCart(product, quantity);
          quantity = 0;
        }}>
        Añadir al carro
      </Button>
    </div>
  </div>
</div>
