// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import router from './router'
import lodash from 'lodash'

// css
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/css/reset.css'
import 'vue2-animate/dist/vue2-animate.min.css'

// 全局挂载lodash
Vue.prototype.lodash = lodash
Vue.config.productionTip = false
Vue.use(ElementUI)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
