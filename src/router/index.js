import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Valid from '@/components/pages/task/list/Valid'
import Finish from '@/components/pages/task/list/Finish'
import Monitor from '@/components/pages/task/Monitor'
import Headquarters from '@/components/pages/task/Headquarters'
import Rule from '@/components/pages/task/Rule'

Vue.use(Router)

export default new Router({
  	routes: [
    	{
      		path: '/',
      		name: 'Index',
      		component: Index
    	},
    	{
      		path: '/task/list',
      		redirect: '/task/list/valid'
    	},
    	{
      		path: '/task/list/valid',
      		name: 'Valid',
      		component: Valid
    	},
    	{
      		path: '/task/list/finish',
      		name: 'Finish',
      		component: Finish
    	},
    	{
      		path: '/task/rule',
      		name: 'Rule',
      		component: Rule
    	},
    	{
      		path: '/task/headquarters',
      		name: 'Headquarters',
      		component: Headquarters
    	},
    	{
      		path: '/task/monitor',
      		name: 'Monitor',
      		component: Monitor
    	}
  	]
})
