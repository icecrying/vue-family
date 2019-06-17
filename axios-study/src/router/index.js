import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import AxiosDemo1 from '@/components/AxiosDemo1'
import AxiosDemo2 from '@/components/AxiosDemo2'
import AxiosDemo3 from '@/components/AxiosDemo3'
import GoodsList from '@/components/GoodsList'
import Goods from '@/components/Goods'
import GoodsCar from '@/components/GoodsCar'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'AxiosDemo1',
      component: AxiosDemo1
    },
    {
      path: '/axios2',
      name: 'AxiosDemo2',
      component: AxiosDemo2
    },
    {
      path: '/axios3',
      name: 'AxiosDemo3',
      component: AxiosDemo3
    },
    {
      path: '/goodsList',
      name: 'goodsList',
      component: GoodsList
    },
    {
      path: '/goods',
      name: 'goods',
      component: Goods
    },
    {
      path: '/goodsCar',
      name: 'goodsCar',
      component: GoodsCar
    }
  ]
})
