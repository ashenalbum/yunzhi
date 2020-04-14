import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/page/index'//首页

Vue.use(Router);

export default new Router({
    // mode: 'history',
    routes: [{
        path: '/', redirect: '/all_path'
    },{
        path: '/index',
        name: 'index',
        meta: {title: "首页"},
        component: Index,
    },{
        path: '/all_path',
        name: 'all_path',
        meta: {title: "all_path"},
        component: (resolve) =>require(['@/page/allPath.vue'],resolve)
    },{
        path: '/register',
        name: 'register',
        meta: {title: "注册"},
        component: (resolve) =>require(['@/page/register.vue'],resolve)
    }]
})