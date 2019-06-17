<template>
  <div>
这是AxiosDemo2
    <router-view></router-view>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'AxiosDemo2',
  data () {
    return {

    }
  },
  components: {

  },
  // 在钩子函数created中挂载axios请求 created是在实例完成后立即调用
  created () {
    // axios 传递多个参数
    function http1 () {
      return axios.get('https://easy-mock.com/mock/5c23887d3671d47be5ea8d66/axiosdemo/course/list')
    }
    function http2 () {
      return axios.post('https://easy-mock.com/mock/5c23887d3671d47be5ea8d66/axiosdemo/course/update')
    }
    axios.all([http1(), http2()]).then((res) => {
      console.log(res)
    })
  }
}
</script>

<style scoped>

</style>
