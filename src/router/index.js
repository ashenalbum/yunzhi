import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/page/index'//首页

Vue.use(Router);

export default new Router({
    // mode: 'history',
    routes: [{
        path: '/', redirect: '/index'
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
    },{
        path: '/login',
        name: 'login',
        meta: {title: "登录"},
        component: (resolve) =>require(['@/page/login.vue'],resolve)
    },{
        path: '/my_center',
        name: 'my_center',
        meta: {title: "个人中心"},
        component: (resolve) =>require(['@/page/myCenter.vue'],resolve)
    },{
        path: '/my_info',
        name: 'my_info',
        meta: {title: "个人信息"},
        component: (resolve) =>require(['@/page/myInfo.vue'],resolve)
    },{
        path: '/trans',
        name: 'trans',
        meta: {title: "转账"},
        component: (resolve) =>require(['@/page/trans.vue'],resolve)
    },{
        path: '/my_property',
        name: 'my_property',
        meta: {title: "我的指币"},
        component: (resolve) =>require(['@/page/myProperty.vue'],resolve)
    },{
        path: '/my_fraction',
        name: 'my_fraction',
        meta: {title: "我的积分"},
        component: (resolve) =>require(['@/page/myFraction.vue'],resolve)
    },{
        path: '/my_sub',
        name: 'my_sub',
        meta: {title: "我的下级"},
        component: (resolve) =>require(['@/page/mySub.vue'],resolve)
    },{
        path: '/my_location',
        name: 'my_location',
        meta: {title: "我的地址"},
        component: (resolve) =>require(['@/page/myLocation.vue'],resolve)
    },{
        path: '/order_log',
        name: 'order_log',
        meta: {title: "订单记录"},
        component: (resolve) =>require(['@/page/orderLog.vue'],resolve)
    },{
        path: '/order_detail',
        name: 'order_detail',
        meta: {title: "订单详情"},
        component: (resolve) =>require(['@/page/orderDetail.vue'],resolve)
    },{
        path: '/order_pay',
        name: 'order_pay',
        meta: {title: "支付订单"},
        component: (resolve) =>require(['@/page/orderPay.vue'],resolve)
    }]
})