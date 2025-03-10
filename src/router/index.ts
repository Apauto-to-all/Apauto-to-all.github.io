import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/AboutView.vue'),
    },
    {
      path: '/portfolio',
      children: [
        {
          path: '',
          name: 'Portfolio',
          component: () => import('@/views/portfolio/PortfolioHome.vue'),
        },
        // {
        //   path: 'category/:category',
        //   name: 'ProjectCategory',
        //   component: () => import('@/views/portfolio/ProjectCategory.vue'),
        // },
        {
          path: ':projectId',
          name: 'ProjectDetail',
          component: () => import('@/views/portfolio/ProjectDetail.vue'),
        }
      ]
    },
    // 添加404路由，必须放在最后一个
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import('@/views/NotFoundView.vue'),
    }
  ],
})

export default router
