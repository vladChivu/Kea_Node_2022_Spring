<script>
	import { onMount } from "svelte";
	import { baseURL } from "./store/generalStore.js";

	onMount(async () => {
		const response = await fetch($baseURL + "/players");
	});
</script>

<main>
	<h1>Page Content</h1>
</main>
<footer>
	© {new Date().getFullYear()}
	Contact
	About
</footer>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
		min-height: calc(100vh - 3.7em);
	}

	footer {
		background-color: grey;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>