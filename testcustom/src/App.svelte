<script>
	import { currentPage } from "./Navigator/navigator.js";

	import Nav from "./Navigator/Nav.svelte";
	import Home from "./Pages/Home.svelte";
	import About from "./Pages/About.svelte";

</script>

<Nav>
    <a href="/">home</a>
    <a href="/about">about</a>
</Nav>

{#if $currentPage == "/"}
	<Home />
{/if}

{#if $currentPage == "/about"}
	<About />
{/if}