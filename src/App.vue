<template>
	<div class="app">
		<h1>Страница с постами</h1>
		<my-input v-model="searchQuery" placeholder="Search..." />
		<div class="app_buttons">
			<my-button @click="showDialog">Создать новый пост</my-button>
			<my-select v-model="selectedSort" :options="sortOptions" />
		</div>

		<my-dialog v-model:show="dialogVisible">
			<post-form @create="createPost" />
		</my-dialog>

		<post-list
			@remove="removePost"
			:posts="sortedAndSearched"
			v-if="!isPostsLoading"
		/>

		<div v-else>Loading...</div>
	</div>
</template>

<script>
import axios from 'axios'
import PostForm from './components/PostForm'
import PostList from './components/PostList'

export default {
	components: {
		PostList,
		PostForm,
	},
	data() {
		return {
			posts: [],
			dialogVisible: false,
			isPostsLoading: false,
			selectedSort: '',
			sortOptions: [
				{ value: 'title', name: 'По названию' },
				{ value: 'body', name: 'По содержимому' },
				{ value: 'id', name: 'По id' },
			],
			searchQuery: '',
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
		async fetchPosts() {
			try {
				this.isPostsLoading = true

				const response = await axios.get('https://dummyjson.com/posts')
				this.posts = response.data.posts
			} catch (error) {
				console.error('Error fetching posts:', error)
			} finally {
				this.isPostsLoading = false
			}
		},
	},
	mounted() {
		this.fetchPosts()
	},
	computed: {
		sortedPosts() {
			return [...this.posts].sort((a, b) =>
				a[this.selectedSort]?.localeCompare(b[this.selectedSort])
			)
		},
		sortedAndSearched() {
			return this.sortedPosts.filter(post =>
				post.title.toLowerCase().includes(this.searchQuery.toLowerCase())
			)
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

.app_buttons {
	display: flex;
	justify-content: space-between;
}
</style>
