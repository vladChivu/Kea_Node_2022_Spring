<script>
    export let name;
    export let onCallMeeting;

</script>

<h2 on:click={onCallMeeting(name)}>Hello I am {name}.</h2>
