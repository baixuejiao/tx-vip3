import Vue from 'vue'
import VueRouter from 'vue-router'
import Movie from './../views/Movie'
import Music from './../views/Music'
import Book from './../views/Book'
import Photo from './../views/Photo'
import MovieDetail from './../views/MovieDetail'
Vue.use(VueRouter)

const routes = [
  {
    path: '/movie',
    name: 'movie',
    component: Movie
  },
  {
    path: '/movie-detail',
    name: 'movie-detail',
    component: MovieDetail
  },
  {
    path: '/music',
    name: 'music',
    component: Music
  },
  {
    path: '/book',
    name: 'book',
    component: Book
  },
  {
    path: '/photo',
    name: 'photo',
    component: Photo
  }
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // }
  // ,
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode:'history',
  routes
})

export default router
