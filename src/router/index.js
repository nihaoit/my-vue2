import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import BasicComponent from '@/pages/BasicComponent'
import DynamicComponent from '@/pages/DynamicComponent'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld
  }, {
    path: '/basic',
    name: 'BasicComponent',
    component: BasicComponent
  }, {
    path: '/dynamic',
    name: 'DynamicComponent',
    component: DynamicComponent
  }]


})
