<script>
	import '../app.css'
	import { ParaglideJS } from '@inlang/paraglide-sveltekit'
	import { i18n } from '$lib/i18n'
</script>

<svelte:head>
	<meta name="description" content="Freelancer specialized in the development of complex web solutions | 📍Berlin | ✅15+ Projects | React/Next.js, Svelte/SvelteKit, TypeScript, Shopware 6, PHP (Symfony, Laravel).">
	<meta name="keywords" content="Gravemeyer, Maximilian Gravemeyer, Entwickler, Freelancer">
</svelte:head>

<ParaglideJS {i18n}>
	<slot />
</ParaglideJS>