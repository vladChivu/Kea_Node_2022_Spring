<script>
	import { Router, Link, Route } from "svelte-navigator";
	import Home from "./Pages/Home.svelte";
	import Pages from "./Pages/Pages.svelte";

</script>

<main>
	<Router>
		<nav>
			<Link to="/">Home</Link>
			<Link to="/pages">Pages</Link>
		</nav>
		<Route path="/" component={Home} />
		<Route path="/pages" component={Pages} />
	</Router>
</main>

<style>
	main {
		text-align: center;
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