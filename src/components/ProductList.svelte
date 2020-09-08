<script>
  import Product from "./Product.svelte";

  export let products;
</script>

<style>
  .ProductList {
    width: 100%;
    max-height: calc(100% - 126px);
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1em;
  }

  .loading {
    width: 100%;
    padding-top: 1em;
    padding-bottom: 1em;
  }
</style>

<div class="ProductList">
  {#each products as product (product.id)}
    <Product {product} />
  {:else}
    <div class="loading">Cargando...</div>
  {/each}
</div>
