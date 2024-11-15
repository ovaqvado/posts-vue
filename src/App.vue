<template>
	<my-navbar></my-navbar>

	<div class="app">
		<router-view></router-view>
	</div>
</template>

<script>
import MyNavbar from '@/components/UI/MyNavbar.vue'
export default {
	components: {
		MyNavbar,
	},
}
</script>

<style>
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}
</style>
