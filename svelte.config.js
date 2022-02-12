import adapter from '@sveltejs/adapter-node';
import preprocess from 'svelte-preprocess';
import pack from 'vite-imagetools'
const { imagetools } = pack;

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: adapter({
			// default options are shown
			out: 'build',
			precompress: false,
			env: {
				host: 'HOST',
				port: 'PORT'
			}
		}),

		// hydrate the <div id="svelte"> element in src/app.html
        vite: ({
			ssr: {
				external: ['firebase']
			},
			plugins: [imagetools({force: true})]
	    }),
	    floc: true,
	}
};

export default config;
