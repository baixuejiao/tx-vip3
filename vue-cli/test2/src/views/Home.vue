<template>
  <div>
    这是首页
    {{$store.state.num}}
    <button @click="fn()">click</button>
    <button @click="$router.push('/about/zhangsan/20')">test</button>
     <button @click="$router.go(-1)">上一页</button>
    <div>
      <router-link to="/home/test1">test1</router-link>
      <router-link to="/home/test2">test2</router-link>
    </div>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  methods:{
    fn(){
      // 路由跳转/abc
      this.$router.push({path:'/abc',query:{}})
    }
  }
};
</script>

<style lang="scss" scoped>
</style>