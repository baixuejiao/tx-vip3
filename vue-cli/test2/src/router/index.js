import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Test1 from '../views/Test1.vue'
import Test2 from '../views/Test2.vue'
import Test5 from '../views/Test5.vue'
import Error from '../views/Error.vue'
import Vuex from '../views/Vuex.vue'
Vue.use(VueRouter)

  const routes = [
    {
      path:'/home',
      component:Home,
      children:[
        {
          path:'test1',
          component:Test1
        },
        {
          path:'test2',
          component:Test2
        }
      ],
      beforeEnter(to,from,next){
        console.log(to,from,next)
        next(true);
      }
    },
    {
      path:'/about/:name/:age',
      name:'about',
      component:About
    },
    // {
    //   path:'/',
    //   redirect:'/home'
    // },
    ,{
      path:'/:name/:age',
      redirect:'/about/:name/:age'
    },{
      path:'/test5',
      component:Test5,
      alias:'/abc'
    },
    ,{
      path:'/vuex',
      component:Vuex
    },{
      path:'/*',
      component:Error
    }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
