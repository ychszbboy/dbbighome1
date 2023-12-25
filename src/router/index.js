import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from '../views/Login/Login.vue'
import Register from '../views/Login/Register.vue'
// const Login=()=>import('../views/Login/Login.vue')
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta:{
      title:"餐品菜单"
    }
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta:{
      title:"欢迎登录"
    }
  },
    {
    path: '/register',
    name: 'Register',
    component: Register,
    meta:{
      title:"欢迎注册"
    }
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
