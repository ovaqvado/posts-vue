<template>
	<div class="post">
		<div class="text_box_post">
			<div><strong>Title: </strong>{{ post.title }}</div>
			<div><strong>About: </strong>{{ post.body }}</div>
		</div>
		<div class="post_buttons">
			<my-button @click="$emit('remove', post)">Удалить</my-button>
			<my-button @click="$router.push(`/posts/${post.id}`)">Открыть</my-button>
		</div>
	</div>
</template>

<script>
import MyButton from './UI/MyButton.vue'
export default {
	components: { MyButton },
	props: {
		post: {
			type: Object,
			required: true,
		},
	},
}
</script>

<style scoped>
.post {
	display: flex;
	align-items: center;
	padding: 15px;
	margin-top: 15px;
	justify-content: space-between;
	border: 2px solid grey;
	width: 800px;
}
.text_box_post {
	display: flex;
	flex-direction: column;
	align-items: start;
	text-align: left;
	gap: 10px;
}
</style>
