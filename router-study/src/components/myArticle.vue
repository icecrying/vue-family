<template>
  <div>
    <my-header></my-header>
    <router-link to="/article/article1">文章一</router-link>
    <router-link :to="{name: 'article2'}">文章二</router-link>
    <router-view></router-view>
    <p>编程式导航</p>
    <a href="" @click="push">返回首页</a>
    <a href="" @click="replace">返回首页</a>
    <div @click="say1">this.$router</div>
    <div @click="say2">this.$route</div>
  </div>
</template>

<script>
import myHeader from '@/components/myHeader'
export default {
  name: 'myArticle',
  data () {
    return {

    }
  },
  components: {
    myHeader
  },
  methods: {
    say1 () {
      console.log(this.$router)
    },
    say2 () {
      console.log(this.$route)
    },
    push () {
      this.router.push('/')
    },
    replace () {
      this.router.replace('/')
    }
  }
}
</script>

<style scoped>

</style>
