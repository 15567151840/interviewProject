<template>
  <div>
    <h1>test</h1>
    {{ msg }}
    <sonOne @toF="getm" />
    <sonTwo @toD="getD" />
  </div>
</template>
<script>
import sonOne from "./sonOne.vue";
import sonTwo from "./sonTwo.vue";
export default {
  components: {
    sonOne,
    sonTwo,
  },
  data() {
    return {
      msg: "",
    };
  },
  created() {
    this.getm();
    this.getD();
  },
  methods: {
    getm(msg) {
      this.msg = msg;
      console.log("kankank", msg);
    },
    getD(m) {
      console.log("kakakngetD", m);
    },
  },
};
</script>