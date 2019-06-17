<template>
  <div>
这是AxiosDemo1
    <br>
    {{num}}hello
    <router-link to="/axios2">axios2</router-link>
    <router-link to="/axios3">axios3</router-link>
    <router-link to="/goodsList">点我去商品列表</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'AxiosDemo1',
  data () {
    return {

    }
  },
  components: {

  },
  computed: {
    num () {
      // 提取vuex仓库中的状态
      console.log(this.$store.state)
      return this.$store.state.goods_num
    }
  },
  // 在钩子函数created中挂载axios请求 created是在实例完成后立即调用
  created () {
    // axios get方式发生请求
    // axios({
    //   method: 'get',
    //   url: 'https://easy-mock.com/mock/5c23887d3671d47be5ea8d66/axiosdemo/course/list',
    //   // get方式传参
    //   params: {
    //     title: 'xxx',
    //     count: 30
    //   }
    // }).then((response) => {
    //   console.log(response)
    // }).catch((err) => {
    //   console.log(err)
    // })
    // axios post方式发送请求
    // axios({
    //   method: 'post',
    //   url: 'https://easy-mock.com/mock/5c23887d3671d47be5ea8d66/axiosdemo/course/add',
    //   data: {
    //     title: 'yyy',
    //     count: 80
    //   }
    // }).then((response) => {
    //   console.log(response)
    // }).catch((err) => {
    //   console.log(err)
    // })
    // axios 发送方式别名
    axios.post('https://easy-mock.com/mock/5c23887d3671d47be5ea8d66/axiosdemo/course/add', {
      data: {
        title: 'hello'
      }
    }).then((response) => {
      // console.log(response)
    }).catch((err) => {
      console.log(err)
    })
  }
}
</script>

<style scoped>

</style>
