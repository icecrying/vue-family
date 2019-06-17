// vuex状态管理 ：
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
// 子模块有自己的state、mutations、actions等
const moduleA = {
  state: {
    number1: 123
  }
}
const moduleB = {
  state: {
    number1: 456
  }
}
let store = new Vuex.Store({
  // vuex 的状态
  state: {
    goods_num: 0,
    number1: 10,
    number2: 20,
    number3: 30
  },
  // vuex 中唯一改变状态的方法 注意：不能提交异步代码
  mutations: {
    changeCar (state, num) {
      console.log(state)
      console.log(num)
      state.goods_num += num
    }
  },
  // 异步代码在actions中提交
  actions: {
    changeCarActions (context, num) {
      console.log(context)
      // 在actions里面可以提交同步代码
      setTimeout(() => {
        context.commit('changeCar', num)
      }, 1000)
      // 也可以提交异步代码
      context.dispatch('actions2')
    },
    actions2 () {
      console.log('第二个异步代码执行了')
    }
  },
  // getters 可以认为是store的计算属性
  getters: {
    maxNum (state) {
      console.log(state)
      return state.goods_num > 50 ? 50 : state.goods_num
    }
  },
  modules: {
    a: moduleA,
    b: moduleB
  }
})
export default store
