<script>
    export let name;
    export let isGirl = false;
    export let stereotype = "";

</script>

<div class:girly={isGirl} 
     class={stereotype || "beyond-any-stereotype"}
>
    <h2>Hi, I am {name}.</h2>
</div>

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