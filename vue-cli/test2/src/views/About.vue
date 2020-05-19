<template>
  <div>
    关于我们
    {{$route.params.name}}
     <!-- {{$route.query.name}} -->
    <hr />
    {{$route.params.age}}
     <!-- {{$route.query.age}} -->
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
</style>