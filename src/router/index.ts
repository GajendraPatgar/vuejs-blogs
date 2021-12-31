import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import BlogForm from '../views/blog-form/BlogForm.vue'
import BlogList from '@/views/blog-list/BlogList.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: BlogList,
  },
  {
    path: '/blog/details/:id?',
    name: 'BlogDetails',
    component: () => import(/* webpackChunkName: "blogdetails" */ '../views/blog-details/BlogDetails.vue'),
  },
  {
    path: '/blog/:mode/:id?',
    name: 'BlogForm',
    component: () => import(/* webpackChunkName: "blogform" */ '../views/blog-form/BlogForm.vue'),
  },
  {
    path: '/blogs-by-keyword',
    name: 'BlogsByKeyword',
    component: () => import(/* webpackChunkName: "blogsbykeywords" */ '../views/blogs-filter/BlogsFilter.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
