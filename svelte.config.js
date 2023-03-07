import adapter from '@sveltejs/adapter-auto';
import sveltePreprocess from 'svelte-preprocess';
import { optimizeImports } from 'carbon-preprocess-svelte';
/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter()
	}
};

export default {
	preprocess: [+sveltePreprocess(), optimizeImports()]
};
