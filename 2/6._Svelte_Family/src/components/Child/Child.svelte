<script>
    export let name;
    export let isGirl = false;
    export let stereotype = "";
    export let handleFamilyMeetingCall;

    import { supermarket } from "../../store/supermarket.js";

    function eatCandy() {
        supermarket.update(storeValue => {
            if (storeValue.candy > 0) storeValue.candy--;
            return storeValue;
        });
        // $supermarket.candy--;
    }
</script>

<div 
    on:click|preventDefault={handleFamilyMeetingCall(name)}
    class:girly={isGirl} 
    class={stereotype || "beyond-any-stereotype"}
>
    <h2>Hi, I am {name}.</h2>
</div>
<div>Pieces of candy in the store: {$supermarket.candy}</div>
<button on:click={eatCandy}>Eat candy</button>

<style>
    .girly {
        background-color: pink;
    }
    .black-sheep {
        background-color: black;
        color: white;
    }
    .bright-kid {
        background-color: yellow;
    }
</style>