import axios from 'axios'

export const postModule = {
	state: () => ({
		posts: [],
		isPostsLoading: false,
		selectedSort: '',
		searchQuery: '',
		sortOptions: [
			{ value: 'title', name: 'По названию' },
			{ value: 'body', name: 'По содержимому' },
		],
	}),
	getters: {
		sortedPosts(state) {
			return [...state.posts].sort((a, b) =>
				a[state.selectedSort]?.localeCompare(b[state.selectedSort])
			)
		},
		sortedAndSearched(state, getters) {
			return getters.sortedPosts.filter(post =>
				post.title.toLowerCase().includes(state.searchQuery.toLowerCase())
			)
		},
	},
	mutations: {
		setPosts(state, posts) {
			state.posts = posts
		},
		setLoading(state, bool) {
			state.isPostsLoading = bool
		},
		setSelectedSort(state, selectedSort) {
			state.isPostsLoading = selectedSort
		},
		setSearchQuery(state, searchQuery) {
			state.searchQuery = searchQuery
		},
	},
	actions: {
		async fetchPosts({ commit, state }) {
			try {
				commit('setLoading', true)

				const response = await axios.get('https://dummyjson.com/posts/?limit=3')
				commit('setPosts', [...state.posts, ...response.data.posts])
			} catch (error) {
				console.error('Error fetching posts:')
			} finally {
				commit('setLoading', false)
			}
		},
	},
	namespaced: true,
}
