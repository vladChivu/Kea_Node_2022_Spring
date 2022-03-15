<script>
import Child from "../../components/Child/Child.svelte";
import Parent from "../../components/Parent/Parent.svelte";

import { supermarket } from "../../store/supermarket.js";


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

    function onFamilyMeetingCalled(whoCalled) {
        console.log("Family meeting called by", whoCalled);
    }
</script>

<h1>This is the home of the Svelte family.</h1>

{#each parents as parent (parent.key)}
    <Parent handleFamilyMeetingCall={onFamilyMeetingCalled} name={parent.name} />
{/each}

<Child handleFamilyMeetingCall={onFamilyMeetingCalled} stereotype="black-sheep" name="Thor" />
<Child handleFamilyMeetingCall={onFamilyMeetingCalled} stereotype="bright-kid" name="Alex" />
<Child handleFamilyMeetingCall={onFamilyMeetingCalled}  isGirl={true} name="Maria" />

<h1>This is the online portal for the supermarket</h1>
<p>{JSON.stringify($supermarket, null, 4 )}</p>