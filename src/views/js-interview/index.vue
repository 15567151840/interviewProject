<template>
  <div style="height: 10vh%; border: 1px solid black">
    <iframe
      :src="src"
      frameborder="0"
      style="width: 100%; height: 100%"
    ></iframe>
    <el-button type="primary" @click="toTriangle">用css画一个三角形</el-button>
    <el-button type="primary" @click="toSort">js排序</el-button>
    <el-container style="height: 500px; border: 1px solid #eee">
      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <el-menu :default-openeds="['1', '3']">
          <el-submenu index="1">
            <template slot="title"
              ><i class="el-icon-message"></i>html</template
            >
            <el-menu-item-group>
              <template slot="title">css</template>
              <el-menu-item index="1-1" @click="toTriangle">用css画一个三角形</el-menu-item>
              <!-- <el-menu-item index="1-2">选项2</el-menu-item> -->
            </el-menu-item-group>
            <el-menu-item-group title="js">
              <el-menu-item index="1-3" @click="toSort">js排序</el-menu-item>
              <el-menu-item index="1-4" @click="toDuplicate">js去重</el-menu-item>
              <el-menu-item index="1-5" @click="toFlat">js扁平化</el-menu-item>
              <el-menu-item index="1-6" @click="toMaxCommonDivisor">js获取两个数的最大公约数</el-menu-item>
              <el-menu-item index="1-7" @click="toMinCommonMultilp">js获取两个数的最小公倍数</el-menu-item>
              <el-menu-item index="1-8" @click="toRealizeIndexOf">js实现indexOf</el-menu-item>
              <el-menu-item index="1-9" @click="toReverseStr">js判断是否为回文字符串</el-menu-item>
              <el-menu-item index="1-10" @click="toInherit">js实现继承</el-menu-item>
              <el-menu-item index="1-11" @click="toSFFME">js-someFilterFindMapEvery</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-4">
              <template slot="title">选项4</template>
              <el-menu-item index="1-4-1">选项4-1</el-menu-item>
            </el-submenu>
          </el-submenu>
        </el-menu>
      </el-aside>

      <el-container>
        <el-header style="text-align: right; font-size: 12px">
          <el-dropdown>
            <i class="el-icon-setting" style="margin-right: 15px"></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>查看</el-dropdown-item>
              <el-dropdown-item>新增</el-dropdown-item>
              <el-dropdown-item>删除</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <span>王小虎</span>
        </el-header>

        <el-main>
          <el-table :data="tableData">
            <el-table-column prop="date" label="日期" width="140">
            </el-table-column>
            <el-table-column prop="name" label="姓名" width="120">
            </el-table-column>
            <el-table-column prop="address" label="地址"> </el-table-column>
          </el-table>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
export default {
  data() {
    const item = {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      };
    return {
      src: "../../../static/static-html/index.html",
      tableData: Array(20).fill(item),
    };
  },
  methods: {
    toTriangle() {
      this.$router.push({ path: "/toCssTriangle" });
    },
    toSort() {
      this.$router.push({ path: "/toJsSort" });
    },
    toDuplicate(){
        this.$router.push({ path: "/toJsDuplicate" });
    },
    toFlat(){
      this.$router.push({ path: "/toJsFlat" });
    },
    toMaxCommonDivisor(){
      console.log('ssss')
      this.$router.push({ path: "/toJsCommonDivisor" });
    },
    toMinCommonMultilp(){
      this.$router.push({path: "/toJsCommonMultilp"})
    },
     toRealizeIndexOf(){
      this.$router.push({path: "/toJsRealizeIndexOf"})
    },
    toReverseStr(){
      this.$router.push({path: "/toJsReverseStr"})
    },
    toInherit(){
      console.log('dddd')
       this.$router.push({path: "/toJsInherit"})
    },
    toSFFME(){
      this.$router.push({path: "/toJsSFFME"})
    }
  },
};
</script>
<style scoped>
.el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
  
  .el-aside {
    color: #333;
  }
</style>