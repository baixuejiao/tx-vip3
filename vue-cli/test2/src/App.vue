<template>
  <div id="app">
      <router-view></router-view>
      <router-link to="/home">首页</router-link>
      |    
      <!--  <router-link to="/about">关于我们</router-link> -->
      <!-- params传参 -->
      <router-link :to="{name:'about',params:{name:'zs',age:20}}">关于我们</router-link>
      <!-- query 传参 -->
      <!-- <router-link :to="{path:'/about',query:{name:'zs',age:20}}">关于我们</router-link> -->
      <!-- url传参 -->
      <router-link to="/about/zhangsan/20">关于我们</router-link>
      
  </div>
</template>

<style lang="scss">

</style>
