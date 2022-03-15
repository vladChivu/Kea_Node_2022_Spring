<script>
    export let name;
    export let isGirl = false;
    export let stereotype = "";

    import { supermarket } from "../../store/supermarket.js";

    function eatCereal() {
        supermarket.update(storeValue => {
            if (storeValue.cereal > 0) storeValue.cereal -= 1;
            return storeValue;
        });
        // this also works 
        // $supermarket.cereal--;
    }
</script>

<h3 class:girl={isGirl} class={stereotype || "no-stereotype"}>Hi my name is {name}.</h3>
<p>Amount of cereal: {$supermarket.cereal}</p>
<button on:click={eatCereal}>Eat cereal</button>

<style>
    .girl {
        background-color: pink;
    }

    .bright-kid {
        background-color: lightyellow;
    }

    .black-sheep {
        background-color: black;
        color: white;
    }
</style>