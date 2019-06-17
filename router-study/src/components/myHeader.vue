<template>
  <div>
    <router-link to="/">首页</router-link>
    <router-link to="/article">文章</router-link>
     <!--通过/center路径访问-->
    <router-link :to="{name: 'myCenter'}">个人中心</router-link>
  </div>
</template>

<script>

export default {
  name: 'myHeader',
  data () {
    return {

    }
  },
  components: {

  }
}
</script>

<style scoped>

</style>
