<script lang="ts">
	export let name: string
	export let target: string
	export let className: string
</script>

<a
	href={target}
	class={
        `transition ease-in-out delay-50 hover:bg-white hover:text-black hover:border-[1px] hover:border-black text-white font-quickMedium bg-stone-900 w-full h-12 flex justify-center items-center cursor-pointer ` +
        `${className}`
      }
>
	{name}
</a>