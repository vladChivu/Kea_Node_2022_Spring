<script>
import Child from "../../components/Child/Child.svelte";
import Parent from "../../components/Parent/Parent.svelte";

    const parents = [
        {
            key: 1,
            name: "Gertrude", 
        },
        {
            key: 2,
            name: "Monica", 
        }
    ];
</script>

<h1>Welcome to the home of the Svelte Family</h1>

{#each parents as parent (parent.key)}
    <Parent name={parent.name} />
{/each}

<Child stereotype="bright-kid" name="Junior"/>
<Child isGirl={true} name="Gertrude Junior"/>
<Child stereotype="black-sheep" name="Who cares"/>
