<template>
    <div>
        <div class="detail-info">
            <img :src="movie.images.medium" alt="">
            <div>
                <h2>{{movie.title}}</h2>
            </div>
        </div>
        <div class="detail-content">
            {{movie.summary}}
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        data(){
            return {
                movie:{}
            }
        },
        created(){
            // 獲取電影詳情
            axios.get('https://bird.ioliu.cn/v1?url=https://api.douban.com/v2/movie/subject/'+this.$route.query.id +"?apikey=0df993c66c0c636e29ecbb5344252a4a")
            .then((res)=>{
                // console.log(res.data)
                this.movie = res.data;
            })
        }
    }
</script>

<style lang="scss" scoped>
    .detail-info{
        display: flex;
        img{
            width:120px;
        }
    }
</style>