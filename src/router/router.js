import PostPageWithStore from '@/components/PostPageWithStore.vue'
import AboutPage from '@/pages/AboutPage.vue'
import MainPage from '@/pages/MainPage.vue'
import PostIdPage from '@/pages/PostIdPage.vue'
import PostPage from '@/pages/PostPage.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
	{
		path: '/',
		component: MainPage,
	},
	{
		path: '/posts',
		component: PostPage,
	},
	{
		path: '/store',
		component: PostPageWithStore,
	},
	{
		path: '/about',
		component: AboutPage,
	},
	{
		path: '/posts/:id',
		component: PostIdPage,
	},
]

const router = createRouter({
	routes,
	history: createWebHistory(process.env.BASE_URL),
})

export default router
