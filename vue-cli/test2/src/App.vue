<template>
  <div id="app">

      <transition name="fade">
         <router-view></router-view>
      </transition>
      <router-link to="/home">首页</router-link>
      |    
      <!--  <router-link to="/about">关于我们</router-link> -->
      <!-- params传参 -->
      <router-link :to="{name:'about',params:{name:'zs',age:20}}">关于我们</router-link>
      <!-- query 传参 -->
      <!-- <router-link :to="{path:'/about',query:{name:'zs',age:20}}">关于我们</router-link> -->
      <!-- url传参 -->
      <router-link to="/about/zhangsan/20">关于我们</router-link>
      <router-link to="/abc">abc</router-link>
      
  </div>
</template>

<style lang="scss">
.fade-enter{
  opacity: 0;
}
.fade-enter-active{
  transition: opacity 2s linear ;
}
.fade-enter-to{
  opacity: 1;
}
.fade-leave{
  transform: translateX(0);
}
.fade-leave-active{
  transition: transform 2s linear;
} 
.fade-leave-to{
  transform: translateX(100%);
}
</style>
