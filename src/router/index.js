import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import App from '../App.vue'
import Login from '../views/Login.vue'
import firebase from /

Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    name: 'login',
    redirect: '/login'
  },
  {
    path: '/',
    name: 'login',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/main',
    name: 'main',
    component: App,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/main',
    name: 'Main',
    component: () => import('../App.vue'),
    meta: {
      requiresAuth: true
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  // 상위 라우트를 포함해서 인증이 필요한 라우트가 있는지 확인
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // 인증 상태 확인
    if (!this.$firebase.auth().currentUser) {
      // 인증되어 있지 않으면 로그인 페이지로 리다이렉트
      next({
        path: '/login',
        query: {
          redirect: to.fullPath
        }
      })
    } else {
      next()
    }
  } else {
    next() // 인증이 필요하지 않은 라우트라면 next()로 이동
  }
})

export default router
