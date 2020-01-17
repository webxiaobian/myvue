import Vue from 'vue'
import Cookies from 'js-cookie'
import App from './App.vue'
import router from '@/router'
import store from '@/store'
import Element from 'element-ui'
import { Button } from 'ant-design-vue'
import 'element-ui/lib/theme-chalk/index.css'
import './registerServiceWorker'
import '@/permission'
Vue.use(Element, {
  size: Cookies.get('size') || 'medium' // set element-ui default size
})
Vue.use(Button)
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
