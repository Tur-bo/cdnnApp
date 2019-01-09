import Vue from 'vue'
import VueRouter from 'vue-router'
import vueResource from 'vue-resource'
import VueAMap from 'vue-amap';

import App from './App.vue'
import '../statics/css/app.css'
import store from './store'
import FastClick from 'fastclick'

import {_beforeEnter} from '../src/libs/router'
import Vant from 'vant';
import 'vant/lib/index.css';

FastClick.attach(document.body);
Vue.use(VueRouter);
Vue.use(vueResource); 
Vue.use(Vant); 
Vue.use(VueAMap); 

VueAMap.initAMapApiLoader({
    key: '40c25afeb31dc39eac073d055c2d9100',
    plugin: ['AMap.Geolocation', 'AMap.PlaceSearch'],
    // 默认高德 sdk 版本为 1.4.4
    v: '1.4.4'
  });

// tab 切换
//首页
const base = resolve => {
    require.ensure([], () => {
        resolve(require('./views/baseview/BaseView.vue'))
    }, 'base')
}

const pro = resolve => {
    require.ensure([], () => {
        resolve(require('./views/projectview/ProView.vue'))
    }, 'pro')
}

// 配置相关的路由规则
// 子页面的规则，第一个都为details / home (这个根据当前子页面属于哪个父下面来决定) / 看是否需要参数

const router = new VueRouter({
    mode: 'hash',  //不想看到#号则配置这个 (可以用来解决与html本身锚点冲突的问题)
    routes: [
        {path: '/', redirect: '/base'},
        {path: '/base', component: base},
        {path: '/pro', component: pro}
    ]
})

// 注册跳转的钩子，判断是否需要等待验证
router.beforeEach((to, from, next) => {
    _beforeEnter(to, from, next);
})
 
new Vue({
    el: '#app',
    router: router, //使用路由对象实例
    // store: store,
    render: h => h(App)
})