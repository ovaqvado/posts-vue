<template>
	<div class="navbar">
		<router-link to="/about">About</router-link>
		<router-link to="/posts">Posts</router-link>
		<router-link to="/store">Store</router-link>
	</div>
</template>

<script>
export default {}
</script>

<style scoped>
.navbar {
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	gap: 40px;
	height: 30px;
	width: 100%;
	border-bottom: 2px solid teal;
}
</style>
