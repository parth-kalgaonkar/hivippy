<template>
	<div v-for="idx in total" 
		class="text-center text-6xl"
		:class="{'text-rose-700': (active == (idx-1))}">.</div>
</template>

<script>
	export default {
		props: ['active', 'total'],
	}
</script>
