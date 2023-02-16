<template>
  <div>
    编号：{{ index }} <br/>
    姓名：{{ source.name }}<br/> 
    年龄：{{basisInfo[0].age}}<br/>
    地址：{{address.province}}-{{address.city}}
    <hr/>
  </div>
</template>

<script>
  export default {
    name: 'item-component',
    props: {
      // index of current item
      index: { 
        type: Number
      },
      source: { 
        type: Object,
        default () {
          return {}
        }
      },
      address:{
        type: Object,
        default () {
          return {}
        }
      },
      basisInfo:{
        type: Array,
        default () {
          return []
        }  
      }
    },
    mounted(){}
  }
</script>
