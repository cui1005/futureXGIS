let sources = {}
sources.xzImg = {
  //来源类型为栅格瓦片
  type: 'raster',
  tiles: [
    //来源请求地址
    'http://localhost:9000/test/vector/vec_w/{z}/{x}/{y}.png'
  ],
  //栅格瓦片的分辨率
  tileSize: 256
}
sources.tdtVec = {
  //来源类型为栅格瓦片
  type: 'raster',
  tiles: [
    //来源请求地址
    'https://t0.tianditu.gov.cn/DataServer?T=vec_w&X={x}&Y={y}&L={z}&tk=e16234263f082a16720db047d6fbfd5f',
    'https://t1.tianditu.gov.cn/DataServer?T=vec_w&X={x}&Y={y}&L={z}&tk=e16234263f082a16720db047d6fbfd5f',
    'https://t2.tianditu.gov.cn/DataServer?T=vec_w&X={x}&Y={y}&L={z}&tk=e16234263f082a16720db047d6fbfd5f',
    'https://t3.tianditu.gov.cn/DataServer?T=vec_w&X={x}&Y={y}&L={z}&tk=e16234263f082a16720db047d6fbfd5f',
    'https://t4.tianditu.gov.cn/DataServer?T=vec_w&X={x}&Y={y}&L={z}&tk=e16234263f082a16720db047d6fbfd5f',
    'https://t5.tianditu.gov.cn/DataServer?T=vec_w&X={x}&Y={y}&L={z}&tk=e16234263f082a16720db047d6fbfd5f',
    'https://t6.tianditu.gov.cn/DataServer?T=vec_w&X={x}&Y={y}&L={z}&tk=e16234263f082a16720db047d6fbfd5f',
    'https://t7.tianditu.gov.cn/DataServer?T=vec_w&X={x}&Y={y}&L={z}&tk=e16234263f082a16720db047d6fbfd5f'
  ],
  //栅格瓦片的分辨率
  tileSize: 256
}
sources.tdtImg = {
  //来源类型为栅格瓦片
  type: 'raster',
  tiles: [
    //来源请求地址
    'https://t0.tianditu.gov.cn/DataServer?T=img_w&X={x}&Y={y}&L={z}&tk=e16234263f082a16720db047d6fbfd5f',
    'https://t1.tianditu.gov.cn/DataServer?T=img_w&X={x}&Y={y}&L={z}&tk=e16234263f082a16720db047d6fbfd5f',
    'https://t2.tianditu.gov.cn/DataServer?T=img_w&X={x}&Y={y}&L={z}&tk=e16234263f082a16720db047d6fbfd5f',
    'https://t3.tianditu.gov.cn/DataServer?T=img_w&X={x}&Y={y}&L={z}&tk=e16234263f082a16720db047d6fbfd5f',
    'https://t4.tianditu.gov.cn/DataServer?T=img_w&X={x}&Y={y}&L={z}&tk=e16234263f082a16720db047d6fbfd5f',
    'https://t5.tianditu.gov.cn/DataServer?T=img_w&X={x}&Y={y}&L={z}&tk=e16234263f082a16720db047d6fbfd5f',
    'https://t6.tianditu.gov.cn/DataServer?T=img_w&X={x}&Y={y}&L={z}&tk=e16234263f082a16720db047d6fbfd5f',
    'https://t7.tianditu.gov.cn/DataServer?T=img_w&X={x}&Y={y}&L={z}&tk=e16234263f082a16720db047d6fbfd5f'
  ],
  //栅格瓦片的分辨率
  tileSize: 256
}
sources.tdtTer = {
  //来源类型为栅格瓦片
  type: 'raster',
  tiles: [
    //来源请求地址
    'https://t0.tianditu.gov.cn/DataServer?T=ter_w&X={x}&Y={y}&L={z}&tk=e16234263f082a16720db047d6fbfd5f',
    'https://t1.tianditu.gov.cn/DataServer?T=ter_w&X={x}&Y={y}&L={z}&tk=e16234263f082a16720db047d6fbfd5f',
    'https://t2.tianditu.gov.cn/DataServer?T=ter_w&X={x}&Y={y}&L={z}&tk=e16234263f082a16720db047d6fbfd5f',
    'https://t3.tianditu.gov.cn/DataServer?T=ter_w&X={x}&Y={y}&L={z}&tk=e16234263f082a16720db047d6fbfd5f',
    'https://t4.tianditu.gov.cn/DataServer?T=ter_w&X={x}&Y={y}&L={z}&tk=e16234263f082a16720db047d6fbfd5f',
    'https://t5.tianditu.gov.cn/DataServer?T=ter_w&X={x}&Y={y}&L={z}&tk=e16234263f082a16720db047d6fbfd5f',
    'https://t6.tianditu.gov.cn/DataServer?T=ter_w&X={x}&Y={y}&L={z}&tk=e16234263f082a16720db047d6fbfd5f',
    'https://t7.tianditu.gov.cn/DataServer?T=ter_w&X={x}&Y={y}&L={z}&tk=e16234263f082a16720db047d6fbfd5f'
  ],
  //栅格瓦片的分辨率
  tileSize: 256
}
sources.tdtCva = {
  //来源类型为栅格瓦片
  type: 'raster',
  tiles: [
    //来源请求地址
    'https://t0.tianditu.gov.cn/DataServer?T=cva_w&X={x}&Y={y}&L={z}&tk=e16234263f082a16720db047d6fbfd5f',
    'https://t1.tianditu.gov.cn/DataServer?T=cva_w&X={x}&Y={y}&L={z}&tk=e16234263f082a16720db047d6fbfd5f',
    'https://t2.tianditu.gov.cn/DataServer?T=cva_w&X={x}&Y={y}&L={z}&tk=e16234263f082a16720db047d6fbfd5f',
    'https://t3.tianditu.gov.cn/DataServer?T=cva_w&X={x}&Y={y}&L={z}&tk=e16234263f082a16720db047d6fbfd5f',
    'https://t4.tianditu.gov.cn/DataServer?T=cva_w&X={x}&Y={y}&L={z}&tk=e16234263f082a16720db047d6fbfd5f',
    'https://t5.tianditu.gov.cn/DataServer?T=cva_w&X={x}&Y={y}&L={z}&tk=e16234263f082a16720db047d6fbfd5f',
    'https://t6.tianditu.gov.cn/DataServer?T=cva_w&X={x}&Y={y}&L={z}&tk=e16234263f082a16720db047d6fbfd5f',
    'https://t7.tianditu.gov.cn/DataServer?T=cva_w&X={x}&Y={y}&L={z}&tk=e16234263f082a16720db047d6fbfd5f'
  ],
  //栅格瓦片的分辨率
  tileSize: 256
}
// 西藏自治区省级行政区
sources['xj-province'] = {
  type: 'geojson',
  data: 'http://dwgis.dworld.net.cn/mapboxgl/assets/320500.json',
  generateId: true
}
// 西藏自治区市级行政区
sources['xj-city'] = {
  type: 'geojson',
  data: 'http://dwgis.dworld.net.cn/mapboxgl/assets/540000_full.json',
  generateId: true
}
// 西藏自治区市级行政区
sources['xj-city-01'] = {
  type: 'geojson',
  data: 'http://dwgis.dworld.net.cn/mapboxgl/assets/540100_full.json',
  generateId: true
}
// 西藏自治区市级行政区
sources['xj-city-02'] = {
  type: 'geojson',
  data: 'http://dwgis.dworld.net.cn/mapboxgl/assets/540200_full.json',
  generateId: true
}
// 西藏自治区市级行政区
sources['xj-city-03'] = {
  type: 'geojson',
  data: 'http://dwgis.dworld.net.cn/mapboxgl/assets/540300_full.json',
  generateId: true
}
// 西藏自治区市级行政区
sources['xj-city-04'] = {
  type: 'geojson',
  data: 'http://dwgis.dworld.net.cn/mapboxgl/assets/540400_full.json',
  generateId: true
}
// 西藏自治区市级行政区
sources['xj-city-05'] = {
  type: 'geojson',
  data: 'http://dwgis.dworld.net.cn/mapboxgl/assets/540500_full.json',
  generateId: true
}
// 西藏自治区市级行政区
sources['xj-city-06'] = {
  type: 'geojson',
  data: 'http://dwgis.dworld.net.cn/mapboxgl/assets/540600_full.json',
  generateId: true
}
// 西藏自治区市级行政区
sources['xj-city-07'] = {
  type: 'geojson',
  data: 'http://dwgis.dworld.net.cn/mapboxgl/assets/542500_full.json',
  generateId: true
}
// 详查点位
sources['xcdw'] = {
  type: 'geojson',
  data: {
    type: 'FeatureCollection',
    features: []
  },
  generateId: true
}
// 调查点位
sources['dcdw'] = {
  type: 'geojson',
  data: {
    type: 'FeatureCollection',
    features: []
  },
  generateId: true
}
// 农产品产地
sources['ncpcd'] = {
  type: 'geojson',
  data: {
    type: 'FeatureCollection',
    features: []
  },
  generateId: true
}
// 土壤评价单元
sources['trpjdy'] = {
  type: 'geojson',
  data: {
    type: 'FeatureCollection',
    features: []
  },
  generateId: true
}
// 土壤评价单元
sources['nydtrpjdy'] = {
  type: 'geojson',
  data: {
    type: 'FeatureCollection',
    features: []
  },
  generateId: true
}
// 行政区划统计信息
sources['xzqh'] = {
  type: 'geojson',
  data: {
    type: 'FeatureCollection',
    features: []
  },
  generateId: true
}
export default sources
