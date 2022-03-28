import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import LKView from '../views/LKView.vue'
import HomeView from '../views/HomeView.vue'
import ProfileView from '../views/ProfileView.vue'
import TodoView from '../views/TodoView.vue'
import AboutView from '../views/AboutView.vue'
import SignInView from '../views/SignInView.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    redirect: '/sign-in'
  },
  {
    path: '/sign-in',
    name: 'sign-in',
    component: SignInView
  },
  {
    path: '/lkhome',
    name:'lkhome',
    component: LKView,
    children: [
      {
        path: '/home',
        name:'home',
        component: HomeView
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
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
