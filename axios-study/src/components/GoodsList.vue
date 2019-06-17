<template>
  <div>
这是商品列表
    <goods></goods>
    <goods-car></goods-car>
<!--    获取vuex的状态值  -->
    商品数量：{{this.$store.state.goods_num}}
    <router-link to="/goods">点我去商品页</router-link>
    <router-link to="/goodsCar">点我去购物车</router-link>
  </div>
</template>

<script>
import Goods from '@/components/Goods'
import GoodsCar from '@/components/GoodsCar'
export default {
  name: 'GoodsList',
  data () {
    return {

    }
  },
  components: {
    Goods,
    GoodsCar
  }
}
</script>

<style scoped>

</style>
