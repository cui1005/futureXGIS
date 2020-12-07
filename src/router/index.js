import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    redirect: '/map',
    component: () => import('@/views/home/Home.vue'),
    meta: {
      title: '首页'
    },
    children: [
      {
        path: '/map',
        name: 'map',
        component: () => import('@/views/MapContent.vue'),
        meta: {
          title: '控规信息管理'
        }
      },
      {
        path: '/scene',
        name: 'scene',
        component: () => import('@/views/ViewerContent.vue'),
        meta: {
          title: '规划条件管理'
        }
      }
    ]
  },
  {
    path: '/404',
    component: () => import('@/views/exception/404')
  },
  {
    path: '*',
    redirect: '/404',
    hidden: true
  }
]

const originalPush = VueRouter.prototype.push

VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

// 开发环境使用hash模式，解决模式为histroy时，页面刷新为空白的bug
let mode = 'history'
if (process.env.NODE_ENV === 'development') {
  mode = 'hash'
}
const router = new VueRouter({
  mode: mode,
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  next()
})

router.afterEach(() => {
  window.scrollTo(0, 0)
})

export default router
