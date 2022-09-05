import Vue from 'vue'
import App from './App.vue'

import VueComponentFactory from "@packages/index.js";
Vue.use(VueComponentFactory)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
