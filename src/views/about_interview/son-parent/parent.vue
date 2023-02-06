<template>
  <div>
    <h1>test</h1>
    {{ msg }}
    <son @toF="getm" />
    <brother @toD="getD" />
  </div>
</template>
<script>
import son from "./son.vue";
import brother from "./brother.vue";
export default {
  components: {
    son,
    brother,
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