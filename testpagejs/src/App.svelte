<script>
	import router from "page"

	import Home from "./Pages/Home.svelte"
	import About from "./Pages/About.svelte"

	let page;
	router("/", () => page = Home)
	router("/about", () => page = About)

	router.start();

</script>

<nav>
	<p on:click={() => router.redirect("/")}>Home</p>
	<p on:click={() => router.redirect("/about")}>About</p>
</nav>

<svelte:component this={page} />

<style>
	p {
		color: blue;
	}
</style>