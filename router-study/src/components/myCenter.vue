<template>
  <div>
    <router-link :to="{name: 'myCenter', params: {id: item.id}}" v-for="(item, index) in userData" :key="index">{{item.username}}</router-link>
<!--    <router-link :to="'/center/'+item.id" v-for="(item, index) in userData" :key="index">{{item.username}}</router-link>-->
    <div v-if="userInfo">
      VIP等级：{{userInfo.level}}
    </div>
    <div @click="showName()">按钮</div>
  </div>

</template>

<script>
let userData = [
  {
    id: '1',
    username: 'nodeing1',
    level: 'vip1'
  },
  {
    id: '2',
    username: 'nodeing2',
    level: 'vip1'
  },
  {
    id: '3',
    username: 'nodeing3',
    level: 'vip2'
  },
  {
    id: '4',
    username: 'nodeing4',
    level: 'vip3'
  }]

export default {
  name: 'myCenter',
  data () {
    return {
      userData: userData,
      isLogin: true
      // userInfo: null
    }
  },
  components: {

  },
  // 接收动态参数 方式1
  // beforeRouteUpdate (to, from, next) {
  //   // console.log(to)
  //   this.userInfo = this.userData.filter((item) => to.params.id === item.id)[0]
  //   console.log(this.userInfo)
  //   next()
  // }，
  // 接收动态参数方式二
  // watch: {
  //   $route () {
  //     console.log(this.$route)
  //   }
  // }
  props: ['id'],
  computed: {
    userInfo () {
      // console.log(this.id)
      return this.userData.filter((item) => item.id === this.id)[0]
    }
  },
  methods: {
    showName () {
      // alert(11)
      console.log(this)
    }
  },
  beforeRouteEnter (to, from, next) {
    if (to.meta.requiresAuth) {
      // console.log('你进入了个人中心')
      // 做是否已经登录的判断 问题：isLogin这个参数为什么拿不到？
      // if (this.isLogin) {
      //   // 这里是已经登录了
      //   next()
      // } else {
      //   // 还没有登录 跳转到登录页面
      //   // alert('您还没有登录')
      //   next('/')
      // }
      next()
    } else {
      next()
    }
  }
}
</script>

<style scoped>

</style>
