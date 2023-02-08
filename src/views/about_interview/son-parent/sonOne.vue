<template>
<div>son
    <el-button @click="to">TO</el-button>
    <el-button @click="toBrother">ToBrother</el-button>
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
    },
    methods:{
        to(){
            //console.log('route',)
            //addRoutes 已经废弃
           this.$router.addRoutes([{
                path:'/tob',
                component: () =>
                import ('@/views/about_interview/son-parent/sonTwo')
            }])
            console.log('route',this.$router)
        },
        toBrother(){
           bus.$emit('toD',this.toD)
        }
    }
 }
</script>