<script lang="ts">
	import * as m from '$lib/paraglide/messages.js';
</script>

<div class=" w-full h-12 bg-stone-900 mt-24 flex flex-row justify-center items-center">
	<a
		href='/impressum'
		class="text-white font-quickMedium hover:cursor-pointer"
	>
		{m.imprint()}
	</a>
	<a
		href='/datenschutz'
		class="text-white font-quickMedium hover:cursor-pointer ml-4"
	>
		{m.dateProtection()}
	</a>
</div>