import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
// import MoviePreview from "@/views/MoviePreview";

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },

  {
    path: '/movie-preview/:id',
    name: 'moviePreview',
    component: () => import('../views/MoviePreview'),
    props: true
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
