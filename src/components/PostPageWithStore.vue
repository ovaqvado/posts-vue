<template>
	<div class="box_posts">
		<h1>Страница с постами</h1>
		<!-- <my-input v-model="searchQuery" placeholder="Search..." /> -->
		<div class="app_buttons">
			<my-button @click="showDialog">Создать новый пост</my-button>
			<!-- <my-select v-model="selectedSort" :options="sortOptions" /> -->
		</div>
		<my-dialog v-model:show="dialogVisible">
			<post-form @create="createPost" />
		</my-dialog>

		<post-list
			@remove="removePost"
			:posts="sortedAndSearched"
			v-if="!isPostsLoading"
		/>

		<div v-else>Loading <span>...</span></div>
	</div>
</template>

<script>
import PostForm from '@/components/PostForm'
import PostList from '@/components/PostList'
import { mapActions, mapGetters, mapState } from 'vuex'

export default {
	components: {
		PostList,
		PostForm,
	},
	data() {
		return {
			dialogVisible: false,
		}
	},
	methods: {
		...mapActions({
			fetchPosts: 'post/fetchPosts',
		}),
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
	computed: {
		...mapState({
			posts: state => state.post.posts,
			isPostsLoading: state => state.post.isPostsLoading,
			selectedSort: state => state.post.selectedSort,
			searchQuery: state => state.post.searchQuery,
			sortOptions: state => state.post.sortOptions,
		}),
		...mapGetters({
			sortedPost: 'post/sortedPosts',
			sortedAndSearched: 'post/sortedAndSearched',
		}),
	},
}
</script>

<style>
.app {
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
}

.app_buttons {
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-direction: column;
	gap: 30px;
}

.box_posts {
	display: flex;
	text-align: center;
	flex-direction: column;
	width: 800px;
}
</style>
