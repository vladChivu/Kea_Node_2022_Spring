<script>
	import { Router, Link, Route } from "svelte-navigator";

	import About from "./pages/About/About.svelte"
	import Home from "./pages/Home/Home.svelte"
</script>

<Router>
	<nav>
		<Link to="/">Home</Link>
		<Link to="/about">About</Link>
	</nav>

	<Route path="/about" component={About}></Route>
	<Route path="/" component={Home}></Route>

</Router>

<style>
	nav {
		background-color: grey;
	}
</style>