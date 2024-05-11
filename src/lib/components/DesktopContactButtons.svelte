<script lang="ts">
	import { EMAIL, PHONE, LINKEDIN, GITHUB } from '$lib/const';
</script>

	<div class="hidden lg:flex lg:flex-col lg:visible">
		<a
			class=" w-fit font-quickLight mt-4 text-stone-900 hover-text"
			href={`mailto:${EMAIL}`}
		>
			{EMAIL}
		</a>
		<a
			class=" w-fit font-quickLight mt-[2px] text-stone-900 hover-text"
			href={`tel:${PHONE}`}
		>
			+49 175 7441765
		</a>
		<a
			class=" w-fit font-quickLight mt-4 text-stone-900 hover-text"
			href={LINKEDIN}
			target="_blank"
		>
			LinkedIn
		</a>
		<a
			class=" w-fit font-quickLight mt-[2px] text-stone-900 hover-text"
			href={GITHUB}
			target="_blank"
		>
			GitHub
		</a>
	</div>