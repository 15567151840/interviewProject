<template>
  <el-select
    @visible-change="visibleVirtualoptions"
    v-model="mediaAccount"
    placeholder="请选择"
    @change="getChaneValue"
    remote
    filterable
    :remote-method="remoteMethod"
  >
    <virtual-list
      style="max-height: 245px; overflow-y: auto"
      ref="virtualList"
      :data-key="'id'"
      :data-sources="mediaAccountArr"
      :data-component="itemComponent"
      :keeps="20"
      :extra-props="{
        label: 'mediaAccountId',
        value: 'mediaAccountId',
      }"
    />
  </el-select>
</template>
<script>
import ElOptionNode from "./el-option-node.vue";
import VirtualList from "vue-virtual-scroll-list";
export default {
  data() {
    return {
      VirtualList,
      itemComponent: ElOptionNode,
      mediaAccount: [],
      virtualoptions: [],
      mediaAccountArr: [
        // {id:1,mediaAccountId:1008666},
        // {id:2,mediaAccountId:1008666},
        // {id:3,mediaAccountId:1008666},
        // {id:4,mediaAccountId:1008666},
        // {id:5,mediaAccountId:1008666},
        // {id:6,mediaAccountId:1008666},
        // {id:7,mediaAccountId:1008666},
        // {id:8,mediaAccountId:1008666},
        // {id:9,mediaAccountId:1008666}
        // 示例数据 {id：1，mediaAccountId：1008666}
      ],
    };
  },
  created() {
    for (var i = 0; i < 10000; i++) {
      let obj = {};
      obj.id = i;
      obj.mediaAccountId = i;
      this.virtualoptions.push(obj);
      this.mediaAccountArr.push(obj);
    }
  },
  methods: {
    getChaneValue(value) {
      console.log("value==>", value);
    },
    remoteMethod(query) {
      console.log("query==>", query);
      if (query !== "") {
        this.mediaAccountArr = this.virtualoptions.filter((item) => {
          //return  item.mediaAccountId.toLowerCase().indexOf(query.toLowerCase()) > -1;
          //console.log(item.mediaAccountId)
          return item.mediaAccountId == query
        });
      } else {
        this.mediaAccountArr = this.virtualoptions;
      }
    },
    visibleVirtualoptions(bool) {
      console.log('bool==>',bool)
      console.log(this.$refs.virtualList.reset);
      if (!bool) {
        this.$refs.virtualList.reset();
        setTimeout(() => {
          this.mediaAccountArr = this.virtualoptions;
        }, 200);
      }
    },
  },
};
</script>