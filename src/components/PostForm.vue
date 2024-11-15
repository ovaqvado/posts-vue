<template>
	<form @submit.prevent="createPost" class="form">
		<h1 style="margin-bottom: 120px">Creating new posts</h1>
		<my-input
			v-focus
			v-model="post.title"
			type="text"
			placeholder="Title post"
		/>
		<my-input v-model="post.body" type="text" placeholder="Text post" />
		<my-button class="btn">Create post</my-button>
	</form>
</template>

<script>
export default {
	data() {
		return {
			post: {
				title: '',
				body: '',
			},
		}
	},
	methods: {
		createPost() {
			this.post.id = Date.now()
			this.$emit('create', this.post)
			this.post = {
				title: '',
				body: '',
			}
		},
	},
}
</script>

<style scoped>
.form {
	display: flex;
	flex-direction: column;
	margin-top: 200px;
	align-items: start;
}
</style>
