let layers = []
layers = [
  {
    //图层id，要保证唯一性
    id: 'xzImg',
    //图层类型
    type: 'raster',
    //连接图层来源
    source: 'xzImg',
    //图层最小缩放级数
    minZoom: 0,
    //图层最大缩放级数
    maxZoom: 17,
    layout: { visibility: 'none' }
  },
  {
    //图层id，要保证唯一性
    id: 'tdtVec',
    //图层类型
    type: 'raster',
    //连接图层来源
    source: 'tdtVec',
    //图层最小缩放级数
    minZoom: 0,
    //图层最大缩放级数
    maxZoom: 17,
    layout: { visibility: 'visible' }
  },
  {
    //图层id，要保证唯一性
    id: 'tdtImg',
    //图层类型
    type: 'raster',
    //连接图层来源
    source: 'tdtImg',
    //图层最小缩放级数
    minZoom: 0,
    //图层最大缩放级数
    maxZoom: 17,
    layout: { visibility: 'none' }
  },
  {
    //图层id，要保证唯一性
    id: 'tdtTer',
    //图层类型
    type: 'raster',
    //连接图层来源
    source: 'tdtTer',
    //图层最小缩放级数
    minZoom: 0,
    //图层最大缩放级数
    maxZoom: 17,
    layout: { visibility: 'none' }
  },
  {
    //图层id，要保证唯一性
    id: 'tdtCva',
    //图层类型
    type: 'raster',
    //连接图层来源
    source: 'tdtCva',
    //图层最小缩放级数
    minZoom: 0,
    //图层最大缩放级数
    maxZoom: 17,
    layout: { visibility: 'visible' }
  },
  {
    type: 'line',
    source: 'xj-province',
    id: 'xj-province-line',
    minzoom: 3,
    maxzoom: 14,
    paint: {
      'line-color': 'rgba(0,0,0,.65)',
      'line-width': 2,
      'line-dasharray': [1, 1]
    }
  },
  {
    type: 'line',
    source: 'xj-city',
    id: 'xj-city-line',
    minzoom: 6,
    maxzoom: 8,
    paint: {
      'line-color': 'rgba(0,0,0,.65)',
      'line-width': 2,
      'line-dasharray': [1, 1]
    }
  },
  {
    type: 'line',
    source: 'xj-city-01',
    id: 'xj-city-line-01',
    minzoom: 8,
    maxzoom: 17,
    paint: {
      'line-color': 'rgba(0,0,0,.65)',
      'line-width': 2,
      'line-dasharray': [1, 1]
    }
  },
  {
    type: 'line',
    source: 'xj-city-02',
    id: 'xj-city-line-02',
    minzoom: 8,
    maxzoom: 17,
    paint: {
      'line-color': 'rgba(0,0,0,.65)',
      'line-width': 2,
      'line-dasharray': [1, 1]
    }
  },
  {
    type: 'line',
    source: 'xj-city-03',
    id: 'xj-city-line-03',
    minzoom: 8,
    maxzoom: 17,
    paint: {
      'line-color': 'rgba(0,0,0,.65)',
      'line-width': 2,
      'line-dasharray': [1, 1]
    }
  },
  {
    type: 'line',
    source: 'xj-city-04',
    id: 'xj-city-line-04',
    minzoom: 8,
    maxzoom: 17,
    paint: {
      'line-color': 'rgba(0,0,0,.65)',
      'line-width': 2,
      'line-dasharray': [1, 1]
    }
  },
  {
    type: 'line',
    source: 'xj-city-05',
    id: 'xj-city-line-05',
    minzoom: 8,
    maxzoom: 17,
    paint: {
      'line-color': 'rgba(0,0,0,.65)',
      'line-width': 2,
      'line-dasharray': [1, 1]
    }
  },
  {
    type: 'line',
    source: 'xj-city-06',
    id: 'xj-city-line-06',
    minzoom: 8,
    maxzoom: 17,
    paint: {
      'line-color': 'rgba(0,0,0,.65)',
      'line-width': 2,
      'line-dasharray': [1, 1]
    }
  },
  {
    type: 'line',
    source: 'xj-city-07',
    id: 'xj-city-line-07',
    minzoom: 8,
    maxzoom: 17,
    paint: {
      'line-color': 'rgba(0,0,0,.65)',
      'line-width': 2,
      'line-dasharray': [1, 1]
    }
  },
  {
    id: 'xcdw',
    type: 'circle',
    source: 'xcdw',
    paint: {
      // make circles larger as the user zooms from z12 to z22
      'circle-radius': {
        base: 1.75,
        stops: [
          [3, 3],
          [17, 20]
        ]
      },
      'circle-color': [
        'match',
        ['get', 'cdLevel'],
        1,
        'green',
        2,
        'yellow',
        3,
        'red',
        /* other */ '#ccc'
      ]
    }
  },
  {
    id: 'dcdw',
    type: 'circle',
    source: 'dcdw',
    paint: {
      // make circles larger as the user zooms from z12 to z22
      'circle-radius': {
        base: 1.75,
        stops: [
          [3, 3],
          [17, 20]
        ]
      },
      'circle-color': [
        'match',
        ['get', 'cdLevel'],
        1,
        'green',
        2,
        'yellow',
        3,
        'red',
        /* other */ '#ccc'
      ]
    }
  },
  {
    id: 'ncpcd',
    type: 'circle',
    source: 'ncpcd',
    paint: {
      // make circles larger as the user zooms from z12 to z22
      'circle-radius': {
        base: 1.75,
        stops: [
          [3, 3],
          [17, 20]
        ]
      },
      'circle-color': [
        'match',
        ['get', 'cdLevel'],
        1,
        'green',
        2,
        'yellow',
        3,
        'red',
        /* other */ '#ccc'
      ]
    }
  },
  {
    id: 'trpjdy',
    type: 'fill',
    source: 'trpjdy',
    layout: {},
    paint: {
      'fill-opacity': 0.8,
      'fill-outline-color': '#fff',
      'fill-color': [
        'match',
        ['get', 'zhClass'],
        1,
        'green',
        2,
        'yellow',
        3,
        'red',
        /* other */ '#ccc'
      ]
    }
  },
  {
    id: 'nydtrpjdy',
    type: 'fill',
    source: 'nydtrpjdy',
    layout: {},
    paint: {
      'fill-opacity': 0.8,
      'fill-outline-color': '#fff',
      'fill-color': [
        'match',
        ['get', 'cdLevel'],
        1,
        'green',
        2,
        'yellow',
        3,
        'red',
        /* other */ '#ccc'
      ]
    }
  },
  {
    id: 'xzqh',
    type: 'fill',
    source: 'xzqh',
    layout: {},
    paint: {
      'fill-opacity': 0.8,
      'fill-outline-color': 'rgba(0,0,0,0)',
      'fill-color': 'rgba(0,0,0,0)'
    }
  }
]
export default layers
