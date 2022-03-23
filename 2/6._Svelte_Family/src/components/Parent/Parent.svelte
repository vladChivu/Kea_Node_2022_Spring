<script>
    export let name;
    export let handleFamilyMeetingCall;

</script>

<h1 class="parent" on:click={handleFamilyMeetingCall(name)}>Hello I am {name}.</h1>

<style>
    .parent {
        user-select: none;
    }
</style>