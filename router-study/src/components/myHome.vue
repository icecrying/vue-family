<template>
  <div>
    <my-header></my-header>
    <router-link to="/cont1">首页模块一</router-link>
    <router-link to="/cont2">首页模块二</router-link>
    <router-link to="/cont3">首页模块三</router-link>
    <!--router-link ：
       1.默认渲染成<a>链接，通过tag="div"可修改
       2.可使用:to="" 动态绑定跳转地址
       3.默认支持点击事件 可通过event="mousemove"更改切换事件
       4.可使用active-class="style"设置动态样式  也可在路由配置里配置全局样式linkActiveClass：“style”
       5.默认模糊匹配，可加入exact精准匹配-->
    <router-view></router-view>
    <div id="main">
      <body-left></body-left>
      <body-right></body-right>
      <router-view name="left"></router-view>
      <router-view name="right"></router-view>
    </div>
    <router-link to="/cont4">首页模块四</router-link>
    <router-link to="/cont5">首页模块五</router-link>
    <router-view name="four"></router-view>
  </div>
</template>

<script>
import myHeader from '@/components/myHeader'
import bodyLeft from '@/components/bodyLeft'
import bodyRight from '@/components/bodyRight'
export default {
  name: 'myheader',
  data () {
    return {
      message: '首页'
    }
  },
  components: {
    myHeader,
    bodyLeft,
    bodyRight
  }
}
</script>

<style scoped>

</style>
