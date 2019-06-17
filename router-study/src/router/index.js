import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import myHome from '@/components/myHome'
import cont1 from '@/components/content1'
import cont2 from '@/components/content2'
import cont3 from '@/components/content3'
import cont4 from '@/components/content4'
import cont5 from '@/components/content5'
import bodyLeft from '@/components/bodyLeft'
import bodyRight from '@/components/bodyRight'
import myArticle from '@/components/myArticle'
import article1 from '@/components/article1'
import article2 from '@/components/article2'
import myCenter from '@/components/myCenter'
Vue.use(Router)

const router = new Router({
  mode: 'history',
  // 滚动行为 切换路由时，希望滚动到哪个位置
  scrollBehavior (to, from, savePosition) {
    // to: 跳转到哪个页面
    // console.log(to)
    // from: 从哪个页面跳转的
    // console.log(from)
    // savePosition 记录保存滚动的位置信息
    if (savePosition) {
      return savePosition
    } else {
      return {x: 0, y: 0}
    }
  },
  routes: [
    {
      path: '/home',
      // redirect 重定向，redirect: '/'  访问'/home'路径时重新定位到'/'路径
      // redirect 可传入对象 redirect: {name: 'myHome'}
      // redirect 可传入方法
      redirect: (to) => {
        console.log(to)
        if (to.hash) {
          return '/'
        } else {
          return '/article'
        }
      }
    },
    {
      path: '/',
      // name: 'HelloWorld',
      // component: HelloWorld
      name: 'myHome',
      components: {
        // 默认渲染myHome组件
        default: myHome,
        // 给bodyLeft取名left 在<router-view>中加入name:"left"
        left: bodyLeft,
        right: bodyRight
      },
      children: [
        {
          path: 'cont1',
          component: cont1
        },
        {
          path: 'cont2',
          component: cont2
        },
        {
          path: 'cont3',
          component: cont3
        },
        {
          path: 'cont4',
          components: {
            four: cont4
          }
        },
        {
          path: 'cont5',
          components: {
            four: cont5
          }
        }
      ]
    },
    {
      path: '/article',
      name: 'myArticle',
      component: myArticle,
      children: [
        {
          path: 'article1',
          component: article1
        },
        {
          path: 'article2',
          name: 'article2',
          component: article2
        }
      ]
    },
    {
      path: '/center/:id?',
      name: 'myCenter',
      component: myCenter,
      // 配置路由元信息
      meta: {
        // requiresAuth 是自己起的名字，true表示需要检查路由信息
        requiresAuth: true
      },
      // 使用路由组件传参
      props: true
    }
  ]
})
// 导航守卫 导航表示路由正在发生改变
// 全局前置守卫
router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    // console.log('你进入了个人中心')
    // 做是否已经登录的判断 问题：isLogin这个参数是怎样传递过来的？
    if (to.meta.isLogin) {
      // 这里是已经登录了
      next()
    } else {
      // 还没有登录 跳转到登录页面
      // alert('您还没有登录')
      next('/')
    }
    next()
  } else {
    next()
  }
})
export default router
