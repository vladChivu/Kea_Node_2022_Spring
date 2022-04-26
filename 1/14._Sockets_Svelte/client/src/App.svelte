<script>
	import UserRegistration from "./Pages/UserRegistration/UserRegistration.svelte";

// assignment Get the username and console log it here
</script>

<main>
	<UserRegistration />
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