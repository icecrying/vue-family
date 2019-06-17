<template>
  <div>
这是一个商品
    <button @click="decrease()">-</button>
    <input type="text" v-model="num">
    <button @click="increase()">+</button>
    <br>
    <button @click="add(num)">添加到购物车</button>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'
export default {
  name: 'goods',
  data () {
    return {
      num: 0
    }
  },
  components: {

  },
  methods: {
    increase () {
      this.num++
    },
    decrease () {
      if (this.num > 0) {
        this.num--
      } else {
        this.num = 0
      }
    },
    // mapMutations 辅助函数传参  参数在add()中传入
    ...mapMutations({
      add: 'changeCar'
    })
    // add () {
    //   // commit 和dispatch 想后台提交数据。dispatch含异步操作，commit是同步操作
    //   // 用法：this.$store.commit('mutations的方法名’，需要传入的值） dispatch用法相同
    //   // this.$store.commit('changeCar', this.num)
    //   // this.$store.commit('changeCar', {
    //   //    m: this.num,
    //   //    n: 'hello'
    //   // })
    //   // this.$store.commit({
    //   //    type: 'changeCar',
    //   //    m: this.num,
    //   //    n: 'hello'
    //   // })
    //   this.$store.dispatch('changeCarActions', this.num)
    // }
  }
}
</script>

<style scoped>

</style>
