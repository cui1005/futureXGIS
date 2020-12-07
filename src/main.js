import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 按需引入的ant-design-vue组件
// import 'ant-design-vue/dist/antd.css'
import '@/plugins/ant-design'
// 引入mapbox样式
import 'mapbox-gl/dist/mapbox-gl.css'
// 引入cesium样式
import 'cesium/Build/Cesium/Widgets/widgets.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
