import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProfileView from '../views/ProfileView.vue'
import TodoView from '../views/TodoView.vue'
import AboutView from '../views/AboutView.vue'
import HistoryTodoView from '../views/HistoryTodoView.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name:'home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/profile',
    name: 'profile',
    component: ProfileView
  },
  {
    path: '/newtodo',
    name: 'newtodo',
    component: TodoView
  },
  {
    path: '/history',
    name: 'history',
    component: HistoryTodoView
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
