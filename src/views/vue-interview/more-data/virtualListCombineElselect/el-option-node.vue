<template>
    <el-option :key="index" :label="source[label]" :value="source[value]"></el-option>
</template>
<script>
export default{
    name:'item-componemt',
    props:{
        index:{
            type:Number
        },
        source:{
            type:Object,
            default(){
                return{}
            }
        },
        label:{
            type:String
        },
        value:{
            type:String
        }
    }
    // data(){
    //     return{

    //     }
    // }
}
</script>