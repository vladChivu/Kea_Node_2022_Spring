<script>
import { Router, Link, Route } from "svelte-routing";
import Checkout from "./pages/Checkout/Checkout.svelte";
import Frontpage from "./pages/Frontpage/Frontpage.svelte";
import Market from "./pages/Market/Market.svelte";

import { cartItemCounter } from "./store/store.js";

let cartItemCounterValue; 
cartItemCounter.subscribe(value => cartItemCounterValue = value);

</script>

<main>
	<Router>
		<nav>
			<Link to="/">
				<img id="logo" src="https://i.picsum.photos/id/890/200/300.jpg?hmac=INUR_Xore_GSEXH-cqmLjy_lJcK8tslVvXwwac-9o8M" alt="logo">
			</Link>
			<Link to="/market">Market</Link>
			<Link to="/checkout">Checkout</Link>
			<p>You have {cartItemCounterValue} items in your cart</p>
		</nav>
		<Route path="/market" component={Market} />
		<Route path="/checkout" component={Checkout} />
		<Route path="/" component={Frontpage} />
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

	#logo {
		height: 4em;
	}
</style>