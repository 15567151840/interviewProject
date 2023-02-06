<template>
  <div>
    <Mydialog ref="dialog"/>
    <el-button @click="alert">alert</el-button>
  </div>
</template>
<script>
import Mydialog from './module_items/test-dialog.vue'
export default {
  components:{
    Mydialog
  },
  data() {
    return {};
  },
  methods:{
    alert(){
        this.$refs.dialog.dialogVisible = true
        console.log("弹出某些东西",this.$refs.dialog)
    }
  }
};
</script>