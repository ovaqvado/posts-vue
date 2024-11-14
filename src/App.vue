<template>
	<div class="app">
		<h1>Страница с постами</h1>
		<my-button @click="showDialog">Создать новый пост</my-button>
		<my-dialog v-model:show="dialogVisible">
			<post-form @create="createPost" />
		</my-dialog>
		<post-list @remove="removePost" :posts="posts" />
	</div>
</template>

<script>
import PostForm from './components/PostForm'
import PostList from './components/PostList'

export default {
	components: {
		PostList,
		PostForm,
	},
	data() {
		return {
			posts: [
				{ id: 1, title: 'JS', body: 'Дщфвфыв' },
				{ id: 2, title: 'JS2', body: 'Дas' },
				{ id: 3, title: 'JS3', body: 'asdasdвфыв' },
				{ id: 4, title: 'JS4', body: 'asdasdвфыв' },
			],
			dialogVisible: false,
		}
	},
	methods: {
		createPost(post) {
			this.posts.push(post)
			this.dialogVisible = false
		},
		removePost(post) {
			this.posts = this.posts.filter(p => p.id !== post.id)
		},
		showDialog() {
			this.dialogVisible = true
		},
	},
}
</script>

<style>
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

.app {
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
}
</style>
