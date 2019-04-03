import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import style from './assets/style.css'
Vue.config.productionTip = false

Vue.use(Element, { locale: 'en' })

new Vue({
  router,
  store,
  style,
  render: h => h(App)
}).$mount('#app')
