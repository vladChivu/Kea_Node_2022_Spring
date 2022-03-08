<script>
    import Apple from "../Tree/Apple.svelte";

    let apples = ['🍏', '🍎', '🍏', '🍎', '🍎', '🍏'];

    function pickAnApple() {
        console.log("Picked an apple");
        apples.pop();
        apples = apples;
    }
</script>

<div id="tree">
    <h1>Tree</h1>
    {#each apples as apple}
        <Apple apple={apple}/>
    {/each}
    <button on:click={pickAnApple}>Pick an apple</button>
</div>
<div id="trunk">
</div>

<style>
    #tree {
        background-color: lightgreen;
    }

    #trunk {
        background-color: saddlebrown;
        height: 120px;
        width: 50px;
    }
</style>