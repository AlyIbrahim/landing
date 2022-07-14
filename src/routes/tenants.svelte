<script context="module">
	import { browser, dev } from '$app/env';
import Table from '../lib/Table.svelte';

	// we don't need any JS on this page, though we'll load
	// it in dev so that we get hot module replacement...
	export const hydrate = dev;

	// ...but if the client-side router is already loaded
	// (i.e. we came here from elsewhere in the app), use it
	export const router = browser;

	// since there's no dynamic data here, we can prerender
	// it so that it gets served as a static asset in prod
	export const prerender = true;
	let tenants = []
	const tenants_service_url = `${import.meta.env.VITE_TENANT_SERVICE}`
	const getTenants = async () => {
        let response = await fetch(tenants_service_url, {
            mode: 'no-cors'
        })

        tenants = await response.json().Items
		return tenants
    }
	tenants = getTenants()
</script>

<svelte:head>
	<title>Tenants</title>
	<meta name="description" content="Current Tenants Status" />
</svelte:head>

<div class="content">
	<h1>Current Tenants</h1>

</div>
<Table tenants={tenants}/>

<style>
	.content {
		width: 100%;
		max-width: var(--column-width);
		margin: var(--column-margin-top) auto 0 auto;
	}
</style>
