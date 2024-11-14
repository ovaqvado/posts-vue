<template>
	<div @click.stop="hideDialog" class="dialog" v-if="show">
		<div @click.stop class="dialog_content">
			<slot></slot>
		</div>
	</div>
</template>

<script>
export default {
	name: 'my-dialog',
	props: {
		show: {
			type: Boolean,
			default: false,
		},
	},
	methods: {
		hideDialog() {
			this.$emit('update:show', false)
		},
	},
}
</script>

<style scoped>
.dialog {
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background: rgba(74, 74, 74, 0.543);
	position: fixed;
	transition: 1s;
}

.dialog_content {
	display: flex;
	align-items: start;
	background: white;
	padding: 20px;
	left: 0;
	height: 100vh;
	width: 350px;
}
</style>
