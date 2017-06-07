import Vue from 'vue'
import App from './App'
import router from './router'

import net from './net' //网络请求相关

import iView from 'iview'
import '@/style/main.less'
import '@/style/my-theme/index.less'

Vue.use(iView)

Vue.config.productionTip = false

new Vue({
  	el: '#app',
  	router,
  	render: h => h(App)
})
