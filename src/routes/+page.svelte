<script lang="ts">
	import * as m from '$lib/paraglide/messages.js';
	import DesktopContactButtons from '$lib/components/DesktopContactButtons.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import MobileContactButtons from '$lib/components/MobileContactButtons.svelte';
	import SkillsList from '$lib/components/SkillsList.svelte';
	import JobsList from '$lib/components/JobsList.svelte';
	import { page } from '$app/stores';
	import { i18n } from '$lib/i18n'
	import { goto } from '$app/navigation';

	const goToLanguage = (language: 'de' | 'en') => {
		goto(i18n.resolveRoute('/', language), {replaceState: true})
	}
</script>

<svelte:head>
	<title>Portfolio</title>
	<link rel="canonical" href="http://www.gravemeyer.com/">
</svelte:head>

<div class="flex flex-col w-full justify-center items-center mt-4 sm:mt-8 lg:mt-16 xl:mx-0">
	<div class="w-full px-4 sm:px-32 lg:w-[900px] lg:px-0">
		<div class="flex flex-col lg:flex-row">
			<div class="flex flex-col lg:w-[26rem] lg:mt-12">
				<enhanced:img
					class="w-16 h-16"
					src='$lib/media/logo.webp'
					alt="logo"
				/>
				<h1 class=" font-quickLight mt-4 text-3xl mr-8 leading-normal">
					{m.title()}
				</h1>
				<DesktopContactButtons />
			</div>
			<div class="flex flex-col justify-start items-start">
				<div class=" flex flex-row w-full lg:w-52 mt-4 drop-shadow-md mb-2">
					<button on:click={() => goToLanguage('de')} class={`w-full h-10 text-center flex justify-center items-center ${$page.url.pathname.includes('de') ? 'bg-black text-white' : 'bg-gray-200'}`}>Deutsch</button>
					<button on:click={() => goToLanguage('en')} class={`w-full h-10 text-center flex justify-center items-center ${!$page.url.pathname.includes('de') ? 'bg-black text-white' : 'bg-gray-200'}`}>English</button>
				</div>
				<enhanced:img
					class="mt-4 lg:max-w-[870px] lg:mt-0 w-full"
					src='$lib/media/profile.webp'
					alt="profile"
				/>
				<MobileContactButtons hideOnDesktop />
				<div class="lg:w-[450px] mt-12">
					<p class="font-quickBold text-lg">{m.aboutHeadline()}</p>
					<p class="font-quickLight mt-1">{m.description()}</p>
					<SkillsList />
					<p class="font-quickBold mt-12 text-lg flex items-center">
						{m.projectsSeparator()}
					</p>
					<JobsList />
					<p class="font-quickBold text-lg mt-16">
						{m.contactSeparator()}
					</p>
					<MobileContactButtons hideOnDesktop={false} />
				</div>
			</div>
		</div>
	</div>
	<Footer />
</div>