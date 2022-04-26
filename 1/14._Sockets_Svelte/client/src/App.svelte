<script>
	import UserRegistration from "./Pages/UserRegistration/UserRegistration.svelte";
	import Colors from "./Pages/Colors/Colors.svelte";

	import { Wave } from "svelte-loading-spinners";

	import { onMount } from "svelte";

	let username = false;

	onMount(async () => {
		const response = await fetch("/api/fetchuser");
		const { data } = await response.json();
		username = data;
	});	
</script>

<main>
	{#if username === false}
		<div id="loading"><Wave /></div>
	{:else if username}
		<Colors />
	{:else}
		<UserRegistration />
	{/if}

</main>

<style>
	main {
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	#loading {
		min-width: 100vw;
		min-height: 100vh;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>