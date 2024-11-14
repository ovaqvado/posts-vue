<template>
	<input :value="modelValue" @input="updateInput" class="input" type="text" />
</template>

<script>
export default {
	name: 'my-input',
	props: {
		modelValue: [String, Number],
	},
	methods: {
		updateInput(e) {
			this.$emit('update:modelValue', e.target.value)
		},
	},
}
</script>

<style scoped>
.input {
	width: 100%;
	height: 40px;
	padding-left: 10px;
	padding-right: 10px;
	border: 2px solid grey;
	margin-top: 10px;
}
</style>
