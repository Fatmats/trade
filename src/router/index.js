import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
 
  {
    path: '/',
    name: 'Home',
    component: () => import('@/components/Home.vue'),
  },
  {
      path:'/sepet',
      name:'Sepet',
      component:()=> import('@/components/Box.vue')
  }
 

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router