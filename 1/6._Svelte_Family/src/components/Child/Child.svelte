<script>
    export let name;
    export let isGirl = false;
    export let stereotype = "";

</script>

<h3 class:girl={isGirl} class={stereotype || "no-stereotype"}>Hi my name is {name}.</h3>

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