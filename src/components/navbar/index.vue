<!--  -->
<template>
  <div class="nav-wrap">
      <ul>
          <li><i class="icon icon-w-44 icon-help"></i></li>
          <li><i class="icon icon-w-44 icon-search"></i></li>
          <li>
              <a href="javascript: void(0);" class="select-car-btn">选择车辆</a>
          </li>
          <li><i class="icon icon-w-44 icon-position"></i></li>
          <li><i class="icon icon-w-44 icon-user" @click="toUser"></i></li>
      </ul>
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
  methods: {
    toUser() {
      this.$router.push('/user')
    }
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
//@import url(); `引入公共css类`
.nav-wrap {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 86px;
    z-index: 10;
    text-align: center;
    li {
        display: inline-block;
    }
    .icon {
        cursor: pointer;
        margin: 0 17px;
        vertical-align: middle;
        border-radius: 100px;
        background-color: $color-main;
    }
}
</style>
