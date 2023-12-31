<template class="relative">
  <ImageView
		v-for="(img, idx) in img_paths"
		:class="{
			'hidden': !in_range(idx),
			'-translate-x-[198%]': (idx === (count-2)),
			'-translate-x-[98%]': (idx === (count-1)),
			'translate-x-[118%]': (idx === (count+1)),
			'translate-x-[218%]': (idx === (count+2)),
			'translate-x-1/12': (idx === count),
		}"
		class="fixed duration-700 ease-in-out transition-all"
		:img_item="img"/>
	<div class="fixed w-full bottom-[5%] flex justify-center">
		<ScrollView :total="img_paths.length" :active="count"/>
	</div>
</template>

<script>
	import ImageView from './components/ImageView.vue';
	import ScrollView from './components/ScrollView.vue';
	import {img_paths} from './stores/image_paths.js';

	export default {
		data() {
			return {
				count: 0,
				img_paths,
			}
		},
		components: {
			ImageView,
			ScrollView,
		},
		methods: {
			in_range(idx) {
				if (idx < (this.count-2)) return false;
				if (idx > (this.count+2)) return false;
				return true;
			},
			next_img() {
				var len = this.img_paths.length;
				if (this.count == (len - 1)) {
					return;
				}

				this.count = (this.count + 1);
			},
			prev_img() {
				var len = this.img_paths.length;
				if (this.count == 0) {
					return;
				}

				this.count = (this.count - 1);
			},
			handleKeyDown(e) {
				switch (e.keyCode) {
					case 37:
						this.prev_img();
						break;
					case 39:
						this.next_img();
						break;
				}
			},
		},
		mounted() {
			window.addEventListener('keydown', this.handleKeyDown, null);
		},
		beforeUnmount() {
			window.addEventListener('keydown', this.handleKeyDown);
		},
	}
</script>
