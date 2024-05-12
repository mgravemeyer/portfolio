<script lang="ts">
	import ContactButton from '$lib/components/ContactButton.svelte';
	import { EMAIL, PHONE, LINKEDIN, GITHUB } from '$lib/const';
	import * as m from '$lib/paraglide/messages.js';

	export let hideOnDesktop: boolean = false
</script>

<div class={`w-full ${hideOnDesktop ? 'lg:hidden' : ''}`}>
	<div class=" flex flex-row mt-4">
		<ContactButton
			name="E-Mail"
			target={`mailto:${EMAIL}`}
			className="mr-1"
		/>
		<ContactButton
			name={m.phoneButton()}
			target={`tel:${PHONE}`}
			className="ml-1"
		/>
	</div>
	<div class=" flex flex-row mt-2">
		<ContactButton name="LinkedIn" target={LINKEDIN} className="mr-1" />
		<ContactButton name="GitHub" target={GITHUB} className="ml-1" />
	</div>
</div>