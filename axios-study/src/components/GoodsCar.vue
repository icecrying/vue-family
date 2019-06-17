<template>
  <div>
这是购物车{{num}}
    <br>
这是getters中的最大数量{{this.$store.getters.maxNum}}
    <br>
    {{number1}} || {{number2}} || {{number3}}
    <br>
    mapGetters:{{maxNum}}
  </div>
</template>

<script>
// 辅助函数
// import {mapState, mapMutations, mapActions, mapGetters} from 'vuex'
import {mapState, mapGetters} from 'vuex'
export default {
  name: 'GoodsCar',
  data () {
    return {

    }
  },
  components: {

  },
  computed: {
    // 提取vuex状态仓库中的state状态值
    num () {
      return this.$store.state.goods_num
    },
    // state辅助函数取值
    ...mapState({
      // number1保持不变
      number1: 'number1',
      // number2 进行处理
      number2: state => { return state.number2 < 50 ? 50 : state.number2 + 50 },
      number3 (state) {
        return this.number1 + state.number3
      }
    }),
    // getters辅助函数,用法与mapState类似
    ...mapGetters(['maxNum'])
  }
}
</script>

<style scoped>

</style>
