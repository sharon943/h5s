import Vue from 'vue'
import Router from 'vue-router'
import IScrollView from 'vue-iscroll-view'
import IScroll from 'iscroll'


import index from '@/components/index'
import productService from '@/components/productService'
import client from '@/components/client'
import partner from '@/components/partner'
import about from '@/components/about'
import Vueresource from "vue-resource"


Vue.use(Router)
Vue.use(Vueresource)
Vue.use(productService)
Vue.use(client)
Vue.use(about)
Vue.use(partner)
Vue.use(IScrollView, IScroll)



export default new Router({
  routes: [
    {path: '/', name: 'index', component: index},
    {path: '/productService', name: 'productService',component: productService},
    {path: '/client', name: 'client', component: client},
    {path: '/partner', name: 'partner', component: partner},
    {path: '/about', name: 'about', component: about}
  ],
})
