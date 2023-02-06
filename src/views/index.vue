<template>
  <div>
    <h1>Home Page</h1>
    <button @click="getValue()">GET</button>
    <button @click="setValue()">SET</button>
    <div>
      <el-select v-model="value" placeholder="请选择" @change="cValue">
        <el-option
          v-for="(item,index) in options"
          :key="index"
          :label="item.name"
          :value ="item.name"
        >
        </el-option>
      </el-select>
    </div>
    <div>
      <el-button type="primary" @click="toVueInterview">vue-interview</el-button>
      <el-button type="primary" @click="toJsInterview">js-interview</el-button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
        options:[{
            name:'zs',
            age:18
        },
        {
            name:'ls',
            age:19
        },
        {
            name:'ww',
            age:20
        }
        ],
        value:'',
        selectValue:{}
    };
  },
  methods: {
    getValue() {
      console.log(this.$store.getters.userInfo);
    },
    setValue() {
      this.$store.dispatch("user/addUserInfo", this.selectValue);
    }, 
    cValue(){
        console.log('this.value==>',this.value)
        var that = this
       this.options.forEach(item=>{
        if(item.name === this.value){
           //console.log(item)
           this.selectValue = {...item}
           //console.log(this.selectValue)
        }
       })
    },
    toVueInterview(){
      this.$router.push({path:'/toVueInterview'})
    },
    toJsInterview(){
      this.$router.push({path:'/toJsInterview'})
    }
  },
};
</script>