<template>
    <div>
        <ul>
            <li v-for="obj in musicData" :key="obj.id" @click="goList(obj.id)">
                <img :src="obj.bg" alt="">
            </li>
        </ul>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        data(){
            return {
                musicData:[]
            }
        },
        created(){
            axios.get('data/musiclist.json').then((res)=>{
                // console.log(res.data);
                this.musicData = res.data.albums;
            })
        },
        methods:{
            goList(id){
                this.$router.push({
                    path:'/musiclist',
                    query:{
                        id
                    }
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
li{
    float: left;
    width:50%;
    img{
        width:100%;
        display: block;
    }
}
</style>