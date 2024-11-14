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
	background: rgba(128, 128, 128, 0.543);
	position: fixed;
	display: flex;
	transition: 1s;
}

.dialog_content {
	background: white;
	border-radius: 12px;
	padding: 20px;
	margin: auto;
}
</style>
