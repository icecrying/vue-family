<template>
  <div>
这是AxiosDemo3
    <router-view></router-view>
  </div>
</template>

<script>
import axios from 'axios'
// 自定义配置项
const HTTP = axios.create({
  baseURL: 'https://easy-mock.com/mock/5c23887d3671d47be5ea8d66/axiosdemo',
  timeout: 1000
})
// 创建一个拦截器，会在then或者catch之前执行
HTTP.interceptors.request.use((config) => {
  console.log('这里是加载的时候需要做的')
  return config
}, (err) => {
  return Promise.reject(err)
})
HTTP.interceptors.response.use((response) => {
  console.log('这里是响应前要做的')
  return response
}, (err) => {
  return Promise.reject(err)
})
export default {
  name: 'AxiosDemo3',
  data () {
    return {

    }
  },
  components: {

  },
  // 在钩子函数created中挂载axios请求 created是在实例完成后立即调用
  created () {
    HTTP.get('/course/list').then((res) => {
      console.log(res)
    })
  }
}
</script>

<style scoped>

</style>
