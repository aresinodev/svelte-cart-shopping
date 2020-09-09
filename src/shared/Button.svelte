<script>
  export let type = "primary";
  export let flat = false;
  export let inverse = false;
  export let size = "md"; // 'sm' | 'md' | 'lg' | 'xl'
</script>

<style>
  button {
    border: 0;
    cursor: pointer;
    border-radius: 6px;
    padding: 8px 12px;
    font-weight: bold;
    box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.2);
  }

  .primary {
    background: #d91b42;
    color: white;
  }

  .secondary {
    background: #45c496;
    color: white;
  }

  .flat {
    box-shadow: none;
  }
  .primary.inverse {
    color: #d91b42;
    background: #ffffff;
    border: 2px solid #d91b42;
  }

  .secondary.inverse {
    color: #45c496;
    background: white;
    border: 2px solid #45c496;
  }

  .sm {
    font-size: 13px;
  }

  .md {
    font-size: 16px;
  }

  .lg {
    font-size: 19px;
  }

  .xl {
    font-size: 22px;
  }
</style>

<button class="{type} {size}" class:flat class:inverse on:click>
  <slot />
</button>
