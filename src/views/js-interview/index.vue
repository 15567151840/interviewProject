<template>
  <div>
    <!-- <iframe
      :src="src"
      frameborder="0"
      style="width: 100%; height: 100%"
    ></iframe>
    <el-button type="primary" @click="toTriangle">用css画一个三角形</el-button>
    <el-button type="primary" @click="toSort">js排序</el-button> -->
    <el-container style="height:100%;padding:5px">
      <el-aside style="height:100vh">
        <el-menu :default-openeds="['1', '3']">
          <el-submenu index="1">
            <template slot="title"
              ><i class="el-icon-message"></i>html</template
            >
            <el-menu-item-group>
              <template slot="title">css</template>
              <el-menu-item index="1-1" @click="toTriangle"
                >用css画一个三角形</el-menu-item
              >
              <!-- <el-menu-item index="1-2">选项2</el-menu-item> -->
            </el-menu-item-group>
            <el-menu-item-group title="js">
              <el-menu-item index="1-3" @click="toSort">js排序</el-menu-item>
              <el-menu-item index="1-4" @click="toDuplicate"
                >js去重</el-menu-item
              >
              <el-menu-item index="1-5" @click="toFlat">js扁平化</el-menu-item>
              <el-menu-item index="1-6" @click="toMaxCommonDivisor"
                >js获取两个数的最大公约数</el-menu-item
              >
              <el-menu-item index="1-7" @click="toMinCommonMultilp"
                >js获取两个数的最小公倍数</el-menu-item
              >
              <el-menu-item index="1-8" @click="toRealizeIndexOf"
                >js实现indexOf</el-menu-item
              >
              <el-menu-item index="1-9" @click="toReverseStr"
                >js判断是否为回文字符串</el-menu-item
              >
              <el-menu-item index="1-10" @click="toInherit"
                >js实现继承</el-menu-item
              >
              <el-menu-item index="1-11" @click="toSFFME"
                >js-someFilterFindMapEvery</el-menu-item
              >
              <el-menu-item index="1-12" @click="to134secondPrint123"
                >134秒打印出123</el-menu-item
              >
              <el-menu-item index="1-13" @click="toDeepAndShallowCopy"
                >深浅拷贝</el-menu-item
              >
              <el-menu-item index="1-14" @click="toAntiShakeAndThrottle"
                >防抖和节流</el-menu-item
              >
            </el-menu-item-group>
            <el-submenu index="1-4">
              <template slot="title">选项4</template>
              <el-menu-item index="1-4-1">选项4-1</el-menu-item>
            </el-submenu>
          </el-submenu>
        </el-menu>
      </el-aside>

      <el-container class="container">
        <el-calendar v-model="value"> </el-calendar>
      </el-container>
    </el-container>
  </div>
</template>
<script>
export default {
  data() {
    const item = {
      date: "2016-05-02",
      name: "王小虎",
      address: "上海市普陀区金沙江路 1518 弄"
    };
    return {
      value: new Date(),
      src: "../../../static/static-html/index.html",
      tableData: Array(20).fill(item)
    };
  },
  methods: {
    toTriangle() {
      this.$router.push({ path: "/toCssTriangle" });
    },
    toSort() {
      this.$router.push({ path: "/toJsSort" });
    },
    toDuplicate() {
      this.$router.push({ path: "/toJsDuplicate" });
    },
    toFlat() {
      this.$router.push({ path: "/toJsFlat" });
    },
    toMaxCommonDivisor() {
      console.log("ssss");
      this.$router.push({ path: "/toJsCommonDivisor" });
    },
    toMinCommonMultilp() {
      this.$router.push({ path: "/toJsCommonMultilp" });
    },
    toRealizeIndexOf() {
      this.$router.push({ path: "/toJsRealizeIndexOf" });
    },
    toReverseStr() {
      this.$router.push({ path: "/toJsReverseStr" });
    },
    toInherit() {
      console.log("dddd");
      this.$router.push({ path: "/toJsInherit" });
    },
    toSFFME() {
      this.$router.push({ path: "/toJsSFFME" });
    },
    to134secondPrint123() {
      this.$router.push({ path: "/toJs134secondPrint123" });
    },
    toDeepAndShallowCopy() {
      this.$router.push({ path: "/toDeepAndShallowCopy" });
    },
    toAntiShakeAndThrottle() {
      this.$router.push({ path: "/toJsAntiShakeAndThrottle" });
    }
  }
};
</script>
<style scoped>
/* .el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
} */

*{
  margin:0
}
.el-aside {
  color: #333;
}
.container{
  overflow: auto;
}
</style>
