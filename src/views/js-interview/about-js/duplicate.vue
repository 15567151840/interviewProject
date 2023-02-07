<template>
    <div style="height:100vh">
        <iframe :src="src" frameborder="0" style="width:100%;height:100%"></iframe>
    </div>
</template>
<script>
export default{
    data(){
        return{
            src:'../../../../static/static-html/jsDuplicate.html'
        }
    }
}
</script>
<style scoped>
*{
    height:100%;
    width:100%;
}
</style>