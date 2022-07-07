<!--  -->
<template>
	<div class='nav-box'>
			 <div class="header">
            <div class="box">
                <h1>
                    <img src="../../assets/logo.png">
                    <span>Aubuary</span>
                </h1>
                <nav>
                    <router-link active-class="active" to="/home">首页</router-link>
                    <router-link active-class="active" to="/ask">问答</router-link>
                    <router-link active-class="active" to="/community">社区</router-link>
										<router-link active-class="active" to="/ask">问答</router-link>
                    <router-link active-class="active" to="/community">社区</router-link>
										<router-link active-class="active" to="/ask">问答</router-link>
                    <router-link active-class="active" to="/community">社区</router-link>
                </nav>
            </div>
            <div class="box">
                <input class="text" type="text" placeholder="请输入关键词~~~" name="search">
                <input class="button" type="button" value="搜索">
                <img src="../../assets/image/icon/car.png">
                <nav>
                    <a >消息</a>
                    <a>发布</a>
                </nav>
            </div>
        </div>
	</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
	   name: "BBSHeader",
//import引入的组件需要注入到对象中才能使用
components: {},
data() {
//这里存放数据
return {

};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
    getIp() {
        let _script = document.createElement('script');
        _script.setAttribute('charset', 'utf-8');
        _script.setAttribute('type', 'text/javascript');
        _script.setAttribute('src', 'https://pv.sohu.com/cityjson?ie=utf-8');
        document.getElementsByTagName('head')[0].appendChild(_script);
        _script.onload = function () {
            alert(returnCitySN['cip']);
        };
    }
},
//生命周期 - 创建完成（可以访问当前this实例）
created() {
    this.getIp()
},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {

},
beforeCreate() {}, //生命周期 - 创建之前
beforeMount() {}, //生命周期 - 挂载之前
beforeUpdate() {}, //生命周期 - 更新之前
updated() {}, //生命周期 - 更新之后
beforeDestroy() {}, //生命周期 - 销毁之前
destroyed() {}, //生命周期 - 销毁完成
activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style lang='scss' scoped>
@import "./index.scss";
</style>