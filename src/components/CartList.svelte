<script>
  import App from "../App.svelte";
  import Button from "../shared/Button.svelte";
  import ItemCartList from "./ItemCartList.svelte";

  export let cart;
</script>

<style>
  .CartList {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1em;
    max-height: 500px;
    overflow-x: hidden;
    overflow-y: auto;
    width: 100%;
  }
</style>

<div class="CartList">
  {#each cart as item (item.id)}
    <ItemCartList {...item} />
  {:else}<span>No hay productos añadido al carro</span>{/each}
</div>
