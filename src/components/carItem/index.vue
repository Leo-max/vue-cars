<!-- swiper-item -->
<template>
  <div class="cars-swiper-item">
    <section class="cars-item">
      <header>
        <h4 class="cars-logo">
          <img
            src="../../assets/image/icon/cars-logo.png"
            alt="Mustang 2019款"
          />
          <span class="logo-name">Mustang 2019款</span>
        </h4>
        <p class="cars-attr">新能源汽车 5座</p>
      </header>
      <div class="cars-content">
        <div class="carsInfo">
          <div>
            <h4 class="cars-number">粤 B745N8</h4>
            <div>
              <ul class="cars-electric active-li-2">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
              <p class="distance">
                <sub>约</sub>
                <strong>600</strong>
                <sub>KM</sub>
              </p>
            </div>
          </div>
        </div>
        <img src="../../assets/image/icon/car.png" alt="" />
      </div>
      <footer>
        <a href="javascript: void(0);" class="parking-link">某某停车场</a>
      </footer>
    </section>
    <section class="cars-item cars-detail" :style="'height:' + height">
      <div class="overFlow">
        <h4 class="column">
          某某停车场
          <i class="close"></i>
        </h4>
        <header>
          <h4 class="cars-logo">
            <img
              src="../../assets/image/icon/cars-logo.png"
              alt="Mustang 2019款"
            />
            <span class="logo-name">Mustang 2019款</span>
          </h4>
          <p class="cars-attr">新能源汽车 5座</p>
        </header>
        <img src="../../assets/image/icon/car.png" width="100%" alt="" />
        <div class="clearfix">
          <div class="pull-left fs-17">粤B745NM</div>
          <p class="distance pull-right">
            <sub>约</sub>
            <strong>600</strong>
            <sub>KM</sub>
          </p>
        </div>
        <div class="cars-electric-box">
          <div class="p-r">
            <span class="e-high" style="width: 80%"></span>
            <span class="e-bg"></span>
          </div>
        </div>
        <p class="color-main text-align fs-12 pd-12">
          取车约支付12.0元停车费，实际补贴12.0元
        </p>
        <ul class="cars-type-list">
          <li class="current">
            <h4 class="name">日租车</h4>
            <span class="price">￥300/1天</span>
          </li>
          <li>
            <h4 class="name">日租车</h4>
            <span class="price">￥300/1天</span>
          </li>
          <li>
            <h4 class="name">日租车</h4>
            <span class="price">￥300/1天</span>
          </li>
          <li>
            <h4 class="name">日租车</h4>
            <span class="price">￥300/1天</span>
          </li>
        </ul>
        <div class="clause-dec">
          <span class="pull-left">参保《全面保障服务》用车更放心</span>
          <i class="current"></i>
        </div>
      </div>
      <a href="javascript: void(0);" class="select-car-btn">预约车辆</a>
    </section>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  //import引入的组件需要注入到对象中才能使用
  name: "CarItem",
  props: {
    height: {
      type: String,
      default: "196px",
    },
  },
  components: {},
  data() {
    //这里存放数据
    return {};
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {},
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  beforeCreate() {}, //生命周期 - 创建之前
  beforeMount() {}, //生命周期 - 挂载之前
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang="scss" scoped>
@import "./index.scss";
</style>
