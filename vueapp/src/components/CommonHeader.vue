<template>
    <div class="header-container" :style="{background:$store.state.color}">
        {{$store.state.title}}
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
    .header-container{
        height: 50px;
        background: red;
        line-height: 50px;
        text-align:center;
        position: fixed;
        top:0px;
        width:100%;
    }
</style>