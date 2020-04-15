import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import router from './router'
import animated from 'animate.css'
import 'element-ui/lib/theme-chalk/index.css';
import './utils/common.less'
import utils from "./utils/utils";

Vue.config.productionTip = false
Vue.use(animated)
Vue.use(ElementUI)
Vue.prototype.$utils = utils

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
