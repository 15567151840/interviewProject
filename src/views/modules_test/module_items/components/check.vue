<template>
  <el-radio-group v-model="radio1">
    <el-radio-button label="01">one</el-radio-button>
    <el-radio-button label="02">two</el-radio-button>
    <el-radio-button label="03">three</el-radio-button>
    <el-radio-button label="04">four</el-radio-button>
  </el-radio-group>
</template>
<script>
export default {
  data() {
    return {
      radio1: "01",
    };
  },
};
</script>