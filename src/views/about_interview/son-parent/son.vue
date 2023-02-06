<template>
<div>son
    <el-button @click="to">TO</el-button>
</div>
</template>
<script>
import bus from './bus'
//import router from 'vue-router'
 export default{
    data(){
        return{
            msg:'toFather',
            toD:'toBrother'
        }
    },
    created(){
        this.$emit('toF',this.msg)
        bus.$emit('toD',this.toD)
    },
    methods:{
        to(){
            //console.log('route',)
            //addRoutes 已经废弃
           this.$router.addRoutes([{
                path:'/tob',
                component: () =>
                import ('@/views/about_interview/son-parent/brother')
            }])
            console.log('route',this.$router)
        }
    }
 }
</script>