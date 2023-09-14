<script>
import "../app.postcss";
import Header from './header.svelte';
import Footer from './footer.svelte';
  import "../app.postcss";
	
</script>

<div class="layout">
	<Header />

	<main>
		<slot />
	</main>

	<Footer />
</div>

<style>
	.layout {
		height: 100%;
		min-inline-size: 1440px;
		display: grid;
		grid-template-rows: auto 1fr auto;
		margin-inline: auto;
		padding-inline: var(--size-7);
	}

	main {
		padding: 10px;
	}

	@media (min-width: 1440px) {
		.layout {
			padding-inline: 0;
		}
	}
</style>
