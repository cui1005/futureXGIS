<template>
  <div id="map"></div>
</template>

<script>
import Vue from 'vue'
import mapboxgl from 'mapbox-gl'
import mapConfig from '@/map/config/mapConfig'
export default {
  name: 'MapContent',
  data() {
    return {
      map: null
    }
  },
  mounted() {
    this.initMapboxgl()
    this.initMap()
    this.initMapEvent()
    setTimeout(() => {
      this.map.resize()
    }, 100)
  },
  methods: {
    initMapboxgl() {
      Vue.prototype.$mapboxgl = mapboxgl
    },
    initMap() {
      this.createMap()
      this.createControl()
    },
    initMapEvent() {
      this.map.on('load', () => {
        console.log('地图加载成功！')
      })
    },
    createMap() {
      mapboxgl.accessToken =
        'pk.eyJ1IjoibGlsZWlqb3JkYW4iLCJhIjoiY2luc2Z1a2UxMTEybnUya2pheDdwZjhxOSJ9._ENu7hjywKHQZMcj9S24vA'
      //实例化Map对象加载地图
      this.map = new mapboxgl.Map(mapConfig)
      Vue.prototype.$map = this.map
    },
    createControl() {
      //实例化导航控件
      var nav = new mapboxgl.NavigationControl({
        //是否显示指南针按钮，默认为true
        showCompass: true,
        //是否显示缩放按钮，默认为true
        showZoom: true
      })
      //添加导航控件，控件的位置包括'top-left', 'top-right','bottom-left' ,'bottom-right'四种，默认为'top-right'
      this.map.addControl(nav, 'top-left')
      //添加全屏控件，控件的位置包括'top-left', 'top-right','bottom-left','bottom-right'四种，默认为'top-right'
      // this.map.addControl(new mapboxgl.FullscreenControl(), 'top-left')
      //实例化比例尺控件
      var scale = new mapboxgl.ScaleControl({
        //比例尺控制的最大长度,默认100，以像素为单位
        maxWidth: 100,
        //单位，分为'imperial', 'metric','nautical'三种类型，默认为'metric'
        unit: 'metric'
      })
      //添加导航控件，控件的位置包括'top-left', 'top-right','bottom-left' ,'bottom-right'四种，默认为'bottom-left'
      this.map.addControl(scale, 'bottom-left')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#map {
  background: #ffffff;
  width: 100%;
  height: 100%;
}
</style>
