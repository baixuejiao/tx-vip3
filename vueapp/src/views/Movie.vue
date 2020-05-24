<template>
  <div>
    <ul>
      <li v-for="obj in movieList" :key="obj.id" @click="goDetail(obj.id)">
        <img :src="obj.images.small" alt />
        <div class="info">
          <h2>{{obj.title}}</h2>
          <p>
            <span v-for="cast in obj.casts" :key="cast.id">{{cast.name}} |</span>
          </p>
          <p>{{obj.collect_count}}已观看</p>
          <p>年份：{{obj.year}}</p>
          <p>
            <span v-for="(genre,index) in obj.genres" :key="index">{{genre}} |</span>
          </p>
        </div>
      </li>
    </ul>
    <img  class="loading" v-show="isShow" src="./../assets/images/loading.gif" alt="">
  </div>
</template>

<script>
import axios from "axios";
export default {
  /*
            跨域   No 'Access-Control-Allow-Origin'
            浏览器为了安全起见，=>同源策略，
            域名 www.baidu.com  www.taobao.com
            端口 http://localhost:8080/    http://localhost:8081/
            协议 http  https 
            只要有一个不同即为跨域 ，三个都相同才同源

            解决跨域
                1. jsonbird第三方服务器代理
                https://bird.ioliu.cn/v1?url=http://www.bing.com/HPImageArchive.aspx?format=js&idx=1&n=1
        */

  data() {
    return {
      movieList: [],
      isShow:true
    };
  },
  created() {
      this.getMovie();
    window.onscroll = () => {
      // 滚动条滚动高度
      let scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      // 可视区高度
      let clientHeight = document.documentElement.clientHeight;
      // 页面高度
      let scrollHeight = document.documentElement.scrollHeight;
      if (scrollHeight == scrollTop + clientHeight) {
        //到底了  获取下10条数据
        this.isShow = true;
        this.getMovie();
      }
    };
  },
  methods: {
    getMovie() {
      axios.get("https://bird.ioliu.cn/v1?url=https://api.douban.com/v2/movie/top250?apikey=0df993c66c0c636e29ecbb5344252a4a&start="+this.movieList.length+"&count=10")
        .then(res => {
          // console.log(res.data);
          this.movieList = [...this.movieList,...res.data.subjects];
          this.isShow = false; //隱藏
        })
        .catch(error => {
          console.log(error);
        });
    },
    goDetail(id){
        // 跳轉詳情頁
        this.$router.push({
            path:'movie-detail',
            query:{
                id
            }
        })
    }
  }
};
</script>

<style lang="scss" scoped>
ul {
  padding: 10px;
  li {
    display: flex;
    margin-bottom: 8px;
    img {
      width: 80px;
      margin-right: 5px;
    }
    .info {
      flex: 1;
    }
  }
}
.loading{
    position: fixed;
    left:50%;
    top:50%;
    width:60px;
    transform: translate(-50%,-50%);
}
</style>