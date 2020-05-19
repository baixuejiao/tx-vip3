<template>
  <div>
    这是首页
    <div>
      <router-link to="/home/test1">test1</router-link>
      <router-link to="/home/test2">test2</router-link>
    </div>

    <router-view></router-view>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
</style>