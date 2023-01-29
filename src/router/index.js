import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import WhatWeLove from '../views/WhatWeLove.vue'
import HowWeVue from '../views/HowWeVue.vue'
import DataFlowPattern from '../views/DataFlowPattern.vue'
import ComponentReactiveStateDemo from '../views/ComponentReactiveStateDemo.vue'
import ComponentComposition from "@/views/ComponentComposition.vue";
import MoreToShare from "@/views/MoreToShare.vue"
Vue.use(VueRouter)

export const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path:'/presenting/01-what-we-love',
    component: WhatWeLove,
    name: 'presentationStart'
  },
  {
    path:'/presenting/02-how-we-vue',
    component: HowWeVue
  },
  {
    path:'/presenting/03-data-flow-pattern',
    component: DataFlowPattern
  },
  {
    path:'/presenting/04-component-reactive-state-demo',
    component: ComponentReactiveStateDemo
  },
  {
    path:'/presenting/05-component-reactive-state-demo',
    component: ComponentComposition
  },
  {
    path:'/presenting/06-more-to-share',
    component: MoreToShare
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
