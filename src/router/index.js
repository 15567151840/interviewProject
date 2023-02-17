import Vue from 'vue'
import Router from 'vue-router'
//import HelloWorld from '@/components/HelloWorld'
//import Layout from '@/layout'

Vue.use(Router)

export default new Router({
    routes: [
        // {
        //     path: '/',
        //     name: 'HelloWorld',
        //     component: () =>
        //         import ('@/components/HelloWorld')
        // },
        // {
        //     path: '/',
        //     name: 'Home',
        //     component: () =>
        //         import ('@/views/index')
        // }
        {
            path: '/',
            name: 'Home',
            component: () =>
                import ('@/views/index')
        },
        {
            path: '/TestParent',
            name: "TestParent",
            component: () =>
                import ('@/views/modules_test')
        },
        {
            path: '/parent',
            name: 'Parent',
            component: () =>
                import ('@/views/about_interview/son-parent/parent')
        },
        //局部过滤
        {
            path: '/filter',
            name: 'Filter',
            component: () =>
                import ('@/views/about_interview/aboutFilter/oneFilter')
        },
        //全局过滤
        {
            path: '/allOverFilter',
            name: 'AllOverFilter',
            component: () =>
                import ('@/views/about_interview/aboutFilter/overall-filter/overAllFilter')
        },
        //Vue Interview
        {
            path: '/toVueInterview',
            name: 'ToViewInterview',
            component: () =>
                import ('@/views/vue-interview')
        },
        {
            path: '/toMoreData',
            name: 'ToMoreData',
            component: () =>
                import ('@/views/vue-interview/more-data/index')
        },
        //elselect结合vitrualList
        {
            path: '/toVitualListElselect',
            name: 'ToVitualListElselect',
            component: () =>
                import ('@/views/vue-interview/more-data/virtualListCombineElselect')

        },
        //js Interview
        {
            path: '/toJsInterview',
            name: 'ToJsInterview',
            component: () =>
                import ('@/views/js-interview')
        },
        {
            path: '/toJsSort',
            name: 'ToJsSort',
            component: () =>
                import ('@/views/js-interview/about-js/sort')
        },
        {
            path: '/toJsFlat',
            name: 'ToJsFlat',
            component: () =>
                import ('@/views/js-interview/about-js/flat')
        },
        {
            path: '/toJsDuplicate',
            name: 'ToJsDuplicate',
            component: () =>
                import ('@/views/js-interview/about-js/duplicate')
        },
        {
            path: '/toJsCommonDivisor',
            name: 'ToJsCommonDivisor',
            component: () =>
                import ('@/views/js-interview/about-js/maxCommonDivisor')
        },
        {
            path: '/toJsCommonMultilp',
            name: 'toJsCommonMultilp',
            component: () =>
                import ('@/views/js-interview/about-js/minCommonMultilp')
        },
        {
            path: '/toJsRealizeIndexOf',
            name: 'ToJsRealizeIndexOf',
            component: () =>
                import ('@/views/js-interview/about-js/realizeIndexOf')
        },
        {
            path: '/toJsReverseStr',
            name: 'ToJsReverseStr',
            component: () =>
                import ('@/views/js-interview/about-js/reverseStr')
        },
        {
            path: '/toJsInherit',
            name: 'ToJsInherit',
            component: () =>
                import ('@/views/js-interview/about-js/inherit')
        },
        {
            path: '/toJsSFFME',
            name: '/ToJsSFFME',
            component: () =>
                import ('@/views/js-interview/about-js/someFilterFindMapEvery')
        },
        {
            path: '/toJs134secondPrint123',
            name: 'ToJs134secondPrint123',
            component: () =>
                import ('@/views/js-interview/about-js/134secondPrint123')
        },
        {
            path: '/toDeepAndShallowCopy',
            name: 'ToDeepAndShallowCopy',
            component: () =>
                import ('@/views/js-interview/about-js/deepAndShallowCopy')
        },
        {
            path: '/toJsAntiShakeAndThrottle',
            name: 'ToJsAntiShakeAndThrottle',
            component: () =>
                import ('@/views/js-interview/about-js/antiShakeAndThrottle')
        },
        //css InterView
        {
            path: '/toCssTriangle',
            name: 'ToCssTriangle',
            component: () =>
                import ('@/views/js-interview/about-css/triangle')
        },
    ]
})