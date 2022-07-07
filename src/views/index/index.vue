<template>
  <div class="amap-wrap">
    <!-- cars-data渲染 -->
    <!-- <VipIndex /> -->
    <!-- 选择车辆 -->
    <Navbar />
    <!-- 地图 -->
    <Map />
    <!-- 会员 -->
    <!-- <div id="children-view" :class="show ? 'open' : ''">
   		<router-view />
		</div> -->
    <div id="children-view" :class="{ open: show }">
      <router-view />
    </div>
  </div>
</template>

<script>
import Map from "../amap";
import VipIndex from "../cars";
import Navbar from "@c/navbar";
export default {
  name: "Index",
  //import引入的组件需要注入到对象中才能使用
  components: {
    Map,
    VipIndex,
    Navbar,
  },
  data() {
    //这里存放数据
    return {
      // show: false,
    };
  },
  //监听属性 类似于data概念
  computed: {
    show() {
      const router = this.$route;
      return router.name === "Index" ? false : true;
    },
  },
  //监控data中的数据变化
  watch: {
    // "$route" :{
    // 	handler(newValue) {
    // 		console.log('new', newValue)
    // 		const routeName = newValue.name
    // 		this.show = routeName === 'Index' ? 'false' : 'true'
    // 	}
    // }
  },
  //方法集合
  methods: {},
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    document.addEventListener('mouseup', (e) => {
      const userCon = document.getElementById('children-view')
      if (userCon && !userCon.contains(e.target)) {
        this.$router.push({
          name: 'Index'
        })
      }
    })
  },
  beforeCreate() {}, //生命周期 - 创建之前
  beforeMount() {}, //生命周期 - 挂载之前
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang="scss">
#children-view {
  position: fixed;
  right: -600px;
  top: 0;
  bottom: 0;
  z-index: 101;
  width: 358px;
  height: 100vh;
  background-color: #34393f;
  @include webkit(transition, all 0.3s ease 0s);
  @include webkit(box-shadow, -5px 0 38px 0 rgba(0, 0, 0, .4));
  &.open {
    right: 0;
  }
}
</style>
