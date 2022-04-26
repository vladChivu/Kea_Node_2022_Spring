<script>
	import UserRegistration from "./Pages/UserRegistration/UserRegistration.svelte";
	import Colors from "./Pages/Colors/Colors.svelte";

	import { onMount } from "svelte";

	let username;

	onMount(async () => {
		const response = await fetch("/api/fetchUser");
		const { data } = await response.json();
		username = data;
	});

</script>

<main>
	{#if username}
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

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>