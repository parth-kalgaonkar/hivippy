<template>
	<div class="w-5/6 h-5/6 mx-auto top-[5%] group">
		<img
			class="w-full h-full object-cover"
			:src="img_item.path"
			:alt="img_item.comment">
		<div v-if="Boolean(img_item.comment)" class="opacity-0 group-hover:opacity-75 duration-300 bg-black absolute inset-x-0 bottom-0 w-full h-full place-items-center grid text-3xl">{{img_item.comment}}</div>
	</div>
</template>

<script>
	export default {
		props: ['img_item']
	}
</script>
