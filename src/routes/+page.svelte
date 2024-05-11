<script lang="ts">
	import * as m from '$lib/paraglide/messages.js';
	import DesktopContactButtons from '$lib/components/DesktopContactButtons.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import MobileContactButtons from '$lib/components/MobileContactButtons.svelte';
	import SkillsList from '$lib/components/SkillsList.svelte';
	import JobsList from '$lib/components/JobsList.svelte';
</script>

<svelte:head>
	<link rel="canonical" href="http://www.gravemeyer.com/">
	<title>Gravemeyer Portfolio</title>
</svelte:head>

<div class="flex flex-col w-full justify-center items-center mt-4 sm:mt-8 lg:mt-16 xl:mx-0">
	<div class="w-full px-4 sm:px-32 lg:w-[900px] lg:px-0">
		<div class="flex flex-col lg:flex-row">
			<div class="flex flex-col lg:w-[26rem] lg:mt-12">
				<enhanced:img
					class="w-16 h-16"
					src='$lib/media/logo.jpg'
					alt="logo"
				/>
				<h1 class=" font-quickLight mt-4 text-3xl mr-8 leading-normal">
					{m.title()}
				</h1>
				<DesktopContactButtons />
			</div>
			<div class="fle flex-col justify-start items-center">
				<enhanced:img
					class="mt-4 lg:max-w-[870px] lg:mt-0 w-full"
					src='$lib/media/profile.jpg'
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