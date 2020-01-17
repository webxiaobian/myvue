import router from '@/router'
import store from '@/store'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { getToken } from '@/utils/auth'
router.beforeEach((to, from, next) => {
  const whiteList = ['/login', '/register']
  NProgress.start()
  document.title = from.name
  const hasToken = getToken() ? null : true
  if (hasToken) {
    if (to.path === '/login') {
      next('/')
      NProgress.done()
    } else {
      if (store.getters.roles.length === 0) {
        NProgress.done()
      }
      NProgress.done()
    }
  } else {
    if (whiteList.includes(to.path)) {
      next()
    } else {
      next(`/login?redirect=${to.path}`)
      NProgress.done()
    }
  }
})
router.afterEach(() => {
  // finish progress bar
  NProgress.done()
})
router.onError((error) => {
  console.log(error)
})
