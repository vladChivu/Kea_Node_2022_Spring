<script>
    import Nametag from "../../components/Nametag/Nametag.svelte";

    const sausage = {
        name: "Sausage",
        age: 4,
        address: "Puppet street"
    };
</script>


<h1 
    id="dog" 
    on:mouseover={() => console.log("Woooof")}
    on:focus
>
🐩
</h1>
<Nametag nametagInfo={sausage} /> 


<style>
    #dog {
        font-size: 150px;
    }
</style>