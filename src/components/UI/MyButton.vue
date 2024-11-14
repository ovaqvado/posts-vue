<template>
	<button class="btn"><slot></slot></button>
</template>

<script>
export default {
	name: 'my-button',
}
</script>

<style scoped>
.btn {
	margin-top: 10px;
	width: 100px;
	height: 30px;
	background: none;
	color: teal;
	border: 1px solid teal;
	cursor: pointer;
}
</style>
