<script>
import Child from "../../components/Child/Child.svelte";
import Parent from "../../components/Parent/Parent.svelte";

import { supermarket } from "../../store/supermarket.js";

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

    function handleFamilyMeeting(calleeName) {
        console.log("A family meeting has been called by", calleeName);
    }
</script>

<h1>Welcome to the home of the Svelte Family</h1>

{#each parents as parent (parent.key)}
    <Parent onCallMeeting={handleFamilyMeeting} name={parent.name} />
{/each}

<Child stereotype="bright-kid" name="Junior"/>
<Child isGirl={true} name="Gertrude Junior"/>
<Child stereotype="black-sheep" name="Who cares"/>


<h3>Online portal to the supermarket</h3>
<div>{JSON.stringify($supermarket, null, 4)}</div>
