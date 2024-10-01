import {createRouter, createWebHistory} from 'vue-router/auto'
import {Router, RouteRecordRaw} from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  // Page Redirect Configuration
  {
    path: '/:pathMatch(.*)*',
    redirect: '/404'
  },
  // 404 Not Found Page
  {
    path: '/404',
    component: () => import('@/pages/NotFoundPage.vue'),
    meta: {title: '404 Not Found'}
  },
  // Home Page
  {
    path: '/',
    component: () => import('@/pages/HomePage.vue'),
    meta: {title: 'Home'}
  },
  // Project Pages
  {
    path: '/description',
    component: () => import('@/pages/DescriptionPage.vue'),
    meta: {title: 'Description'}
  },
  {
    path: '/design',
    component: () => import('@/pages/DesignPage.vue'),
    meta: {title: 'Design'}
  },
  {
    path: '/engineering',
    component: () => import('@/pages/EngineeringPage.vue'),
    meta: {title: 'Engineering'}
  },
  {
    path: '/implementation',
    component: () => import('@/pages/ImplementationPage.vue'),
    meta: {title: 'Implementation'}
  },
  {
    path: '/proof-of-concept',
    component: () => import('@/pages/ProofOfConceptPage.vue'),
    meta: {title: 'Proof of Concept'}
  },
  {
    path: '/notebook',
    component: () => import('@/pages/NotebookPage.vue'),
    meta: {title: 'Notebook'}
  },
  // Software Pages
  {
    path: '/contribution',
    component: () => import('@/pages/ContributionPage.vue'),
    meta: {title: 'Contribution'}
  },
  {
    path: '/software',
    component: () => import('@/pages/WebApplicationPage.vue'),
    meta: {title: 'Web Application'}
  },
  // Model Page
  {
    path: '/model',
    component: () => import('@/pages/ModelPage.vue'),
    meta: {title: 'Model'}
  },
  // Human Practices Pages
  {
    path: '/human-practices',
    component: () => import('@/pages/IntegratedHumanPracticesPage.vue'),
    meta: {title: 'Integrated HP'}
  },
  {
    path: '/entrepreneurship',
    component: () => import('@/pages/EntrepreneurshipPage.vue'),
    meta: {title: 'Entrepreneurship'}
  },
  {
    path: '/education',
    component: () => import('@/pages/EducationPage.vue'),
    meta: {title: 'Education'}
  },
  {
    path: '/promotion-video',
    component: () => import('@/pages/PromotionVideoPage.vue'),
    meta: {title: 'Promotion Video'}
  },
  // Safety Page
  {
    path: '/safety',
    component: () => import('@/pages/SafetyPage.vue'),
    meta: {title: 'Safety'}
  },
  // Team Pages
  {
    path: '/team',
    component: () => import('@/pages/RosterPage.vue'),
    meta: {title: 'Roster'}
  },
  {
    path: '/attributions',
    component: () => import('@/pages/AttributionsPage.vue'),
    meta: {title: 'Attributions'}
  }
]

// noinspection JSUnusedGlobalSymbols
const router: Router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(_to, _from, _savedPosition) {
    return {top: 0, left: 0}
  }
})

router.beforeEach((to, _, next) => {
  if (to.meta && to.meta.title) {
    document.title = to.meta.title as string + ' | Tongji-Software'
  } else {
    document.title = 'Tongji-Software'
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
