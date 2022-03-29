<script>
	import { onMount } from "svelte";
	import { baseURL } from "./store/generalStore.js";

	let movies;

	onMount(async () => {
		const response = await fetch("/movies");
		const { data } = await response.json();
		console.log(data);
		movies = data;
	});

</script>

<main>
	<h1>{JSON.stringify(movies)}</h1>
</main>
<footer>
	©{new Date().getFullYear()} 
	About
	Contact
</footer>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
		min-height: calc(100vh - 60px);
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