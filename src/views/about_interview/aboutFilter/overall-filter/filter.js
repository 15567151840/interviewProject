const capitalize = function(value) {
    return value.toUpperCase()
}
const flip = function(value) {
    return value.split('').reverse().join('')
}
export { capitalize, flip }

//2.在mian.js中设置全局过滤方法 Vue.filter(‘过滤器名称’，对应处理函数);
/**
 * import {capitalize, flip} from './filters/filters.js'
   Vue.filter('capitalize', capitalize)
   Vue.filter('flip', flip)
 */