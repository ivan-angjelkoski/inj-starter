import { nodePolyfills } from "vite-plugin-node-polyfills";

export default defineNuxtConfig({
	ssr: false,
	modules: ["@pinia/nuxt", "@vueuse/nuxt", "@nuxtjs/tailwindcss"],

	typescript: {
		typeCheck: false,
	},

	plugins: [{ src: "./plugins/buffer.client.ts", ssr: false }],
	app: {
		head: {
			htmlAttrs: {
				class: ["dark"],
			},
		},
	},
	vite: {
		plugins: [nodePolyfills()],
	},
});
