<template>
  <div id="app">
    <!--公共 header子组件 -->
    <common-header></common-header>
    <div id="container">
        <router-view></router-view>
    </div>
    <!--公共 footer组件 -->
    <common-footer></common-footer>
  </div>
</template>
<script>
/*
      引入子组件
      1 import 
      2 componnets声明
    */
import CommonHeader from "./components/CommonHeader";
import CommonFooter from "./components/CommonFooter";
export default {
  data() {
    return {};
  },
  methods: {},
  components: {
    CommonHeader,
    CommonFooter
  }
};
</script>

<style lang="scss">
#container{
  margin:50px 0;
}
</style>
