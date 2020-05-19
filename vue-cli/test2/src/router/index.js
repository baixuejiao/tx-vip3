import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Test1 from '../views/Test1.vue'
import Test2 from '../views/Test2.vue'

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
      ]
    },
    {
      path:'/about/:name/:age',
      name:'about',
      component:About
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
