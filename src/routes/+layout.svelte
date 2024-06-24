<script>
import "../app.postcss";
import Header from './header.svelte';
import Footer from './footer.svelte';
import "../app.postcss";

import { page } from '$app/stores';
</script>

<div class="layout">
	{#if $page.url.pathname !== '/login' && $page.url.pathname !== '/sign-up'}
	<Header />
	{/if}
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

	@media (min-width: 1440px) {
		.layout {
			padding-inline: 0;
		}
	}
</style>
