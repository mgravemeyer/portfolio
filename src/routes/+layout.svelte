<script>
	import '../app.css'
	import { ParaglideJS } from '@inlang/paraglide-sveltekit'
	import { i18n } from '$lib/i18n'
	import { inject } from '@vercel/analytics'
	import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit';
	inject()
	injectSpeedInsights()
</script>

<svelte:head>
	<meta name="description" lang="de" content="Freelancer spezialisiert auf die Entwicklung komplexer Webanwendungen | 📍Berlin | ✅15+ Projekte | React/Next.js, VueJS/Nuxt, TypeScript, Shopware 6, PHP (Symfony, Laravel).">
	<meta name="keywords" content="Gravemeyer, Maximilian Gravemeyer, Entwickler, Freelancer">
	<meta name="author" content="Maximilian Gravemeyer">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
</svelte:head>

<ParaglideJS {i18n}>
	<slot />
</ParaglideJS>