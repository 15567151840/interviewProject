<template>
  <p>{{ message | myFilter("java", "js") }}</p>
</template>
<script>
export default {
  //注意：myFilter 被定义为接收三个参数的过滤器函数，
  //其中 message 的值作为第一个参数 value，‘java’ 作为第二个参数 arg1，‘js’ 作为第二个参数 arg2。
  filters: {
    myFilter(value, arg1, arg2) {
      return value + " " + arg1 + " " + arg2;
    },
  },
  data() {
    return {
      message: "test",
    };
  },
};
</script>