<template>
  <div id="scene"></div>
</template>

<script>
import Vue from 'vue'
import flightData from '@/map/data/flightData'
import {
  Ion,
  Viewer,
  WebMercatorProjection,
  Color,
  // createWorldTerrain,
  // ArcGisMapServerImageryProvider,
  UrlTemplateImageryProvider,
  CesiumTerrainProvider,
  JulianDate,
  SampledPositionProperty,
  Cartesian3,
  IonResource,
  TimeIntervalCollection,
  TimeInterval,
  VelocityOrientationProperty,
  PathGraphics
  // Transforms,
  // Cartesian3,
  // Model,
  // when,
  // Math,
  // ModelAnimationLoop,
  // Cartographic,
  // sampleTerrain
  // CzmlDataSource
} from 'Cesium'

export default {
  name: 'ViewerContent',
  mounted() {
    // Get your token from https://cesium.com/ion/tokens
    Ion.defaultAccessToken =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJlZjlmMTk4MC1iNzUyLTQ5MzUtOTViNC03N2ExMTY2ZGRiNzMiLCJpZCI6Mzg2MTIsImlhdCI6MTYwNjU1NzIwNX0.WVSK2TdR0-REXwNmhPpJM-0USnRSAWndIWvykuoFdAI'
    const viewer = new Viewer('scene', {
      geocoder: true, // 是否显示地名查找控件
      sceneModePicker: true, // 是否显示投影方式控件
      navigationHelpButton: false, // 是否显示帮助信息控件
      baseLayerPicker: false, // 是否显示图层选择控件
      homeButton: true, // 是否显示Home按钮
      fullscreenButton: true, // 是否显示全屏按钮
      timeline: true, // 时间轴控件
      animation: true, // 动画控件
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

    /* Initialize the viewer clock:
      Assume the radar samples are 30 seconds apart, and calculate the entire flight duration based on that assumption.
      Get the start and stop date times of the flight, where the start is the known flight departure time (converted from PST 
        to UTC) and the stop is the start plus the calculated duration. (Note that Cesium uses Julian dates. See 
        https://simple.wikipedia.org/wiki/Julian_day.)
      Initialize the viewer's clock by setting its start and stop to the flight start and stop times we just calculated. 
      Also, set the viewer's current time to the start time and take the user to that time. 
    */
    const timeStepInSeconds = 30
    const totalSeconds = timeStepInSeconds * (flightData.length - 1)
    const start = JulianDate.fromIso8601('2020-03-09T23:10:00Z')
    const stop = JulianDate.addSeconds(start, totalSeconds, new JulianDate())
    viewer.clock.startTime = start.clone()
    viewer.clock.stopTime = stop.clone()
    viewer.clock.currentTime = start.clone()
    viewer.timeline.zoomTo(start, stop)
    // Speed up the playback speed 50x.
    viewer.clock.multiplier = 50
    // Start playing the scene.
    viewer.clock.shouldAnimate = true

    // The SampledPositionedProperty stores the position and timestamp for each sample along the radar sample series.
    const positionProperty = new SampledPositionProperty()

    for (let i = 0; i < flightData.length; i++) {
      const dataPoint = flightData[i]

      // Declare the time for this individual sample and store it in a new JulianDate instance.
      const time = JulianDate.addSeconds(
        start,
        i * timeStepInSeconds,
        new JulianDate()
      )
      const position = Cartesian3.fromDegrees(
        dataPoint.longitude,
        dataPoint.latitude,
        dataPoint.height
      )
      // Store the position along with its timestamp.
      // Here we add the positions all upfront, but these can be added at run-time as samples are received from a server.
      positionProperty.addSample(time, position)

      viewer.entities.add({
        description: `Location: (${dataPoint.longitude}, ${dataPoint.latitude}, ${dataPoint.height})`,
        position: position,
        point: { pixelSize: 10, color: Color.RED }
      })
    }

    // STEP 6 CODE (airplane entity)
    async function loadModel() {
      // Load the glTF model from Cesium ion.
      const airplaneUri = await IonResource.fromAssetId(199645)
      const airplaneEntity = viewer.entities.add({
        availability: new TimeIntervalCollection([
          new TimeInterval({ start: start, stop: stop })
        ]),
        position: positionProperty,
        // Attach the 3D model instead of the green point.
        model: { uri: airplaneUri },
        // Automatically compute the orientation from the position.
        orientation: new VelocityOrientationProperty(positionProperty),
        path: new PathGraphics({ width: 3 })
      })

      viewer.trackedEntity = airplaneEntity
    }

    loadModel()
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
