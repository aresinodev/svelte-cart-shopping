<script>
  import { createEventDispatcher } from "svelte";
  import Button from "./Button.svelte";

  export let quantity;

  const dispatch = createEventDispatcher();

  const addQuantity = () => {
    quantity += 1;
    dispatch("addQuantity", quantity);
  };

  const removeQuantity = () => {
    if (quantity > 0) {
      quantity -= 1;
      dispatch("removeQuantity", quantity);
    }
  };
</script>

<style>
  .InputQuantity {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  input {
    width: 2em;
    font-size: 1.2em;
    font-weight: 800;
    border-radius: 5px;
    text-align: center;
    margin-left: 0.5em;
    margin-right: 0.5em;
  }
</style>

<s-script />
<div class="InputQuantity">
  <Button type="secondary" flat={true} size="sm" on:click={removeQuantity}>
    -
  </Button>
  <input type="number" bind:value={quantity} />
  <Button type="secondary" flat={true} size="sm" on:click={addQuantity}>
    +
  </Button>
</div>
