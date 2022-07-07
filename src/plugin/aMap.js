import Vue from 'vue'
import VueAMap from 'vue-amap'

Vue.use(VueAMap);

VueAMap.initAMapApiLoader({
  key: '7cdf04e9d898708ba1caf9c348265485',
  plugin: [
    // 插件
    'AMap.Autocomplete',
    'AMap.PlaceSearch',
    'AMap.Scale',
    'AMap.OverView',
    'AMap.ToolBar',
    'AMap.MapType',
    'AMap.PolyEditor',
    'AMap.CircleEditor',
    "AMap.Geolocation" //定位控件，用来获取和展示用户主机所在的经纬度位置
  ],
  // 默认高德 sdk 版本为 1.4.4
  v: '1.4.4'
});