import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'Home - JBFarms'
    }
  },
  {
    path: '/about-us',
    name: 'About Us',
    component: () => import('../views/About-us'),
    children: [
      {
        path: '/about-us/vision-mission',
        name: 'Vision and Mission',
        component: () => import('../views/vision-mission/vision-mission'),
        meta: {
          title: 'About us - JBFarms'
        }
      },
      {
        path: '/about-us/leadership',
        name: 'Leadership',
        component: () => import('../views/leadership/leadership'),
        meta: {
          title: 'About us - JBFarms'
        }
      },
    ],
    meta: {
      title: 'About us - JBFarms'
    }
  },
  {
    path: '/what-we-do',
    name: 'What We Do',
    component: () => import('../views/what-we-do'),
    meta: {
      title: 'What we do - JBFarms'
    }
  },
  {
    path: '/gallery',
    name: 'Gallery',
    component: () => import('../views/Gallery'),
    meta: {
      title: 'Gallery - JBFarms'
    }
  },
  {
    path: '/contacts',
    name: 'Contacts',
    component: () => import('../views/Contacts'),
    meta: {
      title: 'Contacts - JBFarms'
    }
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title}`;
  next()
})

export default router
