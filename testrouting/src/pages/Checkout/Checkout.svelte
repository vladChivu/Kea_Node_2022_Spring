<script>
    import { cartItemCounter } from "../../store/store.js";

    console.log(cartItemCounter);
    
    function removeAnItem() {
        cartItemCounter.update(amount => {
            if (amount > 0) return amount - 1
            return amount
        });
    }
</script>

<h1>This is the checkout page</h1>

<button on:click={removeAnItem}>Remove this item</button>
