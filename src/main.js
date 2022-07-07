import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'

// 引入全局组件
import './components/back'
// 高德地图
import './plugin/aMap'
// 引入swiper
import VueAwesomeSwiper from 'vue-awesome-swiper';
import "swiper/css/swiper.css";
Vue.use(VueAwesomeSwiper)

Vue.use(Element)
Vue.prototype.$axios = axios
Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
