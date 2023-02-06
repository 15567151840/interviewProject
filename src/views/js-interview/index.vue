<template>
    <div style="height:10vh%;border:1px solid black">
        <iframe :src="src" frameborder="0" style="width:100%;height:100%"></iframe>
        <el-button type="primary" @click="toTriangle">用css画一个三角形</el-button>
        <el-button type="primary" @click="toSort">冒泡排序</el-button>
    </div>
</template>
<script>
export default{
    data(){
        return{
            src:'../../../static/static-html/index.html'
        }
    },
    methods:{
        toTriangle(){
            this.$router.push({path:'/toCssTriangle'})
        },
        toSort(){
            this.$router.push({path:'/toJsSort'})
        }
    }
}
</script>