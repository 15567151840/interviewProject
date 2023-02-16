<template>
  <div style="height: 650px;">
    <virtual-list 
      style="height: 100%;width:50%; overflow-y: auto;"
      :data-key="'id'"
      :data-sources="list"
      :data-component="itemComponent"
      :keeps="20"
      :extra-props="{
        address,
        basisInfo,
      }"
      @tobottom="listToBottom"/>
  </div>
</template> 

<script>
import VirtualList from 'vue-virtual-scroll-list';
import itemComponent from './itemComponent';
export default {
  data(){
    return {
      VirtualList,
      itemComponent,
      list: [],
      address:{ province:'江苏',city:'南京' },
      basisInfo:[{age:20}] 
    }
  },
  components: {},
  methods:{
    content(){
      for(let i = 0; i < 10000; i++){
        const obj = {id: i, name: `人员${i}`};
        this.list.push(obj) 
      }
    },
    listToBottom(){
      console.log('到底了哦');
    },
  },
  mounted(){
    this.content()
  }
}
</script>
