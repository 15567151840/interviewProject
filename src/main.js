// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App'
import router from './router'
import store from './store'

import { capitalize, flip } from './views/about_interview/aboutFilter/overall-filter/filter';

Vue.config.productionTip = false

Vue.filter('capitalize', capitalize)
Vue.filter('flip', flip)
    //全局路由守卫
router.beforeEach((to, from, next) => {
    console.log("to====>", to)
    console.log("from===>", from)
    console.log("next===>", next)
    next()
})
Vue.use(ElementUI);
/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
})