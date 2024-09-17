import {createRouter, createWebHistory} from 'vue-router/auto'
import {Router, RouteRecordRaw} from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/:pathMatch(.*)*',
    redirect: '/404'
  },
  {
    path: '/',
    component: () => import('@/pages/HomePage.vue'),
    meta: {title: 'Home'}
  }
]

const router: Router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

router.beforeEach((to, _, next) => {
  if (to.meta && to.meta.title) {
    document.title = to.meta.title as string + ' | Tongji-Software - iGEM 2024'
  } else {
    document.title = 'Tongji-Software - iGEM 2024'
  }
  next()
})

router.onError((err, to) => {
  if (err?.message?.includes?.('Failed to fetch dynamically imported module')) {
    if (!localStorage.getItem('vuetify:dynamic-reload')) {
      console.log('Reloading page to fix dynamic import error')
      localStorage.setItem('vuetify:dynamic-reload', 'true')
      location.assign(to.fullPath)
    } else {
      console.error('Dynamic import error, reloading page did not fix it', err)
    }
  } else {
    console.error(err)
  }
})

router.isReady().then(() => {
  localStorage.removeItem('vuetify:dynamic-reload')
})

export default router
