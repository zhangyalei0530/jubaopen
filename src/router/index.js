import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Home from '../views/Home.vue'
import Test1 from '../views/dy/Dylist.vue'
import Test2 from '../views/dy/Dyadd.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login,
    hidden:true
  },
  {
    path: '/home',
    name: '抖音',
    component: Home,
    children:[
      {
        path:'/Dylist',
        name:'订单列表',
        component:Test1
      },{
        path:'/Dyadd',
        name:'添加订单',
        component:Test2
      }
    ]
  },


]

const router = new VueRouter({
  routes
})

export default router
