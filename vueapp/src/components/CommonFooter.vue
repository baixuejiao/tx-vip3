<template>
  <div class="footer-container" :style="{background:$store.state.color}">
    <ul>
      <li v-for="(obj,index) in menu" :key="index" >
        <router-link :to="obj.path" @click.native="$store.commit('change',obj)">{{obj.title}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
    data(){
        return {
            menu:[
                {
                    path:"/movie",
                    title:"电影",
                    color:"red"
                },
                {
                    path:"/music",
                    title:"音乐",
                    color:"yellow"
                },
                {
                    path:"/book",
                    title:"图书",
                    color:"green"
                },{
                    path:"/photo",
                    title:"图片",
                    color:"pink"
                }
            ]
        }
    },
    created(){
        console.log(this.$route.path);
        // 获取到当前页面的路由的path  判断path和meun数组中的拿个对象是匹配的  change() ->obj
        this.menu.forEach((obj,index)=>{
            if(this.$route.path.includes(obj.path)){
                this.$store.commit('change',obj);
            }
        })
    }
};
</script>

<style lang="scss" scoped>
.footer-container{
    position: fixed;
    bottom: 0px;
    width:100%;
    height: 50px;
    background: red;
    ul{ 
        height:50px;
        display: flex;
        // flex-direction:row-reverse;
        // align-items:flex-end;
        li{
            flex:1; //剩余空间的百分比
            text-align: center;
            height: 50px;
            line-height: 50px;
            a{
                color: #000;
                &.router-link-active{
                    color: #fff;
                    text-decoration: none;
                }
            }
        }
    }
}
</style>