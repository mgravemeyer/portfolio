<script lang="ts">
	import * as m from '$lib/paraglide/messages.js';
	import type { Job } from '$lib/types/Job';
	import JobExperience from '$lib/components/JobExperience.svelte';

	const jobs: Job[] = [
		{
			headline: m.horschHeadline(),
			translation: m.horschJob(),
			time: m.horschTime(),
			alt: 'Horsch Job',
			current: true
		},
		{
			headline: m.armbrHeadline(),
			translation: m.armbrJob(),
			time: m.armbrTime(),
			alt: 'Armbrüster Consulting Job',
			current: true
		},
		{
			headline: m.ttHeadline(),
			translation: m.ttJob(),
			time: m.ttTime(),
			alt: 'Tom Tailor Job',
		},
		{
			headline: m.seglerHeadline(),
			translation: m.seglerJob(),
			time: m.seglerTime(),
			alt: 'Segler Job',
		},
		{
			headline: m.miconyHeadline(),
			translation: m.miconyJob(),
			time: m.miconyTime(),
			alt: 'Micony Job',
		},
		{
			headline: m.horvathHeadline(),
			translation: m.horvathJob(),
			time: m.horvathTime(),
			alt: 'Horvath Job',
		},
	];
</script>

{#each jobs as job, i}
	<JobExperience job={job} index={i}/>
{/each}