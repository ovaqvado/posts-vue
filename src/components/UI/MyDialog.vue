<template>
	<div @click.stop="hideDialog" class="dialog" v-if="show">
		<div @click.stop class="dialog_content">
			<slot></slot>
		</div>
	</div>
</template>

<script>
import toggleMixin from '@/mixins/toggleMixin'

export default {
	name: 'my-dialog',
	mixins: [toggleMixin],
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

.dialog {
	animation-duration: 0.3s;
	animation-name: slidein;
}

@keyframes slidein {
	from {
		margin-left: -100%;
		width: 300%;
	}

	to {
		margin-left: 0%;
		width: 100%;
	}
}
</style>
