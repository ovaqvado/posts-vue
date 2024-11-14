<template>
	<div v-if="posts.length > 0" class="post">
		<h3 style="margin-top: 15px; margin-bottom: 50px">Список пользователей</h3>
		<post-item
			@remove="$emit('remove', post)"
			:post="post"
			v-for="post in posts"
			:key="post.id"
		></post-item>
	</div>
	<h2 style="color: red" v-else>Post not exist</h2>
</template>

<script>
import PostItem from './PostItem.vue'

export default {
	components: { PostItem },
	props: {
		posts: {
			type: Array,
			required: true,
		},
	},
}
</script>

<style scoped></style>
