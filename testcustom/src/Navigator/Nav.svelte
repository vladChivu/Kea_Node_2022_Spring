<script>
    import { currentPage } from "./navigator.js";

    function changeCurrentPage(event) {
        const url = event.target.getAttribute("href")
        history.pushState({ "href_to_show" : url }, '', url)
        $currentPage = url
    }

    // history.replaceState({ "href_to_show": "/" }, "", "/");

    document.addEventListener('DOMContentLoaded', () => {
        $currentPage = window.location.pathname;
    })
    
	window.addEventListener("popstate", e => {
		$currentPage = e.state.href_to_show
	});

</script>

<nav on:click|preventDefault={changeCurrentPage}>
    <slot></slot>
</nav>