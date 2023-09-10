// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
    target: 'static', // Specify SSG as the target
	router: {
		options: {
		  strict: true,
		},
	} ,

})
