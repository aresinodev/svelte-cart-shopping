<script>
  import Button from "../shared/Button.svelte";
  import InputQuantity from "../shared/InputQuantity.svelte";
  import { deleteProduct, updateItemQuantity } from "../stores/CartStore";

  export let id, product, quantity;

  const deleteItem = () => {
    const total = quantity * product.price;
    deleteProduct(id, total);
  };

  const addQuantity = (event) => {
    updateItemQuantity(id, event.detail, "+");
  };

  const removeQuantity = (event) => {
    updateItemQuantity(id, event.detail, "-");

    if (event.detail === 0) {
      deleteItem();
    }
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
</style>

<div class="ItemCartList">
  <img src={product.imageURL} alt={product.name} />

  <div class="content-product">
    <span class="product-name"><strong>{product.name}</strong></span>
    <span class="product-price">{product.price}€</span>
    <span class="separator-top" />
    <InputQuantity
      {quantity}
      on:addQuantity={addQuantity}
      on:removeQuantity={removeQuantity} />
    <span class="separator-bottom" />
    <Button inverse={true} on:click={deleteItem}>Delete</Button>
  </div>
</div>
