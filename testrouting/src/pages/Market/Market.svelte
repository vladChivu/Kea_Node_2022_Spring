<script>
    import { cartItemCounter } from "../../store/store.js";

    function addAnItem() {
        cartItemCounter.update(amount => amount + 1);
    }
</script>

<h1>This is the market page</h1>

<button on:click={addAnItem}>Add an item</button>
