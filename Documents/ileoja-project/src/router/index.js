import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '/auth',
        name: 'Home',
        component: () => import('../views/auth/auth-screen.vue')
      },
      {
        path: '/login',
        name: 'Login',
        component: () => import('../views/auth/Login.vue')
      },
      {
        path: '/register',
        name: 'Register',
        component: () => import('../views/auth/Register.vue')
      },
    ]
  },
  {
    path: '/states',
    name: 'States',
    component: () => import('../views/states.vue'),
  },
  {
    path: '/states/:lga',
    name: 'Lga',
    component: () => import('../views/lga.vue')
  },
  {
    path: '/search-filter',
    name: 'SearchFiler',
    component: () => import('../views/search-filter.vue')
  },
  {
    path: '/product/:id',
    name: 'ProductPage',
    component: () => import('../views/product-page.vue')
  },
  {
    path: '/seller-profile',
    name: 'Seller Profile',
    component: () => import('../views/seller-profile.vue')
  },
  {
    path: '/error-403',
    name: 'Four Zero Three',
    component: () => import('../views/error/403')
  },
  {
    path: '/order',
    name: 'Order',
    component: () => import('../views/order')
  },
  {
    path: '/sell',
    name: 'Sell',
    component: () => import('../views/sell')
  },
  {
    path: '/account',
    name: 'Account',
    component: () => import('../views/account'),
    children: [
      {
        path: '/account/invite-people',
        name: 'Invite People',
        component: () => import('../views/account/invite-people')
      },
      {
        path: '/account/statistics',
        name: 'Statistics',
        component: () => import('../views/account/statistics')
      },
      {
        path: '/account/my-adverts',
        name: 'My Adverts',
        component: () => import('../views/account/my-adverts'),
        children: [
          {
            path: '/account/my-adverts/',
            name: 'My Adverts',
            component: () => import('../views/account/my-adverts/active'),
          },
          {
            path: '/account/my-adverts/pending',
            name: 'Pending',
            component: () => import('../views/account/my-adverts/pending'),
          },
        ]
      },
      {
        path: '/account/favorite',
        name: 'Favorite',
        component: () => import('../views/favorite'),
        children: [
          {
            path: '/account/favorite/adverts',
            name: 'Adverts',
            component: () => import('../views/favorite/adverts'),
          },
          {
            path: '/account/favorite/search',
            name: 'Favorite Search',
            component: () => import('../views/favorite/favorite-search'),
          }
        ]
      },
      {
        path: '/account/notification',
        name: 'Notification',
        component: () => import('../views/notification')
      },
      {
        path: '/account/get-more-sales',
        name: 'Get More Sales',
        component: () => import('../views/get-more'),
        children: [
          {
            path: '/account/get-more-sales/property',
            name: 'Property',
            component: () => import('../views/get-more/property'),
            children: [
              {
                path: '/account/get-more-sales/property/standard',
                name: 'Property / Standard',
                component: () => import('../views/get-more/property/standard'),
              },
              {
                path: '/account/get-more-sales/property/bronze',
                name: 'Property / Bronze',
                component: () => import('../views/get-more/property/bronze'),
              }
            ]
          },
          {
            path: '/account/get-more-sales/cars',
            name: 'Cars',
            component: () => import('../views/get-more/cars'),
            children: [
              {
                path: '/account/get-more-sales/cars/standard',
                name: 'Cars / Standard',
                component: () => import('../views/get-more/car/standard'),
              },
              {
                path: '/account/get-more-sales/cars/bronze',
                name: 'Cars / Bronze',
                component: () => import('../views/get-more/car/bronze'),
              }
            ]
          },
          {
            path: '/account/get-more-sales/others',
            name: 'Cars',
            component: () => import('../views/get-more/others'),
            children: [
              {
                path: '/account/get-more-sales/cars/standard',
                name: 'Others / Standard',
                component: () => import('../views/get-more/others/standard'),
              },
              {
                path: '/account/get-more-sales/cars/bronze',
                name: 'Others / Bronze',
                component: () => import('../views/get-more/others/bronze'),
              }
            ]
          },
        ]
      },
      {
        path: '/account/feedback',
        name: 'Feedback',
        component: () => import('../views/feedback'),
        children: [
          {
            path: '/account/feedback/received',
            name: 'Feedback Received',
            component: () => import('../views/feedback/received')
          },
          {
            path: '/account/feedback/sent',
            name: 'Feedback Sent',
            component: () => import('../views/feedback/sent')
          },
        ]
      },
      {
        path: '/account/balance',
        name: 'Balance',
        component: () => import('../views/balance')
      },
      {
        path: '/account/followers',
        name: 'Follower',
        component: () => import('../views/follower'),
        children: [
          {
            path: '/account/followers/follower',
            name: 'Follower',
            component: () => import('../views/follower/follower'),
          },
          {
            path: '/account/followers/following',
            name: 'Following',
            component: () => import('../views/follower/following'),
          },
          {
            path: '/account/followers/request',
            name: 'Request',
            component: () => import('../views/follower/request'),
          },
        ]
      },
      {
        path: '/account/faq',
        name: 'FAQ',
        component: () => import('../views/faq')
      },
      {
        path: '/account/account-officer',
        name: 'Account officer',
        component: () => import('../views/account-officer')
      },
      {
        path: '/account/referral',
        name: 'Referral',
        component: () => import('../views/referral')
      },
      {
        path: '/account/report',
        name: 'Report',
        component: () => import('../views/report')
      },
      {
        path: '/account/top-ads',
        name: 'Top Ads',
        component: () => import('../views/top-ads')
      },
      {
        path: '/account/special-fb-ads',
        name: 'Special FB Ads',
        component: () => import('../views/special-fb-ads')
      },
    ]
  },
  {
    path: '/message',
    name: 'Message',
    component: () => import('../views/message')
  },
  {
    path: '/setting',
    name: 'Setting',
    component: () => import('../views/setting'),
    children: [
      {
        path: '/setting/profile',
        name: 'Profile',
        component: () => import('../views/setting/profile')
      },
      {
        path: '/setting/phone-number-settings',
        name: 'Phone Number Settings',
        component: () => import('../views/setting/phone-number-setting')
      },
      {
        path: '/setting/chat-settings',
        name: 'Chat Settings',
        component: () => import('../views/setting/chat-setting')
      },
      {
        path: '/setting/feedback-settings',
        name: 'Feedback Settings',
        component: () => import('../views/setting/feedback-settings')
      },
      {
        path: '/setting/social-settings',
        name: 'Social Settings',
        component: () => import('../views/setting/social-settings')
      },
      {
        path: '/setting/notification-settings',
        name: 'Notification Settings',
        component: () => import('../views/setting/notification-settings')
      },
      {
        path: '/setting/change-password',
        name: 'Change Password',
        component: () => import('../views/setting/change-password')
      },
      {
        path: '/setting/manage-account',
        name: 'Manage Account',
        component: () => import('../views/setting/manage-account')
      },
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
