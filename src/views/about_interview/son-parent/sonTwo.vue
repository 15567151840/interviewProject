<template>
    <div>
        小弟给的：{{getx}}
    </div>
</template>
<script>
import bus from './bus'
export default{
    data(){
        return{
         getx:''
        }
    },
    mounted(){
        bus.$on('toD',(val)=>{
            this.getx = val
        })
    },
    methods:{

    }
}
</script>