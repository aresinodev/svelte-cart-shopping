<script>
  import Footer from "./components/Footer.svelte";
  import Header from "./components/Header.svelte";
  import ProductList from "./components/ProductList.svelte";
  import Container from "./shared/Container.svelte";

  import ProductStore from "./stores/ProductStore.js";
</script>

<style>
  main {
    margin: 0 auto;
  }
</style>

<main>
  <Header />
  <Container>
    <ProductList products={$ProductStore} />
  </Container>
  <Footer />
</main>
