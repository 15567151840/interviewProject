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
    //Vue.component('RecycleScroller', RecycleScroller)
    // 注册一个全局自定义指令 `v-focus`
Vue.directive('loadmore', {
        bind(el, binding) {
            // 获取element-ui定义好的scroll盒子
            const SELECTWRAP_DOM = el.querySelector('.el-select-dropdown .el-select-dropdown__wrap')
            SELECTWRAP_DOM.addEventListener('scroll', function() {
                const CONDITION = this.scrollHeight - this.scrollTop <= (this.clientHeight * 2)
                    // console.log('this.scrollHeight==>', this.scrollHeight)
                    // console.log('this.scrollTop==>', this.scrollTop)
                    // console.log('this.clientHeight==>', this.clientHeight)
                let d = this.scrollHeight - this.scrollTop
                    // console.log('this==>', this)
                    // console.log('binding', binding)
                    // if (this.scrollTop) {
                    //     binding.value()
                    // }
                console.log(CONDITION, d)
                if (CONDITION) {
                    binding.value()
                }
            })
        }
    }) //全局路由守卫
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