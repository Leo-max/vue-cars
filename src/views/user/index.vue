<!--  -->
<template>
  <div class="user-container">
    <div class="user-wrap">
      <img src="../../assets/image/face.jpg" alt="">
      <div class="mate">
        <h4 class="name">409019683@qq.com</h4>
        <span class="">
          文明驾驶分
          <strong>0</strong>
        </span>
      </div>
    </div>
    <ul class="group-links">
      <router-link to="aa" tag="a" class="arrow">
        <i class="icon icon-name"></i>
        我的账户
      </router-link>
      <router-link to="aa" tag="a" class="arrow">
        <i class="icon icon-list"></i>
        租车订单
      </router-link>
      <router-link to="aa" tag="a" class="arrow">
        <i class="icon icon-admin-user"></i>
        实名认证
      </router-link>
      <router-link to="/safe/index" tag="a" class="arrow">
        <i class="icon icon-success"></i>
        安全设置
      </router-link>
      <router-link to="aa" tag="a" class="arrow">
        <i class="icon icon-help-center"></i>
        帮助中心
      </router-link>
    </ul>
    <button class="logout">登出</button>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  //import引入的组件需要注入到对象中才能使用
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
//@import url(); 引入公共css类
@import './index.scss';
</style>
