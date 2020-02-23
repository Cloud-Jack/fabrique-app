import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import kernel from '~/components/kernel/index'
import vSelect from 'vue-select'

Vue.component('v-select', vSelect)
Vue.use(kernel)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
