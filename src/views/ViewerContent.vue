<template>
  <div id="scene"></div>
</template>

<script>
import Vue from 'vue'
import {
  Viewer,
  WebMercatorProjection,
  Color,
  // createWorldTerrain,
  // ArcGisMapServerImageryProvider,
  UrlTemplateImageryProvider,
  CesiumTerrainProvider,
  Transforms,
  Cartesian3,
  Model,
  when,
  // Math,
  ModelAnimationLoop,
  Cartographic,
  sampleTerrain
  // CzmlDataSource
} from 'Cesium'

export default {
  name: 'ViewerContent',
  mounted() {
    const viewer = new Viewer('scene', {
      geocoder: true, // 是否显示地名查找控件
      sceneModePicker: true, // 是否显示投影方式控件
      navigationHelpButton: false, // 是否显示帮助信息控件
      baseLayerPicker: false, // 是否显示图层选择控件
      homeButton: true, // 是否显示Home按钮
      fullscreenButton: true, // 是否显示全屏按钮
      timeline: false, // 时间轴控件
      animation: false, // 动画控件
      shouldAnimate: true,
      // Show Columbus View map with Web Mercator projection
      mapProjection: new WebMercatorProjection(),
      // terrainProvider: createWorldTerrain(),
      terrainProvider: new CesiumTerrainProvider({
        url: 'http://data.marsgis.cn/terrain'
      }),
      imageryProvider: new UrlTemplateImageryProvider({
        url: 'http://mt{s}.google.cn/maps/vt?lyrs=s@189&x={x}&y={y}&z={z}',
        subdomains: ['0', '1', '2', '3'],
        layer: 'tdtAnnoLayer',
        style: 'default',
        format: 'image/jpeg',
        tileMatrixSetID: 'GoogleMapsCompatible'
      })
      // imageryProvider: new ArcGisMapServerImageryProvider({
      //   url:
      //     'http://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer'
      // })
    })
    Vue.prototype.$scene = viewer
    viewer.imageryLayers.addImageryProvider(
      new UrlTemplateImageryProvider({
        url:
          'https://t{s}.tianditu.gov.cn/DataServer?T=cia_w&x={x}&y={y}&l={z}&tk=0ecb0b40b30f30fba48a13064f485e19',
        subdomains: ['0', '1', '2', '3', '4', '5', '6', '7'],
        layer: 'tdtAnnoLayer',
        style: 'default',
        format: 'image/jpeg',
        tileMatrixSetID: 'GoogleMapsCompatible'
      })
    )
    // 去cesium logo水印 或 css
    viewer.cesiumWidget.creditContainer.style.display = 'none'
    viewer.scene.globe.baseColor = Color.fromCssColorString('#546a53')
    viewer.scene.debugShowFramesPerSecond = true

    // debugger
    // //加载gltf格式数据到cesium
    var scene = viewer.scene
    var positions = [
      Cartographic.fromDegrees(110.62898254394531, 40.02804946899414) //输入经纬度
    ]
    var promise = sampleTerrain(viewer.terrainProvider, 14, positions) //获取14级地形高程
    when(promise, updatedPositions => {
      var terrainHeight = updatedPositions[0].height
      var modelMatrix = Transforms.eastNorthUpToFixedFrame(
        Cartesian3.fromDegrees(
          110.62898254394531,
          40.02804946899414,
          terrainHeight
        )
      ) //gltf数据加载位置

      var model = scene.primitives.add(
        Model.fromGltf({
          // url: 'http://data.marsgis.cn/gltf/mars/qiche.gltf', //如果为bgltf则为.bgltf
          url:
            'http://192.168.43.217:8080/Apps/SampleData/models/CesiumMan/Cesium_Man.glb', //如果为bgltf则为.bgltf
          modelMatrix: modelMatrix,
          scale: 10.0 //放大倍数
        })
      )
      // （非常重要) 加载模型动画，model为模型变量，
      // 有两处model.readyPromise和model.activeAnimations……读者可自行替换
      when(model.readyPromise).then(() => {
        model.activeAnimations.addAll({
          loop: ModelAnimationLoop.REPEAT
        })
        viewer.camera.flyTo({
          //相机飞入点
          destination: Cartesian3.fromDegrees(
            110.62898254394531,
            40.02804946899414,
            terrainHeight + 10
          )
        })
      })
    })

    // var dataSourcePromise = CzmlDataSource.load(
    //   // 'http://data.marsgis.cn/file/czml/car.czml',
    //   'http://192.168.43.217:8080/Apps/SampleData/Vehicle.czml'
    // )
    // viewer.dataSources.add(dataSourcePromise)
    // viewer.zoomTo(dataSourcePromise)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#scene {
  width: 100%;
  height: 100%;
}
</style>
