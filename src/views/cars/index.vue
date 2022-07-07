<!--  -->
<template>
  <div class="index-wrap">
    <div class="car-wrap-box">
      <swiper class="swiper" :options="swiperOption">
        <swiper-slide><CarItem height="615px" /></swiper-slide>
        <swiper-slide><CarItem /></swiper-slide>
        <swiper-slide><CarItem /></swiper-slide>
        <swiper-slide><CarItem /></swiper-slide>
        <swiper-slide><CarItem /></swiper-slide>
      </swiper>
      <!-- banner下方展示的下点 -->
      <!-- <div class="swiper-pagination" slot="pagination"></div> -->
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </div>
    <!-- <span @click="openSideList">汽车</span> -->
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import CarItem from "@c/carItem";
export default {
  name: "Cars",
  //import引入的组件需要注入到对象中才能使用
  components: { CarItem },
  data() {
    //这里存放数据
    return {
      swiperOption: {
        slidesPerView: 3,
        // spaceBetween: 5,
        // pagination: {
        //   el: ".swiper-pagination",
        //   type: "fraction",
        // },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    openSideList() {
      this.$router.push({
        name: "User",
      });
    },
  },
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
