<script>
import Child from "../../components/Child/Child.svelte";
import Parent from "../../components/Parent/Parent.svelte";

const parents = [
    {
        key: 1,
        name: "Adam"
    },
    {
        key: 2,
        name: "Eve"
    }
];
</script>

<h1>This is the home of the Svelte family.</h1>

{#each parents as parent (parent.key)}
    <Parent name={parent.name} />
{/each}

<Child name="Thor" />
<Child name="Alex" />
<Child name="Maria" />