<script lang="ts">
	import type { Job } from '$lib/types/Job';

	export let job: Job
	export let index: number
</script>

<div class={`lg:border-l-2 ${job.current ? 'lg:border-stone-900' : 'lg:border-stone-200 opacity-60' } ${index !== 0 ? 'mt-8' : 'mt-3'} lg:pl-2`}>
	{#if job?.image}
		<img class="max-w-[13rem] w-auto mb-1" src={job.image} alt={job.alt} />
	{:else}
		<p class='font-quickBold mb-1'>{job.headline}</p>
	{/if}
	<p class='text-sm mb-2 text-black'>{job.time}</p>
	<p class="font-quickLight">{job.translation}</p>
</div>