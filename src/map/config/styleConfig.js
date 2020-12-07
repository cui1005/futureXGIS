import sources from './sources'
import layers from './layers'
let styleConfig = {}
styleConfig = {
  //设置版本号，一定要设置
  version: 8,
  name: 'china',
  // sprite: 'mapbox://sprites/mapbox/dark-v10',
  sprite: 'http://dwgis.dworld.net.cn/mapboxgl/styles/v1/mapbox/tqgl/sprite',
  // glyphs: 'mapbox://fonts/mapbox/{fontstack}/{range}.pbf',
  glyphs:
    'http://dwgis.dworld.net.cn/mapboxgl/fonts/v1/mapbox/{fontstack}/{range}.pbf',
  //添加来源
  sources: sources,
  //设置加载并显示来源的图层信息
  layers: layers,
  id: 'cj7pjk1qrc3k92so5dn7vp6yc',
  draft: false,
  created: '1970-01-01T00:00:00.000Z',
  modified: '2017-09-18T02:36:38.832Z',
  owner: 'thinker',
  visibility: 'private'
}

export default styleConfig
